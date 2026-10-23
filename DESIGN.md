---
name: Clavix
description: The landing page for a native Vaultwarden desktop client, in the app's own world of cool neutrals, the seal and one verdigris accent.
colors:
  verdigris: "#0f8b8d"
  verdigris-fill: "#0d7f81"
  deep-teal: "#0b5c5e"
  teal-link: "#0c6f71"
  verdigris-lifted: "#3fb3b1"
  verdigris-pale: "#7fd1cd"
  mint: "#bfe9e4"
  mint-wash: "#e3f3f1"
  mint-selected: "#d4ecea"
  cool-ground: "#f4f6f6"
  paper: "#ffffff"
  cool-pane: "#eaeded"
  cool-header: "#f7f9f9"
  cool-inset: "#eef1f1"
  cool-code: "#e6eaea"
  row-hover: "#eef3f3"
  ink: "#16191a"
  ink-secondary: "#2e3538"
  ink-label: "#4b5356"
  ink-muted: "#5f696d"
  hairline: "#d8dcdc"
  hairline-input: "#c9cfcf"
  hairline-soft: "#e6eaea"
  amber-ink: "#7a4b00"
  amber-wash: "#fff4dc"
  amber-line: "#f0d08a"
  success-green: "#15803d"
  status-fresh: "#22c55e"
  dark-ground: "#171a1b"
  dark-paper: "#1f2425"
  dark-pane: "#262c2d"
  dark-header: "#1c2122"
  dark-code: "#30373a"
  dark-row-hover: "#283031"
  dark-ink: "#eceff0"
  dark-ink-secondary: "#c9d0d2"
  dark-ink-label: "#c1c9cc"
  dark-ink-muted: "#a9b3b6"
  dark-hairline: "#343b3d"
  dark-hairline-input: "#3f4749"
  dark-hairline-soft: "#2c3335"
  dark-accent-wash: "#1f3c3d"
  dark-accent-selected: "#255052"
  dark-amber-ink: "#f0c070"
  dark-amber-wash: "#3a2f1a"
  dark-amber-line: "#5c4a26"
  dark-success: "#6ecf9a"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "clamp(2.4rem, 1.2rem + 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "clamp(1.9rem, 1.3rem + 2.2vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title-small:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.35
  lead:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"cv11\", \"ss01\", \"ss03\""
  body-small:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  data:
    fontFamily: "Atkinson Hyperlegible, Inter, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.65
  wordmark:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
rounded:
  hairline: "3px"
  icon: "4px"
  control: "6px"
  panel: "8px"
  window: "10px"
  pill: "999px"
spacing:
  gutter: "2rem"
  gutter-tablet: "1.5rem"
  gutter-phone: "1rem"
  content-max: "1200px"
  header-height: "64px"
  section: "6rem"
  section-tablet: "4.5rem"
  head-gap: "2.5rem"
  card-gap: "1.5rem"
  column-gap: "3rem"
  hero-gap: "4rem"
  card-padding: "1.6rem"
components:
  button-primary:
    backgroundColor: "{colors.verdigris-fill}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0.45rem 0.9rem"
    height: "2.25rem"
  button-primary-large:
    backgroundColor: "{colors.verdigris-fill}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "0.75rem 1.35rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.deep-teal}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.45rem 0.9rem"
    height: "2.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.row-hover}"
  alpha-bar:
    backgroundColor: "{colors.amber-wash}"
    textColor: "{colors.amber-ink}"
    padding: "0.55rem 2rem"
  header:
    backgroundColor: "{colors.cool-ground}"
    textColor: "{colors.ink-secondary}"
    height: "{spacing.header-height}"
  step-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.window}"
    padding: "1.6rem 1.6rem 1.5rem"
  step-number:
    backgroundColor: "{colors.mint-wash}"
    textColor: "{colors.deep-teal}"
    size: "34px"
  feature-band:
    backgroundColor: "{colors.deep-teal}"
    textColor: "{colors.paper}"
    padding: "6rem 0"
  honest-note:
    backgroundColor: "{colors.amber-wash}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.panel}"
    padding: "1rem 1.15rem"
  code-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.window}"
    padding: "1.1rem 1.2rem"
  comparison-clavix-cell:
    backgroundColor: "{colors.mint-wash}"
    textColor: "{colors.ink-secondary}"
    padding: "0.8rem 1.1rem"
  installer:
    backgroundColor: "{colors.deep-teal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.window}"
    padding: "1.75rem"
  os-tab:
    textColor: "{colors.mint-selected}"
    rounded: "8px 8px 0 0"
    padding: "0.7rem 1.1rem"
  os-tab-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  package-row-main:
    backgroundColor: "{colors.mint-wash}"
    textColor: "{colors.deep-teal}"
    rounded: "{rounded.control}"
    padding: "0.85rem 0.6rem"
  command-chip:
    backgroundColor: "{colors.cool-inset}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.control}"
    padding: "0.45rem 0.5rem 0.45rem 0.85rem"
  copy-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.teal-link}"
    rounded: "{rounded.control}"
    padding: "0.4rem 0.65rem"
  inline-code:
    backgroundColor: "{colors.cool-code}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.hairline}"
    padding: "0.05em 0.35em"
  alpha-chip:
    backgroundColor: "{colors.amber-wash}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.pill}"
    padding: "0 0.45rem"
  faq-question:
    textColor: "{colors.ink}"
    typography: "{typography.title-small}"
    padding: "1.1rem 0.25rem"
  footer:
    backgroundColor: "{colors.cool-pane}"
    textColor: "{colors.ink-secondary}"
    padding: "3.5rem 0 2rem"
