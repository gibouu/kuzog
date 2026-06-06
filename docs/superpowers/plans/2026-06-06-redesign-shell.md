# KUZOG Redesign — Plan 1: The Shell

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor design tokens to white-dominant, retire the audience-gated funnel, and replace the homepage with a 3-card hero linking to placeholder product pages — leaving the site visibly redesigned, fully navigable, and ready for Plans 2–4 to populate product pages.

**Architecture:** Single-page changes only — no new pages with real content yet. Token swap is CSS-variable level (mostly `src/index.css` + `tailwind.config.cjs`). New `HomeHero` and `ProductCard` components replace `CallToActionCard` + `SolutionsCard` in `App.tsx`. `/hydrobio`, `/microplantes`, `/group` routes are scaffolded as placeholder pages that render only `ProductHero` + "Coming soon" so Plans 2–4 can replace their bodies without touching routing.

**Tech Stack:** React 18, Vite 7, TypeScript 5.4, Tailwind 3.4, framer-motion 12, react-router-dom 6, lucide-react.

**Branch:** `feat/1-redesign-card-layout` (already created and pushed).

**Testing note:** This codebase has no test framework. Each task verifies with `npm run lint` (which runs `tsc --noEmit`), a manual visual smoke check in `npm run dev`, and a commit. We do not add Vitest/Playwright in this plan — that's a separate decision for a later plan.

**Spec reference:** `docs/superpowers/specs/2026-06-06-kuzog-redesign-design.md`

---

## File Map

**Modified:**
- `src/index.css` — colour tokens, remove body gradients
- `tailwind.config.cjs` — new colour tokens, new font sizes, new shadow
- `src/main.tsx` — add `/hydrobio`, `/microplantes`, `/group` routes; remove `/agri` route
- `src/App.tsx` — gut audience logic; render new `HomeHero`
- `src/contexts/NavigationContext.tsx` — remove audience + showSolutions state (kept as no-op stub for any leftover imports during Plans 2–4; deletable later)
- `src/i18n/types.ts` — add `HomeContent` interface; keep existing types untouched
- `src/i18n/content/en.ts` — add `home` content block
- `src/i18n/content/fr.ts` — add `home` content block
- `src/i18n/content/ar.ts` — add `home` content block
- `src/components/BottomBar.tsx` — replace audience nav items with product-page nav items
- `src/pages/AgriPage.tsx` — deleted (retired per spec)

**Created:**
- `src/components/ProductCard.tsx` — single hero card primitive (one of the three)
- `src/components/HomeHero.tsx` — 3-card grid wrapping `ProductCard`
- `src/components/MissionLine.tsx` — one-line centred mission below the cards
- `src/pages/HydrobioPage.tsx` — placeholder, renders header + "Coming soon"
- `src/pages/MicroplantesPage.tsx` — placeholder
- `src/pages/GroupPage.tsx` — placeholder
- `src/components/ProductPageShell.tsx` — shared header + footer + outlet shell for all three product placeholder pages

**Deleted:**
- `src/components/CallToActionCard.tsx`
- `src/components/SolutionsCard.tsx`
- `src/pages/AgriPage.tsx`

