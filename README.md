# KUZOG Experience Site

## Development

Requires **Node >= 20.19.0** (Vite 7 engine floor; see `.nvmrc` / `engines` in `package.json`).
With `nvm`, run `nvm use` to pick up the pinned version.

```bash
npm install
npm run dev
```

- `npm run lint` — type-check (`tsc --noEmit`).
- `npm test` — run the Vitest + React Testing Library suite.
- `npm run build` — production build.

CI (`.github/workflows/deploy.yml`) runs lint, test, and build on every push to `main` before deploying.

## Key Components

- `components/BottomBar.tsx` renders the liquid-glass navigation bar with scrollspy and responsive variants.
- `components/SectionCard.tsx` provides the shared glassmorphic section container and main title pill styling.
- `components/SubCard.tsx` renders the uniform inner cards used throughout regional/services sections.
- `components/TitlePills.tsx` exposes `MainTitlePill` / `SubTitlePill` for bubble headings.
- `components/ContactModal.tsx` manages the inline contact form and mailto fallback.
- `components/PolicyModal.tsx` displays the bilingual ethics code inside a scrollable modal.

Update copy inside the relevant section blocks in `src/App.tsx`. The scrollspy listens to sections with IDs `hero`, `industries`, and `services`; to anchor additional sections, extend the observer configuration at the top of `App.tsx`.

### Ethics policy — single source of truth

The ethics code lives in **one** file: `src/content/ethics-policy.html` (the `<article>` body as semantic HTML). Both surfaces read it:

- `components/PolicyModal.tsx` imports it (`?raw`) and renders it in the in-app modal.
- `public/compliance-ethics/index.html` (the standalone page) is **generated** from it by `scripts/generate-compliance-page.mjs`, which runs automatically on `npm run build` (via `prebuild`).

To update the policy: edit `src/content/ethics-policy.html` only, then run `npm run build` (or `node scripts/generate-compliance-page.mjs`) to regenerate the static page. Do **not** hand-edit `public/compliance-ethics/index.html` — it carries a "generated file" banner. `npm run check:compliance` (and the test suite) fail if the two ever drift.
