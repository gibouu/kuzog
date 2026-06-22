// Shared palette for the product-figure SVGs. Accent colours come from the
// global CSS vars so figures track the design tokens; the few extra hues
// (water, soil, warn) are figure-only and inlined here.
export const FIG = {
  ink: '#0f1419',
  muted: '#5a646f',
  hair: '#e6e3db',
  mp: 'var(--accent-microplantes)',
  mpSoft: '#eaf1e6',
  hy: 'var(--accent-hydrobio)',
  hySoft: '#eef1ee',
  water: '#5b8bb0',
  waterSoft: '#e4eef4',
  warn: '#c2553f',
  warnSoft: '#f6e5e0',
  soil: '#8a6d4f',
  conv: '#b9bdb5',
} as const;