---

# Design System: Clavix

## Overview

**Creative North Star: "The App, Set on the Table"**

clavix.org is the Persuade surface of the Clavix family. It does not invent a marketing identity: it takes the desktop app's own world (cool grey-green neutrals, a single verdigris accent family, the seal mark, Inter for interface and display, Atkinson Hyperlegible for anything that is an identifier) and lays the product itself out on the page. The hero's proof is not a glossy screenshot but a hand-built HTML depiction of the app's three-column window beside a neutral KeePassXC-like tree, the same groups before and after. Every other section reads as calm, hairline-ruled documentation for peers who self-host.

Density is moderate: a generous section rhythm, a 1200px content width, flat surfaces separated by 1px hairlines rather than shadows. Beyond the neutrals the page has exactly two committed colour moments: the deep-teal band (the features section and the installer panel), which stays deep teal in both themes, and amber, which appears only where the page tells the truth about immaturity or limits. Light and dark follow the visitor's system through `prefers-color-scheme`; both themes share one token list with different values.

The site deviates from the app's tokens in three small, deliberate places where a marketing page has different legibility demands: fills that carry white text use a half-step deeper verdigris, muted text is one step darker, and the type scale grows to a true display size. These deviations are recorded below and are not drift.

**Key Characteristics:**
- The app's own palette and mark, unchanged in hue; the page is a member of the family, not a reskin.
- The product shown as live HTML mock windows, never as a raster screenshot.
- Flat surfaces, 1px hairlines, radii from 3px to 10px.
- One deep-teal band surface, identical in light and dark.
- Amber is reserved for honesty: alpha status, unaudited crypto, unsigned builds, places where Clavix loses.
- Inter for words, Atkinson Hyperlegible for paths, commands, file formats, checksums and code.

## Colors

Cool, slightly green-tinted greys carry everything; verdigris is the only hue that acts, and amber the only hue that warns.

### Primary
- **Verdigris** (`verdigris`): the seal's hue. Used for strokes and non-text accents: the before/after arrow, the dashed organization outline in step visuals, the light-theme focus ring, and the hero headline's highlighted phrase in light mode (display sizes only, where 3:1 suffices).
- **Verdigris Fill** (`verdigris-fill`): every fill that carries white text: primary buttons, the selected row in the app mock, the drag pill, the mock's Edit button. Identical in both themes. A site deviation: the app fills with pure verdigris, which reaches only about 4.1:1 under white text.
- **Deep Teal** (`deep-teal`): primary-button hover, the feature band, the installer panel, the app mock's toast, and selected-state text in light mode.
- **Teal Link** (`teal-link`): link text, nav hover and active state, security checkmarks, code-card keywords, copy-button text in light mode.
- **Verdigris Lifted** (`verdigris-lifted`): the dark-theme display highlight and dark-theme focus ring.
- **Verdigris Pale** (`verdigris-pale`): dark-theme link and selected-state text.
- **Mint** (`mint`): on the deep-teal band only: group headings, feature icons, the selected tab's "your OS" hint, the band's focus ring.
- **Mint Wash** (`mint-wash`) and **Mint Selected** (`mint-selected`): the Clavix column of the comparison table, step numbers, badges, the recommended package row (wash at rest, selected on hover), the app mock's selected folder, text selection. Mint Selected is also the soft body text on the band. In dark mode they map to `dark-accent-wash` and `dark-accent-selected`.

