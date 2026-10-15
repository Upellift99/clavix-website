---
name: Clavix
description: Dark "vault" marketing site for a native Vaultwarden & Bitwarden desktop client.
colors:
  vault-blue: "#175ddc"
  vault-blue-light: "#4d8bf0"
  vault-blue-pale: "#8fb6f6"
  vault-blue-deep: "#1148ad"
  night-floor: "#070b16"
  night-shelf: "#0b1222"
  drawer: "#111a30"
  drawer-raised: "#16203a"
  drawer-lit: "#1d2a49"
  frost-text: "#eef2fb"
  frost-soft: "#c2cce0"
  slate-muted: "#8593b0"
  slate-dim: "#5f6c89"
  border-hairline: "rgba(143, 170, 220, 0.14)"
  border-strong: "rgba(143, 170, 220, 0.28)"
  signal-green: "#3fb950"
  warning-amber: "#d9a23a"
  warning-amber-text: "#f2d9a6"
  alert-red: "#f06868"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "clamp(2.2rem, 1.3rem + 3.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.07
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "clamp(1.8rem, 1.2rem + 2.4vw, 2.6rem)"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 650
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  mono:
    fontFamily: "'SFMono-Regular', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, monospace"
    fontSize: "0.88em"
rounded:
  chip: "5px"
  control: "10px"
  panel: "11px"
  card: "14px"
  window: "16px"
  band: "20px"
spacing:
  gutter: "1.5rem"
  grid-gap: "1.2rem"
  card-pad: "1.7rem"
  section: "6rem"
  section-mobile: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.vault-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.5rem"
  button-ghost:
    backgroundColor: "rgba(143, 170, 220, 0.06)"
    textColor: "{colors.frost-text}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.5rem"
  feature-lead:
    backgroundColor: "{colors.drawer}"
    textColor: "{colors.frost-soft}"
    rounded: "{rounded.card}"
    padding: "2.4rem"
  faq-item:
    backgroundColor: "{colors.drawer}"
    textColor: "{colors.frost-text}"
    rounded: "{rounded.panel}"
    padding: "1.15rem 1.3rem"
  download-link:
    backgroundColor: "rgba(143, 170, 220, 0.05)"
    textColor: "{colors.frost-soft}"
    rounded: "9px"
    padding: "0.6rem 0.85rem"
  inline-code:
    backgroundColor: "rgba(143, 170, 220, 0.12)"
    textColor: "{colors.vault-blue-pale}"
    typography: "{typography.mono}"
    rounded: "{rounded.chip}"
    padding: "0.12em 0.42em"
  chip-alpha:
    backgroundColor: "rgba(217, 162, 58, 0.12)"
    textColor: "{colors.warning-amber}"
    rounded: "{rounded.chip}"
    padding: "0.05rem 0.5rem"
  warning-note:
    backgroundColor: "rgba(217, 162, 58, 0.08)"
    textColor: "#e7d3a8"
    rounded: "{rounded.panel}"
    padding: "1rem 1.15rem"
---

# Design System: Clavix

## Overview

**Creative North Star: "The Vault Room"**

The site is a dark room of stacked drawers. The floor is near-black navy, and every surface placed on it is one shade lighter than the thing beneath it, the way a drawer pulled from a safe catches more light than the wall behind it. A single blue light, Bitwarden's own blue, moves through the room and tells the eye where to go: the primary button, a link, the column that is Clavix in a comparison table, the folder an item is being dropped into.

It speaks to self-hosters as peers, so precision is part of the look: inline code chips for paths and environment variables, a mock Rust file, a real comparison table, an app window drawn in CSS rather than a glossy screenshot. Density is moderate: generous section rhythm, compact and information-rich cards.

One deliberate exception breaks the blue monochrome: amber. It is reserved for telling the truth about the product's maturity, and its scarcity is what makes the alpha warning readable at a glance.

