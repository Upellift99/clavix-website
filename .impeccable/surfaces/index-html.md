---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: clavix.org landing page (`index.html`)

Scope: the single landing page of clavix.org. Visitor mode: Persuade.

Audience and job: self-hosters already running Vaultwarden (primary) and KeePassXC users considering the move (second door), judging in seconds whether Clavix is worth installing and whether it can be trusted near a vault. Action: download the build for their OS, or read the source. Proof: the product shown at work (the tree, the three columns), the honest alpha status, real security facts, the comparison table. Constraints: static HTML/CSS/JS, no build step, GitHub Pages, no trackers, self-hosted fonts, English copy, light and dark following the visitor's system.

Chosen direction: mockup 1 "La migration", amended by the maintainer: the page must also speak to people already on Vaultwarden, for whom Clavix is simply a practical desktop client for the vault they already have. Memorable moment: the before/after of the same tree, KeePassXC groups becoming Clavix folders on your own server.

## Direction contract

THESIS: the page shows the visitor their own hierarchy carried over (KeePassXC groups or Vaultwarden folders become a real tree with drag & drop), instead of the category's split hero with a glossy screenshot and a row of feature cards.

OWN-WORLD: the app's identity, unchanged: cool neutrals (#f4f6f6 ground, #ffffff paper, #eaeded pane; dark #171a1b / #1f2425 / #262c2d), one accent family (verdigris #0f8b8d, deep teal #0b5c5e, mint #bfe9e4), the seal mark, Inter for UI type and display, Atkinson Hyperlegible for identifiers, paths and code, 1 px hairlines, 6 to 10 px radii, deep-teal bands as the Persuade surface's committed colour, amber only for the alpha truth.

STORY: a self-hoster understands within one viewport that Clavix is a native desktop client for the Vaultwarden they run, with the tree KeePassXC gave them; sees the alpha status before anything else; picks their door (coming from KeePassXC, or already on Vaultwarden); reads proof (security facts, comparison); downloads the right package.

FIRST VIEWPORT (1440 × 900): amber alpha bar on top; header with seal, wordmark, nav, Download. Left: the headline (the KeePassXC experience for your Vaultwarden vault, "KeePassXC experience" in verdigris), then two doors as a short line each ("Coming from KeePassXC?" / "Already on Vaultwarden or Bitwarden?") linking to their sections. Right: lead, the working download button naming the OS and package, View source, the other packages. Below, full width: the before/after pair, a neutral KeePassXC-like tree, an arrow, the same groups in Clavix's three-column window.

FORM: the dealt lead of the surface roll (structure 6 of my seven, "the migration story"), extended with a second door for Vaultwarden users. seed:f8a661024bf27979

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
