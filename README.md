# clavix.org

Marketing site for [Clavix](https://github.com/Upellift99/clavix) — a modern
desktop client for Vaultwarden & Bitwarden.

Plain static site (hand-written HTML/CSS/JS, no build step, no trackers),
served by GitHub Pages from the repository root.

## Structure

```
index.html          # the whole page
css/style.css        # dark "vault" theme, Bitwarden-blue accent
js/main.js           # mobile nav, scroll reveal, latest-release fetch
assets/              # logo, favicon, self-hosted Inter font, social card
CNAME                # clavix.org
```

The download links resolve to the newest GitHub release at runtime
(`js/main.js` queries the GitHub API), so they never go stale when a new
Clavix version ships.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Updating the social card

`assets/social-card.png` (1200×630) is the Open Graph / Twitter preview image.
Regenerate it if the tagline changes.

## License

Content © Clavix contributors. Clavix itself is GPL-3.0-or-later.
