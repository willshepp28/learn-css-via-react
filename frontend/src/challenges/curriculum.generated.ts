// GENERATED FILE — do not edit.
// Source: curriculum/challenges.json (+ curriculum/issue-map.json)
// Regenerate with: pnpm sync:curriculum
import type { ChallengeMeta, Phase } from './types'

export const REPO_URL = "https://github.com/willshepp28/learn-css-via-react"

export const PHASES: Phase[] = [
  {
    "id": 1,
    "title": "Foundations & the cascade",
    "blurb": "Selectors, specificity, inheritance, custom properties. The rules that decide which declaration actually wins.",
    "from": 1,
    "to": 40
  },
  {
    "id": 2,
    "title": "Box model, sizing & units",
    "blurb": "Every box has content, padding, border, margin. Learn to control space on purpose instead of nudging numbers.",
    "from": 41,
    "to": 80
  },
  {
    "id": 3,
    "title": "Typography",
    "blurb": "Type is most of the page. Scales, line length, rhythm, web fonts, and text that survives real content.",
    "from": 81,
    "to": 115
  },
  {
    "id": 4,
    "title": "Color & backgrounds",
    "blurb": "Color systems, modern color spaces, gradients, images, contrast that passes an audit.",
    "from": 116,
    "to": 150
  },
  {
    "id": 5,
    "title": "Borders, shadows & shapes",
    "blurb": "Edges, depth, radius, outlines, and drawing without images.",
    "from": 151,
    "to": 175
  },
  {
    "id": 6,
    "title": "Display, flow & positioning",
    "blurb": "Block vs inline, normal flow, floats, positioning, stacking contexts, z-index that behaves.",
    "from": 176,
    "to": 215
  },
  {
    "id": 7,
    "title": "Flexbox",
    "blurb": "One-dimensional layout, properly understood: main axis, cross axis, growth, shrink, basis.",
    "from": 216,
    "to": 265
  },
  {
    "id": 8,
    "title": "Grid",
    "blurb": "Two-dimensional layout: tracks, lines, areas, auto-placement, subgrid, and intrinsic sizing.",
    "from": 266,
    "to": 320
  },
  {
    "id": 9,
    "title": "Responsive & adaptive",
    "blurb": "Fluid type, media queries, container queries, and layouts that hold from 320px to ultrawide.",
    "from": 321,
    "to": 360
  },
  {
    "id": 10,
    "title": "Transitions, transforms & animation",
    "blurb": "Motion with intent: state transitions, keyframes, performance, reduced-motion.",
    "from": 361,
    "to": 400
  },
  {
    "id": 11,
    "title": "Component patterns",
    "blurb": "The components every job asks for: buttons, forms, navs, modals, tables, cards, toasts.",
    "from": 401,
    "to": 450
  },
  {
    "id": 12,
    "title": "Architecture, systems & a11y",
    "blurb": "Scaling CSS past one file: tokens, themes, methodologies, accessibility, performance, and CSS-in-React options.",
    "from": 451,
    "to": 490
  },
  {
    "id": 13,
    "title": "Capstones",
    "blurb": "Whole products from a blank file, unassisted, to a deadline.",
    "from": 491,
    "to": 500
  }
]