### Tertiary
- **Amber Ink / Amber Wash / Amber Line** (`amber-ink`, `amber-wash`, `amber-line`; dark: `dark-amber-*`): the alpha bar, the "Honest status" note, the installer's unsigned-build note, the alpha chip next to the version, and comparison cells where Clavix loses.
- **Success Green** (`success-green`, dark `dark-success`): the comparison table's yes marks. **Status Fresh** (`status-fresh`): the mock's "Synced" dot only.

### Neutral
- **Cool Ground** (`cool-ground` / `dark-ground`): page background, header background, the app mock's window ground.
- **Paper** (`paper` / `dark-paper`): cards, the comparison and FAQ section backgrounds, the code card, the download card, secondary buttons.
- **Cool Pane** (`cool-pane` / `dark-pane`): the footer and the mock's folder tree pane.
- **Cool Header** (`cool-header` / `dark-header`): table heads, the code card's head strip, the mock list head.
- **Cool Inset / Cool Code** (`cool-inset`, `cool-code`; dark: the ground and `dark-code`): the command chip well, inline code and file-name chips.
- **Row Hover** (`row-hover` / `dark-row-hover`): hover on secondary buttons, package rows, copy buttons.
- **Ink ladder** (`ink`, `ink-secondary`, `ink-label`, `ink-muted` and their dark equivalents): headings and strong text; body copy and section subs; footer headings and fine print; captions, meta lines, table head labels, chevrons. `ink-muted` is a site deviation, one step darker than the app's, so it holds 4.5:1 on the ground.
- **Hairlines** (`hairline`, `hairline-input`, `hairline-soft` and dark equivalents): section and card borders; button and control strokes; row dividers inside tables and lists.
- **KeePassXC depiction greys** (the `--kp-*` custom properties): a pure neutral-grey palette used only inside the "before" window, so the competitor is shown plainly and never in Clavix's colours.

### Named Rules
**The One Hue Rule.** Verdigris and its derived teals and mints are the only accent. No second brand hue, no gradients.

**The White-on-Fill Rule.** Any fill carrying white text uses Verdigris Fill or Deep Teal, never pure Verdigris.

**The Amber Is Truth Rule.** Amber appears only where the page states a limitation: alpha status, unaudited or unsigned builds, a comparison row Clavix loses. Never as decoration or emphasis.

**The Constant Band Rule.** The deep-teal band is deep teal in both themes; it is the one surface that does not flip with the colour scheme.

## Typography

**Display Font:** Inter (self-hosted variable, with -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell fallbacks)
**Body Font:** Inter
**Label/Mono Font:** Atkinson Hyperlegible (self-hosted 400 and 700, falling back to Inter)

**Character:** Inter at heavy, tightly tracked display sizes gives the page its voice; Atkinson Hyperlegible marks everything a visitor might type or verify (commands, paths, file formats, checksums, the Rust excerpt), so data is visibly distinct from prose. Body text uses Inter's `cv11`, `ss01`, `ss03` features, as in the app.

### Hierarchy
- **Display** (700, fluid 2.4rem to 3.5rem, 1.06, -0.03em; 2.3rem under 480px): the hero headline only. One phrase may take the display accent colour. A site deviation: the app's largest type is 1.6rem at 600.
- **Headline** (700, fluid 1.9rem to 2.5rem, 1.12, -0.025em): section titles, balanced with `text-wrap: balance`.
- **Title** (600, 1.25rem, 1.3): step card titles.
- **Title Small** (600, 1.0625rem): feature items, security proof items, FAQ questions.
- **Lead** (400, 1.125rem): the hero lead; section subs sit at 1.0625rem, max 68ch.
- **Body** (400, 1rem, 1.55) and **Body Small** (0.9375rem): running copy; FAQ answers at 1.7 line height, max 72ch.
- **Caption** (0.8125rem): figure captions, meta lines, comparison footnotes, max 80ch.
- **Label** (600, 0.75 to 0.8125rem, 0.06 to 0.08em, uppercase): labels that name an object on the page: the before/after figure labels, feature group headings on the band, comparison column heads, footer column headings, the mock's tree section labels.
- **Data** (Atkinson Hyperlegible, 0.8125 to 0.875rem): commands, package formats, checksums, file names, the code card (line height 1.65).

