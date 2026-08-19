# Curriculum

500 challenges, ordered. Later ones assume earlier ones — work lowest number first.

Generated from `curriculum/challenges.json`. Do not edit by hand; run `pnpm sync:curriculum`.

## Phase 1 — Foundations & the cascade

Selectors, specificity, inheritance, custom properties. The rules that decide which declaration actually wins.

Challenges 1–40.

| # | Challenge | Level |
|---|---|---|
| 001 | Render your first challenge component and stylesheet | `intro` |
| 002 | Label every part of a CSS rule | `intro` |
| 003 | Style by element type | `intro` |
| 004 | Style by class instead of element | `easy` |
| 005 | Compose styles from multiple classes on one element | `easy` |
| 006 | Group selectors to remove duplicate rules | `easy` |
| 007 | Target elements nested inside a container | `easy` |
| 008 | Target direct children only | `easy` |
| 009 | Space stacked elements with the adjacent sibling combinator | `medium` |
| 010 | Style all later siblings with ~ | `medium` |
| 011 | Select elements by attribute | `medium` |
| 012 | Match attribute values by prefix, suffix and substring | `medium` |
| 013 | Style hover, focus and active states | `medium` |
| 014 | Style the first and last items in a list | `medium` |
| 015 | Zebra-stripe and column-split with nth-child | `medium` |
| 016 | Exclude elements with :not() | `medium` |
| 017 | Flatten repetitive selectors with :is() and :where() | `hard` |
| 018 | Select a parent based on its children with :has() | `hard` |
| 019 | Generate content with ::before and ::after | `medium` |
| 020 | Style the first letter and first line of text | `medium` |
| 021 | Work out which properties inherit | `medium` |
| 022 | Control inheritance with inherit, initial, unset and revert | `hard` |
| 023 | Predict which rule wins before you run it | `hard` |
| 024 | Untangle a specificity war | `hard` |
| 025 | Break ties with source order | `medium` |
| 026 | Remove every !important from a stylesheet | `hard` |
| 027 | Order your CSS with @layer | `hard` |
| 028 | Use the universal selector deliberately | `medium` |
| 029 | Store values in CSS custom properties | `medium` |
| 030 | Handle missing custom properties | `medium` |
| 031 | Scope and override custom properties per component | `hard` |
| 032 | Impose an order on a stylesheet | `easy` |
| 033 | Debug a shorthand that erased a longhand | `medium` |
| 034 | Progressively enhance with @supports | `hard` |
| 035 | Wire stylesheets into React components properly | `medium` |
| 036 | Adopt a naming convention | `medium` |
| 037 | Drive classes from React state | `medium` |
| 038 | Write a tiny class-name joiner | `medium` |
| 039 | Decide where a custom property belongs | `hard` |
| 040 | Fix a deliberately broken stylesheet | `hard` |

## Phase 2 — Box model, sizing & units

Every box has content, padding, border, margin. Learn to control space on purpose instead of nudging numbers.

Challenges 41–80.

