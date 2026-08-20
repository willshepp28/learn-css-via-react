#!/usr/bin/env node
/**
 * Create one GitHub issue per challenge, plus the labels and milestones they
 * need. Safe to stop and re-run: it records what it created and skips those.
 *
 *   node scripts/seed-issues.mjs              # create everything still missing
 *   SEED_DELAY_MS=9000 node scripts/seed-issues.mjs
 *   SEED_LIMIT=10 node scripts/seed-issues.mjs   # useful for a dry-ish first pass
 *
 * GitHub's secondary rate limit allows roughly 500 content-creating requests
 * per hour, so this paces itself and backs off hard when it gets pushed back.
 */
import { spawn } from 'node:child_process'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

const DELAY_MS = Number(process.env.SEED_DELAY_MS ?? 7500)
const LIMIT = process.env.SEED_LIMIT ? Number(process.env.SEED_LIMIT) : Infinity
const STATE_PATH = join(here, '.issue-seed-state.json')
const MAP_PATH = join(root, 'curriculum', 'issue-map.json')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const stamp = () => new Date().toISOString().slice(11, 19)
const log = (msg) => console.log(`[${stamp()}] ${msg}`)

/**
 * Run gh, optionally piping a JSON body to its stdin. Note this uses spawn
 * rather than execFile: execFile has no `input` option, so `gh api --input -`
 * would sit forever waiting on a stdin that never closes.
 */
function gh(args, input) {
  return new Promise((resolve, reject) => {
    const child = spawn('gh', args)
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', (chunk) => (stdout += chunk))
    child.stderr.on('data', (chunk) => (stderr += chunk))
    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) return resolve(stdout)
      reject(
        Object.assign(new Error(`gh ${args[0]} exited ${code}`), { stdout, stderr }),
      )
    })
    child.stdin.end(input ?? '')
  })
}

/** gh api POST with retry + backoff for secondary rate limits. */
async function ghJson(args, input, { attempts = 6 } = {}) {
  let wait = 60_000
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return JSON.parse(await gh(args, input))
    } catch (error) {
      const text = `${error.stderr ?? ''}${error.stdout ?? ''}${error.message}`
      const rateLimited =
        /secondary rate limit|rate limit|abuse detection|was submitted too quickly/i.test(
          text,
        )
      if (attempt === attempts) throw error
      const pause = rateLimited ? wait : 5_000
      log(
        `  request failed (attempt ${attempt}/${attempts})${rateLimited ? ' — rate limited' : ''}; waiting ${Math.round(pause / 1000)}s`,
      )
      log(`  ${text.trim().split('\n')[0]}`)
      await sleep(pause)
      if (rateLimited) wait = Math.min(wait * 2, 900_000)
    }
  }
}

const data = JSON.parse(
  readFileSync(join(root, 'curriculum', 'challenges.json'), 'utf8'),
)

const state = existsSync(STATE_PATH)
  ? JSON.parse(readFileSync(STATE_PATH, 'utf8'))
  : { labels: false, milestones: {}, issues: {} }

const saveState = () => writeFileSync(STATE_PATH, JSON.stringify(state, null, 2))
const saveMap = () =>
  writeFileSync(MAP_PATH, JSON.stringify(state.issues, null, 2) + '\n')

const repo = (await gh(['repo', 'view', '--json', 'nameWithOwner', '-q', '.nameWithOwner'])).trim()
log(`repo: ${repo}`)

// ---------------------------------------------------------------- labels
const LABELS = [
  ['challenge', 'ededed', 'A curriculum challenge ticket'],
  ['intro', 'c2e0c6', 'Absolute beginner — you have done nothing like this yet'],
  ['easy', '9be9a8', 'Straightforward once you know the property'],
  ['medium', 'fbca04', 'Needs a concept you have to reason about'],
  ['hard', 'd93f0b', 'Expect to get it wrong once before it clicks'],
  ['capstone', '5319e7', 'Multi-hour build with no hand-holding'],
]

if (!state.labels) {
  for (const [name, color, description] of LABELS) {
    try {
      await gh([
        'label', 'create', name,
        '--repo', repo,
        '--color', color,
        '--description', description,
        '--force',
      ])
      log(`label: ${name}`)
    } catch (error) {
      log(`label ${name} failed: ${String(error.stderr ?? error.message).trim().split('\n')[0]}`)
    }
    await sleep(400)
  }
  state.labels = true
  saveState()
}

// ------------------------------------------------------------ milestones
for (const phase of data.phases) {
  if (state.milestones[phase.id]) continue
  const title = `Phase ${phase.id} — ${phase.title}`
  const created = await ghJson(
    ['api', `repos/${repo}/milestones`, '--method', 'POST', '--input', '-'],
    JSON.stringify({
      title,
      description: `${phase.blurb} (challenges ${phase.from}–${phase.to})`,
      state: 'open',
    }),
  )
  state.milestones[phase.id] = created.number
  saveState()
  log(`milestone ${created.number}: ${title}`)
  await sleep(600)
}

// ---------------------------------------------------------------- issues
const pending = data.challenges.filter((c) => !state.issues[c.id])
log(
  `${Object.keys(state.issues).length} issues already created, ${pending.length} to go ` +
    `(~${Math.round((pending.length * DELAY_MS) / 60000)} min at ${DELAY_MS}ms spacing)`,
)

let created = 0
for (const challenge of pending) {
  if (created >= LIMIT) {
    log(`SEED_LIMIT of ${LIMIT} reached, stopping`)
    break
  }

  const issue = await ghJson(
    ['api', `repos/${repo}/issues`, '--method', 'POST', '--input', '-'],
    JSON.stringify({
      title: challenge.issueTitle,
      body: challenge.body,
      labels: ['challenge', challenge.difficulty],
      milestone: state.milestones[challenge.phase],
    }),
  )

  state.issues[challenge.id] = issue.number
  created++
  if (created % 5 === 0 || created === 1) {
    saveState()
    saveMap()
  }

  const doneCount = Object.keys(state.issues).length
  log(
    `#${issue.number} <- ${challenge.issueTitle}  (${doneCount}/${data.challenges.length})`,
  )
  await sleep(DELAY_MS)
}

saveState()
saveMap()
log(`done. ${Object.keys(state.issues).length}/${data.challenges.length} issues exist.`)
log('now run: cd frontend && pnpm sync:curriculum')
