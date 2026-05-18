# WolfThemes Wiki

Documentation, FAQs and code snippets for WolfThemes products.
Built with [VitePress](https://vitepress.dev/).

## Local Development

Install dependencies and run the local server:

    npm install
    npm run docs:dev

Runs at http://localhost:5173

## Adding Content

Drop a `.md` file in the relevant folder under `docs/`:

- `general/`
- `getting-started/`
- `troubleshooting/`
- `features/`
- `how-to/`
- `extras/`
- `faq/`

Then register it in the sidebar inside `docs/.vitepress/config.mts`.

## Build

    npm run docs:build

Output goes to `docs/.vitepress/dist`.

## Deploy

Deploys automatically to GitHub Pages on push to `main` (GitHub Actions — coming soon).

## Live

[wiki.wolfthemes.com](https://wiki.wolfthemes.com)