| # | Challenge | Level |
|---|---|---|
| 041 | See the difference between content-box and border-box | `easy` |
| 042 | Apply border-box the way real projects do | `easy` |
| 043 | Master the padding shorthand | `easy` |
| 044 | Master the margin shorthand and negative values | `easy` |
| 045 | Reproduce margin collapsing between siblings | `medium` |
| 046 | Fix a child's margin escaping its parent | `medium` |
| 047 | Centre and push with auto margins | `easy` |
| 048 | Replace physical properties with logical ones | `medium` |
| 049 | Set explicit dimensions and see what breaks | `easy` |
| 050 | Constrain width with min and max | `easy` |
| 051 | Lock an element's aspect ratio | `medium` |
| 052 | Choose between px, rem and em deliberately | `medium` |
| 053 | Reproduce the em compounding trap | `medium` |
| 054 | Build and use a spacing scale | `medium` |
| 055 | Work out what a percentage is a percentage of | `medium` |
| 056 | Use vw, vh, svh, lvh and dvh correctly | `medium` |
| 057 | Size by text with ch and ex | `easy` |
| 058 | Mix units with calc() | `medium` |
| 059 | Replace media queries with min(), max() and clamp() | `hard` |
| 060 | Control overflow with visible, hidden, scroll and auto | `easy` |
| 061 | Understand why overflow-x and overflow-y interact | `hard` |
| 062 | Stop layout shifting when a scrollbar appears | `medium` |
| 063 | Truncate a single line with an ellipsis | `easy` |
| 064 | Truncate multi-line text | `medium` |
| 065 | Size with intrinsic keywords | `hard` |
| 066 | Hide things four different ways | `medium` |
| 067 | Space children with gap instead of margins | `medium` |
| 068 | Space a document with the owl selector | `hard` |
| 069 | Discover what padding does on an inline element | `medium` |
| 070 | Size images without distorting them | `medium` |
| 071 | Let content size the layout | `hard` |
| 072 | Stop content escaping rounded corners | `medium` |
| 073 | Make inputs and buttons size consistently | `hard` |
| 074 | Choose padding or margin correctly | `medium` |
| 075 | Debug layout with outline instead of border | `easy` |
| 076 | Audit a component's spacing | `hard` |
| 077 | Reason about nested percentage sizing | `hard` |
| 078 | Skip rendering work with content-visibility | `hard` |
| 079 | Write the sizing cheatsheet you will actually use | `medium` |
| 080 | Rebuild a pricing card from a screenshot, spacing only | `hard` |

## Phase 3 — Typography

Type is most of the page. Scales, line length, rhythm, web fonts, and text that survives real content.

Challenges 81–115.

| # | Challenge | Level |
|---|---|---|
| 081 | Build a font stack that degrades well | `easy` |
| 082 | Use the system UI font stack | `easy` |
| 083 | Load a web font with @font-face | `medium` |
| 084 | Control the flash with font-display | `medium` |
| 085 | Use a variable font's axes | `hard` |
| 086 | Reduce font swap shift with metric overrides | `hard` |
| 087 | Build a modular type scale | `medium` |
| 088 | Set line-height without units | `easy` |
| 089 | Set a comfortable line length | `easy` |
| 090 | Use weight as hierarchy | `easy` |
| 091 | Adjust tracking for size | `medium` |
| 092 | Control word spacing and alignment | `medium` |
| 093 | Transform case in CSS, not in content | `easy` |
| 094 | Stop long words from breaking layout | `medium` |
| 095 | Control whitespace and preformatted text | `medium` |
| 096 | Style underlines properly | `medium` |
| 097 | Style every link state | `medium` |
| 098 | Establish a vertical rhythm | `hard` |
| 099 | Style a full heading hierarchy | `medium` |
| 100 | Style lists and markers | `medium` |
| 101 | Number things with CSS counters | `hard` |
| 102 | Style quotes and pull quotes | `medium` |
| 103 | Style inline code and code blocks | `medium` |
| 104 | Align numbers in a table | `medium` |
| 105 | Turn on ligatures, small caps and alternates | `hard` |
| 106 | Balance and prettify text wrapping | `medium` |
| 107 | Scale type with clamp | `hard` |
| 108 | Generate a fluid type scale | `hard` |
| 109 | Set text vertically | `hard` |
| 110 | Keep text legible over an image | `hard` |
| 111 | Choose between wrapping, truncating and scrolling | `medium` |
| 112 | Space paragraphs like a typographer | `easy` |
| 113 | Style selection, caret and placeholder | `easy` |
| 114 | Fix the small typographic details | `medium` |
| 115 | Typeset a long-form article | `hard` |

## Phase 4 — Color & backgrounds

Color systems, modern color spaces, gradients, images, contrast that passes an audit.

