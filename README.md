# KUZOG Experience Site

## Development

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

## Key Components

- `components/BottomBar.tsx` renders the liquid-glass navigation bar with scrollspy and responsive variants.
- `components/SectionCard.tsx` provides the shared glassmorphic section container and main title pill styling.
- `components/SubCard.tsx` renders the uniform inner cards used throughout regional/services sections.
- `components/TitlePills.tsx` exposes `MainTitlePill` / `SubTitlePill` for bubble headings.
- `components/ContactModal.tsx` manages the inline contact form and mailto fallback.
- `components/PolicyModal.tsx` displays the bilingual ethics code inside a scrollable modal.

Update copy inside the relevant section blocks in `src/App.tsx`. The scrollspy listens to sections with IDs `hero`, `industries`, and `services`; to anchor additional sections, extend the observer configuration at the top of `App.tsx`.

To edit the ethics policy, modify the text inside `components/PolicyModal.tsx`. If you also want to update the standalone static page, adjust `public/compliance-ethics/index.html`.
