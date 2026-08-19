# Review checklist

Every PR gets checked against this. A reviewer (human or AI) should be able to work top to bottom in a few minutes.

Reject cheerful approvals. A review that finds nothing on a learning repo is usually a review that didn't look.

## Does it meet the ticket

- [ ] Every acceptance criterion on the issue is actually satisfied — checked in the browser, not assumed from the diff.
- [ ] It solves the ticket's concept. Using `position: absolute` to fake a grid passes the screenshot and fails the ticket.
- [ ] The PR closes the issue (`Closes #n`) and touches only that challenge's folder.

## CSS quality

- [ ] No `!important`. If it's there, the real problem is specificity or source order.
- [ ] No unexplained magic numbers. `margin-top: 37px` needs a reason or a token.
- [ ] Selectors are as flat as they can be. Deep descendant chains (`.a .b .c .d`) are a specificity debt.
- [ ] No IDs used as styling hooks (they're a specificity trap) unless the ticket is specifically about that.
- [ ] Spacing comes from a consistent scale, not per-element guesses.
- [ ] Colors come from custom properties once Phase 4 is done — no raw hex scattered through files.
- [ ] Logical properties (`margin-inline`, `padding-block`, `inset`) where they'd work, from Phase 2 onward.

## Layout

- [ ] The right tool: flexbox for one axis, grid for two. Not floats, not absolute positioning, not `<br>`.
- [ ] It survives content change — longer text, a missing image, 3 items instead of 6.
- [ ] It survives a 320px viewport with no horizontal scrollbar.
- [ ] Nothing depends on a fixed pixel height that text can overflow.

## Responsive

- [ ] Zoom to 200% — still usable (this is a real WCAG requirement, not a nicety).
- [ ] Breakpoints chosen where the design breaks, not at device names.
- [ ] Text uses relative units so browser font settings are respected.

## Accessibility

- [ ] Text contrast ≥ 4.5:1 for body, ≥ 3:1 for large text and meaningful UI edges.
- [ ] Focus is visible on every interactive element, and not just the default that was removed.
- [ ] Nothing conveys meaning by color alone.
- [ ] Semantic HTML underneath — `button` for actions, `a` for navigation, real headings in order.
- [ ] Animation respects `prefers-reduced-motion` from Phase 10 on.

## React specifics

- [ ] Styles are scoped to the challenge — no rule leaks out and restyles the app shell.
- [ ] Class names follow the repo convention, no clashes with another challenge's classes.
- [ ] No inline `style={{}}` for anything a stylesheet should own (dynamic values excepted).

## Green before merge

- [ ] `pnpm lint` clean.
- [ ] `pnpm build` clean — remember `pnpm dev` never type-checks.
- [ ] CI passing on the PR.

## Reviewer's last question

> Could they rebuild this from a blank file tomorrow without looking?

If the answer is no, the useful review comment is "explain in the PR why this works" — not "LGTM".