Challenges 116–150.

| # | Challenge | Level |
|---|---|---|
| 116 | Write color five different ways | `easy` |
| 117 | Build a palette by reasoning in HSL | `medium` |
| 118 | Build a perceptually even palette in OKLCH | `hard` |
| 119 | Derive colors with color-mix() | `hard` |
| 120 | Derive colors with relative color syntax | `hard` |
| 121 | Name colors by role, not by value | `medium` |
| 122 | Measure and fix contrast | `medium` |
| 123 | Add a dark theme by swapping tokens | `hard` |
| 124 | Let the user override the theme | `hard` |
| 125 | Use alpha without muddying your palette | `medium` |
| 126 | Propagate color with currentColor | `medium` |
| 127 | Draw linear gradients | `medium` |
| 128 | Draw radial and conic gradients | `hard` |
| 129 | Clip a gradient to text | `medium` |
| 130 | Fake a gradient border | `hard` |
| 131 | Place and size a background image | `easy` |
| 132 | Layer multiple backgrounds | `hard` |
| 133 | Control background scrolling | `medium` |
| 134 | Control where a background starts and stops | `medium` |
| 135 | Draw a pattern with gradients only | `hard` |
| 136 | Blend backgrounds and elements | `hard` |
| 137 | Apply CSS filters | `medium` |
| 138 | Frost a panel with backdrop-filter | `hard` |
| 139 | Theme native controls | `easy` |
| 140 | Survive forced-colors mode | `hard` |
| 141 | Never rely on color alone | `medium` |
| 142 | Use wide-gamut color safely | `hard` |
| 143 | Support two brands from one stylesheet | `hard` |
| 144 | Derive interaction state colors systematically | `medium` |
| 145 | Tint shadows to match the surface | `medium` |
| 146 | Build a consistent image treatment system | `hard` |
| 147 | Style a page for print | `medium` |
| 148 | Audit and consolidate a color system | `hard` |
| 149 | Build a gradient hero section | `medium` |
| 150 | Ship a themed component library page | `hard` |

## Phase 5 — Borders, shadows & shapes

Edges, depth, radius, outlines, and drawing without images.

Challenges 151–175.

| # | Challenge | Level |
|---|---|---|
| 151 | Use the border shorthand and longhands | `easy` |
| 152 | Round corners precisely | `easy` |
| 153 | Use the slash syntax for elliptical corners | `medium` |
| 154 | Choose outline over border for focus | `easy` |
| 155 | Read and write every box-shadow value | `easy` |
| 156 | Build realistic depth with layered shadows | `hard` |
| 157 | Compare box-shadow with drop-shadow | `medium` |
| 158 | Design a focus ring system | `hard` |
| 159 | Use border-image | `hard` |
| 160 | Draw shapes using only border tricks | `medium` |
| 161 | Cut shapes with clip-path | `medium` |
| 162 | Animate a clip-path reveal | `hard` |
| 163 | Mask an element with an image or gradient | `hard` |
| 164 | Wrap text around a shape | `hard` |
| 165 | Build dividers that hold up | `easy` |
| 166 | Style a card with border, radius and shadow together | `medium` |
| 167 | Build a skeleton loading state | `medium` |
| 168 | Build notification badges and status rings | `medium` |
| 169 | Show that content is scrollable | `hard` |
| 170 | Control dash patterns | `medium` |
| 171 | Cut notches and corners | `hard` |
| 172 | Combine aspect-ratio with shapes | `medium` |
| 173 | Get table borders right | `medium` |
| 174 | Debug a shape that renders wrong | `hard` |
| 175 | Draw something non-trivial in pure CSS | `hard` |

## Phase 6 — Display, flow & positioning

Block vs inline, normal flow, floats, positioning, stacking contexts, z-index that behaves.

Challenges 176–215.

