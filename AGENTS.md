# Repository instructions

## Documentation required for changes

- For every change to application code, site content, configuration, assets, dependencies, or developer workflows, update `README.md` so it accurately describes the current behavior or setup affected by the change.
- Add a concise entry to `CHANGELOG.md` for every such change. Put work in the `Unreleased` section unless a release section already applies.
- Keep the README as current reference documentation, not as a chronological list of edits. Keep chronological change notes in the changelog.
- Documentation-only edits must still be recorded in `CHANGELOG.md`. Do not add a changelog entry for editing only `CHANGELOG.md` to avoid recursive entries.
- Do not claim a build, test, or deployment was run unless it actually was.

## Project conventions

- This is a static Astro site. Keep secrets out of browser code and generated client assets.
- Use the existing design tokens in `src/styles/global.css` for colors and themes.
- Portfolio content belongs in `src/data/site.ts` where practical; reusable page sections belong in `src/components/`.
- Keep `README.md` and `CHANGELOG.md` at the repository root.
