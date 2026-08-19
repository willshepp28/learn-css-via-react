# learn-css-via-react

A 500-challenge CSS curriculum, run as a real engineering workflow: every challenge is a GitHub issue, every solution is a branch, a pull request, a review, and a merge.

The goal is not "finish 500 tickets". The goal is to be able to open an empty file and style any web app from scratch, and to have a public history that proves it.

## How this works

1. Pick the lowest-numbered open issue. They are ordered on purpose — later ones assume earlier ones.
2. `pnpm new <id>` scaffolds `frontend/src/challenges/<id>-<slug>/` with a component and a stylesheet.
3. Build it. Read the acceptance criteria on the issue, not just the title.
4. Open a PR with `Closes #<issue>`. Fill in the PR template — the "what I got wrong first" box is the part that teaches.
5. Get it reviewed against `docs/REVIEW-CHECKLIST.md`, merge, delete the branch.

Full loop, including the git commands: `docs/WORKFLOW.md`.

## The curriculum

13 phases, super-beginner to employable. Each phase is a GitHub milestone.

| # | Phase | Issues | What it buys you |
|---|-------|--------|------------------|
| 1 | Foundations & the cascade | 1–40 | You can predict which rule wins, without guessing |
| 2 | Box model, sizing & units | 41–80 | You can control space deliberately |
| 3 | Typography | 81–115 | Text that looks designed instead of default |
| 4 | Color & backgrounds | 116–150 | Palettes, gradients, contrast that passes |
| 5 | Borders, shadows & shapes | 151–175 | Depth and edges |
| 6 | Display, flow & positioning | 176–215 | Stacking, overlap, sticky, z-index sanity |
| 7 | Flexbox | 216–265 | The 1D layout you'll use every day |
| 8 | Grid | 266–320 | The 2D layout that replaces hacks |
| 9 | Responsive & adaptive | 321–360 | One codebase, every screen |
| 10 | Transitions, transforms & animation | 361–400 | Motion that feels intentional |
| 11 | Component patterns | 401–450 | Buttons, forms, modals, tables, navs — the job |
| 12 | Architecture, systems & a11y | 451–490 | Scaling CSS past one file |
| 13 | Capstones | 491–500 | Whole products, from scratch, unassisted |

The machine-readable source of truth is `curriculum/challenges.json`. `docs/CURRICULUM.md` is the readable render of it.

## The app

Every challenge is a React component, so styling is practised the way it is used at work: scoped to a component, composed with others, living inside a build.

```bash
cd frontend
pnpm install
pnpm dev
```

The dev server serves a challenge browser: sidebar of all 500, progress bar, and each completed challenge rendered in isolation at `#/c/<id>-<slug>`.

## Rules that make this work

- **No copy-paste.** Reading a solution and typing it out is not the same as building it. If you're stuck for 20+ minutes, write the specific question in the issue and try a narrower version first.
- **No `!important` and no arbitrary magic numbers** unless the issue explicitly asks for them or the PR explains why.
- **Every PR gets a review.** Unreviewed merges defeat the point — the review is where the learning gets corrected.
- **Push every day you work.** A visible streak of small merged PRs is worth more to an employer than one large repo dump.