| # | Challenge | Level |
|---|---|---|
| 176 | Tell block and inline boxes apart | `easy` |
| 177 | Use inline-block and meet the whitespace gap | `medium` |
| 178 | Use vertical-align where it actually applies | `medium` |
| 179 | Describe normal flow by breaking it | `easy` |
| 180 | Create a block formatting context on purpose | `hard` |
| 181 | Use floats for what they were designed for | `medium` |
| 182 | Nudge with position: relative | `easy` |
| 183 | Position an element against its containing block | `medium` |
| 184 | Centre absolutely, three ways | `medium` |
| 185 | Pin an element to the viewport | `medium` |
| 186 | Make an element stick | `hard` |
| 187 | Stick a table header and first column | `hard` |
| 188 | Control paint order with z-index | `medium` |
| 189 | Find the stacking context that is breaking your z-index | `hard` |
| 190 | Create a stacking context deliberately | `medium` |
| 191 | Layer a modal, dropdown and toast correctly | `hard` |
| 192 | Use the top layer with dialog and popover | `hard` |
| 193 | Position a popover against an anchor | `hard` |
| 194 | Trace the containing block chain | `hard` |
| 195 | Combine overflow with absolute children | `hard` |
| 196 | Remove a box without removing the element | `hard` |
| 197 | Hide without collapsing layout | `easy` |
| 198 | Lay out text in columns | `medium` |
| 199 | Span an element across columns | `medium` |
| 200 | Control page and column breaks | `hard` |
| 201 | Lay out a real data table | `medium` |
| 202 | Make a wide table usable on mobile | `hard` |
| 203 | Build a horizontal scroll region | `medium` |
| 204 | Add scroll snapping | `hard` |
| 205 | Implement smooth scroll and scroll margin | `easy` |
| 206 | Stop scroll chaining | `medium` |
| 207 | Overlay content on media | `medium` |
| 208 | Control what receives clicks | `medium` |
| 209 | Guarantee a 44px touch target | `medium` |
| 210 | Diagnose an overlap bug | `hard` |
| 211 | Lay out a printable invoice | `hard` |
| 212 | Rebuild a layout the 2010 way, then the modern way | `hard` |
| 213 | Build a layout that works in any writing mode | `hard` |
| 214 | Remove unnecessary positioning | `hard` |
| 215 | Build a documentation page shell | `hard` |

## Phase 7 — Flexbox

One-dimensional layout, properly understood: main axis, cross axis, growth, shrink, basis.

Challenges 216–265.

| # | Challenge | Level |
|---|---|---|
| 216 | Turn an element into a flex container | `easy` |
| 217 | Name the axes before you touch a property | `easy` |
| 218 | Distribute space along the main axis | `easy` |
| 219 | Align along the cross axis | `easy` |
| 220 | Override alignment per item | `easy` |
| 221 | Let items wrap onto new lines | `medium` |
| 222 | Align wrapped lines | `medium` |
| 223 | Distribute free space with flex-grow | `medium` |
| 224 | Control shrinking under pressure | `hard` |
| 225 | Set the starting size with flex-basis | `hard` |
| 226 | Read and write the flex shorthand | `medium` |
| 227 | Build genuinely equal-width columns | `medium` |
| 228 | Build the holy grail layout with flex | `hard` |
| 229 | Push the footer to the bottom | `easy` |
| 230 | Build the media object pattern | `medium` |
| 231 | Build a responsive navigation bar | `medium` |
| 232 | Align card footers in a row | `medium` |
| 233 | Space flex items with gap | `easy` |
| 234 | Reorder items visually with order | `hard` |
| 235 | Fix the flex item that will not shrink | `hard` |
| 236 | Nest flex containers without chaos | `hard` |
| 237 | Choose flex or inline-flex | `easy` |
| 238 | Handle a toolbar that runs out of room | `hard` |
| 239 | Build a split layout inside a component | `medium` |
| 240 | Lay out a form row | `medium` |
| 241 | Centre anything with flex | `easy` |
| 242 | Decide between basis and width in a wrap layout | `hard` |
| 243 | Fix the ragged last row | `hard` |
| 244 | Fake a table with flex, and learn why not to | `hard` |
| 245 | Test a flex layout in rtl | `medium` |
| 246 | Build a tag input row | `medium` |
| 247 | Build a pricing table row with flex | `medium` |
| 248 | Build a responsive stats row | `easy` |
| 249 | Build the sidebar pattern that collapses itself | `hard` |
| 250 | Combine flex with horizontal scrolling | `medium` |
| 251 | Align mixed-size items on their baselines | `hard` |
| 252 | Collect five flexbox gotchas | `hard` |
| 253 | Refactor a float layout to flex | `medium` |
| 254 | Check flex layout performance | `hard` |
| 255 | Write the flex-or-grid decision rule | `medium` |
| 256 | Build an app shell with flex | `hard` |
| 257 | Build a nested comment thread | `medium` |
| 258 | Build a kanban column | `hard` |
| 259 | Build a chat message layout | `hard` |
| 260 | Decide when visual order should differ | `hard` |
| 261 | Combine flex with aspect-ratio | `medium` |
| 262 | Truncate text inside a flex item | `hard` |
| 263 | Design empty and loading states for a flex layout | `medium` |
| 264 | Audit a flex layout against a checklist | `hard` |
| 265 | Build a dashboard header and toolbar system | `hard` |