**Key Characteristics:**
- Dark navy only; there is no light theme.
- Depth by tonal layering of surfaces; shadows are rare and purposeful.
- One accent hue (vault blue) in four steps; amber only for warnings; green only for "yes".
- Inter variable, self-hosted, with heavy weights and tight tracking for headings.
- Technical texture: monospace chips, code card, CSS-drawn app window.

## Colors

A blue-black monochrome lit by one saturated blue, with amber held back for honesty.

### Primary
- **Vault Blue** (`vault-blue`): the brand anchor. Primary button fill (as the bottom of its gradient), selection highlight, skip link, tinted backgrounds at low alpha (the Clavix column in the comparison table, the drop-target folder).
- **Vault Blue Light** (`vault-blue-light`): the working accent on dark. Links, eyebrows, icons, focus rings, hover borders, the top of the primary button gradient.
- **Vault Blue Pale** (`vault-blue-pale`): text-weight accent. Inline code text, `.tag` highlights in cards, link hover, the start of the hero headline gradient.
- **Vault Blue Deep** (`vault-blue-deep`): reserved deep step of the ramp; defined but currently unused.

### Neutral
- **Night Floor** (`night-floor`): page background and the browser theme color.
- **Night Shelf** (`night-shelf`): alternating section bands (trust strip, security, footer), the mobile menu, window title bars.
- **Drawer** (`drawer`): cards, FAQ items, table container, the app mockup.
- **Drawer Raised / Drawer Lit** (`drawer-raised`, `drawer-lit`): inner layers inside a drawer (mockup list rows, selected and dragged states).
- **Frost Text** (`frost-text`): headings and primary text. Pure white is used only for `strong` and hover states.
- **Frost Soft** (`frost-soft`): body copy inside cards, leads, nav links.
- **Slate Muted / Slate Dim** (`slate-muted`, `slate-dim`): metadata, captions, footnotes, chevrons, disabled marks.
- **Hairline / Strong borders** (`border-hairline`, `border-strong`): blue-tinted translucent strokes; hairline at rest, strong on hover, open or emphasized containers.

### Status
- **Warning Amber** (`warning-amber`, text tint `warning-amber-text`): the alpha banner, the "Honest status" note, the "alpha" chip next to the release version, the unsigned-build notes on the download cards, and the comparison cells where Clavix falls short ("Not yet", "Desktop only").
- **Signal Green** (`signal-green`): "yes" checks in the comparison table and the code card's success mark. Partial marks use Frost Soft, unknowns ("?") Slate Muted.
- **Alert Red** (`alert-red`): defined for errors; not currently used on the page.

### Named Rules
**The One Light Rule.** Vault blue is the only accent hue. A new element earns emphasis through blue at the right step or alpha, never through a new color.

**The Honest Amber Rule.** Amber means "this is a limit or a risk you should know about." It is never decorative, never a second brand color, and never used for a call to action.

## Typography

**Display Font:** Inter (variable 100–900, self-hosted `assets/fonts/inter-latin.woff2`), with the system UI stack as fallback.
**Body Font:** Inter.
**Label/Mono Font:** SF Mono / JetBrains Mono / Consolas stack for code, file formats and paths.

**Character:** one neutral grotesque pushed to its extremes: heavy, tightly tracked headings over quiet, airy body text, with monospace as the technical accent.

### Hierarchy
- **Display** (800, fluid 2.2–3.5rem, line-height 1.07, -0.03em): the hero headline only. Its key phrase may carry a pale-to-vault-blue text gradient; no other hue enters it.
- **Headline** (750, fluid 1.8–2.6rem, 1.12, -0.02em): section titles, centered under an eyebrow. The CTA band uses the same weight a step smaller.
- **Title** (650, 1.12rem): card, download and security item headings; FAQ questions sit at 600 / 1.02rem.
- **Body** (400, 1.0625rem, 1.65): page default. Leads go to 1.12–1.2rem in Frost Soft; card text drops to 0.92–0.96rem.
- **Label** (700, 0.78rem, 0.14em, uppercase): section eyebrows in Vault Blue Light; footer column headings use 650 / 0.1em in Slate Muted.

