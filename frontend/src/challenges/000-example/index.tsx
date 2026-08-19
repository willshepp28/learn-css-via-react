import './styles.css'

/**
 * Not a ticket — this is the shape every challenge folder takes.
 *
 *   src/challenges/<id>-<slug>/index.tsx    markup, default export, no logic
 *   src/challenges/<id>-<slug>/styles.css   the actual work
 *
 * Prefix every class with the challenge id so two challenges can never collide.
 */
export default function Example() {
  return (
    <div className="c000">
      <h2 className="c000__title">This is the challenge shape</h2>
      <p className="c000__body">
        Markup here, styles in <code>styles.css</code>. Run{' '}
        <code>pnpm new 1</code> to scaffold the first real one.
      </p>
    </div>
  )
}
