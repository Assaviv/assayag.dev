# Aviv Assayag — Portfolio

Personal portfolio for Aviv Assayag, built with Astro. The site is a static page with responsive layouts and four selectable color themes.

## Features

- Profile hero with CV download and contact links.
- Work cards and a GitHub contribution graph for `Assaviv`. The graph shows the latest 30 days in a 3-row by 10-column grid and follows the active site theme.
- Writing, About, and Contact sections.
- In-page search, opened with the Search button or `Ctrl K` / `⌘ K`.
- Theme switcher: Night, Daylight, Ember, and Ocean.

The Travel component is present in the source but is currently not rendered on the homepage. The Contact form is a visual placeholder and does not submit messages.

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Astro prints the local development URL (usually `http://localhost:4321`). To create and preview the static production build:

```sh
npm run build
npm run preview
```

The generated site is written to `dist/`.

## GitHub contribution graph

The graph requests public contribution data from the GitHub Contributions API when the page loads. To include private contribution counts, set `GITHUB_TOKEN` for the build to a GitHub personal access token with the `read:user` scope. The Astro build queries GitHub's GraphQL API and embeds the resulting calendar in the static page; the token is not sent to site visitors or included in the output.

For local builds, copy `.env.example` to `.env` and set the token there. For Cloudflare Pages, add `GITHUB_TOKEN` as a secret environment variable for the build. Do not commit `.env` or paste the token into source files. If the token is missing, invalid, or lacks the required scope, the graph falls back to public contribution data.

## Edit the portfolio

- Profile text, navigation, project cards, writing entries, travel labels, and social links: `src/data/site.ts`.
- Page sections and reusable UI: `src/components/`.
- Page composition: `src/pages/index.astro`.
- Shared layout and document metadata: `src/layouts/Base.astro`.
- Global layout, typography, theme variables, and shared styles: `src/styles/global.css`.
- Search behavior, theme selection, and navigation highlighting: `src/scripts/site.js`.
- Images: `src/assets/` and `public/projects/`.
- CV: `public/AvivCV.pdf`.

## Deploy

The project is configured for static output and can be deployed to Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`

The configured canonical site URL is `https://assayag.dev` in `astro.config.mjs`.

## Project instructions and change history

Repository-level agent guidance is in [`AGENTS.md`](AGENTS.md). Contributors and coding agents must keep this README accurate and add a concise entry to [`CHANGELOG.md`](CHANGELOG.md) whenever they change application behavior, content, configuration, or developer setup.