### Named Rules
**The Identifier Rule.** If a visitor could copy it, type it, or compare it against a hash, it is set in Atkinson Hyperlegible.

**The Label-Names-a-Thing Rule.** Uppercase tracked labels name the figure, column, group or list they sit on. They never float above a section headline as a decorative lead-in.

## Layout

A single centred column, 1200px max content width plus a 2rem gutter (1.5rem at 960px and below, 1rem at 480px and below). Sections are separated by 6rem of vertical padding (4.5rem at 960px and below); the hero is tighter (2.75rem top, 4rem bottom) so the before/after pair lands in the first 1440 by 900 viewport. Section heads cap at 980px with a 2.5rem gap to content.

Content uses asymmetric two-column grids built from `minmax(0, fr)` ratios rather than a fixed 12-column grid: the hero copy against the lead and actions (1.25 : 1, bottom-aligned, 4rem gap), the before/after pair (0.8 : 64px arrow : 1.2), security proofs against a sticky code card, download details against the installer (0.8 : 1.2), and a sticky FAQ head against the question list (0.7 : 1.3). Repeated items use equal tracks: three step cards (1.5rem gap), three feature groups on the band, four Vaultwarden keyboard facts.

Breakpoints sit at 1100px, 960px, 720px and 480px. At 960px every two-column grid stacks, the pair's arrow rotates to point down, sticky elements become static, and the nav collapses to a toggle (without JavaScript the links wrap as a row instead). At 720px the comparison table becomes one card per feature with each product labelled inline, the mock drops its detail column, and the installer bleeds toward the gutter. At 480px hero buttons go full width.

The header is sticky at 64px; anchor scrolling offsets by the header height plus 16px. Smooth scrolling and all transitions switch off under `prefers-reduced-motion`.

## Elevation & Depth

The page is flat. Depth comes from tonal steps between ground, paper and pane, and from 1px hairlines; full-width sections switch to paper with top and bottom hairlines rather than lifting. No page-level element casts a shadow. Shadows exist only inside the app depictions, where they reproduce the app's own behaviour.

### Shadow Vocabulary
- **Mock toast** (`box-shadow: 0 4px 14px var(--toast-shadow)`): the clipboard toast in the Vaultwarden demo window.
- **Mock search focus halo** (`box-shadow: 0 0 0 2px rgba(15, 139, 141, 0.22)`): the focused search field in the demo window.
- **Mock sync dot halo** (`box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2)`): the "Synced" status dot.

### Named Rules
**The Flat Page Rule.** Page surfaces never cast shadows; a shadow on the page means it belongs to a depicted app window.

## Shapes

Small, quiet radii taken from the app's ladder: 3px for inline code and badges, 4px for kbd keys and file chips, 6px for buttons, controls, the command chip and copy button, 8px for large buttons, notes, panels and the verify disclosure, 10px for windows, step cards, the code card, the table wrapper and the installer. Fully round shapes are limited to the step numbers (34px circles) and the alpha chip (pill). Borders are always 1px; kbd keys add a 2px bottom edge. The OS tabs are the one compound shape: 8px top corners joining a download card whose top-left corner is square.

## Components

### Buttons
Plain, firm, and few.
- **Shape:** gently rounded (6px; 8px at the large size).
- **Primary:** Verdigris Fill with white 600-weight text, 2.25rem tall; the large size is 3rem tall. A large primary may carry a lighter suffix naming the package ("· AppImage").
- **Hover / Focus:** hover deepens to Deep Teal; transitions are colour-only at 0.12s. Focus is the global 2px focus ring, offset 2px.
- **Secondary:** paper with a `hairline-input` stroke and ink text; hover goes to Row Hover. Used for View source and Read the disclaimer, always beside a primary.

### Chips
- **File/format chip:** Atkinson Hyperlegible on Cool Code, 4px radius. **Badge:** Mint Wash with selected ink, 3px, 12px semibold.
- **Alpha chip:** an amber pill beside the version number.
- **Step-visual pills:** selected (mint), drag (fill, white), organization (Mint Wash with a dashed verdigris outline), mirroring the app's own states.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** paper on the ground, with a 1px hairline.
- **Shadow Strategy:** none (see The Flat Page Rule).
- **Internal Padding:** 1.6rem for step cards; a step card ends with a hairline-ruled visual row pinned to its bottom.

