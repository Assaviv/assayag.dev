# Aviv portfolio (Astro)

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # static output in dist/

- Content placeholders: `src/data/site.ts`
- Sections: `src/components/`
- Styles and the four themes: `src/styles/global.css`
- Photos: `src/assets/`
- Search, theme button and nav highlighting: `src/scripts/site.js`

Deploy: push to GitHub, connect the repo to Cloudflare Pages (build command `npm run build`, output `dist`).

The contribution graph can include private contribution counts when the build has a `GITHUB_TOKEN` with the `read:user` scope. Copy `.env.example` to `.env` for local builds, or add `GITHUB_TOKEN` as a secret environment variable in Cloudflare Pages. The token is used only during the build; it is not included in the generated site. Without it, the graph falls back to public contribution data.