## Phase 8 — Grid

Two-dimensional layout: tracks, lines, areas, auto-placement, subgrid, and intrinsic sizing.

Challenges 266–320.

| # | Challenge | Level |
|---|---|---|
| 266 | Create your first grid | `easy` |
| 267 | Understand the fr unit | `easy` |
| 268 | Space grid tracks with gap | `easy` |
| 269 | Define explicit rows and columns | `easy` |
| 270 | Compress track lists with repeat() | `easy` |
| 271 | Size tracks with minmax() | `medium` |
| 272 | Build a responsive grid with no media queries | `hard` |
| 273 | Place items by grid line number | `medium` |
| 274 | Name your grid lines | `hard` |
| 275 | Lay out with named template areas | `medium` |
| 276 | Control the auto-placement algorithm | `hard` |
| 277 | Size the tracks grid creates for you | `medium` |
| 278 | Span items across tracks | `medium` |
| 279 | Align inside a grid container | `medium` |
| 280 | Align a single grid item | `easy` |
| 281 | Centre with grid in one line | `easy` |
| 282 | Build the holy grail layout with grid | `medium` |
| 283 | Break an element out of a centred column | `hard` |
| 284 | Align nested content with subgrid | `hard` |
| 285 | Approximate a masonry layout | `hard` |
| 286 | Compare grid and flex for the same card layout | `medium` |
| 287 | Size tracks by content | `hard` |
| 288 | Stop grid items from overflowing | `hard` |
| 289 | Rearrange a layout across breakpoints | `medium` |
| 290 | Build a dashboard widget grid | `hard` |
| 291 | Lay out a form with grid | `medium` |
| 292 | Build a data grid with CSS grid | `hard` |
| 293 | Build a photo gallery with varied sizes | `medium` |
| 294 | Animate grid track sizes | `hard` |
| 295 | Stack elements on top of each other with grid | `medium` |
| 296 | Build a grid of equal squares | `easy` |
| 297 | Debug grid with DevTools overlays | `medium` |
| 298 | Nest grids sensibly | `hard` |
| 299 | Reorder grid items safely | `medium` |
| 300 | Build a magazine-style article layout | `hard` |
| 301 | Build a month calendar | `hard` |
| 302 | Build a timeline or gantt row | `hard` |
| 303 | Combine grid with scrolling regions | `hard` |
| 304 | Provide a fallback for a grid layout | `medium` |
| 305 | Measure grid layout cost | `hard` |
| 306 | Verify a grid layout in rtl | `medium` |
| 307 | Build a card with internal grid | `medium` |
| 308 | Build a split-screen layout | `easy` |
| 309 | Build a collapsible sidebar layout | `hard` |
| 310 | Handle sparse grids | `medium` |
| 311 | Build an image-heavy grid without layout shift | `hard` |
| 312 | Build a bento-box layout | `hard` |
| 313 | Review a grid implementation | `medium` |
| 314 | Build your grid reference page | `medium` |
| 315 | Rebuild a marketing page layout from a screenshot | `hard` |
| 316 | Rebuild an application layout from a screenshot | `hard` |
| 317 | Rebuild an editorial layout from a screenshot | `hard` |
| 318 | Choose the right layout tool for ten components | `medium` |
| 319 | Build three layouts with zero media queries | `hard` |
| 320 | Build a complete product page with grid | `hard` |