### Inputs / Fields
The page has no form fields. The **command chip** stands in: an inset well (Cool Inset, hairline, 6px) holding a muted prompt, a horizontally scrolling Atkinson command, and a paper copy button with Teal Link text that turns Row Hover on hover and is hidden without JavaScript.

### Navigation
The header shares the ground colour with a bottom hairline and stays sticky. The seal (30px) and the wordmark sit on the left; links in Ink Secondary at 0.94rem/500 turn Teal Link on hover, and the active section is underlined in Teal Link with a 2px line offset 8px; a small primary Download button closes the row. Under 960px a 2.5rem outlined toggle opens the links as a paper drop panel; Escape closes it.

### Alpha Bar
A full-width amber strip above the header, 0.875rem, centred, with a semibold amber link to the disclaimer. It is the first thing on the page in both themes.

### App Window Mocks
Hand-built HTML windows at 10px radius and fixed height (360px; less on phones). The Clavix window reproduces the app shell: an 8px ground inset, a toolbar bar, a pane-coloured folder tree with a mint selected folder, a paper item list with a Verdigris Fill selected row, and a detail panel, all with 6 to 8px radii and app-sized 12 to 14.5px text. The KeePassXC window uses only the `--kp-*` greys and a system sans stack. Mocks hide columns progressively at smaller widths rather than scaling down.

### Feature Band
The features section on Deep Teal: white headings, Mint Selected body text, Mint uppercase group headings over a translucent mint rule, Mint icons, inline code on a 10% white chip. Three columns, then two, then one.

### Security Proof List
Hairline-topped rows of a Teal Link check icon beside a Title Small heading and Body Small text, opened by the amber Honest Status note with links to the security documents, set beside a sticky code card (paper, a Cool Header strip with an Atkinson file link, an Atkinson Rust excerpt with bold Teal Link keywords and muted comments).

### Comparison Table
A paper section between hairlines; the table sits in a 10px hairline wrapper. Uppercase muted column heads on Cool Header; the Clavix column is tinted Mint Wash with its head in selected ink; a cell where Clavix loses turns amber. Icons mark yes, no, partial and unknown; numbered footnotes run in caption size. Under 720px each row becomes a labelled card.

### Download Installer
A Deep Teal panel holding an amber unsigned-build note, a row of OS tabs (Mint Selected text on the band; the selected tab becomes paper with ink text and joins the card below), and a paper download card listing packages as hover rows with the recommended package in Mint Wash, then command chips. Without JavaScript the tabs disappear and every OS card stacks.

### FAQ
Native disclosure items between hairlines: 600-weight 1.0625rem questions that turn Teal Link on hover, a chevron that rotates 180 degrees over 0.15s and turns Teal Link when open, answers in Ink Secondary at 1.7 line height.

### Footer
Cool Pane with a top hairline: a brand column (seal, wordmark, one-line description), then three link columns under uppercase Ink Label headings, closed by a hairline-ruled fine-print row.

## Do's and Don'ts

### Do:
- **Do** take every colour, radius and typeface from the app's world; deviate only for contrast or display scale, and record the deviation here.
- **Do** put white text on Verdigris Fill (#0d7f81) or Deep Teal only.
- **Do** depict the product as live HTML in its real layout, with neutral greys for any competitor depiction.
- **Do** set commands, paths, formats and checksums in Atkinson Hyperlegible.
- **Do** separate surfaces with 1px hairlines and tonal steps; keep radii between 3px and 10px.
- **Do** keep the deep-teal band deep teal in both themes, and give every other token a dark value in the same list.
- **Do** keep the page working without JavaScript (tabs become stacked cards, the nav wraps, copy buttons hide).

### Don't:
- **Don't** introduce a second accent hue or gradients.
- **Don't** use amber for anything but stated limitations.
- **Don't** cast shadows from page surfaces; shadows belong to depicted app windows only.
- **Don't** place uppercase tracked labels above section headlines as lead-ins; labels name the figure, column or group they sit on.
- **Don't** use pure Verdigris under white text or for small text on the light ground.
- **Don't** load fonts or assets from third parties; fonts are self-hosted.