**Untouched in this plan (changes deferred to Plans 2–4):**
- `src/components/ContactModal.tsx`, `PolicyModal.tsx`, `SiteFooter.tsx`, `SectionCard.tsx`, `SubCard.tsx`, `TitlePills.tsx`, `Toast.tsx`, `LanguageSelector.tsx`
- `src/lib/contact.ts` (Issue #2 fixes this)
- `index.html` (Issue #2 fixes meta tags)

---

## Task 1: Add new colour tokens to Tailwind config

**Files:**
- Modify: `tailwind.config.cjs`

- [ ] **Step 1: Replace the file's content with the new token set**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'rgba(15, 20, 25, 0.08)',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        ink: 'var(--ink)',
        'muted-ink': 'var(--muted-ink)',
        hairline: 'var(--hairline)',
        brand: 'var(--brand)',
        'brand-ink': 'var(--brand-ink)',
        'accent-hydrobio': 'var(--accent-hydrobio)',
        'accent-microplantes': 'var(--accent-microplantes)',
        'accent-group': 'var(--accent-group)',
        chip: 'var(--chip)',
        'chip-active': 'var(--chip-active)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },
      fontSize: {
        'display-xl': ['clamp(56px, 8vw, 120px)', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '600' }],
        'display-lg': ['clamp(40px, 5vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['clamp(28px, 3vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      boxShadow: {
        pill: '0 18px 40px rgba(34, 32, 28, 0.14)',
        card: '0 1px 2px rgba(15, 20, 25, 0.04), 0 24px 60px -24px rgba(15, 20, 25, 0.08)',
        'card-hover': '0 1px 2px rgba(15, 20, 25, 0.04), 0 24px 60px -16px rgba(15, 20, 25, 0.12)',
      },
      borderRadius: {
        card: '28px',
        'card-sm': '20px',
      },
    }
  },
  plugins: []
};
```

- [ ] **Step 2: Type-check**

Run: `npm run lint`
Expected: No TypeScript errors. Tailwind config is JS, so no TS impact unless other code references removed colours. (`accent` was the only removed token and was unused.)

- [ ] **Step 3: Verify Tailwind picks up new classes**

Run: `npm run build` (just to be sure config compiles)
Expected: Build succeeds. Output in `dist/`. Don't ship — we'll commit and continue.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.cjs
git commit -m "build(tailwind): add new colour tokens, display font sizes, card shadows

Adds white-dominant token set, three product accents (hydrobio /
microplantes / group), display-xl/lg/md fluid font sizes, and the
card / card-hover shadow scale used by the upcoming HomeHero.

Refs #1

— Claude + gib"
```

---

## Task 2: Swap CSS variables and remove body gradients

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Replace the file's content**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
  --bg: #ffffff;
  --surface: #ffffff;
  --surface-elevated: #f7f7f8;
  --ink: #0f1419;
  --muted-ink: #5a646f;
  --hairline: rgba(15, 20, 25, 0.08);
  --brand: #1f1f1f;
  --brand-ink: #ffffff;
  --accent-hydrobio: #7a8c7e;
  --accent-microplantes: #5f8a4f;
  --accent-group: #3a3a3a;
  --chip: #f2f2f3;
  --chip-active: #e6e6e8;
  --ring: #0f1419;
  --pill-bg: rgba(15, 20, 25, 0.04);
  --pill-text: #0f1419;
}

@layer base {
  * {
    @apply border-border;
  }

  html,
  body {
    @apply min-h-full bg-bg text-ink font-sans antialiased;
  }

  ::selection {
    background: rgba(15, 20, 25, 0.12);
    color: var(--ink);
  }

  img {
    @apply max-w-full;
  }
}

@layer utilities {
  .safe-bottom {
    padding-bottom: max(1rem, env(safe-area-inset-bottom));
  }

  .focus-ring {
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface;
  }
}
```

- [ ] **Step 2: Run dev server and verify**

Run: `npm run dev`
Expected: Site loads on white background (no warm cream tint, no radial amber/sage gradients). The "K" logo badge still appears amber — that's expected; we restyle it in Task 4.

- [ ] **Step 3: Type-check**

Run: `npm run lint`
Expected: Clean.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "style: swap to white-dominant tokens, remove body gradients

Body is now pure #ffffff with no radial colour. Introduces ink
#0f1419 (deeper than previous #1f2933) and the three product
accent variables. Existing components remain visually correct
because they reference variables.

Refs #1

— Claude + gib"
```

---

## Task 3: Restyle KUZOG "K" logo badge from amber to graphite

**Files:**
- Modify: `src/App.tsx:169`

- [ ] **Step 1: Find the badge in App.tsx**

The current code at `src/App.tsx:169` reads:

```tsx
<div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-ink text-2xl font-semibold text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">K</div>
```

It's already `bg-ink` — but `--ink` was previously `#1f2933` and is now `#0f1419` (Task 2 already changed it). The badge will already render graphite.

- [ ] **Step 2: Refine the badge — use `bg-brand` so it tracks the explicit brand token**

Change `src/App.tsx:169` from:

```tsx
<div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-ink text-2xl font-semibold text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">K</div>
```

to:

```tsx
<div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-brand text-2xl font-semibold text-brand-ink shadow-card sm:h-16 sm:w-16 sm:text-3xl">K</div>
```

(`shadow-lg` → `shadow-card` adopts the new restrained shadow; `text-white` → `text-brand-ink` uses the token.)

- [ ] **Step 3: Type-check + visual check**

Run: `npm run lint && npm run dev`
Expected: Lint clean. Logo badge appears graphite #1f1f1f with white "K", softer shadow.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "style(logo): restyle K badge to use brand token and card shadow

Refs #1