## Phase 9 — Responsive & adaptive

Fluid type, media queries, container queries, and layouts that hold from 320px to ultrawide.

Challenges 321–360.

| # | Challenge | Level |
|---|---|---|
| 321 | Fix a page that ignores mobile | `easy` |
| 322 | Write mobile-first CSS | `medium` |
| 323 | Write media queries properly | `easy` |
| 324 | Choose breakpoints from content | `medium` |
| 325 | Style by container, not viewport | `hard` |
| 326 | Size with container query units | `hard` |
| 327 | Query a container's style | `hard` |
| 328 | Serve the right image size | `hard` |
| 329 | Art-direct images with picture | `medium` |
| 330 | Make spacing fluid | `medium` |
| 331 | Scale type across breakpoints | `medium` |
| 332 | Adapt to orientation changes | `medium` |
| 333 | Adapt to input type | `hard` |
| 334 | Respect reduced motion | `medium` |
| 335 | Respect contrast preferences | `medium` |
| 336 | Adapt to data saver preferences | `medium` |
| 337 | Respect device safe areas | `medium` |
| 338 | Handle mobile browser chrome | `hard` |
| 339 | Build a navigation that adapts | `hard` |
| 340 | Make a complex table responsive | `hard` |
| 341 | Build a card that works in five contexts | `hard` |
| 342 | Build responsive layouts with no queries at all | `hard` |
| 343 | Test at 200% and 400% zoom | `medium` |
| 344 | Handle background images responsively | `medium` |
| 345 | Find layouts that break between breakpoints | `medium` |
| 346 | Test on real device sizes | `medium` |
| 347 | Make a form work on every screen | `hard` |
| 348 | Make a dialog responsive | `hard` |
| 349 | Change aspect ratio by breakpoint | `medium` |
| 350 | Audit spacing across breakpoints | `medium` |
| 351 | Make the page work on paper too | `medium` |
| 352 | Make embedded media responsive | `medium` |
| 353 | Hide complexity on small screens without losing it | `hard` |
| 354 | Audit a responsive grid | `medium` |
| 355 | Compare adaptive and responsive approaches | `medium` |
| 356 | Make design tokens responsive | `hard` |
| 357 | Make a responsive page fast on mobile | `hard` |
| 358 | Write your responsive review checklist | `medium` |
| 359 | Rebuild a fixed-width page as responsive | `hard` |
| 360 | Build a fully responsive landing page | `hard` |

## Phase 10 — Transitions, transforms & animation

Motion with intent: state transitions, keyframes, performance, reduced-motion.

Challenges 361–400.