export const CHALLENGES: ChallengeMeta[] = [
  {
    "id": 1,
    "slug": "hello-stylesheet",
    "title": "Render your first challenge component and stylesheet",
    "phase": 1,
    "difficulty": "intro",
    "issue": 1
  },
  {
    "id": 2,
    "slug": "anatomy-of-a-rule",
    "title": "Label every part of a CSS rule",
    "phase": 1,
    "difficulty": "intro",
    "issue": 2
  },
  {
    "id": 3,
    "slug": "element-selectors",
    "title": "Style by element type",
    "phase": 1,
    "difficulty": "intro",
    "issue": 3
  },
  {
    "id": 4,
    "slug": "class-selectors",
    "title": "Style by class instead of element",
    "phase": 1,
    "difficulty": "easy",
    "issue": 4
  },
  {
    "id": 5,
    "slug": "multiple-classes",
    "title": "Compose styles from multiple classes on one element",
    "phase": 1,
    "difficulty": "easy",
    "issue": 5
  },
  {
    "id": 6,
    "slug": "grouping-selectors",
    "title": "Group selectors to remove duplicate rules",
    "phase": 1,
    "difficulty": "easy",
    "issue": 7
  },
  {
    "id": 7,
    "slug": "descendant-combinator",
    "title": "Target elements nested inside a container",
    "phase": 1,
    "difficulty": "easy",
    "issue": 8
  },
  {
    "id": 8,
    "slug": "child-combinator",
    "title": "Target direct children only",
    "phase": 1,
    "difficulty": "easy",
    "issue": 9
  },
  {
    "id": 9,
    "slug": "adjacent-sibling",
    "title": "Space stacked elements with the adjacent sibling combinator",
    "phase": 1,
    "difficulty": "medium",
    "issue": 10
  },
  {
    "id": 10,
    "slug": "general-sibling",
    "title": "Style all later siblings with ~",
    "phase": 1,
    "difficulty": "medium",
    "issue": 11
  },
  {
    "id": 11,
    "slug": "attribute-selectors",
    "title": "Select elements by attribute",
    "phase": 1,
    "difficulty": "medium",
    "issue": 12
  },
  {
    "id": 12,
    "slug": "attribute-substring",
    "title": "Match attribute values by prefix, suffix and substring",
    "phase": 1,
    "difficulty": "medium",
    "issue": 13
  },
  {
    "id": 13,
    "slug": "pseudo-class-states",
    "title": "Style hover, focus and active states",
    "phase": 1,
    "difficulty": "medium",
    "issue": 14
  },
  {
    "id": 14,
    "slug": "structural-first-last",
    "title": "Style the first and last items in a list",
    "phase": 1,
    "difficulty": "medium",
    "issue": 15
  },
  {
    "id": 15,
    "slug": "nth-child-patterns",
    "title": "Zebra-stripe and column-split with nth-child",
    "phase": 1,
    "difficulty": "medium",
    "issue": 16
  },
  {
    "id": 16,
    "slug": "not-selector",
    "title": "Exclude elements with :not()",
    "phase": 1,
    "difficulty": "medium",
    "issue": 17
  },
  {
    "id": 17,
    "slug": "is-and-where",
    "title": "Flatten repetitive selectors with :is() and :where()",
    "phase": 1,
    "difficulty": "hard",
    "issue": 18
  },
  {
    "id": 18,
    "slug": "has-selector",
    "title": "Select a parent based on its children with :has()",
    "phase": 1,
    "difficulty": "hard",
    "issue": 19
  },
  {
    "id": 19,
    "slug": "pseudo-elements",
    "title": "Generate content with ::before and ::after",
    "phase": 1,
    "difficulty": "medium",
    "issue": 20
  },
  {
    "id": 20,
    "slug": "first-letter-and-line",
    "title": "Style the first letter and first line of text",
    "phase": 1,
    "difficulty": "medium",
    "issue": 21
  },
  {
    "id": 21,
    "slug": "inheritance",
    "title": "Work out which properties inherit",
    "phase": 1,
    "difficulty": "medium",
    "issue": 22
  },
  {
    "id": 22,
    "slug": "explicit-inheritance",
    "title": "Control inheritance with inherit, initial, unset and revert",
    "phase": 1,
    "difficulty": "hard",
    "issue": 23
  },
  {
    "id": 23,
    "slug": "specificity-maths",
    "title": "Predict which rule wins before you run it",
    "phase": 1,
    "difficulty": "hard",
    "issue": 24
  },
  {
    "id": 24,
    "slug": "specificity-refactor",
    "title": "Untangle a specificity war",
    "phase": 1,
    "difficulty": "hard",
    "issue": 25
  },
  {
    "id": 25,
    "slug": "source-order",
    "title": "Break ties with source order",
    "phase": 1,
    "difficulty": "medium",
    "issue": 26
  },
  {
    "id": 26,
    "slug": "important-and-why-not",
    "title": "Remove every !important from a stylesheet",
    "phase": 1,
    "difficulty": "hard",
    "issue": 27
  },
  {
    "id": 27,
    "slug": "cascade-layers",
    "title": "Order your CSS with @layer",
    "phase": 1,
    "difficulty": "hard",
    "issue": 28
  },
  {
    "id": 28,
    "slug": "universal-selector",
    "title": "Use the universal selector deliberately",
    "phase": 1,
    "difficulty": "medium",
    "issue": 29
  },
  {
    "id": 29,
    "slug": "custom-properties",
    "title": "Store values in CSS custom properties",
    "phase": 1,
    "difficulty": "medium",
    "issue": 30
  },
  {
    "id": 30,
    "slug": "custom-property-fallbacks",
    "title": "Handle missing custom properties",
    "phase": 1,
    "difficulty": "medium",
    "issue": 31
  },
  {
    "id": 31,
    "slug": "scoped-custom-properties",
    "title": "Scope and override custom properties per component",
    "phase": 1,
    "difficulty": "hard",
    "issue": 32
  },
  {
    "id": 32,
    "slug": "stylesheet-organisation",
    "title": "Impose an order on a stylesheet",
    "phase": 1,
    "difficulty": "easy",
    "issue": 33
  },
  {
    "id": 33,
    "slug": "shorthand-vs-longhand",
    "title": "Debug a shorthand that erased a longhand",
    "phase": 1,
    "difficulty": "medium",
    "issue": 34
  },
  {
    "id": 34,
    "slug": "feature-queries",
    "title": "Progressively enhance with @supports",
    "phase": 1,
    "difficulty": "hard",
    "issue": 35
  },
  {
    "id": 35,
    "slug": "css-in-react",
    "title": "Wire stylesheets into React components properly",
    "phase": 1,
    "difficulty": "medium",
    "issue": 36
  },
  {
    "id": 36,
    "slug": "bem-naming",
    "title": "Adopt a naming convention",
    "phase": 1,
    "difficulty": "medium",
    "issue": 37
  },
  {
    "id": 37,
    "slug": "conditional-classes",
    "title": "Drive classes from React state",
    "phase": 1,
    "difficulty": "medium",
    "issue": 38
  },
  {
    "id": 38,
    "slug": "class-name-helper",
    "title": "Write a tiny class-name joiner",
    "phase": 1,
    "difficulty": "medium",
    "issue": 39
  },
  {
    "id": 39,
    "slug": "root-vs-component-root",
    "title": "Decide where a custom property belongs",
    "phase": 1,
    "difficulty": "hard",
    "issue": 40
  },
  {
    "id": 40,
    "slug": "phase-1-debug",
    "title": "Fix a deliberately broken stylesheet",
    "phase": 1,
    "difficulty": "hard",
    "issue": 41
  },
  {
    "id": 41,
    "slug": "content-box-vs-border-box",
    "title": "See the difference between content-box and border-box",
    "phase": 2,
    "difficulty": "easy",
    "issue": 42
  },
  {
    "id": 42,
    "slug": "border-box-strategy",
    "title": "Apply border-box the way real projects do",
    "phase": 2,
    "difficulty": "easy",
    "issue": 43
  },
  {
    "id": 43,
    "slug": "padding-shorthand",
    "title": "Master the padding shorthand",
    "phase": 2,
    "difficulty": "easy",
    "issue": 44
  },
  {
    "id": 44,
    "slug": "margin-shorthand",
    "title": "Master the margin shorthand and negative values",
    "phase": 2,
    "difficulty": "easy",
    "issue": 45
  },
  {
    "id": 45,
    "slug": "margin-collapsing-siblings",
    "title": "Reproduce margin collapsing between siblings",
    "phase": 2,
    "difficulty": "medium",
    "issue": 46
  },
  {
    "id": 46,
    "slug": "margin-collapsing-parent",
    "title": "Fix a child's margin escaping its parent",
    "phase": 2,
    "difficulty": "medium",
    "issue": 47
  },
  {
    "id": 47,
    "slug": "auto-margins",
    "title": "Centre and push with auto margins",
    "phase": 2,
    "difficulty": "easy",
    "issue": 48
  },
  {
    "id": 48,
    "slug": "logical-properties",
    "title": "Replace physical properties with logical ones",
    "phase": 2,
    "difficulty": "medium",
    "issue": 49
  },
  {
    "id": 49,
    "slug": "width-and-height",
    "title": "Set explicit dimensions and see what breaks",
    "phase": 2,
    "difficulty": "easy",
    "issue": 50
  },
  {
    "id": 50,
    "slug": "min-and-max-width",
    "title": "Constrain width with min and max",
    "phase": 2,
    "difficulty": "easy",
    "issue": 51
  },
  {
    "id": 51,
    "slug": "aspect-ratio",
    "title": "Lock an element's aspect ratio",
    "phase": 2,
    "difficulty": "medium",
    "issue": 52
  },
  {
    "id": 52,
    "slug": "px-rem-em",
    "title": "Choose between px, rem and em deliberately",
    "phase": 2,
    "difficulty": "medium",
    "issue": 53
  },
  {
    "id": 53,
    "slug": "em-compounding",
    "title": "Reproduce the em compounding trap",
    "phase": 2,
    "difficulty": "medium",
    "issue": 54
  },
  {
    "id": 54,
    "slug": "spacing-scale",
    "title": "Build and use a spacing scale",
    "phase": 2,
    "difficulty": "medium",
    "issue": 55
  },
  {
    "id": 55,
    "slug": "percentage-sizing",
    "title": "Work out what a percentage is a percentage of",
    "phase": 2,
    "difficulty": "medium",
    "issue": 56
  },
  {
    "id": 56,
    "slug": "viewport-units",
    "title": "Use vw, vh, svh, lvh and dvh correctly",
    "phase": 2,
    "difficulty": "medium",
    "issue": 57
  },
  {
    "id": 57,
    "slug": "ch-and-ex-units",
    "title": "Size by text with ch and ex",
    "phase": 2,
    "difficulty": "easy",
    "issue": 58
  },
  {
    "id": 58,
    "slug": "calc",
    "title": "Mix units with calc()",
    "phase": 2,
    "difficulty": "medium",
    "issue": 59
  },
  {
    "id": 59,
    "slug": "min-max-clamp",
    "title": "Replace media queries with min(), max() and clamp()",
    "phase": 2,
    "difficulty": "hard",
    "issue": 60
  },
  {
    "id": 60,
    "slug": "overflow-basics",
    "title": "Control overflow with visible, hidden, scroll and auto",
    "phase": 2,
    "difficulty": "easy",
    "issue": 61
  },
  {
    "id": 61,
    "slug": "overflow-axes",
    "title": "Understand why overflow-x and overflow-y interact",
    "phase": 2,
    "difficulty": "hard",
    "issue": 62
  },
  {
    "id": 62,
    "slug": "scrollbar-gutter",
    "title": "Stop layout shifting when a scrollbar appears",
    "phase": 2,
    "difficulty": "medium",
    "issue": 63
  },
  {
    "id": 63,
    "slug": "text-overflow",
    "title": "Truncate a single line with an ellipsis",
    "phase": 2,
    "difficulty": "easy",
    "issue": 64
  },
  {
    "id": 64,
    "slug": "line-clamp",
    "title": "Truncate multi-line text",
    "phase": 2,
    "difficulty": "medium",
    "issue": 65
  },
  {
    "id": 65,
    "slug": "min-content-max-content",
    "title": "Size with intrinsic keywords",
    "phase": 2,
    "difficulty": "hard",
    "issue": 66
  },
  {
    "id": 66,
    "slug": "display-none-vs-hidden",
    "title": "Hide things four different ways",
    "phase": 2,
    "difficulty": "medium",
    "issue": 67
  },
  {
    "id": 67,
    "slug": "gap-vs-margin",
    "title": "Space children with gap instead of margins",
    "phase": 2,
    "difficulty": "medium",
    "issue": 68
  },
  {
    "id": 68,
    "slug": "flow-spacing",
    "title": "Space a document with the owl selector",
    "phase": 2,
    "difficulty": "hard",
    "issue": 69
  },
  {
    "id": 69,
    "slug": "inline-box-model",
    "title": "Discover what padding does on an inline element",
    "phase": 2,
    "difficulty": "medium",
    "issue": 70
  },
  {
    "id": 70,
    "slug": "replaced-elements",
    "title": "Size images without distorting them",
    "phase": 2,
    "difficulty": "medium",
    "issue": 71
  },
  {
    "id": 71,
    "slug": "intrinsic-card-sizing",
    "title": "Let content size the layout",
    "phase": 2,
    "difficulty": "hard",
    "issue": 72
  },
  {
    "id": 72,
    "slug": "border-radius-clipping",
    "title": "Stop content escaping rounded corners",
    "phase": 2,
    "difficulty": "medium",
    "issue": 73
  },
  {
    "id": 73,
    "slug": "form-control-sizing",
    "title": "Make inputs and buttons size consistently",
    "phase": 2,
    "difficulty": "hard",
    "issue": 74
  },
  {
    "id": 74,
    "slug": "padding-vs-margin-decision",
    "title": "Choose padding or margin correctly",
    "phase": 2,
    "difficulty": "medium",
    "issue": 75
  },
  {
    "id": 75,
    "slug": "sizing-debug-outline",
    "title": "Debug layout with outline instead of border",
    "phase": 2,
    "difficulty": "easy",
    "issue": 76
  },
  {
    "id": 76,
    "slug": "box-model-audit",
    "title": "Audit a component's spacing",
    "phase": 2,
    "difficulty": "hard",
    "issue": 77
  },
  {
    "id": 77,
    "slug": "nested-box-sizing",
    "title": "Reason about nested percentage sizing",
    "phase": 2,
    "difficulty": "hard",
    "issue": 78
  },
  {
    "id": 78,
    "slug": "content-visibility",
    "title": "Skip rendering work with content-visibility",
    "phase": 2,
    "difficulty": "hard",
    "issue": 79
  },
  {
    "id": 79,
    "slug": "sizing-cheatsheet",
    "title": "Write the sizing cheatsheet you will actually use",
    "phase": 2,
    "difficulty": "medium",
    "issue": 80
  },
  {
    "id": 80,
    "slug": "phase-2-rebuild",
    "title": "Rebuild a pricing card from a screenshot, spacing only",
    "phase": 2,
    "difficulty": "hard",
    "issue": 81
  },
  {
    "id": 81,
    "slug": "font-stacks",
    "title": "Build a font stack that degrades well",
    "phase": 3,
    "difficulty": "easy",
    "issue": 82
  },
  {
    "id": 82,
    "slug": "system-font-stack",
    "title": "Use the system UI font stack",
    "phase": 3,
    "difficulty": "easy",
    "issue": 83
  },
  {
    "id": 83,
    "slug": "font-face",
    "title": "Load a web font with @font-face",
    "phase": 3,
    "difficulty": "medium",
    "issue": 84
  },
  {
    "id": 84,
    "slug": "font-display",
    "title": "Control the flash with font-display",
    "phase": 3,
    "difficulty": "medium",
    "issue": 85
  },
  {
    "id": 85,
    "slug": "variable-fonts",
    "title": "Use a variable font's axes",
    "phase": 3,
    "difficulty": "hard",
    "issue": 86
  },
  {
    "id": 86,
    "slug": "font-metrics-overrides",
    "title": "Reduce font swap shift with metric overrides",
    "phase": 3,
    "difficulty": "hard",
    "issue": 87
  },
  {
    "id": 87,
    "slug": "type-scale",
    "title": "Build a modular type scale",
    "phase": 3,
    "difficulty": "medium",
    "issue": 88
  },
  {
    "id": 88,
    "slug": "line-height",
    "title": "Set line-height without units",
    "phase": 3,
    "difficulty": "easy",
    "issue": 89
  },
  {
    "id": 89,
    "slug": "measure",
    "title": "Set a comfortable line length",
    "phase": 3,
    "difficulty": "easy",
    "issue": 90
  },
  {
    "id": 90,
    "slug": "font-weight",
    "title": "Use weight as hierarchy",
    "phase": 3,
    "difficulty": "easy",
    "issue": 91
  },
  {
    "id": 91,
    "slug": "letter-spacing",
    "title": "Adjust tracking for size",
    "phase": 3,
    "difficulty": "medium",
    "issue": 92
  },
  {
    "id": 92,
    "slug": "word-spacing-and-align",
    "title": "Control word spacing and alignment",
    "phase": 3,
    "difficulty": "medium",
    "issue": 93
  },
  {
    "id": 93,
    "slug": "text-transform",
    "title": "Transform case in CSS, not in content",
    "phase": 3,
    "difficulty": "easy",
    "issue": 94
  },
  {
    "id": 94,
    "slug": "wrapping-and-breaking",
    "title": "Stop long words from breaking layout",
    "phase": 3,
    "difficulty": "medium",
    "issue": 95
  },
  {
    "id": 95,
    "slug": "white-space",
    "title": "Control whitespace and preformatted text",
    "phase": 3,
    "difficulty": "medium",
    "issue": 96
  },
  {
    "id": 96,
    "slug": "text-decoration",
    "title": "Style underlines properly",
    "phase": 3,
    "difficulty": "medium",
    "issue": 97
  },
  {
    "id": 97,
    "slug": "link-styling",
    "title": "Style every link state",
    "phase": 3,
    "difficulty": "medium",
    "issue": 98
  },
  {
    "id": 98,
    "slug": "vertical-rhythm",
    "title": "Establish a vertical rhythm",
    "phase": 3,
    "difficulty": "hard",
    "issue": 99
  },
  {
    "id": 99,
    "slug": "heading-hierarchy",
    "title": "Style a full heading hierarchy",
    "phase": 3,
    "difficulty": "medium",
    "issue": 100
  },
  {
    "id": 100,
    "slug": "list-styling",
    "title": "Style lists and markers",
    "phase": 3,
    "difficulty": "medium",
    "issue": 101
  },
  {
    "id": 101,
    "slug": "css-counters",
    "title": "Number things with CSS counters",
    "phase": 3,
    "difficulty": "hard",
    "issue": 102
  },
  {
    "id": 102,
    "slug": "blockquotes",
    "title": "Style quotes and pull quotes",
    "phase": 3,
    "difficulty": "medium",
    "issue": 103
  },
  {
    "id": 103,
    "slug": "code-typography",
    "title": "Style inline code and code blocks",
    "phase": 3,
    "difficulty": "medium",
    "issue": 104
  },
  {
    "id": 104,
    "slug": "tabular-numerals",
    "title": "Align numbers in a table",
    "phase": 3,
    "difficulty": "medium",
    "issue": 105
  },
  {
    "id": 105,
    "slug": "opentype-features",
    "title": "Turn on ligatures, small caps and alternates",
    "phase": 3,
    "difficulty": "hard",
    "issue": 106
  },
  {
    "id": 106,
    "slug": "text-wrap-balance",
    "title": "Balance and prettify text wrapping",
    "phase": 3,
    "difficulty": "medium",
    "issue": 107
  },
  {
    "id": 107,
    "slug": "responsive-type",
    "title": "Scale type with clamp",
    "phase": 3,
    "difficulty": "hard",
    "issue": 108
  },
  {
    "id": 108,
    "slug": "fluid-type-scale",
    "title": "Generate a fluid type scale",
    "phase": 3,
    "difficulty": "hard",
    "issue": 109
  },
  {
    "id": 109,
    "slug": "writing-modes",
    "title": "Set text vertically",
    "phase": 3,
    "difficulty": "hard",
    "issue": 110
  },
  {
    "id": 110,
    "slug": "text-over-images",
    "title": "Keep text legible over an image",
    "phase": 3,
    "difficulty": "hard",
    "issue": 111
  },
  {
    "id": 111,
    "slug": "truncation-patterns",
    "title": "Choose between wrapping, truncating and scrolling",
    "phase": 3,
    "difficulty": "medium",
    "issue": 112
  },
  {
    "id": 112,
    "slug": "paragraph-spacing",
    "title": "Space paragraphs like a typographer",
    "phase": 3,
    "difficulty": "easy",
    "issue": 113
  },
  {
    "id": 113,
    "slug": "selection-and-caret",
    "title": "Style selection, caret and placeholder",
    "phase": 3,
    "difficulty": "easy",
    "issue": 114
  },
  {
    "id": 114,
    "slug": "typographic-details",
    "title": "Fix the small typographic details",
    "phase": 3,
    "difficulty": "medium",
    "issue": 115
  },
  {
    "id": 115,
    "slug": "phase-3-article",
    "title": "Typeset a long-form article",
    "phase": 3,
    "difficulty": "hard",
    "issue": 116
  },
  {
    "id": 116,
    "slug": "color-notations",
    "title": "Write color five different ways",
    "phase": 4,
    "difficulty": "easy",
    "issue": 117
  },
  {
    "id": 117,
    "slug": "hsl-thinking",
    "title": "Build a palette by reasoning in HSL",
    "phase": 4,
    "difficulty": "medium",
    "issue": 118
  },
  {
    "id": 118,
    "slug": "oklch-palettes",
    "title": "Build a perceptually even palette in OKLCH",
    "phase": 4,
    "difficulty": "hard",
    "issue": 119
  },
  {
    "id": 119,
    "slug": "color-mix",
    "title": "Derive colors with color-mix()",
    "phase": 4,
    "difficulty": "hard",
    "issue": 120
  },
  {
    "id": 120,
    "slug": "relative-color",
    "title": "Derive colors with relative color syntax",
    "phase": 4,
    "difficulty": "hard",
    "issue": 121
  },
  {
    "id": 121,
    "slug": "semantic-color-tokens",
    "title": "Name colors by role, not by value",
    "phase": 4,
    "difficulty": "medium",
    "issue": 122
  },
  {
    "id": 122,
    "slug": "contrast-ratios",
    "title": "Measure and fix contrast",
    "phase": 4,
    "difficulty": "medium",
    "issue": 123
  },
  {
    "id": 123,
    "slug": "dark-mode-tokens",
    "title": "Add a dark theme by swapping tokens",
    "phase": 4,
    "difficulty": "hard",
    "issue": 124
  },
  {
    "id": 124,
    "slug": "manual-theme-toggle",
    "title": "Let the user override the theme",
    "phase": 4,
    "difficulty": "hard",
    "issue": 125
  },
  {
    "id": 125,
    "slug": "transparency",
    "title": "Use alpha without muddying your palette",
    "phase": 4,
    "difficulty": "medium",
    "issue": 126
  },
  {
    "id": 126,
    "slug": "currentcolor",
    "title": "Propagate color with currentColor",
    "phase": 4,
    "difficulty": "medium",
    "issue": 127
  },
  {
    "id": 127,
    "slug": "linear-gradients",
    "title": "Draw linear gradients",
    "phase": 4,
    "difficulty": "medium",
    "issue": 128
  },
  {
    "id": 128,
    "slug": "radial-and-conic",
    "title": "Draw radial and conic gradients",
    "phase": 4,
    "difficulty": "hard",
    "issue": 129
  },
  {
    "id": 129,
    "slug": "gradient-text",
    "title": "Clip a gradient to text",
    "phase": 4,
    "difficulty": "medium",
    "issue": 130
  },
  {
    "id": 130,
    "slug": "gradient-borders",
    "title": "Fake a gradient border",
    "phase": 4,
    "difficulty": "hard",
    "issue": 131
  },
  {
    "id": 131,
    "slug": "background-image",
    "title": "Place and size a background image",
    "phase": 4,
    "difficulty": "easy",
    "issue": 132
  },
  {
    "id": 132,
    "slug": "multiple-backgrounds",
    "title": "Layer multiple backgrounds",
    "phase": 4,
    "difficulty": "hard",
    "issue": 133
  },
  {
    "id": 133,
    "slug": "background-attachment",
    "title": "Control background scrolling",
    "phase": 4,
    "difficulty": "medium",
    "issue": 134
  },
  {
    "id": 134,
    "slug": "background-clip-origin",
    "title": "Control where a background starts and stops",
    "phase": 4,
    "difficulty": "medium",
    "issue": 135
  },
  {
    "id": 135,
    "slug": "css-patterns",
    "title": "Draw a pattern with gradients only",
    "phase": 4,
    "difficulty": "hard",
    "issue": 136
  },
  {
    "id": 136,
    "slug": "blend-modes",
    "title": "Blend backgrounds and elements",
    "phase": 4,
    "difficulty": "hard",
    "issue": 137
  },
  {
    "id": 137,
    "slug": "filters",
    "title": "Apply CSS filters",
    "phase": 4,
    "difficulty": "medium",
    "issue": 138
  },
  {
    "id": 138,
    "slug": "backdrop-filter",
    "title": "Frost a panel with backdrop-filter",
    "phase": 4,
    "difficulty": "hard",
    "issue": 139
  },
  {
    "id": 139,
    "slug": "accent-and-caret",
    "title": "Theme native controls",
    "phase": 4,
    "difficulty": "easy",
    "issue": 140
  },
  {
    "id": 140,
    "slug": "high-contrast-mode",
    "title": "Survive forced-colors mode",
    "phase": 4,
    "difficulty": "hard",
    "issue": 141
  },
  {
    "id": 141,
    "slug": "color-and-meaning",
    "title": "Never rely on color alone",
    "phase": 4,
    "difficulty": "medium",
    "issue": 142
  },
  {
    "id": 142,
    "slug": "gamut-and-p3",
    "title": "Use wide-gamut color safely",
    "phase": 4,
    "difficulty": "hard",
    "issue": 143
  },
  {
    "id": 143,
    "slug": "theming-multiple-brands",
    "title": "Support two brands from one stylesheet",
    "phase": 4,
    "difficulty": "hard",
    "issue": 144
  },
  {
    "id": 144,
    "slug": "state-colors",
    "title": "Derive interaction state colors systematically",
    "phase": 4,
    "difficulty": "medium",
    "issue": 145
  },
  {
    "id": 145,
    "slug": "shadows-and-color",
    "title": "Tint shadows to match the surface",
    "phase": 4,
    "difficulty": "medium",
    "issue": 146
  },
  {
    "id": 146,
    "slug": "image-treatments",
    "title": "Build a consistent image treatment system",
    "phase": 4,
    "difficulty": "hard",
    "issue": 147
  },
  {
    "id": 147,
    "slug": "print-colors",
    "title": "Style a page for print",
    "phase": 4,
    "difficulty": "medium",
    "issue": 148
  },
  {
    "id": 148,
    "slug": "color-audit",
    "title": "Audit and consolidate a color system",
    "phase": 4,
    "difficulty": "hard",
    "issue": 149
  },
  {
    "id": 149,
    "slug": "gradient-hero",
    "title": "Build a gradient hero section",
    "phase": 4,
    "difficulty": "medium",
    "issue": 150
  },
  {
    "id": 150,
    "slug": "phase-4-theme",
    "title": "Ship a themed component library page",
    "phase": 4,
    "difficulty": "hard",
    "issue": 151
  },
  {
    "id": 151,
    "slug": "border-basics",
    "title": "Use the border shorthand and longhands",
    "phase": 5,
    "difficulty": "easy",
    "issue": 152
  },
  {
    "id": 152,
    "slug": "border-radius",
    "title": "Round corners precisely",
    "phase": 5,
    "difficulty": "easy",
    "issue": 153
  },
  {
    "id": 153,
    "slug": "elliptical-radius",
    "title": "Use the slash syntax for elliptical corners",
    "phase": 5,
    "difficulty": "medium",
    "issue": 154
  },
  {
    "id": 154,
    "slug": "outline-vs-border",
    "title": "Choose outline over border for focus",
    "phase": 5,
    "difficulty": "easy",
    "issue": 155
  },
  {
    "id": 155,
    "slug": "box-shadow-basics",
    "title": "Read and write every box-shadow value",
    "phase": 5,
    "difficulty": "easy",
    "issue": 156
  },
  {
    "id": 156,
    "slug": "layered-shadows",
    "title": "Build realistic depth with layered shadows",
    "phase": 5,
    "difficulty": "hard",
    "issue": 157
  },
  {
    "id": 157,
    "slug": "shadow-vs-filter",
    "title": "Compare box-shadow with drop-shadow",
    "phase": 5,
    "difficulty": "medium",
    "issue": 158
  },
  {
    "id": 158,
    "slug": "focus-rings",
    "title": "Design a focus ring system",
    "phase": 5,
    "difficulty": "hard",
    "issue": 159
  },
  {
    "id": 159,
    "slug": "border-images",
    "title": "Use border-image",
    "phase": 5,
    "difficulty": "hard",
    "issue": 160
  },
  {
    "id": 160,
    "slug": "shapes-with-radius",
    "title": "Draw shapes using only border tricks",
    "phase": 5,
    "difficulty": "medium",
    "issue": 161
  },
  {
    "id": 161,
    "slug": "clip-path-basics",
    "title": "Cut shapes with clip-path",
    "phase": 5,
    "difficulty": "medium",
    "issue": 162
  },
  {
    "id": 162,
    "slug": "clip-path-animation",
    "title": "Animate a clip-path reveal",
    "phase": 5,
    "difficulty": "hard",
    "issue": 163
  },
  {
    "id": 163,
    "slug": "css-masks",
    "title": "Mask an element with an image or gradient",
    "phase": 5,
    "difficulty": "hard",
    "issue": 164
  },
  {
    "id": 164,
    "slug": "shape-outside",
    "title": "Wrap text around a shape",
    "phase": 5,
    "difficulty": "hard",
    "issue": 165
  },
  {
    "id": 165,
    "slug": "dividers",
    "title": "Build dividers that hold up",
    "phase": 5,
    "difficulty": "easy",
    "issue": 166
  },
  {
    "id": 166,
    "slug": "cards-with-depth",
    "title": "Style a card with border, radius and shadow together",
    "phase": 5,
    "difficulty": "medium",
    "issue": 167
  },
  {
    "id": 167,
    "slug": "skeleton-loaders",
    "title": "Build a skeleton loading state",
    "phase": 5,
    "difficulty": "medium",
    "issue": 168
  },
  {
    "id": 168,
    "slug": "ring-and-badge",
    "title": "Build notification badges and status rings",
    "phase": 5,
    "difficulty": "medium",
    "issue": 169
  },
  {
    "id": 169,
    "slug": "scroll-shadows",
    "title": "Show that content is scrollable",
    "phase": 5,
    "difficulty": "hard",
    "issue": 170
  },
  {
    "id": 170,
    "slug": "dashed-and-custom-borders",
    "title": "Control dash patterns",
    "phase": 5,
    "difficulty": "medium",
    "issue": 171
  },
  {
    "id": 171,
    "slug": "corner-notches",
    "title": "Cut notches and corners",
    "phase": 5,
    "difficulty": "hard",
    "issue": 172
  },
  {
    "id": 172,
    "slug": "aspect-shapes",
    "title": "Combine aspect-ratio with shapes",
    "phase": 5,
    "difficulty": "medium",
    "issue": 173
  },
  {
    "id": 173,
    "slug": "borders-in-tables",
    "title": "Get table borders right",
    "phase": 5,
    "difficulty": "medium",
    "issue": 174
  },
  {
    "id": 174,
    "slug": "shape-debug",
    "title": "Debug a shape that renders wrong",
    "phase": 5,
    "difficulty": "hard",
    "issue": 175
  },
  {
    "id": 175,
    "slug": "phase-5-illustration",
    "title": "Draw something non-trivial in pure CSS",
    "phase": 5,
    "difficulty": "hard",
    "issue": 176
  },
  {
    "id": 176,
    "slug": "block-vs-inline",
    "title": "Tell block and inline boxes apart",
    "phase": 6,
    "difficulty": "easy",
    "issue": 177
  },
  {
    "id": 177,
    "slug": "inline-block",
    "title": "Use inline-block and meet the whitespace gap",
    "phase": 6,
    "difficulty": "medium",
    "issue": 178
  },
  {
    "id": 178,
    "slug": "vertical-align",
    "title": "Use vertical-align where it actually applies",
    "phase": 6,
    "difficulty": "medium",
    "issue": 179
  },
  {
    "id": 179,
    "slug": "normal-flow",
    "title": "Describe normal flow by breaking it",
    "phase": 6,
    "difficulty": "easy",
    "issue": 180
  },
  {
    "id": 180,
    "slug": "formatting-contexts",
    "title": "Create a block formatting context on purpose",
    "phase": 6,
    "difficulty": "hard",
    "issue": 181
  },
  {
    "id": 181,
    "slug": "floats",
    "title": "Use floats for what they were designed for",
    "phase": 6,
    "difficulty": "medium",
    "issue": 182
  },
  {
    "id": 182,
    "slug": "position-static-relative",
    "title": "Nudge with position: relative",
    "phase": 6,
    "difficulty": "easy",
    "issue": 183
  },
  {
    "id": 183,
    "slug": "position-absolute",
    "title": "Position an element against its containing block",
    "phase": 6,
    "difficulty": "medium",
    "issue": 184
  },
  {
    "id": 184,
    "slug": "absolute-centering",
    "title": "Centre absolutely, three ways",
    "phase": 6,
    "difficulty": "medium",
    "issue": 185
  },
  {
    "id": 185,
    "slug": "position-fixed",
    "title": "Pin an element to the viewport",
    "phase": 6,
    "difficulty": "medium",
    "issue": 186
  },
  {
    "id": 186,
    "slug": "position-sticky",
    "title": "Make an element stick",
    "phase": 6,
    "difficulty": "hard",
    "issue": 187
  },
  {
    "id": 187,
    "slug": "sticky-table-headers",
    "title": "Stick a table header and first column",
    "phase": 6,
    "difficulty": "hard",
    "issue": 188
  },
  {
    "id": 188,
    "slug": "z-index-basics",
    "title": "Control paint order with z-index",
    "phase": 6,
    "difficulty": "medium",
    "issue": 189
  },
  {
    "id": 189,
    "slug": "stacking-contexts",
    "title": "Find the stacking context that is breaking your z-index",
    "phase": 6,
    "difficulty": "hard",
    "issue": 190
  },
  {
    "id": 190,
    "slug": "isolation",
    "title": "Create a stacking context deliberately",
    "phase": 6,
    "difficulty": "medium",
    "issue": 191
  },
  {
    "id": 191,
    "slug": "overlay-layering",
    "title": "Layer a modal, dropdown and toast correctly",
    "phase": 6,
    "difficulty": "hard",
    "issue": 192
  },
  {
    "id": 192,
    "slug": "top-layer",
    "title": "Use the top layer with dialog and popover",
    "phase": 6,
    "difficulty": "hard",
    "issue": 193
  },
  {
    "id": 193,
    "slug": "anchor-positioning",
    "title": "Position a popover against an anchor",
    "phase": 6,
    "difficulty": "hard",
    "issue": 194
  },
  {
    "id": 194,
    "slug": "containing-blocks",
    "title": "Trace the containing block chain",
    "phase": 6,
    "difficulty": "hard",
    "issue": 195
  },
  {
    "id": 195,
    "slug": "overflow-and-position",
    "title": "Combine overflow with absolute children",
    "phase": 6,
    "difficulty": "hard",
    "issue": 196
  },
  {
    "id": 196,
    "slug": "display-contents",
    "title": "Remove a box without removing the element",
    "phase": 6,
    "difficulty": "hard",
    "issue": 197
  },
  {
    "id": 197,
    "slug": "visibility-and-flow",
    "title": "Hide without collapsing layout",
    "phase": 6,
    "difficulty": "easy",
    "issue": 198
  },
  {
    "id": 198,
    "slug": "multi-column",
    "title": "Lay out text in columns",
    "phase": 6,
    "difficulty": "medium",
    "issue": 199
  },
  {
    "id": 199,
    "slug": "column-spanning",
    "title": "Span an element across columns",
    "phase": 6,
    "difficulty": "medium",
    "issue": 200
  },
  {
    "id": 200,
    "slug": "fragmentation",
    "title": "Control page and column breaks",
    "phase": 6,
    "difficulty": "hard",
    "issue": 201
  },
  {
    "id": 201,
    "slug": "tables-layout",
    "title": "Lay out a real data table",
    "phase": 6,
    "difficulty": "medium",
    "issue": 202
  },
  {
    "id": 202,
    "slug": "responsive-tables",
    "title": "Make a wide table usable on mobile",
    "phase": 6,
    "difficulty": "hard",
    "issue": 203
  },
  {
    "id": 203,
    "slug": "scroll-containers",
    "title": "Build a horizontal scroll region",
    "phase": 6,
    "difficulty": "medium",
    "issue": 204
  },
  {
    "id": 204,
    "slug": "scroll-snap",
    "title": "Add scroll snapping",
    "phase": 6,
    "difficulty": "hard",
    "issue": 205
  },
  {
    "id": 205,
    "slug": "smooth-scrolling",
    "title": "Implement smooth scroll and scroll margin",
    "phase": 6,
    "difficulty": "easy",
    "issue": 206
  },
  {
    "id": 206,
    "slug": "overscroll",
    "title": "Stop scroll chaining",
    "phase": 6,
    "difficulty": "medium",
    "issue": 207
  },
  {
    "id": 207,
    "slug": "aspect-overlays",
    "title": "Overlay content on media",
    "phase": 6,
    "difficulty": "medium",
    "issue": 208
  },
  {
    "id": 208,
    "slug": "pointer-events",
    "title": "Control what receives clicks",
    "phase": 6,
    "difficulty": "medium",
    "issue": 209
  },
  {
    "id": 209,
    "slug": "hit-areas",
    "title": "Guarantee a 44px touch target",
    "phase": 6,
    "difficulty": "medium",
    "issue": 210
  },
  {
    "id": 210,
    "slug": "layout-debugging",
    "title": "Diagnose an overlap bug",
    "phase": 6,
    "difficulty": "hard",
    "issue": 211
  },
  {
    "id": 211,
    "slug": "print-layout",
    "title": "Lay out a printable invoice",
    "phase": 6,
    "difficulty": "hard",
    "issue": 212
  },
  {
    "id": 212,
    "slug": "legacy-layout",
    "title": "Rebuild a layout the 2010 way, then the modern way",
    "phase": 6,
    "difficulty": "hard",
    "issue": 213
  },
  {
    "id": 213,
    "slug": "flow-relative-layout",
    "title": "Build a layout that works in any writing mode",
    "phase": 6,
    "difficulty": "hard",
    "issue": 214
  },
  {
    "id": 214,
    "slug": "positioning-audit",
    "title": "Remove unnecessary positioning",
    "phase": 6,
    "difficulty": "hard",
    "issue": 215
  },
  {
    "id": 215,
    "slug": "phase-6-page",
    "title": "Build a documentation page shell",
    "phase": 6,
    "difficulty": "hard",
    "issue": 216
  },
  {
    "id": 216,
    "slug": "flex-container",
    "title": "Turn an element into a flex container",
    "phase": 7,
    "difficulty": "easy",
    "issue": 217
  },
  {
    "id": 217,
    "slug": "main-and-cross-axis",
    "title": "Name the axes before you touch a property",
    "phase": 7,
    "difficulty": "easy",
    "issue": 218
  },
  {
    "id": 218,
    "slug": "justify-content",
    "title": "Distribute space along the main axis",
    "phase": 7,
    "difficulty": "easy",
    "issue": 219
  },
  {
    "id": 219,
    "slug": "align-items",
    "title": "Align along the cross axis",
    "phase": 7,
    "difficulty": "easy",
    "issue": 220
  },
  {
    "id": 220,
    "slug": "align-self",
    "title": "Override alignment per item",
    "phase": 7,
    "difficulty": "easy",
    "issue": 221
  },
  {
    "id": 221,
    "slug": "flex-wrap",
    "title": "Let items wrap onto new lines",
    "phase": 7,
    "difficulty": "medium",
    "issue": 222
  },
  {
    "id": 222,
    "slug": "align-content",
    "title": "Align wrapped lines",
    "phase": 7,
    "difficulty": "medium",
    "issue": 223
  },
  {
    "id": 223,
    "slug": "flex-grow",
    "title": "Distribute free space with flex-grow",
    "phase": 7,
    "difficulty": "medium",
    "issue": 224
  },
  {
    "id": 224,
    "slug": "flex-shrink",
    "title": "Control shrinking under pressure",
    "phase": 7,
    "difficulty": "hard",
    "issue": 225
  },
  {
    "id": 225,
    "slug": "flex-basis",
    "title": "Set the starting size with flex-basis",
    "phase": 7,
    "difficulty": "hard",
    "issue": 226
  },
  {
    "id": 226,
    "slug": "flex-shorthand",
    "title": "Read and write the flex shorthand",
    "phase": 7,
    "difficulty": "medium",
    "issue": 227
  },
  {
    "id": 227,
    "slug": "equal-columns",
    "title": "Build genuinely equal-width columns",
    "phase": 7,
    "difficulty": "medium",
    "issue": 228
  },
  {
    "id": 228,
    "slug": "holy-grail-flex",
    "title": "Build the holy grail layout with flex",
    "phase": 7,
    "difficulty": "hard",
    "issue": 229
  },
  {
    "id": 229,
    "slug": "sticky-footer",
    "title": "Push the footer to the bottom",
    "phase": 7,
    "difficulty": "easy",
    "issue": 230
  },
  {
    "id": 230,
    "slug": "media-object",
    "title": "Build the media object pattern",
    "phase": 7,
    "difficulty": "medium",
    "issue": 231
  },
  {
    "id": 231,
    "slug": "nav-bar",
    "title": "Build a responsive navigation bar",
    "phase": 7,
    "difficulty": "medium",
    "issue": 232
  },
  {
    "id": 232,
    "slug": "card-footer-alignment",
    "title": "Align card footers in a row",
    "phase": 7,
    "difficulty": "medium",
    "issue": 233
  },
  {
    "id": 233,
    "slug": "gap-in-flex",
    "title": "Space flex items with gap",
    "phase": 7,
    "difficulty": "easy",
    "issue": 234
  },
  {
    "id": 234,
    "slug": "order-property",
    "title": "Reorder items visually with order",
    "phase": 7,
    "difficulty": "hard",
    "issue": 235
  },
  {
    "id": 235,
    "slug": "flex-min-size-trap",
    "title": "Fix the flex item that will not shrink",
    "phase": 7,
    "difficulty": "hard",
    "issue": 236
  },
  {
    "id": 236,
    "slug": "nested-flex",
    "title": "Nest flex containers without chaos",
    "phase": 7,
    "difficulty": "hard",
    "issue": 237
  },
  {
    "id": 237,
    "slug": "flex-vs-inline-flex",
    "title": "Choose flex or inline-flex",
    "phase": 7,
    "difficulty": "easy",
    "issue": 238
  },
  {
    "id": 238,
    "slug": "toolbar-overflow",
    "title": "Handle a toolbar that runs out of room",
    "phase": 7,
    "difficulty": "hard",
    "issue": 239
  },
  {
    "id": 239,
    "slug": "split-buttons",
    "title": "Build a split layout inside a component",
    "phase": 7,
    "difficulty": "medium",
    "issue": 240
  },
  {
    "id": 240,
    "slug": "form-row",
    "title": "Lay out a form row",
    "phase": 7,
    "difficulty": "medium",
    "issue": 241
  },
  {
    "id": 241,
    "slug": "flex-centering",
    "title": "Centre anything with flex",
    "phase": 7,
    "difficulty": "easy",
    "issue": 242
  },
  {
    "id": 242,
    "slug": "flex-basis-vs-width",
    "title": "Decide between basis and width in a wrap layout",
    "phase": 7,
    "difficulty": "hard",
    "issue": 243
  },
  {
    "id": 243,
    "slug": "last-row-problem",
    "title": "Fix the ragged last row",
    "phase": 7,
    "difficulty": "hard",
    "issue": 244
  },
  {
    "id": 244,
    "slug": "flex-tables",
    "title": "Fake a table with flex, and learn why not to",
    "phase": 7,
    "difficulty": "hard",
    "issue": 245
  },
  {
    "id": 245,
    "slug": "flex-directions-rtl",
    "title": "Test a flex layout in rtl",
    "phase": 7,
    "difficulty": "medium",
    "issue": 246
  },
  {
    "id": 246,
    "slug": "chip-input",
    "title": "Build a tag input row",
    "phase": 7,
    "difficulty": "medium",
    "issue": 247
  },
  {
    "id": 247,
    "slug": "pricing-row",
    "title": "Build a pricing table row with flex",
    "phase": 7,
    "difficulty": "medium",
    "issue": 248
  },
  {
    "id": 248,
    "slug": "stat-row",
    "title": "Build a responsive stats row",
    "phase": 7,
    "difficulty": "easy",
    "issue": 249
  },
  {
    "id": 249,
    "slug": "sidebar-flex",
    "title": "Build the sidebar pattern that collapses itself",
    "phase": 7,
    "difficulty": "hard",
    "issue": 250
  },
  {
    "id": 250,
    "slug": "flex-scroll-row",
    "title": "Combine flex with horizontal scrolling",
    "phase": 7,
    "difficulty": "medium",
    "issue": 251
  },
  {
    "id": 251,
    "slug": "baseline-alignment",
    "title": "Align mixed-size items on their baselines",
    "phase": 7,
    "difficulty": "hard",
    "issue": 252
  },
  {
    "id": 252,
    "slug": "flex-gotchas",
    "title": "Collect five flexbox gotchas",
    "phase": 7,
    "difficulty": "hard",
    "issue": 253
  },
  {
    "id": 253,
    "slug": "flex-refactor",
    "title": "Refactor a float layout to flex",
    "phase": 7,
    "difficulty": "medium",
    "issue": 254
  },
  {
    "id": 254,
    "slug": "flex-performance",
    "title": "Check flex layout performance",
    "phase": 7,
    "difficulty": "hard",
    "issue": 255
  },
  {
    "id": 255,
    "slug": "flex-vs-grid-decision",
    "title": "Write the flex-or-grid decision rule",
    "phase": 7,
    "difficulty": "medium",
    "issue": 256
  },
  {
    "id": 256,
    "slug": "app-shell-flex",
    "title": "Build an app shell with flex",
    "phase": 7,
    "difficulty": "hard",
    "issue": 257
  },
  {
    "id": 257,
    "slug": "comment-thread",
    "title": "Build a nested comment thread",
    "phase": 7,
    "difficulty": "medium",
    "issue": 258
  },
  {
    "id": 258,
    "slug": "kanban-column",
    "title": "Build a kanban column",
    "phase": 7,
    "difficulty": "hard",
    "issue": 259
  },
  {
    "id": 259,
    "slug": "chat-layout",
    "title": "Build a chat message layout",
    "phase": 7,
    "difficulty": "hard",
    "issue": 260
  },
  {
    "id": 260,
    "slug": "flex-order-vs-dom",
    "title": "Decide when visual order should differ",
    "phase": 7,
    "difficulty": "hard",
    "issue": 261
  },
  {
    "id": 261,
    "slug": "flex-aspect-cards",
    "title": "Combine flex with aspect-ratio",
    "phase": 7,
    "difficulty": "medium",
    "issue": 262
  },
  {
    "id": 262,
    "slug": "truncation-in-flex",
    "title": "Truncate text inside a flex item",
    "phase": 7,
    "difficulty": "hard",
    "issue": 263
  },
  {
    "id": 263,
    "slug": "flex-empty-states",
    "title": "Design empty and loading states for a flex layout",
    "phase": 7,
    "difficulty": "medium",
    "issue": 264
  },
  {
    "id": 264,
    "slug": "flex-audit",
    "title": "Audit a flex layout against a checklist",
    "phase": 7,
    "difficulty": "hard",
    "issue": 265
  },
  {
    "id": 265,
    "slug": "phase-7-dashboard",
    "title": "Build a dashboard header and toolbar system",
    "phase": 7,
    "difficulty": "hard",
    "issue": 266
  },
  {
    "id": 266,
    "slug": "grid-container",
    "title": "Create your first grid",
    "phase": 8,
    "difficulty": "easy",
    "issue": 267
  },
  {
    "id": 267,
    "slug": "fr-unit",
    "title": "Understand the fr unit",
    "phase": 8,
    "difficulty": "easy",
    "issue": 268
  },
  {
    "id": 268,
    "slug": "grid-gap",
    "title": "Space grid tracks with gap",
    "phase": 8,
    "difficulty": "easy",
    "issue": 269
  },
  {
    "id": 269,
    "slug": "explicit-tracks",
    "title": "Define explicit rows and columns",
    "phase": 8,
    "difficulty": "easy",
    "issue": 270
  },
  {
    "id": 270,
    "slug": "repeat-notation",
    "title": "Compress track lists with repeat()",
    "phase": 8,
    "difficulty": "easy",
    "issue": 271
  },
  {
    "id": 271,
    "slug": "minmax",
    "title": "Size tracks with minmax()",
    "phase": 8,
    "difficulty": "medium",
    "issue": 272
  },
  {
    "id": 272,
    "slug": "auto-fit-auto-fill",
    "title": "Build a responsive grid with no media queries",
    "phase": 8,
    "difficulty": "hard",
    "issue": 273
  },
  {
    "id": 273,
    "slug": "line-based-placement",
    "title": "Place items by grid line number",
    "phase": 8,
    "difficulty": "medium",
    "issue": 274
  },
  {
    "id": 274,
    "slug": "named-lines",
    "title": "Name your grid lines",
    "phase": 8,
    "difficulty": "hard",
    "issue": 275
  },
  {
    "id": 275,
    "slug": "grid-areas",
    "title": "Lay out with named template areas",
    "phase": 8,
    "difficulty": "medium",
    "issue": 276
  },
  {
    "id": 276,
    "slug": "auto-placement",
    "title": "Control the auto-placement algorithm",
    "phase": 8,
    "difficulty": "hard",
    "issue": 277
  },
  {
    "id": 277,
    "slug": "implicit-tracks",
    "title": "Size the tracks grid creates for you",
    "phase": 8,
    "difficulty": "medium",
    "issue": 278
  },
  {
    "id": 278,
    "slug": "spanning",
    "title": "Span items across tracks",
    "phase": 8,
    "difficulty": "medium",
    "issue": 279
  },
  {
    "id": 279,
    "slug": "grid-alignment",
    "title": "Align inside a grid container",
    "phase": 8,
    "difficulty": "medium",
    "issue": 280
  },
  {
    "id": 280,
    "slug": "item-alignment",
    "title": "Align a single grid item",
    "phase": 8,
    "difficulty": "easy",
    "issue": 281
  },
  {
    "id": 281,
    "slug": "grid-centering",
    "title": "Centre with grid in one line",
    "phase": 8,
    "difficulty": "easy",
    "issue": 282
  },
  {
    "id": 282,
    "slug": "holy-grail-grid",
    "title": "Build the holy grail layout with grid",
    "phase": 8,
    "difficulty": "medium",
    "issue": 283
  },
  {
    "id": 283,
    "slug": "full-bleed",
    "title": "Break an element out of a centred column",
    "phase": 8,
    "difficulty": "hard",
    "issue": 284
  },
  {
    "id": 284,
    "slug": "subgrid",
    "title": "Align nested content with subgrid",
    "phase": 8,
    "difficulty": "hard",
    "issue": 285
  },
  {
    "id": 285,
    "slug": "masonry-ish",
    "title": "Approximate a masonry layout",
    "phase": 8,
    "difficulty": "hard",
    "issue": 286
  },
  {
    "id": 286,
    "slug": "grid-vs-flex-cards",
    "title": "Compare grid and flex for the same card layout",
    "phase": 8,
    "difficulty": "medium",
    "issue": 287
  },
  {
    "id": 287,
    "slug": "intrinsic-tracks",
    "title": "Size tracks by content",
    "phase": 8,
    "difficulty": "hard",
    "issue": 288
  },
  {
    "id": 288,
    "slug": "grid-overflow",
    "title": "Stop grid items from overflowing",
    "phase": 8,
    "difficulty": "hard",
    "issue": 289
  },
  {
    "id": 289,
    "slug": "responsive-grid-areas",
    "title": "Rearrange a layout across breakpoints",
    "phase": 8,
    "difficulty": "medium",
    "issue": 290
  },
  {
    "id": 290,
    "slug": "dashboard-grid",
    "title": "Build a dashboard widget grid",
    "phase": 8,
    "difficulty": "hard",
    "issue": 291
  },
  {
    "id": 291,
    "slug": "form-grid",
    "title": "Lay out a form with grid",
    "phase": 8,
    "difficulty": "medium",
    "issue": 292
  },
  {
    "id": 292,
    "slug": "grid-tables",
    "title": "Build a data grid with CSS grid",
    "phase": 8,
    "difficulty": "hard",
    "issue": 293
  },
  {
    "id": 293,
    "slug": "photo-gallery",
    "title": "Build a photo gallery with varied sizes",
    "phase": 8,
    "difficulty": "medium",
    "issue": 294
  },
  {
    "id": 294,
    "slug": "grid-animation",
    "title": "Animate grid track sizes",
    "phase": 8,
    "difficulty": "hard",
    "issue": 295
  },
  {
    "id": 295,
    "slug": "stacked-grid",
    "title": "Stack elements on top of each other with grid",
    "phase": 8,
    "difficulty": "medium",
    "issue": 296
  },
  {
    "id": 296,
    "slug": "aspect-grid",
    "title": "Build a grid of equal squares",
    "phase": 8,
    "difficulty": "easy",
    "issue": 297
  },
  {
    "id": 297,
    "slug": "grid-line-debugging",
    "title": "Debug grid with DevTools overlays",
    "phase": 8,
    "difficulty": "medium",
    "issue": 298
  },
  {
    "id": 298,
    "slug": "nested-grids",
    "title": "Nest grids sensibly",
    "phase": 8,
    "difficulty": "hard",
    "issue": 299
  },
  {
    "id": 299,
    "slug": "grid-order",
    "title": "Reorder grid items safely",
    "phase": 8,
    "difficulty": "medium",
    "issue": 300
  },
  {
    "id": 300,
    "slug": "magazine-layout",
    "title": "Build a magazine-style article layout",
    "phase": 8,
    "difficulty": "hard",
    "issue": 301
  },
  {
    "id": 301,
    "slug": "calendar-grid",
    "title": "Build a month calendar",
    "phase": 8,
    "difficulty": "hard",
    "issue": 302
  },
  {
    "id": 302,
    "slug": "timeline-grid",
    "title": "Build a timeline or gantt row",
    "phase": 8,
    "difficulty": "hard",
    "issue": 303
  },
  {
    "id": 303,
    "slug": "grid-and-scroll",
    "title": "Combine grid with scrolling regions",
    "phase": 8,
    "difficulty": "hard",
    "issue": 304
  },
  {
    "id": 304,
    "slug": "grid-fallbacks",
    "title": "Provide a fallback for a grid layout",
    "phase": 8,
    "difficulty": "medium",
    "issue": 305
  },
  {
    "id": 305,
    "slug": "grid-performance",
    "title": "Measure grid layout cost",
    "phase": 8,
    "difficulty": "hard",
    "issue": 306
  },
  {
    "id": 306,
    "slug": "grid-rtl",
    "title": "Verify a grid layout in rtl",
    "phase": 8,
    "difficulty": "medium",
    "issue": 307
  },
  {
    "id": 307,
    "slug": "card-anatomy-grid",
    "title": "Build a card with internal grid",
    "phase": 8,
    "difficulty": "medium",
    "issue": 308
  },
  {
    "id": 308,
    "slug": "split-screen",
    "title": "Build a split-screen layout",
    "phase": 8,
    "difficulty": "easy",
    "issue": 309
  },
  {
    "id": 309,
    "slug": "sidebar-toggle",
    "title": "Build a collapsible sidebar layout",
    "phase": 8,
    "difficulty": "hard",
    "issue": 310
  },
  {
    "id": 310,
    "slug": "grid-empty-states",
    "title": "Handle sparse grids",
    "phase": 8,
    "difficulty": "medium",
    "issue": 311
  },
  {
    "id": 311,
    "slug": "grid-with-images",
    "title": "Build an image-heavy grid without layout shift",
    "phase": 8,
    "difficulty": "hard",
    "issue": 312
  },
  {
    "id": 312,
    "slug": "bento-grid",
    "title": "Build a bento-box layout",
    "phase": 8,
    "difficulty": "hard",
    "issue": 313
  },
  {
    "id": 313,
    "slug": "grid-review",
    "title": "Review a grid implementation",
    "phase": 8,
    "difficulty": "medium",
    "issue": 314
  },
  {
    "id": 314,
    "slug": "grid-cheatsheet",
    "title": "Build your grid reference page",
    "phase": 8,
    "difficulty": "medium",
    "issue": 315
  },
  {
    "id": 315,
    "slug": "layout-from-screenshot-1",
    "title": "Rebuild a marketing page layout from a screenshot",
    "phase": 8,
    "difficulty": "hard",
    "issue": 316
  },
  {
    "id": 316,
    "slug": "layout-from-screenshot-2",
    "title": "Rebuild an application layout from a screenshot",
    "phase": 8,
    "difficulty": "hard",
    "issue": 317
  },
  {
    "id": 317,
    "slug": "layout-from-screenshot-3",
    "title": "Rebuild an editorial layout from a screenshot",
    "phase": 8,
    "difficulty": "hard",
    "issue": 318
  },
  {
    "id": 318,
    "slug": "layout-audit",
    "title": "Choose the right layout tool for ten components",
    "phase": 8,
    "difficulty": "medium",
    "issue": 319
  },
  {
    "id": 319,
    "slug": "responsive-without-queries",
    "title": "Build three layouts with zero media queries",
    "phase": 8,
    "difficulty": "hard",
    "issue": 320
  },
  {
    "id": 320,
    "slug": "phase-8-capstone",
    "title": "Build a complete product page with grid",
    "phase": 8,
    "difficulty": "hard",
    "issue": 321
  },
  {
    "id": 321,
    "slug": "viewport-meta",
    "title": "Fix a page that ignores mobile",
    "phase": 9,
    "difficulty": "easy",
    "issue": 322
  },
  {
    "id": 322,
    "slug": "mobile-first",
    "title": "Write mobile-first CSS",
    "phase": 9,
    "difficulty": "medium",
    "issue": 323
  },
  {
    "id": 323,
    "slug": "media-query-basics",
    "title": "Write media queries properly",
    "phase": 9,
    "difficulty": "easy",
    "issue": 324
  },
  {
    "id": 324,
    "slug": "breakpoint-strategy",
    "title": "Choose breakpoints from content",
    "phase": 9,
    "difficulty": "medium",
    "issue": 325
  },
  {
    "id": 325,
    "slug": "container-queries",
    "title": "Style by container, not viewport",
    "phase": 9,
    "difficulty": "hard",
    "issue": 326
  },
  {
    "id": 326,
    "slug": "container-units",
    "title": "Size with container query units",
    "phase": 9,
    "difficulty": "hard",
    "issue": 327
  },
  {
    "id": 327,
    "slug": "container-style-queries",
    "title": "Query a container's style",
    "phase": 9,
    "difficulty": "hard",
    "issue": 328
  },
  {
    "id": 328,
    "slug": "responsive-images-srcset",
    "title": "Serve the right image size",
    "phase": 9,
    "difficulty": "hard",
    "issue": 329
  },
  {
    "id": 329,
    "slug": "responsive-images-picture",
    "title": "Art-direct images with picture",
    "phase": 9,
    "difficulty": "medium",
    "issue": 330
  },
  {
    "id": 330,
    "slug": "fluid-spacing",
    "title": "Make spacing fluid",
    "phase": 9,
    "difficulty": "medium",
    "issue": 331
  },
  {
    "id": 331,
    "slug": "responsive-typography",
    "title": "Scale type across breakpoints",
    "phase": 9,
    "difficulty": "medium",
    "issue": 332
  },
  {
    "id": 332,
    "slug": "orientation",
    "title": "Adapt to orientation changes",
    "phase": 9,
    "difficulty": "medium",
    "issue": 333
  },
  {
    "id": 333,
    "slug": "pointer-and-hover",
    "title": "Adapt to input type",
    "phase": 9,
    "difficulty": "hard",
    "issue": 334
  },
  {
    "id": 334,
    "slug": "prefers-reduced-motion",
    "title": "Respect reduced motion",
    "phase": 9,
    "difficulty": "medium",
    "issue": 335
  },
  {
    "id": 335,
    "slug": "prefers-contrast",
    "title": "Respect contrast preferences",
    "phase": 9,
    "difficulty": "medium",
    "issue": 336
  },
  {
    "id": 336,
    "slug": "prefers-reduced-data",
    "title": "Adapt to data saver preferences",
    "phase": 9,
    "difficulty": "medium",
    "issue": 337
  },
  {
    "id": 337,
    "slug": "safe-areas",
    "title": "Respect device safe areas",
    "phase": 9,
    "difficulty": "medium",
    "issue": 338
  },
  {
    "id": 338,
    "slug": "dvh-and-toolbars",
    "title": "Handle mobile browser chrome",
    "phase": 9,
    "difficulty": "hard",
    "issue": 339
  },
  {
    "id": 339,
    "slug": "responsive-nav",
    "title": "Build a navigation that adapts",
    "phase": 9,
    "difficulty": "hard",
    "issue": 340
  },
  {
    "id": 340,
    "slug": "responsive-tables-2",
    "title": "Make a complex table responsive",
    "phase": 9,
    "difficulty": "hard",
    "issue": 341
  },
  {
    "id": 341,
    "slug": "responsive-cards",
    "title": "Build a card that works in five contexts",
    "phase": 9,
    "difficulty": "hard",
    "issue": 342
  },
  {
    "id": 342,
    "slug": "intrinsic-responsive",
    "title": "Build responsive layouts with no queries at all",
    "phase": 9,
    "difficulty": "hard",
    "issue": 343
  },
  {
    "id": 343,
    "slug": "zoom-testing",
    "title": "Test at 200% and 400% zoom",
    "phase": 9,
    "difficulty": "medium",
    "issue": 344
  },
  {
    "id": 344,
    "slug": "responsive-images-css",
    "title": "Handle background images responsively",
    "phase": 9,
    "difficulty": "medium",
    "issue": 345
  },
  {
    "id": 345,
    "slug": "breakpoint-debugging",
    "title": "Find layouts that break between breakpoints",
    "phase": 9,
    "difficulty": "medium",
    "issue": 346
  },
  {
    "id": 346,
    "slug": "device-testing",
    "title": "Test on real device sizes",
    "phase": 9,
    "difficulty": "medium",
    "issue": 347
  },
  {
    "id": 347,
    "slug": "responsive-forms",
    "title": "Make a form work on every screen",
    "phase": 9,
    "difficulty": "hard",
    "issue": 348
  },
  {
    "id": 348,
    "slug": "responsive-modal",
    "title": "Make a dialog responsive",
    "phase": 9,
    "difficulty": "hard",
    "issue": 349
  },
  {
    "id": 349,
    "slug": "responsive-images-ratio",
    "title": "Change aspect ratio by breakpoint",
    "phase": 9,
    "difficulty": "medium",
    "issue": 350
  },
  {
    "id": 350,
    "slug": "responsive-spacing-audit",
    "title": "Audit spacing across breakpoints",
    "phase": 9,
    "difficulty": "medium",
    "issue": 351
  },
  {
    "id": 351,
    "slug": "print-responsive",
    "title": "Make the page work on paper too",
    "phase": 9,
    "difficulty": "medium",
    "issue": 352
  },
  {
    "id": 352,
    "slug": "responsive-video",
    "title": "Make embedded media responsive",
    "phase": 9,
    "difficulty": "medium",
    "issue": 353
  },
  {
    "id": 353,
    "slug": "progressive-disclosure",
    "title": "Hide complexity on small screens without losing it",
    "phase": 9,
    "difficulty": "hard",
    "issue": 354
  },
  {
    "id": 354,
    "slug": "responsive-grid-audit",
    "title": "Audit a responsive grid",
    "phase": 9,
    "difficulty": "medium",
    "issue": 355
  },
  {
    "id": 355,
    "slug": "adaptive-vs-responsive",
    "title": "Compare adaptive and responsive approaches",
    "phase": 9,
    "difficulty": "medium",
    "issue": 356
  },
  {
    "id": 356,
    "slug": "responsive-tokens",
    "title": "Make design tokens responsive",
    "phase": 9,
    "difficulty": "hard",
    "issue": 357
  },
  {
    "id": 357,
    "slug": "mobile-performance",
    "title": "Make a responsive page fast on mobile",
    "phase": 9,
    "difficulty": "hard",
    "issue": 358
  },
  {
    "id": 358,
    "slug": "responsive-checklist",
    "title": "Write your responsive review checklist",
    "phase": 9,
    "difficulty": "medium",
    "issue": 359
  },
  {
    "id": 359,
    "slug": "responsive-rebuild",
    "title": "Rebuild a fixed-width page as responsive",
    "phase": 9,
    "difficulty": "hard",
    "issue": 360
  },
  {
    "id": 360,
    "slug": "phase-9-landing",
    "title": "Build a fully responsive landing page",
    "phase": 9,
    "difficulty": "hard",
    "issue": 361
  },
  {
    "id": 361,
    "slug": "transition-basics",
    "title": "Add your first transition",
    "phase": 10,
    "difficulty": "easy",
    "issue": 362
  },
  {
    "id": 362,
    "slug": "timing-functions",
    "title": "Compare easing curves",
    "phase": 10,
    "difficulty": "medium",
    "issue": 363
  },
  {
    "id": 363,
    "slug": "transition-multiple",
    "title": "Transition several properties with different timings",
    "phase": 10,
    "difficulty": "medium",
    "issue": 364
  },
  {
    "id": 364,
    "slug": "hover-states",
    "title": "Design hover feedback that is not annoying",
    "phase": 10,
    "difficulty": "medium",
    "issue": 365
  },
  {
    "id": 365,
    "slug": "transform-translate",
    "title": "Move elements with translate",
    "phase": 10,
    "difficulty": "easy",
    "issue": 366
  },
  {
    "id": 366,
    "slug": "transform-scale-rotate",
    "title": "Scale and rotate",
    "phase": 10,
    "difficulty": "easy",
    "issue": 367
  },
  {
    "id": 367,
    "slug": "transform-order",
    "title": "Discover that transform order matters",
    "phase": 10,
    "difficulty": "medium",
    "issue": 368
  },
  {
    "id": 368,
    "slug": "3d-transforms",
    "title": "Work in 3D",
    "phase": 10,
    "difficulty": "hard",
    "issue": 369
  },
  {
    "id": 369,
    "slug": "keyframes",
    "title": "Write your first keyframe animation",
    "phase": 10,
    "difficulty": "easy",
    "issue": 370
  },
  {
    "id": 370,
    "slug": "animation-properties",
    "title": "Control an animation completely",
    "phase": 10,
    "difficulty": "medium",
    "issue": 371
  },
  {
    "id": 371,
    "slug": "staggered-animation",
    "title": "Stagger a list animation",
    "phase": 10,
    "difficulty": "medium",
    "issue": 372
  },
  {
    "id": 372,
    "slug": "loading-states",
    "title": "Build three loading indicators",
    "phase": 10,
    "difficulty": "medium",
    "issue": 373
  },
  {
    "id": 373,
    "slug": "micro-interactions",
    "title": "Add micro-interactions to a form",
    "phase": 10,
    "difficulty": "hard",
    "issue": 374
  },
  {
    "id": 374,
    "slug": "animation-performance",
    "title": "Find and fix a janky animation",
    "phase": 10,
    "difficulty": "hard",
    "issue": 375
  },
  {
    "id": 375,
    "slug": "will-change",
    "title": "Use will-change correctly",
    "phase": 10,
    "difficulty": "medium",
    "issue": 376
  },
  {
    "id": 376,
    "slug": "entry-exit-animations",
    "title": "Animate elements entering and leaving",
    "phase": 10,
    "difficulty": "hard",
    "issue": 377
  },
  {
    "id": 377,
    "slug": "starting-style",
    "title": "Animate from display: none",
    "phase": 10,
    "difficulty": "hard",
    "issue": 378
  },
  {
    "id": 378,
    "slug": "view-transitions",
    "title": "Use the View Transitions API",
    "phase": 10,
    "difficulty": "hard",
    "issue": 379
  },
  {
    "id": 379,
    "slug": "scroll-driven-animations",
    "title": "Animate on scroll without JavaScript",
    "phase": 10,
    "difficulty": "hard",
    "issue": 380
  },
  {
    "id": 380,
    "slug": "parallax",
    "title": "Build a parallax effect responsibly",
    "phase": 10,
    "difficulty": "hard",
    "issue": 381
  },
  {
    "id": 381,
    "slug": "hover-card-effects",
    "title": "Build three card hover effects",
    "phase": 10,
    "difficulty": "medium",
    "issue": 382
  },
  {
    "id": 382,
    "slug": "button-feedback",
    "title": "Design complete button feedback",
    "phase": 10,
    "difficulty": "medium",
    "issue": 383
  },
  {
    "id": 383,
    "slug": "accordion-animation",
    "title": "Animate an accordion open and closed",
    "phase": 10,
    "difficulty": "hard",
    "issue": 384
  },
  {
    "id": 384,
    "slug": "modal-animation",
    "title": "Animate a modal properly",
    "phase": 10,
    "difficulty": "hard",
    "issue": 385
  },
  {
    "id": 385,
    "slug": "page-transitions",
    "title": "Animate between views",
    "phase": 10,
    "difficulty": "hard",
    "issue": 386
  },
  {
    "id": 386,
    "slug": "animation-choreography",
    "title": "Choreograph a sequence",
    "phase": 10,
    "difficulty": "hard",
    "issue": 387
  },
  {
    "id": 387,
    "slug": "motion-tokens",
    "title": "Define motion design tokens",
    "phase": 10,
    "difficulty": "medium",
    "issue": 388
  },
  {
    "id": 388,
    "slug": "spring-easing",
    "title": "Approximate spring physics",
    "phase": 10,
    "difficulty": "hard",
    "issue": 389
  },
  {
    "id": 389,
    "slug": "svg-animation",
    "title": "Animate SVG with CSS",
    "phase": 10,
    "difficulty": "hard",
    "issue": 390
  },
  {
    "id": 390,
    "slug": "text-animation",
    "title": "Animate text carefully",
    "phase": 10,
    "difficulty": "medium",
    "issue": 391
  },
  {
    "id": 391,
    "slug": "steps-timing",
    "title": "Animate in discrete steps",
    "phase": 10,
    "difficulty": "medium",
    "issue": 392
  },
  {
    "id": 392,
    "slug": "infinite-animations",
    "title": "Use looping animations responsibly",
    "phase": 10,
    "difficulty": "medium",
    "issue": 393
  },
  {
    "id": 393,
    "slug": "animation-composition",
    "title": "Combine multiple animations on one element",
    "phase": 10,
    "difficulty": "hard",
    "issue": 394
  },
  {
    "id": 394,
    "slug": "reduced-motion-audit",
    "title": "Audit every animation you have written",
    "phase": 10,
    "difficulty": "medium",
    "issue": 395
  },
  {
    "id": 395,
    "slug": "animation-a11y",
    "title": "Meet animation accessibility requirements",
    "phase": 10,
    "difficulty": "hard",
    "issue": 396
  },
  {
    "id": 396,
    "slug": "gesture-feel",
    "title": "Tune interaction feel",
    "phase": 10,
    "difficulty": "medium",
    "issue": 397
  },
  {
    "id": 397,
    "slug": "animated-navigation",
    "title": "Animate a navigation menu",
    "phase": 10,
    "difficulty": "hard",
    "issue": 398
  },
  {
    "id": 398,
    "slug": "chart-animation",
    "title": "Animate data visualisation",
    "phase": 10,
    "difficulty": "hard",
    "issue": 399
  },
  {
    "id": 399,
    "slug": "animation-debug",
    "title": "Debug a broken animation",
    "phase": 10,
    "difficulty": "hard",
    "issue": 400
  },
  {
    "id": 400,
    "slug": "phase-10-motion-system",
    "title": "Build a motion system page",
    "phase": 10,
    "difficulty": "hard",
    "issue": 401
  },
  {
    "id": 401,
    "slug": "button-variants",
    "title": "Build a complete button component",
    "phase": 11,
    "difficulty": "medium",
    "issue": 402
  },
  {
    "id": 402,
    "slug": "button-sizes",
    "title": "Add sizes and icon slots to buttons",
    "phase": 11,
    "difficulty": "medium",
    "issue": 403
  },
  {
    "id": 403,
    "slug": "button-group",
    "title": "Build a segmented button group",
    "phase": 11,
    "difficulty": "medium",
    "issue": 404
  },
  {
    "id": 404,
    "slug": "link-vs-button",
    "title": "Style links and buttons that look alike",
    "phase": 11,
    "difficulty": "medium",
    "issue": 405
  },
  {
    "id": 405,
    "slug": "text-input",
    "title": "Build a text input component",
    "phase": 11,
    "difficulty": "medium",
    "issue": 406
  },
  {
    "id": 406,
    "slug": "floating-label",
    "title": "Build a floating label input",
    "phase": 11,
    "difficulty": "hard",
    "issue": 407
  },
  {
    "id": 407,
    "slug": "select-and-dropdown",
    "title": "Style a native select",
    "phase": 11,
    "difficulty": "hard",
    "issue": 408
  },
  {
    "id": 408,
    "slug": "checkbox-radio",
    "title": "Build custom checkboxes and radios",
    "phase": 11,
    "difficulty": "hard",
    "issue": 409
  },
  {
    "id": 409,
    "slug": "toggle-switch",
    "title": "Build a toggle switch",
    "phase": 11,
    "difficulty": "medium",
    "issue": 410
  },
  {
    "id": 410,
    "slug": "range-slider",
    "title": "Style a range input",
    "phase": 11,
    "difficulty": "hard",
    "issue": 411
  },
  {
    "id": 411,
    "slug": "textarea",
    "title": "Build a resizable textarea",
    "phase": 11,
    "difficulty": "medium",
    "issue": 412
  },
  {
    "id": 412,
    "slug": "form-validation",
    "title": "Style validation states",
    "phase": 11,
    "difficulty": "hard",
    "issue": 413
  },
  {
    "id": 413,
    "slug": "form-layout",
    "title": "Lay out a complete form",
    "phase": 11,
    "difficulty": "hard",
    "issue": 414
  },
  {
    "id": 414,
    "slug": "search-input",
    "title": "Build a search field with clear and submit",
    "phase": 11,
    "difficulty": "medium",
    "issue": 415
  },
  {
    "id": 415,
    "slug": "card-component",
    "title": "Build a flexible card",
    "phase": 11,
    "difficulty": "medium",
    "issue": 416
  },
  {
    "id": 416,
    "slug": "list-patterns",
    "title": "Build three list patterns",
    "phase": 11,
    "difficulty": "medium",
    "issue": 417
  },
  {
    "id": 417,
    "slug": "table-component",
    "title": "Build a production data table",
    "phase": 11,
    "difficulty": "hard",
    "issue": 418
  },
  {
    "id": 418,
    "slug": "pagination",
    "title": "Build pagination controls",
    "phase": 11,
    "difficulty": "medium",
    "issue": 419
  },
  {
    "id": 419,
    "slug": "tabs",
    "title": "Build a tabs component",
    "phase": 11,
    "difficulty": "hard",
    "issue": 420
  },
  {
    "id": 420,
    "slug": "accordion",
    "title": "Build an accordion",
    "phase": 11,
    "difficulty": "medium",
    "issue": 421
  },
  {
    "id": 421,
    "slug": "modal-dialog",
    "title": "Build a modal dialog",
    "phase": 11,
    "difficulty": "hard",
    "issue": 422
  },
  {
    "id": 422,
    "slug": "drawer",
    "title": "Build a side drawer",
    "phase": 11,
    "difficulty": "hard",
    "issue": 423
  },
  {
    "id": 423,
    "slug": "tooltip",
    "title": "Build a tooltip",
    "phase": 11,
    "difficulty": "hard",
    "issue": 424
  },
  {
    "id": 424,
    "slug": "popover-menu",
    "title": "Build a dropdown menu",
    "phase": 11,
    "difficulty": "hard",
    "issue": 425
  },
  {
    "id": 425,
    "slug": "toast",
    "title": "Build a toast notification system",
    "phase": 11,
    "difficulty": "hard",
    "issue": 426
  },
  {
    "id": 426,
    "slug": "alert-banner",
    "title": "Build alert and banner components",
    "phase": 11,
    "difficulty": "medium",
    "issue": 427
  },
  {
    "id": 427,
    "slug": "breadcrumbs",
    "title": "Build breadcrumbs",
    "phase": 11,
    "difficulty": "easy",
    "issue": 428
  },
  {
    "id": 428,
    "slug": "navbar-component",
    "title": "Build a production navigation bar",
    "phase": 11,
    "difficulty": "hard",
    "issue": 429
  },
  {
    "id": 429,
    "slug": "sidebar-nav",
    "title": "Build a sidebar navigation",
    "phase": 11,
    "difficulty": "hard",
    "issue": 430
  },
  {
    "id": 430,
    "slug": "avatar",
    "title": "Build an avatar component",
    "phase": 11,
    "difficulty": "easy",
    "issue": 431
  },
  {
    "id": 431,
    "slug": "badge-and-chip",
    "title": "Build badges, chips and tags",
    "phase": 11,
    "difficulty": "easy",
    "issue": 432
  },
  {
    "id": 432,
    "slug": "progress",
    "title": "Build progress indicators",
    "phase": 11,
    "difficulty": "medium",
    "issue": 433
  },
  {
    "id": 433,
    "slug": "stepper",
    "title": "Build a multi-step indicator",
    "phase": 11,
    "difficulty": "medium",
    "issue": 434
  },
  {
    "id": 434,
    "slug": "empty-states",
    "title": "Design empty states",
    "phase": 11,
    "difficulty": "medium",
    "issue": 435
  },
  {
    "id": 435,
    "slug": "file-upload",
    "title": "Build a file upload control",
    "phase": 11,
    "difficulty": "hard",
    "issue": 436
  },
  {
    "id": 436,
    "slug": "date-input",
    "title": "Style date and time inputs",
    "phase": 11,
    "difficulty": "medium",
    "issue": 437
  },
  {
    "id": 437,
    "slug": "command-palette",
    "title": "Build a command palette",
    "phase": 11,
    "difficulty": "hard",
    "issue": 438
  },
  {
    "id": 438,
    "slug": "data-list",
    "title": "Build a filterable list view",
    "phase": 11,
    "difficulty": "hard",
    "issue": 439
  },
  {
    "id": 439,
    "slug": "kanban-board",
    "title": "Build a kanban board",
    "phase": 11,
    "difficulty": "hard",
    "issue": 440
  },
  {
    "id": 440,
    "slug": "calendar-component",
    "title": "Build a calendar month view",
    "phase": 11,
    "difficulty": "hard",
    "issue": 441
  },
  {
    "id": 441,
    "slug": "chart-styling",
    "title": "Style a chart without a chart library",
    "phase": 11,
    "difficulty": "hard",
    "issue": 442
  },
  {
    "id": 442,
    "slug": "stat-cards",
    "title": "Build KPI stat cards",
    "phase": 11,
    "difficulty": "easy",
    "issue": 443
  },
  {
    "id": 443,
    "slug": "pricing-table",
    "title": "Build a pricing table",
    "phase": 11,
    "difficulty": "hard",
    "issue": 444
  },
  {
    "id": 444,
    "slug": "testimonial-carousel",
    "title": "Build a testimonial carousel",
    "phase": 11,
    "difficulty": "hard",
    "issue": 445
  },
  {
    "id": 445,
    "slug": "footer",
    "title": "Build a site footer",
    "phase": 11,
    "difficulty": "easy",
    "issue": 446
  },
  {
    "id": 446,
    "slug": "hero-sections",
    "title": "Build three hero variants",
    "phase": 11,
    "difficulty": "medium",
    "issue": 447
  },
  {
    "id": 447,
    "slug": "cookie-banner",
    "title": "Build a consent banner",
    "phase": 11,
    "difficulty": "medium",
    "issue": 448
  },
  {
    "id": 448,
    "slug": "component-states-matrix",
    "title": "Render every state of every component",
    "phase": 11,
    "difficulty": "hard",
    "issue": 449
  },
  {
    "id": 449,
    "slug": "component-review",
    "title": "Review a component library implementation",
    "phase": 11,
    "difficulty": "medium",
    "issue": 450
  },
  {
    "id": 450,
    "slug": "phase-11-library",
    "title": "Assemble a small component library page",
    "phase": 11,
    "difficulty": "hard",
    "issue": 451
  },
  {
    "id": 451,
    "slug": "css-architecture",
    "title": "Compare CSS methodologies",
    "phase": 12,
    "difficulty": "medium",
    "issue": 452
  },
  {
    "id": 452,
    "slug": "design-tokens",
    "title": "Build a three-tier token system",
    "phase": 12,
    "difficulty": "hard",
    "issue": 453
  },
  {
    "id": 453,
    "slug": "token-naming",
    "title": "Design a token naming convention",
    "phase": 12,
    "difficulty": "medium",
    "issue": 454
  },
  {
    "id": 454,
    "slug": "css-modules",
    "title": "Use CSS Modules in this app",
    "phase": 12,
    "difficulty": "hard",
    "issue": 455
  },
  {
    "id": 455,
    "slug": "css-in-js-comparison",
    "title": "Evaluate CSS-in-JS approaches",
    "phase": 12,
    "difficulty": "hard",
    "issue": 456
  },
  {
    "id": 456,
    "slug": "utility-first",
    "title": "Build with a utility-first approach",
    "phase": 12,
    "difficulty": "hard",
    "issue": 457
  },
  {
    "id": 457,
    "slug": "tailwind-evaluation",
    "title": "Evaluate Tailwind against your own system",
    "phase": 12,
    "difficulty": "hard",
    "issue": 458
  },
  {
    "id": 458,
    "slug": "cascade-layers-architecture",
    "title": "Structure a whole codebase with layers",
    "phase": 12,
    "difficulty": "hard",
    "issue": 459
  },
  {
    "id": 459,
    "slug": "scope-rule",
    "title": "Scope styles with @scope",
    "phase": 12,
    "difficulty": "hard",
    "issue": 460
  },
  {
    "id": 460,
    "slug": "nesting",
    "title": "Use native CSS nesting well",
    "phase": 12,
    "difficulty": "medium",
    "issue": 461
  },
  {
    "id": 461,
    "slug": "reset-and-normalise",
    "title": "Write your own reset",
    "phase": 12,
    "difficulty": "medium",
    "issue": 462
  },
  {
    "id": 462,
    "slug": "file-organisation",
    "title": "Organise CSS across a real codebase",
    "phase": 12,
    "difficulty": "medium",
    "issue": 463
  },
  {
    "id": 463,
    "slug": "critical-css",
    "title": "Ship critical CSS",
    "phase": 12,
    "difficulty": "hard",
    "issue": 464
  },
  {
    "id": 464,
    "slug": "css-performance",
    "title": "Measure and reduce CSS cost",
    "phase": 12,
    "difficulty": "hard",
    "issue": 465
  },
  {
    "id": 465,
    "slug": "bundle-size",
    "title": "Reduce stylesheet size",
    "phase": 12,
    "difficulty": "medium",
    "issue": 466
  },
  {
    "id": 466,
    "slug": "dark-mode-architecture",
    "title": "Architect theming properly",
    "phase": 12,
    "difficulty": "hard",
    "issue": 467
  },
  {
    "id": 467,
    "slug": "accessibility-audit",
    "title": "Run a full accessibility audit",
    "phase": 12,
    "difficulty": "hard",
    "issue": 468
  },
  {
    "id": 468,
    "slug": "keyboard-navigation",
    "title": "Guarantee keyboard operability",
    "phase": 12,
    "difficulty": "hard",
    "issue": 469
  },
  {
    "id": 469,
    "slug": "focus-management",
    "title": "Manage focus across state changes",
    "phase": 12,
    "difficulty": "hard",
    "issue": 470
  },
  {
    "id": 470,
    "slug": "screen-reader-css",
    "title": "Understand how CSS affects screen readers",
    "phase": 12,
    "difficulty": "hard",
    "issue": 471
  },
  {
    "id": 471,
    "slug": "visually-hidden",
    "title": "Build the visually hidden utility properly",
    "phase": 12,
    "difficulty": "medium",
    "issue": 472
  },
  {
    "id": 472,
    "slug": "motion-accessibility",
    "title": "Systematise reduced motion",
    "phase": 12,
    "difficulty": "medium",
    "issue": 473
  },
  {
    "id": 473,
    "slug": "rtl-support",
    "title": "Add full RTL support",
    "phase": 12,
    "difficulty": "hard",
    "issue": 474
  },
  {
    "id": 474,
    "slug": "internationalisation",
    "title": "Handle other languages in CSS",
    "phase": 12,
    "difficulty": "hard",
    "issue": 475
  },
  {
    "id": 475,
    "slug": "linting-css",
    "title": "Set up stylelint",
    "phase": 12,
    "difficulty": "medium",
    "issue": 476
  },
  {
    "id": 476,
    "slug": "css-in-ci",
    "title": "Enforce CSS quality in CI",
    "phase": 12,
    "difficulty": "hard",
    "issue": 477
  },
  {
    "id": 477,
    "slug": "visual-regression",
    "title": "Add visual regression testing",
    "phase": 12,
    "difficulty": "hard",
    "issue": 478
  },
  {
    "id": 478,
    "slug": "component-api-design",
    "title": "Design a component styling API",
    "phase": 12,
    "difficulty": "hard",
    "issue": 479
  },
  {
    "id": 479,
    "slug": "style-composition",
    "title": "Compose styles without specificity wars",
    "phase": 12,
    "difficulty": "hard",
    "issue": 480
  },
  {
    "id": 480,
    "slug": "documenting-css",
    "title": "Document a design system",
    "phase": 12,
    "difficulty": "hard",
    "issue": 481
  },
  {
    "id": 481,
    "slug": "legacy-refactor",
    "title": "Refactor a legacy stylesheet",
    "phase": 12,
    "difficulty": "hard",
    "issue": 482
  },
  {
    "id": 482,
    "slug": "dead-css",
    "title": "Find and remove dead CSS",
    "phase": 12,
    "difficulty": "medium",
    "issue": 483
  },
  {
    "id": 483,
    "slug": "css-variables-runtime",
    "title": "Drive CSS from JavaScript safely",
    "phase": 12,
    "difficulty": "hard",
    "issue": 484
  },
  {
    "id": 484,
    "slug": "container-query-architecture",
    "title": "Design components for unknown contexts",
    "phase": 12,
    "difficulty": "hard",
    "issue": 485
  },
  {
    "id": 485,
    "slug": "progressive-enhancement-strategy",
    "title": "Define your baseline and enhancements",
    "phase": 12,
    "difficulty": "medium",
    "issue": 486
  },
  {
    "id": 486,
    "slug": "css-modules-vs-layers",
    "title": "Choose a scoping strategy for the repo",
    "phase": 12,
    "difficulty": "hard",
    "issue": 487
  },
  {
    "id": 487,
    "slug": "performance-budget",
    "title": "Set and enforce a CSS performance budget",
    "phase": 12,
    "difficulty": "hard",
    "issue": 488
  },
  {
    "id": 488,
    "slug": "style-guide",
    "title": "Write the repo's CSS style guide",
    "phase": 12,
    "difficulty": "medium",
    "issue": 489
  },
  {
    "id": 489,
    "slug": "portfolio-readme",
    "title": "Write the repo README a hiring manager will read",
    "phase": 12,
    "difficulty": "medium",
    "issue": 490
  },
  {
    "id": 490,
    "slug": "phase-12-system",
    "title": "Ship the complete design system",
    "phase": 12,
    "difficulty": "hard",
    "issue": 491
  },
  {
    "id": 491,
    "slug": "capstone-marketing-site",
    "title": "Capstone: build a marketing site from a blank file",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 492
  },
  {
    "id": 492,
    "slug": "capstone-dashboard",
    "title": "Capstone: build an analytics dashboard",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 493
  },
  {
    "id": 493,
    "slug": "capstone-ecommerce",
    "title": "Capstone: build an e-commerce product flow",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 494
  },
  {
    "id": 494,
    "slug": "capstone-design-system",
    "title": "Capstone: publish a documented design system",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 495
  },
  {
    "id": 495,
    "slug": "capstone-clone",
    "title": "Capstone: clone a real product UI",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 496
  },
  {
    "id": 496,
    "slug": "capstone-accessibility",
    "title": "Capstone: make an inaccessible page accessible",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 497
  },
  {
    "id": 497,
    "slug": "capstone-performance",
    "title": "Capstone: make a slow page fast",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 498
  },
  {
    "id": 498,
    "slug": "capstone-timed-build",
    "title": "Capstone: build a landing page in three hours",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 499
  },
  {
    "id": 499,
    "slug": "capstone-code-review",
    "title": "Capstone: review someone else's CSS",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 500
  },
  {
    "id": 500,
    "slug": "capstone-portfolio",
    "title": "Capstone: build and ship your portfolio",
    "phase": 13,
    "difficulty": "capstone",
    "issue": 501
  }
]