— Claude + gib"
```

---

## Task 4: Add HomeContent interface to i18n types

**Files:**
- Modify: `src/i18n/types.ts`

- [ ] **Step 1: Open `src/i18n/types.ts` and locate the `SiteContent` interface**

You'll see it starts with `export interface SiteContent { header: { ... } ...`. We're appending a new sub-interface above it and adding a `home` field inside it.

- [ ] **Step 2: Add new interface and field**

Above `export interface SiteContent {`, add:

```typescript
export interface HomeCardContent {
  eyebrow: string;
  title: string;
  microStats: string[];
  cta: string;
  accent: 'hydrobio' | 'microplantes' | 'group';
  chips?: string[]; // group card only
}

export interface HomeContent {
  cards: {
    hydrobio: HomeCardContent;
    microplantes: HomeCardContent;
    group: HomeCardContent;
  };
  mission: string;
}
```

Inside `SiteContent`, after the `header` field, add:

```typescript
  home: HomeContent;
```

- [ ] **Step 3: Type-check (will fail — content files don't have `home` yet)**

Run: `npm run lint`
Expected: TypeScript errors in `src/i18n/content/en.ts`, `fr.ts`, `ar.ts`: "Property 'home' is missing in type ...". This is expected — we add the content next.

- [ ] **Step 4: Commit the type addition**

```bash
git add src/i18n/types.ts
git commit -m "types(i18n): add HomeContent interface for the new 3-card hero

Refs #1

— Claude + gib"
```

---

## Task 5: Add `home` content block to English locale

**Files:**
- Modify: `src/i18n/content/en.ts`

- [ ] **Step 1: Open `src/i18n/content/en.ts` and find the `header:` block**

Add the `home` block immediately after the closing `}` of the `header` object (before `navigation:` or whatever the next existing key is).

- [ ] **Step 2: Insert the home content**

```typescript
  home: {
    cards: {
      hydrobio: {
        eyebrow: 'Soil Innovation',
        title: 'Restoring Soil Life. Saving Water. Feeding the World.',
        microStats: ['+47% water retention', '+18.7% crop yield', '3–5 yr effect'],
        cta: 'Discover Hydrobio',
        accent: 'hydrobio',
      },
      microplantes: {
        eyebrow: 'Plant Sovereignty',
        title: 'Industrial vegetal micropropagation, at French scale.',
        microStats: ['6–7.5M plants/yr', '370 m² ISO 5', '25 jobs at maturity'],
        cta: 'Discover Microplantes',
        accent: 'microplantes',
      },
      group: {
        eyebrow: 'The Parent Operation',
        title: 'Import, manufacture, invest. From Paris.',
        microStats: [],
        chips: [
          'Import/Export',
          'Commissioning',
          'Manufacturing',
          'Consulting',
          'Distressed-Asset Investing',
          'AI',
          'Investment Fund',
        ],
        cta: 'Explore KUZOG Group',
        accent: 'group',
      },
    },
    mission: 'KUZOG builds and operates ventures at the intersection of soil, plants, and capital — from Paris.',
  },
```

- [ ] **Step 3: Type-check — should now show errors only in fr.ts and ar.ts**

Run: `npm run lint`
Expected: Errors gone from `en.ts`; still failing in `fr.ts` and `ar.ts`.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/content/en.ts
git commit -m "i18n(en): add home content block for 3-card hero

Refs #1

— Claude + gib"
```

---

## Task 6: Add `home` content block to French locale

**Files:**
- Modify: `src/i18n/content/fr.ts`

- [ ] **Step 1: Open `src/i18n/content/fr.ts` and find the `header:` block**

Same placement as Task 5 — insert immediately after the `header` object.

- [ ] **Step 2: Insert the home content**

```typescript
  home: {
    cards: {
      hydrobio: {
        eyebrow: 'Innovation du sol',
        title: 'Restaurer la vie du sol. Économiser l’eau. Nourrir le monde.',
        microStats: ['+47% rétention d’eau', '+18,7% rendement', 'Effet 3–5 ans'],
        cta: 'Découvrir Hydrobio',
        accent: 'hydrobio',
      },
      microplantes: {
        eyebrow: 'Souveraineté végétale',
        title: 'Micropropagation végétale industrielle, à l’échelle française.',
        microStats: ['6–7,5 M plants/an', '370 m² ISO 5', '25 emplois à maturité'],
        cta: 'Découvrir Microplantes',
        accent: 'microplantes',
      },
      group: {
        eyebrow: 'La maison-mère',
        title: 'Importer, fabriquer, investir. Depuis Paris.',
        microStats: [],
        chips: [
          'Import / Export',
          'Commissionnement',
          'Industrie',
          'Conseil',
          'Investissement en actifs distressed',
          'IA',
          'Fonds d’investissement',
        ],
        cta: 'Explorer le Groupe KUZOG',
        accent: 'group',
      },
    },
    mission: 'KUZOG conçoit et exploite des entreprises à la croisée du sol, du vivant et du capital — depuis Paris.',
  },
```

- [ ] **Step 3: Type-check**

Run: `npm run lint`
Expected: `fr.ts` now compiles. Only `ar.ts` errors remain.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/content/fr.ts
git commit -m "i18n(fr): add home content block for 3-card hero

Refs #1

— Claude + gib"
```

---

## Task 7: Add `home` content block to Arabic locale

**Files:**
- Modify: `src/i18n/content/ar.ts`

- [ ] **Step 1: Open `src/i18n/content/ar.ts` and find the `header:` block**

Same placement as Tasks 5–6.

- [ ] **Step 2: Insert the home content**

```typescript
  home: {
    cards: {
      hydrobio: {
        eyebrow: 'ابتكار التربة',
        title: 'إحياء التربة. الحفاظ على الماء. إطعام العالم.',
        microStats: ['+47% احتباس الماء', '+18.7% المردود', 'مفعول 3–5 سنوات'],
        cta: 'اكتشف Hydrobio',
        accent: 'hydrobio',
      },
      microplantes: {
        eyebrow: 'السيادة النباتية',
        title: 'إكثار نباتي صناعي على المستوى الفرنسي.',
        microStats: ['6–7.5 مليون نبتة/سنة', '370 م² ISO 5', '25 وظيفة عند النضج'],
        cta: 'اكتشف Microplantes',
        accent: 'microplantes',
      },
      group: {
        eyebrow: 'المؤسسة الأم',
        title: 'استيراد، تصنيع، استثمار. من باريس.',
        microStats: [],
        chips: [
          'الاستيراد والتصدير',
          'التشغيل الصناعي',
          'التصنيع',
          'الاستشارات',
          'استثمار الأصول المتعثرة',
          'الذكاء الاصطناعي',
          'صندوق الاستثمار',
        ],
        cta: 'استكشف مجموعة KUZOG',
        accent: 'group',
      },
    },
    mission: 'تبني KUZOG وتشغّل مشاريع عند تقاطع التربة والنبات ورأس المال — من باريس.',
  },
```

- [ ] **Step 3: Type-check**

Run: `npm run lint`
Expected: All locales compile. No errors anywhere.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/content/ar.ts
git commit -m "i18n(ar): add home content block for 3-card hero

Refs #1

— Claude + gib"
```

---

## Task 8: Create the `ProductCard` component

**Files:**
- Create: `src/components/ProductCard.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HomeCardContent } from '../i18n/types';

type ProductCardProps = HomeCardContent & {
  href: string;
};

const ACCENT_DOT: Record<HomeCardContent['accent'], string> = {
  hydrobio: 'bg-accent-hydrobio',
  microplantes: 'bg-accent-microplantes',
  group: 'bg-accent-group',
};

export function ProductCard({ eyebrow, title, microStats, chips, cta, accent, href }: ProductCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col justify-between gap-8 rounded-card border border-hairline bg-surface p-8 shadow-card transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:p-10"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className={`inline-block h-2 w-2 rounded-full ${ACCENT_DOT[accent]}`} aria-hidden />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-ink">{eyebrow}</span>
        </div>
        <h2 className="text-display-md text-ink">{title}</h2>
        {microStats.length > 0 && (
          <ul className="flex flex-col gap-2">
            {microStats.map((stat) => (
              <li key={stat} className="text-sm text-muted-ink md:text-base">
                {stat}
              </li>
            ))}
          </ul>
        )}
        {chips && chips.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li key={chip} className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-ink">
                {chip}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-ink transition group-hover:gap-3">
        <span>{cta}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npm run lint`
Expected: Clean.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProductCard.tsx
git commit -m "feat(components): add ProductCard primitive for 3-card hero

Refs #1

— Claude + gib"
```

---

## Task 9: Create the `HomeHero` component

**Files:**
- Create: `src/components/HomeHero.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { useLanguage } from '../contexts/LanguageContext';
import { ProductCard } from './ProductCard';

const HREFS = {
  hydrobio: '/hydrobio',
  microplantes: '/microplantes',
  group: '/group',
} as const;

export function HomeHero() {
  const { content } = useLanguage();
  const { cards } = content.home;

  return (
    <section id="hero" className="px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
        <ProductCard {...cards.hydrobio} href={HREFS.hydrobio} />
        <ProductCard {...cards.microplantes} href={HREFS.microplantes} />
        <ProductCard {...cards.group} href={HREFS.group} />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npm run lint`
Expected: Clean.

- [ ] **Step 3: Commit**

```bash
git add src/components/HomeHero.tsx
git commit -m "feat(components): add HomeHero rendering 3 ProductCards

Refs #1

— Claude + gib"
```

---

## Task 10: Create the `MissionLine` component

**Files:**
- Create: `src/components/MissionLine.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { useLanguage } from '../contexts/LanguageContext';

export function MissionLine() {
  const { content } = useLanguage();
  return (
    <section className="px-6">
      <p className="mx-auto max-w-3xl text-center text-base text-muted-ink md:text-lg">
        {content.home.mission}
      </p>
    </section>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npm run lint`
Expected: Clean.

- [ ] **Step 3: Commit**

```bash
git add src/components/MissionLine.tsx
git commit -m "feat(components): add MissionLine for the centred mission below the hero

Refs #1

— Claude + gib"
```

---

## Task 11: Create `ProductPageShell` and three placeholder pages

**Files:**
- Create: `src/components/ProductPageShell.tsx`
- Create: `src/pages/HydrobioPage.tsx`
- Create: `src/pages/MicroplantesPage.tsx`
- Create: `src/pages/GroupPage.tsx`

- [ ] **Step 1: Create the shell**

```tsx
// src/components/ProductPageShell.tsx
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { SiteFooter } from './SiteFooter';

interface ProductPageShellProps {
  accent: 'hydrobio' | 'microplantes' | 'group';
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

const ACCENT_BAR: Record<ProductPageShellProps['accent'], string> = {
  hydrobio: 'bg-accent-hydrobio',
  microplantes: 'bg-accent-microplantes',
  group: 'bg-accent-group',
};

export function ProductPageShell({ accent, eyebrow, title, children }: ProductPageShellProps) {
  const { content } = useLanguage();
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-6 pt-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-brand text-2xl font-semibold text-brand-ink shadow-card sm:h-16 sm:w-16 sm:text-3xl">
              K
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">
              {content.header.logoText}
            </span>
          </Link>
          <LanguageSelector />
        </div>
      </header>
      <main className="mt-12 flex-1 space-y-12 md:space-y-16">
        <section className="px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className={`inline-block h-2 w-2 rounded-full ${ACCENT_BAR[accent]}`} aria-hidden />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-ink">{eyebrow}</span>
            </div>
            <h1 className="text-display-lg text-ink">{title}</h1>
          </div>
        </section>
        {children ?? (
          <section className="px-6">
            <div className="mx-auto max-w-6xl rounded-card border border-hairline bg-surface-elevated p-12 text-center">
              <p className="text-base text-muted-ink">Coming soon.</p>
            </div>
          </section>
        )}
      </main>
      <SiteFooter onShowPolicy={() => {}} />
    </div>
  );
}
```

- [ ] **Step 2: Create `src/pages/HydrobioPage.tsx`**

```tsx
import { ProductPageShell } from '../components/ProductPageShell';
import { useLanguage } from '../contexts/LanguageContext';

export default function HydrobioPage() {
  const { content } = useLanguage();
  return (
    <ProductPageShell
      accent="hydrobio"
      eyebrow={content.home.cards.hydrobio.eyebrow}
      title={content.home.cards.hydrobio.title}
    />
  );
}
```

- [ ] **Step 3: Create `src/pages/MicroplantesPage.tsx`**

```tsx
import { ProductPageShell } from '../components/ProductPageShell';
import { useLanguage } from '../contexts/LanguageContext';

export default function MicroplantesPage() {
  const { content } = useLanguage();
  return (
    <ProductPageShell
      accent="microplantes"
      eyebrow={content.home.cards.microplantes.eyebrow}
      title={content.home.cards.microplantes.title}
    />
  );
}
```

- [ ] **Step 4: Create `src/pages/GroupPage.tsx`**

```tsx
import { ProductPageShell } from '../components/ProductPageShell';
import { useLanguage } from '../contexts/LanguageContext';

export default function GroupPage() {
  const { content } = useLanguage();
  return (
    <ProductPageShell
      accent="group"
      eyebrow={content.home.cards.group.eyebrow}
      title={content.home.cards.group.title}
    />
  );
}
```

- [ ] **Step 5: Type-check**

Run: `npm run lint`
Expected: Clean.

- [ ] **Step 6: Commit**

```bash
git add src/components/ProductPageShell.tsx src/pages/HydrobioPage.tsx src/pages/MicroplantesPage.tsx src/pages/GroupPage.tsx
git commit -m "feat(pages): scaffold /hydrobio, /microplantes, /group placeholder pages

Each renders ProductPageShell with eyebrow + title pulled from
the home cards content. Body is a 'Coming soon' card. Plans 2-4
replace the body via children prop without touching routing.

Refs #1

— Claude + gib"
```

---

## Task 12: Wire new routes in `main.tsx`, remove `/agri`

**Files:**
- Modify: `src/main.tsx`
- Delete: `src/pages/AgriPage.tsx`

- [ ] **Step 1: Replace `src/main.tsx` content**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { NavigationProvider } from './contexts/NavigationContext';
import App from './App';
import BlogPage from './pages/BlogPage';
import HydrobioPage from './pages/HydrobioPage';
import MicroplantesPage from './pages/MicroplantesPage';
import GroupPage from './pages/GroupPage';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <NavigationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/hydrobio" element={<HydrobioPage />} />
            <Route path="/microplantes" element={<MicroplantesPage />} />
            <Route path="/group" element={<GroupPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </BrowserRouter>
      </NavigationProvider>
    </LanguageProvider>
  </React.StrictMode>
);
```

- [ ] **Step 2: Delete the AgriPage file**

```bash
git rm src/pages/AgriPage.tsx
```

- [ ] **Step 3: Type-check**

Run: `npm run lint`
Expected: Will likely fail — `src/App.tsx` line 19 still has `const AGRI_URL = '/agri';` and the nav items reference it. Note the failures; we fix them in Task 14.

- [ ] **Step 4: Commit the routing change even though App.tsx is still dirty**

(We allow this transient lint failure to keep tasks small. Task 14 fixes it.)

```bash
git add src/main.tsx src/pages/AgriPage.tsx
git commit -m "feat(routing): add /hydrobio /microplantes /group routes; retire /agri

App.tsx still references AGRI_URL — fixed in the next commit.

Refs #1

— Claude + gib"
```

---

## Task 13: Simplify `NavigationContext` (remove audience + showSolutions state)

**Files:**
- Modify: `src/contexts/NavigationContext.tsx`

- [ ] **Step 1: Replace the file's content with a minimal stub**

```tsx
import { createContext, useContext, ReactNode } from 'react';

interface NavigationContextType {
  // Intentionally minimal. Audience-based navigation was removed in
  // the redesign (issue #1). This stub remains so any leftover
  // imports compile during Plans 2-4 cleanup. Safe to delete the
  // entire context once no consumers remain.
  noop: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  return (
    <NavigationContext.Provider value={{ noop: () => {} }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
```

- [ ] **Step 2: Type-check**

Run: `npm run lint`
Expected: Fails — `src/App.tsx` destructures `showSolutions`, `setSelectedAudience`, `setShowSolutions`, `resetNavigation` from `useNavigation()`. These no longer exist. Task 14 fixes that.

- [ ] **Step 3: Commit (transient lint failure)**

```bash
git add src/contexts/NavigationContext.tsx
git commit -m "refactor(navigation): remove audience + showSolutions state

NavigationContext is now a near-empty stub. The audience funnel
is retired. App.tsx still references the removed state — fixed
in the next commit.

Refs #1

— Claude + gib"
```

---

## Task 14: Gut `App.tsx` — remove audience picker, render `HomeHero`

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace the file's content entirely**

```tsx
import { useCallback, useEffect, useState } from 'react';
import { Home as HomeIcon, Mail, Sprout, Building2, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { BottomBar } from './components/BottomBar';
import { ContactModal } from './components/ContactModal';
import { PolicyModal } from './components/PolicyModal';
import { Toast } from './components/Toast';
import { SiteFooter } from './components/SiteFooter';
import { HomeHero } from './components/HomeHero';
import { MissionLine } from './components/MissionLine';

export default function App() {
  const { content } = useLanguage();
  const [activeNav, setActiveNav] = useState<'home' | 'hydrobio' | 'microplantes' | 'group' | 'contact'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isContactOpen || isPolicyOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactOpen, isPolicyOpen]);

  const handleReturnToStart = useCallback(() => {
    setActiveNav('home');
    if (typeof window === 'undefined') return;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);

  const navItems = [
    { key: 'home' as const, label: content.navigation.home, icon: HomeIcon, onSelect: handleReturnToStart },
    { key: 'hydrobio' as const, label: 'Hydrobio', icon: Sprout, onSelect: () => { window.location.href = '/hydrobio'; } },
    { key: 'microplantes' as const, label: 'Microplantes', icon: Sprout, onSelect: () => { window.location.href = '/microplantes'; } },
    { key: 'group' as const, label: 'Group', icon: Building2, onSelect: () => { window.location.href = '/group'; } },
    { key: 'contact' as const, label: content.navigation.contact, icon: Mail, onSelect: () => { setIsContactOpen(true); setActiveNav('contact'); } },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message={content.contactModal.successMessage} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} onSuccess={() => setToastOpen(true)} />
      <PolicyModal open={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
      <BottomBar items={navItems} activeKey={activeNav} />

      <header className="px-6 pt-10" id="home">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-3 no-underline"
            onClick={handleReturnToStart}
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-brand text-2xl font-semibold text-brand-ink shadow-card sm:h-16 sm:w-16 sm:text-3xl">K</div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">{content.header.logoText}</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => { setIsContactOpen(true); setActiveNav('contact'); }}
              className="inline-flex h-11 flex-shrink-0 items-center justify-center rounded-full border border-hairline bg-surface px-4 text-xs font-semibold text-ink shadow-card transition hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:h-12 sm:w-44 sm:text-sm"
            >
              {content.header.contactButton}
            </button>
          </div>
        </div>
      </header>

      <main className="mt-12 flex-1 space-y-16 md:space-y-24">
        <HomeHero />
        <MissionLine />
      </main>

      <SiteFooter onShowPolicy={() => setIsPolicyOpen(true)} />
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npm run lint`
Expected: Clean. The transient errors from Tasks 12 and 13 should now be resolved.

- [ ] **Step 3: Visual smoke test**

Run: `npm run dev` and visit `http://localhost:5173`.

Verify:
- White background, no warm tint.
- KUZOG "K" badge is graphite.
- Three cards (Hydrobio / Microplantes / Group) visible above the fold on desktop.
- Hover state: card lifts ~2px, shadow grows.
- Each card click navigates to the matching placeholder page (`/hydrobio`, `/microplantes`, `/group`).
- Mission line appears below the cards.
- Language selector still works; switching to FR/AR re-renders correctly. AR flips RTL.
- Contact button opens the modal.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat(home): replace audience funnel with 3-card HomeHero

App.tsx is now ~70 lines (down from ~370). The audience picker
(CallToActionCard + SolutionsCard) is gone. Homepage renders
HomeHero + MissionLine + footer. BottomBar nav reduced to Home /
Hydrobio / Microplantes / Group / Contact.

Refs #1

— Claude + gib"
```

---

## Task 15: Delete retired components

**Files:**
- Delete: `src/components/CallToActionCard.tsx`
- Delete: `src/components/SolutionsCard.tsx`

- [ ] **Step 1: Confirm no references remain**

Run: `grep -RIn "CallToActionCard\|SolutionsCard" src/`
Expected: No output (the imports were removed in Task 14).

- [ ] **Step 2: Delete the files**

```bash
git rm src/components/CallToActionCard.tsx src/components/SolutionsCard.tsx
```

- [ ] **Step 3: Type-check + smoke test**

Run: `npm run lint && npm run dev`
Expected: Clean. Homepage still renders correctly.

- [ ] **Step 4: Commit**

```bash
git commit -m "chore(components): remove CallToActionCard and SolutionsCard

The audience-gated funnel is retired. Both components had no
remaining references after the homepage refactor.

Refs #1

— Claude + gib"
```

---

## Task 16: Smoke test the build and assert all three locales

**Files:**
- None modified

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: Build succeeds. No type errors. Output in `dist/`.

- [ ] **Step 2: Preview the production build**

Run: `npm run preview`
Expected: Serves at `http://localhost:4173`. Visit and confirm the same checks as Task 14 Step 3.

- [ ] **Step 3: Locale check matrix**

In the preview, click the language selector and visit each combination:

| Locale | Home renders? | /hydrobio renders? | /microplantes renders? | /group renders? | RTL correct? |
|---|---|---|---|---|---|
| EN | ✓ | ✓ | ✓ | ✓ | n/a |
| FR | ✓ | ✓ | ✓ | ✓ | n/a |
| AR | ✓ | ✓ | ✓ | ✓ | ✓ (whole page flipped) |

If AR layout is broken, file a follow-up issue — don't block this plan on RTL polish; that's tracked for Plan 4.

- [ ] **Step 4: Verify no orphaned files**

Run: `grep -RIn "audience\|showSolutions\|selectedAudience" src/`
Expected: No matches. If any appear, they're leftover and need cleaning.

- [ ] **Step 5: Commit if anything was cleaned up**

If Step 4 surfaced leftovers, fix them and commit:

```bash
git add -A
git commit -m "chore: remove residual audience-funnel references

Refs #1

— Claude + gib"
```

If Step 4 was clean, skip this commit.

---

## Task 17: Final review

- [ ] **Step 1: Read the diff**

Run: `git diff main...HEAD --stat`
Expected: A reasonable diff — roughly 11 files modified, 5 created, 3 deleted, ~600 lines net.

- [ ] **Step 2: Self-question**

Ask: "Would a staff engineer approve this branch?" Specifically:
- Is the homepage visually clean and obviously redesigned vs main?
- Is `/hydrobio`, `/microplantes`, `/group` reachable and styled, even with placeholder bodies?
- Are there any dead imports or unused exports?
- Does `tsc --noEmit` pass?
- Does the production build succeed?

If any answer is "no", create a new task and fix it before declaring the plan done.

- [ ] **Step 3: Push the branch**

Run: `git push origin feat/1-redesign-card-layout`
Expected: All commits land on the remote feature branch.

- [ ] **Step 4: Open the PR**

Run:

```bash
gh pr create --base main --head feat/1-redesign-card-layout \
  --title "Redesign: card-based layout, 3-card HomeHero, retire audience funnel (Plan 1)" \
  --body "$(cat <<'EOF'
## Summary

Implements **Plan 1 — The Shell** of issue #1. Refactors design tokens to white-dominant, retires the audience-gated funnel, and replaces the homepage with a 3-card hero linking to placeholder product pages.

Plans 2–4 (`/hydrobio`, `/microplantes`, `/group` content) layer on top of this branch.

## What changed

- Design tokens: white background, retired amber gradients, three product accents (sage / green / graphite).
- Homepage: `CallToActionCard` + `SolutionsCard` removed. `HomeHero` + `MissionLine` added.
- Routing: `/hydrobio`, `/microplantes`, `/group` added as placeholder pages. `/agri` retired.
- `NavigationContext` reduced to a stub (audience state removed).
- i18n: new `home` block in EN / FR / AR.

## Out of scope here

- Real content on the three product pages (Plans 2–4).
- Security hardening: leaked Web3Forms key + missing CSP — see #2.

## Test plan

- [ ] `npm run lint` clean
- [ ] `npm run build` succeeds
- [ ] Homepage renders three cards above the fold on desktop
- [ ] Each card navigates to its placeholder page
- [ ] Switch language: EN / FR / AR all render
- [ ] AR is right-to-left
- [ ] Contact modal still opens / submits / shows toast
- [ ] No remaining references to "audience" / "showSolutions" / "selectedAudience" in src/

Closes #1 (Plan 1 only — Plans 2-4 will be separate PRs that follow)

— Claude + gib
EOF
)"
```

Expected: PR URL printed.

- [ ] **Step 5: Mark this plan complete**

Plan 1 is done when the PR is open and the test plan checkboxes can all be ticked. Plans 2–4 begin from this branch (or rebase on top once merged).

---

## Self-review notes

**Spec coverage check:**
- ✅ § 4.1 tokens — Tasks 1, 2
- ✅ § 4.2 type scale — Task 1
- ✅ § 4.3 cards (radius, shadow, hover) — Tasks 1, 8
- ✅ § 4.4 spacing — Tasks 1, 8, 9
- ✅ § 5 component inventory (HomeHero, ProductCard, MissionLine, ProductPageShell created; CallToActionCard, SolutionsCard retired; NavigationContext simplified) — Tasks 8, 9, 10, 11, 13, 15
- ✅ § 6 home page beats — Tasks 9, 10, 14
- ✅ § 11 i18n — Tasks 4–7
- ⏭️ § 7, § 8, § 9 product page beats — out of scope for Plan 1 (placeholder pages only)
- ⏭️ § 12 diagram prompts — assets land in Plan 2+
- ⏭️ § 13 security — Issue #2, separate workstream
- ⏭️ § 14 Phases 4–9 — Plans 2–4
- ⏭️ § 4.3 glass blur removal on legacy components (SectionCard, etc.) — deferred to Plans 2–4 when those components are touched

**Open risks (non-blocking):**
- AR RTL polish on the 3-card grid not fully verified. Plan 4 owns RTL hardening.
- The current `BottomBar` consumes a `navItems` prop with `onSelect` callbacks. Task 14 redirects nav items to product page URLs via `window.location.href` — direct anchor would be cleaner. If `BottomBar` accepts `to` props instead, switch to `Link`. (Defer until you read BottomBar source — if it's trivial, do it inline; if not, file a polish ticket.)
- `SiteFooter`'s `onShowPolicy` is invoked with `() => {}` in `ProductPageShell` — placeholder pages can't open the policy modal until the modal is hoisted to a layout component or context. Acceptable for placeholder phase.

— Claude + gib