| # | Challenge | Level |
|---|---|---|
| 361 | Add your first transition | `easy` |
| 362 | Compare easing curves | `medium` |
| 363 | Transition several properties with different timings | `medium` |
| 364 | Design hover feedback that is not annoying | `medium` |
| 365 | Move elements with translate | `easy` |
| 366 | Scale and rotate | `easy` |
| 367 | Discover that transform order matters | `medium` |
| 368 | Work in 3D | `hard` |
| 369 | Write your first keyframe animation | `easy` |
| 370 | Control an animation completely | `medium` |
| 371 | Stagger a list animation | `medium` |
| 372 | Build three loading indicators | `medium` |
| 373 | Add micro-interactions to a form | `hard` |
| 374 | Find and fix a janky animation | `hard` |
| 375 | Use will-change correctly | `medium` |
| 376 | Animate elements entering and leaving | `hard` |
| 377 | Animate from display: none | `hard` |
| 378 | Use the View Transitions API | `hard` |
| 379 | Animate on scroll without JavaScript | `hard` |
| 380 | Build a parallax effect responsibly | `hard` |
| 381 | Build three card hover effects | `medium` |
| 382 | Design complete button feedback | `medium` |
| 383 | Animate an accordion open and closed | `hard` |
| 384 | Animate a modal properly | `hard` |
| 385 | Animate between views | `hard` |
| 386 | Choreograph a sequence | `hard` |
| 387 | Define motion design tokens | `medium` |
| 388 | Approximate spring physics | `hard` |
| 389 | Animate SVG with CSS | `hard` |
| 390 | Animate text carefully | `medium` |
| 391 | Animate in discrete steps | `medium` |
| 392 | Use looping animations responsibly | `medium` |
| 393 | Combine multiple animations on one element | `hard` |
| 394 | Audit every animation you have written | `medium` |
| 395 | Meet animation accessibility requirements | `hard` |
| 396 | Tune interaction feel | `medium` |
| 397 | Animate a navigation menu | `hard` |
| 398 | Animate data visualisation | `hard` |
| 399 | Debug a broken animation | `hard` |
| 400 | Build a motion system page | `hard` |

## Phase 11 — Component patterns

The components every job asks for: buttons, forms, navs, modals, tables, cards, toasts.

Challenges 401–450.

| # | Challenge | Level |
|---|---|---|
| 401 | Build a complete button component | `medium` |
| 402 | Add sizes and icon slots to buttons | `medium` |
| 403 | Build a segmented button group | `medium` |
| 404 | Style links and buttons that look alike | `medium` |
| 405 | Build a text input component | `medium` |
| 406 | Build a floating label input | `hard` |
| 407 | Style a native select | `hard` |
| 408 | Build custom checkboxes and radios | `hard` |
| 409 | Build a toggle switch | `medium` |
| 410 | Style a range input | `hard` |
| 411 | Build a resizable textarea | `medium` |
| 412 | Style validation states | `hard` |
| 413 | Lay out a complete form | `hard` |
| 414 | Build a search field with clear and submit | `medium` |
| 415 | Build a flexible card | `medium` |
| 416 | Build three list patterns | `medium` |
| 417 | Build a production data table | `hard` |
| 418 | Build pagination controls | `medium` |
| 419 | Build a tabs component | `hard` |
| 420 | Build an accordion | `medium` |
| 421 | Build a modal dialog | `hard` |
| 422 | Build a side drawer | `hard` |
| 423 | Build a tooltip | `hard` |
| 424 | Build a dropdown menu | `hard` |
| 425 | Build a toast notification system | `hard` |
| 426 | Build alert and banner components | `medium` |
| 427 | Build breadcrumbs | `easy` |
| 428 | Build a production navigation bar | `hard` |
| 429 | Build a sidebar navigation | `hard` |
| 430 | Build an avatar component | `easy` |
| 431 | Build badges, chips and tags | `easy` |
| 432 | Build progress indicators | `medium` |
| 433 | Build a multi-step indicator | `medium` |
| 434 | Design empty states | `medium` |
| 435 | Build a file upload control | `hard` |
| 436 | Style date and time inputs | `medium` |
| 437 | Build a command palette | `hard` |
| 438 | Build a filterable list view | `hard` |
| 439 | Build a kanban board | `hard` |
| 440 | Build a calendar month view | `hard` |
| 441 | Style a chart without a chart library | `hard` |
| 442 | Build KPI stat cards | `easy` |
| 443 | Build a pricing table | `hard` |
| 444 | Build a testimonial carousel | `hard` |
| 445 | Build a site footer | `easy` |
| 446 | Build three hero variants | `medium` |
| 447 | Build a consent banner | `medium` |
| 448 | Render every state of every component | `hard` |
| 449 | Review a component library implementation | `medium` |
| 450 | Assemble a small component library page | `hard` |