### Named Rules
**The Weight, Not Size Rule.** Hierarchy comes from Inter's weight axis (400 → 650 → 750 → 800) and tracking as much as from size. Keep intermediate weights (550, 650, 750) rather than snapping to 500/600/700.

**The Self-Hosted Rule.** Fonts are served from the site itself; no font CDN, in keeping with the no-third-party-requests promise.

## Layout

A centered column of full-width bands. Content sits in a container capped at 1160px with a 1.5rem side gutter. Sections breathe at 6rem vertical padding (4rem under 720px); alternating bands switch between Night Floor and Night Shelf, separated by hairline borders, to mark rhythm without decoration.

Section heads are centered, capped at 660px, and stack eyebrow → headline → sub. Features open with one full-width lead card (the tree vault) and continue as three grouped lists with hairline dividers; downloads use three cards with a 1.2rem gap; hero and security use two columns. Breakpoints: at 980px the two-column layouts stack and the feature groups drop to two columns; at 720px everything is single-column and the nav collapses into a toggle menu; at 460px hero buttons go full-width. The header is sticky at 64px; anchors account for it with scroll padding.

## Elevation & Depth

Depth is tonal first: each layer is a lighter navy than the one beneath (Night Floor → Night Shelf → Drawer → Drawer Raised → Drawer Lit), and borders are translucent blue-grey rather than shadows. Shadows exist, but only in a few places with a job: lifting the two "window" objects (app mockup, code card) off the page, the blue glow under the primary button, and a soft lift on card hover. Ambient light comes from blurred radial blue gradients behind the hero and inside the CTA band.

### Shadow Vocabulary
- **Window lift** (`box-shadow: 0 40px 80px -30px rgba(0,0,0,0.7)`): the hero app mockup; the code card uses a smaller `0 30px 60px -30px rgba(0,0,0,0.8)`.
- **Blue glow** (`box-shadow: 0 8px 24px -8px rgba(23,93,220,0.45)`, hover `0 14px 34px -10px`): primary buttons and the dragged item in the mockup.
- **Hover lift** (`box-shadow: 0 18px 40px -24px rgba(0,0,0,0.8)`): download cards on hover, with `translateY(-3px)`.

### Named Rules
**The Drawer Rule.** To raise something, make its surface one tonal step lighter and give it a hairline border. Reach for a shadow only for a window-like object or a hover response.

## Shapes

Softly rounded rectangles throughout, with radius growing with the size of the object: 5px chips and badges, 9–10px controls (buttons, download links, nav toggle), 11px panels (FAQ items, notes, the checksum disclosure), 14px cards and tables, 16px for the app window, 20px for the CTA band. Circles appear only as status dots, window traffic lights and glow blobs. Borders are always 1px; dashed only for the drop target in the mockup.

## Components

### Buttons
- **Shape:** rounded controls (10px; small variant 9px), padding 0.8rem 1.5rem, weight 650, optional leading 18px icon.
- **Primary:** vertical gradient from Vault Blue Light to Vault Blue, white text, blue glow shadow.
- **Hover / Focus:** lifts 2px with a stronger glow; returns on press. Focus shows a 2px Vault Blue Light outline offset by 3px.
- **Ghost:** faint blue-grey fill with a strong border and Frost Text; on hover the fill doubles and the border turns Vault Blue Light.

### Chips
- **Inline code:** monospace at 0.88em, Vault Blue Pale on a 12% blue-grey wash, 5px radius. Used for every path, command, variable and file name.
- **Badges / tags:** small blue-tinted labels in the mockup; `.tag` in cards is pale-blue bold text with no background.

### Cards / Containers
- **Corner Style:** 14px (FAQ items 11px).
- **Background:** Drawer.
- **Shadow Strategy:** none at rest; hover lift on download cards (see Elevation).
- **Border:** hairline at rest, strong on hover, when a disclosure is open, or on the feature lead card.
- **Internal Padding:** 1.7rem for download cards, 2.4rem for the feature lead card.

