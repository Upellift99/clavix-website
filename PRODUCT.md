# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people who self-host Vaultwarden (sysadmins, developers, homelab users) and want a comfortable native desktop client for it. They arrive from GitHub, forums or search, already know Bitwarden/Vaultwarden, and are judging whether Clavix is worth installing — and whether it can be trusted near a password vault.

Former KeePassXC users and Bitwarden cloud users are welcome but secondary; the site is not written for them first.

## Product Purpose

clavix.org is the marketing site for Clavix, a free, open-source (GPL-3.0-or-later) desktop client for Vaultwarden and Bitwarden. Its job is to explain what Clavix does differently, be honest about its maturity, and get the right visitor to a download or to the source code. Success: a self-hoster understands the tree vault / drag & drop pitch within seconds, sees the alpha status before trusting it with secrets, and finds the build for their OS.

## Positioning

The KeePassXC experience for a Vaultwarden vault: a real hierarchical tree built from folder names and org collections, with drag & drop of items and folders, plus full write access — free, with no premium tier. Native (Tauri 2 / Rust, not Electron), with the Bitwarden crypto reimplemented in-project rather than bundling the official SDK. Not affiliated with Bitwarden, Vaultwarden, Keyguard or KeePassXC.

## Operating Context

- Visitors compare Clavix against Bitwarden Desktop and Keyguard; the site carries a comparison table.
- Downloads come from GitHub Releases; `js/main.js` resolves the latest release at runtime, so the site never pins a version number.
- The app ships on Linux (AppImage, .deb, .rpm), macOS (universal .dmg) and Windows (.exe / .msi).
- The site must be kept in step with the app's releases (source of truth: the `clavix` repo's CHANGELOG and README).

## Capabilities and Constraints

Product capabilities the site may claim (as of app v0.22.0): tree vault with drag & drop; item create/edit/delete incl. organizations; full 2FA (TOTP, YubiKey OTP, WebAuthn/FIDO2 over CTAP2/HID); YubiKey unlock (hmac-secret); embedded SSH agent (Unix socket on Linux/macOS, OpenSSH named pipe + Pageant on Windows); security audit (HIBP k-anonymity, reused/weak passwords); live TOTP and QR scanning; encrypted offline cache with read-only fallback; encrypted backups openable read-only without a server; password strength (entropy in the generator, zxcvbn elsewhere); KeePassXC import; tray and auto-lock; English and French UI. Works with self-hosted Vaultwarden and Bitwarden cloud (US/EU); SSH-key items on Vaultwarden need its experimental feature flag.

Site constraints:
- Plain static HTML/CSS/JS, no build step, deployed by GitHub Pages via Actions from the repo root; custom domain clavix.org.
- No trackers, no analytics, no third-party requests beyond the GitHub API call for the latest release. Fonts are self-hosted.
- Site copy is English only.

## Brand Commitments

- Name: Clavix. Existing logo, favicon and social card in `assets/`.
- Voice: direct, technical, honest; speaks to people who know what Argon2id and `SSH_AUTH_SOCK` are.
- The alpha status is shown openly and prominently — top banner, an "Honest status" note in the security section, and the FAQ, linking to the DISCLAIMER. This is a brand commitment, not a temporary embarrassment to minimise.
- Must state that the crypto is unaudited and that part of the code was AI-assisted under human review.

## Evidence on Hand

- The app itself, its README, CHANGELOG and DISCLAIMER in the `clavix` repo; GitHub releases.
- No testimonials, user counts, press, benchmarks or security audit exist. Never invent them.

## Product Principles

1. Honesty over hype: every claim matches what the shipped release actually does; maturity and limits are stated plainly.
2. Lead with the difference: the tree vault and drag & drop are the reason Clavix exists.
3. Respect the visitor's privacy the way the product does: no tracking, nothing loaded that isn't needed.
4. Speak to self-hosters as peers: concrete technical detail beats marketing adjectives.
