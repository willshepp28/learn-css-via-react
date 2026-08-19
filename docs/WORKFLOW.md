# The loop

Same loop every time, 500 times. It should get boring — that's the point, because it's the loop used at work.

## 1. Claim the ticket

```bash
gh issue list --state open --limit 5          # lowest number first
gh issue view <n>                             # read the acceptance criteria properly
gh issue develop <n> --checkout               # creates + checks out a branch linked to the issue
```

If `gh issue develop` isn't available, branch by hand:

```bash
git switch main && git pull
git switch -c challenge/<id>-<slug>
```

## 2. Scaffold

```bash
cd frontend
pnpm new <id>            # e.g. pnpm new 42  -> src/challenges/042-<slug>/
pnpm dev                 # open the printed URL, it deep-links to your challenge
```

You get `index.tsx` (markup) and `styles.css` (the actual work). The challenge auto-appears in the browser sidebar — no registration step.

## 3. Build it

Work in small commits. A commit per idea, not per session:

```bash
git add -A
git commit -m "feat(042): flex container with baseline alignment"
```

Before you open the PR:

```bash
pnpm lint
pnpm build      # this is the only thing that type-checks; dev does not
```

## 4. Open the PR

```bash
git push -u origin HEAD
gh pr create --fill --body "Closes #<n>"
```

Fill in the template. The "what I got wrong first" section is not busywork — writing down the wrong mental model is what stops you repeating it.

## 5. Get it reviewed

Review against `docs/REVIEW-CHECKLIST.md`. Options, in descending order of value:

- Another developer reviews it.
- Ask Claude Code: `gh pr diff <n>` then have it review against the checklist and the issue's acceptance criteria.
- Self-review: leave the PR open overnight, then review your own diff line by line in the GitHub UI before merging. Distance finds bugs.

Push fixes to the same branch; the PR updates itself.

## 6. Merge and clean up

```bash
gh pr merge --squash --delete-branch
git switch main && git pull
```

The issue closes automatically because of `Closes #<n>`.

## Commit message convention

```
<type>(<challenge id>): <what changed>
```

Types: `feat` (new challenge solution), `fix`, `refactor`, `docs`, `chore`. Example: `feat(217): shrink-to-fit card row with flex-wrap`.

## When you're stuck

Don't stall silently, and don't go read a finished solution. In order:

1. Reduce it — delete everything except the two elements misbehaving.
2. Inspect it — DevTools, Computed tab, check what the browser actually resolved. Guessing is the slow path.
3. Comment on the issue with: what you expected, what happened, the smallest reproduction. Writing that comment solves it roughly half the time.
4. Still stuck after that? Skip it, open the next issue, come back. A blocked ticket is not a blocked curriculum.
