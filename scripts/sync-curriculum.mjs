#!/usr/bin/env node
/**
 * Regenerate everything derived from curriculum/challenges.json:
 *   - frontend/src/challenges/curriculum.generated.ts  (drives the app sidebar)
 *   - docs/CURRICULUM.md                               (human-readable index)
 *
 * Run after editing the curriculum or after seeding issues.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

const data = JSON.parse(
  readFileSync(join(root, 'curriculum', 'challenges.json'), 'utf8'),
)

// Issue numbers live in a separate file so re-seeding never rewrites the curriculum.
const mapPath = join(root, 'curriculum', 'issue-map.json')
const issueMap = existsSync(mapPath)
  ? JSON.parse(readFileSync(mapPath, 'utf8'))
  : {}

let repoUrl = 'https://github.com/willshepp28/learn-css-via-react'
try {
  const remote = execSync('git remote get-url origin', {
    cwd: root,
    stdio: ['ignore', 'pipe', 'ignore'],
  })
    .toString()
    .trim()
  repoUrl = remote
    .replace(/^git@github\.com:/, 'https://github.com/')
    .replace(/\.git$/, '')
} catch {
  // no remote yet; keep the default
}

const meta = data.challenges.map((c) => ({
  id: c.id,
  slug: c.slug,
  title: c.title,
  phase: c.phase,
  difficulty: c.difficulty,
  issue: issueMap[String(c.id)] ?? c.issue ?? null,
}))

const ts = `// GENERATED FILE — do not edit.
// Source: curriculum/challenges.json (+ curriculum/issue-map.json)
// Regenerate with: pnpm sync:curriculum
import type { ChallengeMeta, Phase } from './types'

export const REPO_URL = ${JSON.stringify(repoUrl)}

export const PHASES: Phase[] = ${JSON.stringify(data.phases, null, 2)}

export const CHALLENGES: ChallengeMeta[] = ${JSON.stringify(meta, null, 2)}
`

writeFileSync(
  join(root, 'frontend', 'src', 'challenges', 'curriculum.generated.ts'),
  ts,
)

const rows = data.phases
  .map((p) => {
    const items = data.challenges.filter((c) => c.phase === p.id)
    const list = items
      .map((c) => {
        const num = String(c.id).padStart(3, '0')
        const link = c.issue ?? issueMap[String(c.id)]
        const label = link ? `[${num}](${repoUrl}/issues/${link})` : num
        return `| ${label} | ${c.title} | \`${c.difficulty}\` |`
      })
      .join('\n')
    return `## Phase ${p.id} — ${p.title}\n\n${p.blurb}\n\nChallenges ${p.from}–${p.to}.\n\n| # | Challenge | Level |\n|---|---|---|\n${list}\n`
  })
  .join('\n')

const md = `# Curriculum

500 challenges, ordered. Later ones assume earlier ones — work lowest number first.

Generated from \`curriculum/challenges.json\`. Do not edit by hand; run \`pnpm sync:curriculum\`.

${rows}`

writeFileSync(join(root, 'docs', 'CURRICULUM.md'), md)

const withIssues = meta.filter((m) => m.issue).length
console.log(
  `synced ${meta.length} challenges (${withIssues} linked to issues) -> curriculum.generated.ts, docs/CURRICULUM.md`,
)