## Phase 12 — Architecture, systems & a11y

Scaling CSS past one file: tokens, themes, methodologies, accessibility, performance, and CSS-in-React options.

Challenges 451–490.

| # | Challenge | Level |
|---|---|---|
| 451 | Compare CSS methodologies | `medium` |
| 452 | Build a three-tier token system | `hard` |
| 453 | Design a token naming convention | `medium` |
| 454 | Use CSS Modules in this app | `hard` |
| 455 | Evaluate CSS-in-JS approaches | `hard` |
| 456 | Build with a utility-first approach | `hard` |
| 457 | Evaluate Tailwind against your own system | `hard` |
| 458 | Structure a whole codebase with layers | `hard` |
| 459 | Scope styles with @scope | `hard` |
| 460 | Use native CSS nesting well | `medium` |
| 461 | Write your own reset | `medium` |
| 462 | Organise CSS across a real codebase | `medium` |
| 463 | Ship critical CSS | `hard` |
| 464 | Measure and reduce CSS cost | `hard` |
| 465 | Reduce stylesheet size | `medium` |
| 466 | Architect theming properly | `hard` |
| 467 | Run a full accessibility audit | `hard` |
| 468 | Guarantee keyboard operability | `hard` |
| 469 | Manage focus across state changes | `hard` |
| 470 | Understand how CSS affects screen readers | `hard` |
| 471 | Build the visually hidden utility properly | `medium` |
| 472 | Systematise reduced motion | `medium` |
| 473 | Add full RTL support | `hard` |
| 474 | Handle other languages in CSS | `hard` |
| 475 | Set up stylelint | `medium` |
| 476 | Enforce CSS quality in CI | `hard` |
| 477 | Add visual regression testing | `hard` |
| 478 | Design a component styling API | `hard` |
| 479 | Compose styles without specificity wars | `hard` |
| 480 | Document a design system | `hard` |
| 481 | Refactor a legacy stylesheet | `hard` |
| 482 | Find and remove dead CSS | `medium` |
| 483 | Drive CSS from JavaScript safely | `hard` |
| 484 | Design components for unknown contexts | `hard` |
| 485 | Define your baseline and enhancements | `medium` |
| 486 | Choose a scoping strategy for the repo | `hard` |
| 487 | Set and enforce a CSS performance budget | `hard` |
| 488 | Write the repo's CSS style guide | `medium` |
| 489 | Write the repo README a hiring manager will read | `medium` |
| 490 | Ship the complete design system | `hard` |

## Phase 13 — Capstones

Whole products from a blank file, unassisted, to a deadline.

Challenges 491–500.

| # | Challenge | Level |
|---|---|---|
| 491 | Capstone: build a marketing site from a blank file | `capstone` |
| 492 | Capstone: build an analytics dashboard | `capstone` |
| 493 | Capstone: build an e-commerce product flow | `capstone` |
| 494 | Capstone: publish a documented design system | `capstone` |
| 495 | Capstone: clone a real product UI | `capstone` |
| 496 | Capstone: make an inaccessible page accessible | `capstone` |
| 497 | Capstone: make a slow page fast | `capstone` |
| 498 | Capstone: build a landing page in three hours | `capstone` |
| 499 | Capstone: review someone else's CSS | `capstone` |
| 500 | Capstone: build and ship your portfolio | `capstone` |
