import { Suspense, createElement, useEffect, useMemo, useState } from 'react'
import { CHALLENGES, PHASES, REPO_URL } from './challenges/curriculum.generated'
import { builtChallenges, builtIds } from './challenges/registry'
import { folderOf, pad } from './challenges/types'
import type { ChallengeMeta } from './challenges/types'
import './App.css'

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return hash.startsWith('#/c/') ? hash.slice('#/c/'.length) : null
}

function issueUrl(challenge: ChallengeMeta) {
  return challenge.issue
    ? `${REPO_URL}/issues/${challenge.issue}`
    : `${REPO_URL}/issues?q=is%3Aissue+${pad(challenge.id)}`
}

function Dashboard() {
  const done = builtIds.size
  const total = CHALLENGES.length
  const next = CHALLENGES.find((c) => !builtIds.has(c.id))

  return (
    <div className="dashboard">
      <h1>500 CSS challenges</h1>
      <p className="lede">
        One ticket at a time, lowest number first. Branch, build, PR, review,
        merge. Then the next one.
      </p>

      <div className="progress" role="group" aria-label="Curriculum progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ inlineSize: `${(done / total) * 100}%` }}
          />
        </div>
        <p className="progress-label">
          <strong>{done}</strong> of {total} built
        </p>
      </div>

      {next ? (
        <p className="next-up">
          Next up: <strong>#{next.id}</strong> {next.title}{' '}
          <a href={issueUrl(next)} target="_blank" rel="noreferrer">
            open the ticket
          </a>
          <br />
          <code>pnpm new {next.id}</code>
        </p>
      ) : (
        <p className="next-up">All 500 done. Go get the job.</p>
      )}
    </div>
  )
}

function Stage({ folder }: { folder: string }) {
  // Looked up rather than imported: the lazy components are created once at
  // module scope in registry.ts, so this is a stable reference, not a component
  // defined during render. createElement keeps that obvious to the linter.
  const challenge = builtChallenges.get(folder)
  const meta = CHALLENGES.find((c) => folderOf(c) === folder)

  if (!challenge) {
    return (
      <div className="dashboard">
        <h1>Not built yet</h1>
        <p className="lede">
          Nothing at <code>src/challenges/{folder}/</code>. Scaffold it with{' '}
          <code>pnpm new {folder.slice(0, 3)}</code>.
        </p>
      </div>
    )
  }

  return (
    <>
      {meta && (
        <header className="stage-header">
          <div>
            <span className="stage-id">#{meta.id}</span>
            <h1>{meta.title}</h1>
          </div>
          <a href={issueUrl(meta)} target="_blank" rel="noreferrer">
            ticket
          </a>
        </header>
      )}
      <div className="stage">
        <Suspense fallback={<p className="stage-loading">Loading…</p>}>
          {createElement(challenge)}
        </Suspense>
      </div>
    </>
  )
}

function Sidebar({ current }: { current: string | null }) {
  const [query, setQuery] = useState('')

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CHALLENGES
    return CHALLENGES.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.slug.includes(q) ||
        String(c.id) === q,
    )
  }, [query])

  return (
    <nav className="sidebar" aria-label="Challenges">
      <a className="brand" href="#/">
        learn-css-via-react
      </a>

      <input
        className="filter"
        type="search"
        value={query}
        placeholder="Filter challenges…"
        aria-label="Filter challenges"
        onChange={(event) => setQuery(event.target.value)}
      />

      {PHASES.map((phase) => {
        const items = matches.filter((c) => c.phase === phase.id)
        if (items.length === 0) return null
        const builtInPhase = items.filter((c) => builtIds.has(c.id)).length

        return (
          <section key={phase.id} className="phase">
            <h2>
              <span className="phase-title">
                {phase.id}. {phase.title}
              </span>
              <span className="phase-count">
                {builtInPhase}/{items.length}
              </span>
            </h2>
            <ul>
              {items.map((c) => {
                const folder = folderOf(c)
                const built = builtIds.has(c.id)
                return (
                  <li key={c.id}>
                    {built ? (
                      <a
                        href={`#/c/${folder}`}
                        className={current === folder ? 'item current' : 'item'}
                        aria-current={current === folder ? 'page' : undefined}
                      >
                        <span className="item-id">{pad(c.id)}</span>
                        {c.title}
                      </a>
                    ) : (
                      <span className="item todo">
                        <span className="item-id">{pad(c.id)}</span>
                        {c.title}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </nav>
  )
}

export default function App() {
  const route = useHashRoute()

  return (
    <div className="shell">
      <Sidebar current={route} />
      <main className="content">
        {route ? <Stage folder={route} /> : <Dashboard />}
      </main>
    </div>
  )
}