### Feature Lead and Groups
The one thing Clavix exists for (tree vault, drag & drop) gets a full-width Drawer card with a strong border: copy on the left and, on the right, the page's one authored motion: a 7-second CSS loop in a small drawn Clavix window (Inbox selected in the tree) where a pointer lifts an item out of the list, travels onto the "Work" folder (which lights up with a dashed blue outline), disappears into it, landing just right of the label so "Work" stays readable, and the item header below swaps its path from "Personal / Inbox" to "Personal / Work"; the result holds for about 2.5 s, then the whole demo dims and fades back to the start. The loop runs only while on screen and, under reduced motion, shows the finished move as a still. Every other feature lives in one of three titled lists below it: a 1.05rem / 700 group heading over a strong rule, then items separated by hairlines, each with an 18px Vault Blue Light stroke icon inline with its 1rem / 650 title and one or two sentences of Frost Soft text. No icon tiles, no card per feature.

### Download Trust Row
The release version is always a link (to the releases page until the GitHub API answers), followed by an amber "alpha" chip and a one-line "First run" note recommending a test account. Each OS card offers one recommended build as a blue-tinted primary row (AppImage, universal .dmg, setup .exe) with the other formats as small inline links underneath; the visitor's detected OS moves first, gets a "Your system" tag and names the hero button ("Download for Linux"). Unsigned-build notes sit under their OS card in amber cream text. Below the cards, a "Verify your download (SHA-256)" disclosure explains the per-OS hash commands and, when the API answers, lists each file with its GitHub-published digest in a monospace chip.

### Navigation
- Sticky 64px header on translucent Night Floor (78%) with a 14px backdrop blur and a hairline bottom border. Logo at 750 with "ix" in Vault Blue Light. Links in Frost Soft at 0.95rem / 500, white on hover; a small primary button closes the row. Under 720px the links collapse into a Night Shelf dropdown behind a bordered toggle.

### Alpha Banner (signature)
A thin full-width strip above the header on an amber gradient wash, amber hairline bottom border, warm cream text with the "Alpha software" lead in amber and an underlined link to the disclaimer. It is the first thing on the page by design.

### App Window Mockup (signature)
A CSS-drawn Clavix window (no screenshot): title bar with grey traffic lights, a Night Shelf folder tree on the left, item rows on the right, and the hero story told in one frozen frame: an item lifted with a blue border and glow, being dropped on a folder highlighted with a dashed blue outline.

### FAQ Disclosure
Native `details`/`summary` cards; the chevron rotates 180° and turns blue when open. Answers are Frost Soft at 0.96rem with underlined links and inline code chips.

## Do's and Don'ts

### Do:
- **Do** build depth with the navy surface ladder and hairline borders before reaching for a shadow.
- **Do** use vault blue at different steps and alphas for every emphasis: links, active states, highlighted columns, icon wells.
- **Do** put every path, command, environment variable and file format in a monospace chip.
- **Do** keep amber for maturity, limits and risks: the alpha banner, honest-status notes, the alpha chip, unsigned-build notes, the comparison cells where Clavix loses.
- **Do** keep the comparison honest: include rows where Clavix falls short, date it, and mark undocumented competitor facts "?" rather than guessing.
- **Do** keep everything visible without JavaScript: the scroll reveal only hides elements under `html.js`.
- **Do** draw product visuals in HTML/CSS like the app mockup, so they stay sharp and on-palette.
- **Do** respect `prefers-reduced-motion`; motion is limited to short hover lifts, the FAQ chevron, a one-time scroll reveal and the single drag & drop demo loop (paused off-screen, a still under reduced motion).

### Don't:
- **Don't** introduce a light theme section or a second accent hue (that includes violet in gradients or code highlighting).
- **Don't** return to a grid of same-size icon cards for features.
- **Don't** use amber decoratively or for calls to action.
- **Don't** load fonts, scripts or images from third-party hosts.
- **Don't** add heavy drop shadows to flat content blocks; shadows belong to windows, the primary button and hover states.
- **Don't** use pure white for body text; it is reserved for `strong` and hover.
