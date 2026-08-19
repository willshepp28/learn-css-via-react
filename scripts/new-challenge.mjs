#!/usr/bin/env node
/**
 * Scaffold a challenge folder.
 *
 *   pnpm new 42        -> frontend/src/challenges/042-<slug>/
 */
import { mkdir, writeFile, access } from 'node:fs/promises'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

const raw = process.argv[2]
if (!raw) {
  console.error('usage: pnpm new <challenge id>   e.g. pnpm new 42')
  process.exit(1)
}

const id = Number(raw)
if (!Number.isInteger(id) || id < 1 || id > 500) {
  console.error(`"${raw}" is not a challenge id between 1 and 500`)
  process.exit(1)
}

const { challenges, phases } = JSON.parse(
  readFileSync(join(root, 'curriculum', 'challenges.json'), 'utf8'),
)

const challenge = challenges.find((c) => c.id === id)
if (!challenge) {
  console.error(`no challenge ${id} in curriculum/challenges.json`)
  process.exit(1)
}

const pad = String(id).padStart(3, '0')
const folder = `${pad}-${challenge.slug}`
const dir = join(root, 'frontend', 'src', 'challenges', folder)
const phase = phases.find((p) => p.id === challenge.phase)

try {
  await access(dir)
  console.error(`${folder} already exists — nothing written`)
  process.exit(1)
} catch {
  // does not exist, which is what we want
}

const componentName = `Challenge${pad}`
const cls = `c${pad}`

const criteria = challenge.acceptance.map((a) => ` *   - [ ] ${a}`).join('\n')

const tsx = `import './styles.css'

/**
 * ${challenge.issueTitle}
 * Phase ${phase.id} — ${phase.title}
 *
 * ${challenge.brief}
 *
 * Acceptance criteria:
${criteria}
 *
 * In play: ${challenge.concepts.join(', ')}
 */
export default function ${componentName}() {
  return (
    <div className="${cls}">
      <p>Start here. Delete this and build the thing.</p>
    </div>
  )
}
`

const css = `/*
 * ${challenge.issueTitle}
 *
 * Prefix every class with .${cls} so this challenge can never collide with another.
 * Do not use the --ui-* custom properties from index.css — those belong to the
 * app chrome. Define whatever this challenge needs, here.
 */

.${cls} {
  /* your work starts here */
}
`

await mkdir(dir, { recursive: true })
await writeFile(join(dir, 'index.tsx'), tsx)
await writeFile(join(dir, 'styles.css'), css)

console.log(`created frontend/src/challenges/${folder}/`)
console.log(`  ${challenge.issueTitle}`)
console.log(`  open http://localhost:5173/#/c/${folder}`)
if (challenge.issue) console.log(`  ticket: #${challenge.issue}`)
