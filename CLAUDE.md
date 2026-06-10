# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run docs:dev       # dev server at http://localhost:5173
npm run docs:build     # build to docs/.vitepress/dist
npm run docs:preview   # preview the built output locally
```

## Architecture

This is a [VitePress](https://vitepress.dev/) documentation site for WolfThemes products, deployed to [wiki.wolfthemes.com](https://wiki.wolfthemes.com) via GitHub Actions on every push to `master`.

**Content** lives as Markdown files under `docs/` organized by section:

| Folder | Purpose |
|---|---|
| `general/` | WordPress fundamentals, hosting, server requirements |
| `getting-started/` | Theme install, demo import, plugin activation |
| `how-to/` | Step-by-step guides (fonts, updates, PHP config) |
| `troubleshooting/` | Common errors and fixes |
| `features/` | Theme-specific feature documentation |
| `extras/` | Coming soon pages, 404, security tips |
| `faq/` | Frequently asked questions |
| `snippets/` | Code snippet pages |
| `public/` | Static assets (images, CNAME) |

**Sidebar registration** — every new page must be added to the `sidebar` array in `docs/.vitepress/config.mts`. The sidebar groups match the folder names above. Missing entries won't appear in the nav.

**Deployment** — GitHub Actions (`.github/workflows/deploy.yml`) runs `npm run docs:build` and publishes `docs/.vitepress/dist` to the `gh-pages` branch using `peaceiris/actions-gh-pages`.
