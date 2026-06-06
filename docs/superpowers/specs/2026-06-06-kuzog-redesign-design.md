# KUZOG site redesign — design spec

**Date:** 2026-06-06
**Issue:** [#1](https://github.com/gibouu/kuzog/issues/1)
**Branch:** `feat/1-redesign-card-layout`
**Direction:** A — "Apple Pro Page" (locked in after brainstorm)

---

## 1. Goals

1. Replace the audience-gated funnel with a clean, white, card-based homepage centred on three product lines: **Hydrobio**, **Microplantes**, **KUZOG Group**.
2. Treat Hydrobio and Microplantes as their own investor-grade product pages (each effectively a separate company).
3. Compress the parent operation's 6+ activities into a single secondary destination (`/group`).
4. Retire the amber/cream colour story; move to a white-dominant, typography-led Apple Pro Page aesthetic.
5. Preserve the existing i18n (EN/FR/AR), language selector, contact modal, policy modal, and footer.

## 2. Non-goals (explicitly out of scope)

- Blog redesign beyond minimal token alignment
- Security fixes (separate issue — see § 13)
- Backend / CMS migration
- `kuzog.ca` (Canada consulting subdomain) — stays as external link only
- New CRM / lead-routing integration

## 3. Information architecture

```
/                 Home — 3-card hero
/hydrobio         Hydrobio product page (story-beat scroll)
/microplantes     Microplantes product page (story-beat scroll)
/group            KUZOG Group — parent operation, 6+ activities
/blog             Existing blog page (light restyle to new tokens)
                  /agri retired (content optionally folded into /hydrobio)
                  kuzog.ca remains external; linked from /group
```

- Direct anchors for each story beat (e.g. `/hydrobio#team`) for shareable deep-links.
- 404 page restyled to match new tokens.

## 4. Visual system

### 4.1 Colour tokens (CSS variables in `src/index.css`)

| Token | Value | Notes |
|---|---|---|
| `--bg` | `#ffffff` | retire current cream `#f7f1e6` |
| `--surface` | `#ffffff` | unchanged value, but cards now use very subtle inner `#fafafa` for separation |
| `--surface-elevated` | `#f7f7f8` | new — for nested cards inside product pages |
| `--ink` | `#0f1419` | darker than current `#1f2933` for stronger typographic contrast on white |
| `--muted-ink` | `#5a646f` | unchanged |
| `--hairline` | `rgba(15, 20, 25, 0.08)` | new — replaces `border` for card edges |
| `--brand` | `#1f1f1f` | KUZOG mark — neutral graphite. Retire amber `#d6a86a`. |
| `--brand-ink` | `#ffffff` | inverted text on dark KUZOG mark |
| `--accent-hydrobio` | `#7a8c7e` | quiet sage/clay tone for Hydrobio sections only |
| `--accent-microplantes` | `#5f8a4f` | quiet green for Microplantes sections only |
| `--accent-group` | `#3a3a3a` | neutral graphite for Group sections |
| `--ring` | `#0f1419` | focus ring — high contrast on white |
| `--chip` / `--chip-active` | `#f2f2f3` / `#e6e6e8` | neutral chip greys |

The body radial gradients in `index.css` lines 32-34 are removed. Pure `#ffffff` background.

### 4.2 Typography

- Font stack unchanged (Inter / SF — already in `tailwind.config.cjs`).
- New scale (clamped, fluid):
  - `display-xl` — `clamp(56px, 8vw, 120px)`, weight 600, letter-spacing `-0.04em` — used for the giant stats (+47%, 6M plants/yr).
  - `display-lg` — `clamp(40px, 5vw, 72px)`, weight 600 — page hero titles.
  - `display-md` — `clamp(28px, 3vw, 44px)`, weight 600 — beat titles.
  - `body-lg` — `18px` desktop / `16px` mobile — lead paragraphs.
  - `body` — `16px` — default.
  - `caption` — `13px`, muted — citations, sources, captions.
- All weights restricted to `400` / `500` / `600` (no 700+ — keeps it Apple).

### 4.3 Cards

- Border radius `28px` for hero cards, `20px` for nested sub-cards.
- Border: 1px `--hairline`.
- Shadow: `0 1px 2px rgba(15, 20, 25, 0.04), 0 24px 60px -24px rgba(15, 20, 25, 0.08)` — soft, restrained.
- Hover (only on linked cards): translate `-2px` + shadow grows. Apple uses this sparingly; we match.
- Glassmorphism (`backdrop-blur-2xl bg-white/60`) used in current `App.tsx:205` is removed. We're not glass anymore.

### 4.4 Spacing

- Beat (full-width section) vertical padding: `120px` desktop, `64px` mobile.
- Card internal padding: `40px` desktop, `24px` mobile.
- Grid gap between hero cards: `24px`.
- Max content width: `1200px` (`max-w-6xl` mostly preserved).

## 5. Component inventory

### New components (under `src/components/`)

| Component | Purpose |
|---|---|
| `HomeHero.tsx` | Three hero cards on `/`. Props: array of `{ title, tagline, accent, microStats[], href }`. |
| `ProductHero.tsx` | Top-of-page hero on product pages: title + tagline + 3 lead stats. |
| `StoryBeat.tsx` | Full-width section wrapper with `id`, optional `eyebrow`, optional `accentColor`, children. |
| `BigStat.tsx` | Giant number (display-xl) + label + optional caption + optional citation. |
| `StatGrid.tsx` | 2/3/4-column grid of `BigStat`s. |
| `ComparisonTable.tsx` | Hydrobio competitive matrix (rows = criteria, cols = chemical / biostim / mineral / HYDROBIO). |
| `Roadmap.tsx` | Horizontal milestone timeline with phase labels + dates. |
| `TeamMember.tsx` | Founder bio: photo slot + name + title + bullets. |
| `Citation.tsx` | Formal source attribution block — small italic muted text. |
| `DiagramSlot.tsx` | Bordered placeholder with intended dimensions + AI-prompt commentary baked into the source so user can swap in the final image. |
| `ContactCTA.tsx` | "Talk to us about Hydrobio / Microplantes" — opens existing `ContactModal` with a `topic` pre-filled. |
| `ActivityCard.tsx` | Used on `/group` for each of the 6 activities. |
| `RecognitionBar.tsx` | Logos / recognition strip (Paris&Co, Open Carca, Ville de Paris) for `/group`. |

### Components kept (light restyle only — new tokens)

`SectionCard`, `SubCard`, `TitlePills`, `BottomBar`, `ContactModal`, `PolicyModal`, `SiteFooter`, `LanguageSelector`, `Toast`.

### Components retired (deleted on this branch)

`CallToActionCard.tsx`, `SolutionsCard.tsx`, all audience-tailored solutions content under `src/i18n/content/*`.

### Files modified

- `src/App.tsx` — gutted; becomes a thin home-page composition.
- `src/main.tsx` — add new routes for `/hydrobio`, `/microplantes`, `/group`.
- `src/index.css` — token swap, remove gradients.
- `tailwind.config.cjs` — add new accent tokens + display font sizes + new shadow.
- `src/i18n/content/*` — new content blocks for product pages; removed audience funnel copy.
- `src/contexts/NavigationContext.tsx` — simplified (no audience state).
- `index.html` — meta tags updated; OG title/description per page (per-route OG handled in code).

## 6. Home page (`/`)

**Beat structure:**

1. **Header** — KUZOG mark + `LanguageSelector` + a single "Contact" pill button (right). The current "K" badge stays but loses the amber bg → graphite `--brand`.
2. **Three product cards (above the fold on ≥1280px)** — equal-width on desktop, stacked on mobile.
   - **Hydrobio card**
     - Eyebrow: "Soil Innovation"
     - Headline: "Restoring Soil Life. Saving Water. Feeding the World."
     - Micro-stats: `+47% water retention` · `+18.7% crop yield` · `3–5 yr effect`
     - Accent: `--accent-hydrobio`
     - CTA: `Discover Hydrobio →`
     - Diagram slot: top half of card — sage/earth-tone abstract (prompt P-1).
   - **Microplantes card**
     - Eyebrow: "Plant Sovereignty"
     - Headline: "Industrial vegetal micropropagation, at French scale."
     - Micro-stats: `6–7.5M plants/yr` · `370 m² ISO 5` · `25 jobs at maturity`
     - Accent: `--accent-microplantes`
     - CTA: `Discover Microplantes →`
     - Diagram slot: top half of card — clean lab/plant abstract (prompt P-2).
   - **KUZOG Group card**
     - Eyebrow: "The Parent Operation"
     - Headline: "Import, manufacture, invest. From Paris."
     - Sub-list (chips): Import/Export · Commissioning · Manufacturing · Consulting · Distressed-Asset Investing · AI · Investment Fund
     - Accent: `--accent-group`
     - CTA: `Explore KUZOG Group →`
     - Diagram slot: top half — neutral graphite abstract (prompt P-3).
3. **Mission line** — one centred sentence below the cards: *"KUZOG builds and operates ventures at the intersection of soil, plants, and capital — from Paris."* (translatable).
4. **Footer** — existing `SiteFooter` with new tokens.

No more audience picker, no more "Find your solution" gate.

## 7. `/hydrobio` page — 12 story beats

Source: `/Users/gibou/Downloads/1777231083119_HYDROBIO_Rotary2026_Final.pptx` (EN, 11 slides) and `/Users/gibou/Downloads/HYDROBIO_Rotary2026_FR.pptx` (FR, 11 slides).

| # | Beat | Content | Components |
|---|---|---|---|
| 1 | Hero | "Restoring Soil Life. Saving Water. Feeding the World." + Hydrobio tagline + lead 3 stats. | `ProductHero` |
| 2 | The Problem | 4 stats (×2 drought, 33% degraded soils, 70% freshwater, ×3 fertiliser cost) + Souss-Massa anecdote pull-quote + "Today's solutions each address only ONE dimension" line. | `StatGrid` + pull-quote |
| 3 | The Solution | 3-card sub-grid: Micronised Clay / Micronised Zeolite / Mycorrhizal Consortium. Each: title + role + 3 bullets. Synergy line below. | 3× `SubCard` + diagram D-1 |
| 4 | Competitive Edge | Comparison table: rows = criteria, cols = chemical / biostimulant / mineral amendment / HYDROBIO. Closing line: "the only solution combining all 3 dimensions". | `ComparisonTable` |
| 5 | Market Opportunity | 4 cards: 22.8M ha EU mandate / €2.6B addressable / €260M analogs / TAM-SAM-SOM tile (€7B / €3.5B / €22M). With citations. | `StatGrid` + `Citation` |
| 6 | Results & Validation | 4 stats (+47% / +18.7% / 3–5 yr / −20–30%) + roadmap timeline. Asterisk note. | `StatGrid` + `Roadmap` |
| 7 | Business Model | Pricing grid (Small/Broadacre/Premium → margin/price). Revenue trajectory chart placeholder. Distribution split (55/30/15). | Custom + `DiagramSlot` D-2 |
| 8 | Go-to-Market & Roadmap | 4 deployment steps (Pilot Farms → Coops → Distributors → MENA). 36-month timeline with 4 phases. Priority split France 60%, Iberia/Italy 20%, MENA 20%. | `Roadmap` + step cards |
| 9 | Team & IP | Gibril (R&D / Waterloo / inventor) + Malik (CEO / Wharton / 15y). USPTO patent + Freedom-to-Operate + EU Reg 2019/1009 cards. | 2× `TeamMember` + 3× IP card |
| 10 | Systemic Impact | 5 stats with citations (<18mo ROI, >0.5 t/ha C-seq, ×3 biodiversity, −25% nitrate leaching, ∞ degraded soils) + SDG 2/6/13/15 tile. | `StatGrid` + `Citation` |
| 11 | Smallholder story | "500 million smallholder farmers" — emotional closing beat. Up to €7,700/ha/yr + 3-5yr/+47%. | Narrative beat |
| 12 | Contact CTA | "Talk to us about Hydrobio" → opens `ContactModal` with `topic="hydrobio"`. Also "Download deck" button (PDF link; gated to optional). | `ContactCTA` |

## 8. `/microplantes` page — 12 story beats

Source: `/Users/gibou/Downloads/Untitled.txt` (3,516-line investment dossier, FR-native).

| # | Beat | Content | Components |
|---|---|---|---|
| 1 | Hero | "Industrial vegetal micropropagation, French scale" + lead 3 stats: 6–7.5M plants/yr · 952 m² · €1.564M raise (€1.470M net). | `ProductHero` |
| 2 | The Opportunity | France imports 60% of young plants (mostly NL); €1B+ trade deficit; 12:1 import/export ratio; ~286M plants imported/yr; 5%/yr decline in French actors. Source: VALHOR/FranceAgriMer. | `StatGrid` + `Citation` |
| 3 | The Method | What micropropagation is (meristem culture, virus-free, 80–90% time gain). Density comparison: 19,000 vs 100 vs 50 vs 30 vs 5 plants/m²/yr — visual bar chart (D-3). | Narrative + `DiagramSlot` D-3 |
| 4 | The Site | Boissy-l'Aillerie (95) reconversion of ex-SEBBIN site. 952 m² across 2 floors, 370 m² ISO 5 cleanrooms ready, 1,307 m² land. Carrying via SEMAVO (lease-to-own). Site plan/photo slot. | Beat + `DiagramSlot` D-4 |
| 5 | The Partnership | Micro Plantas Costa Rica — 35 yrs, 10M plants/yr, 200+ species. Fernando Alvaredo on site Day 1. 5 pillars of collaboration. Map France↔Costa Rica. | Beat + `DiagramSlot` D-5 |
| 6 | Market segments | 4 segments with target volumes: Ornamentals 65–70% (150–200M/yr) · Maraîchères 30–50M · Arboricoles 20–30M · Tropical/MENA 5–10M. | `StatGrid` |
| 7 | Competition | Fragmented French in-vitro: Vitropic (CIRAD) 3–5M, Lab. Angevin 1M, Delbard 1.05M, Invenio 500k+, CTIFL 400k, Plant Palm 250k, etc. MICROPLANTES positions as **neutral multi-species industrial platform**. | Comparison/competition card grid |
| 8 | Operations & ramp | Capacity ramp curve over 7 years 0 → 6–7.5M. Workforce ramp 0 → 25–31. Operational calendar from amorçage to maturity. | `Roadmap` + chart |
| 9 | Financials | Revenue trajectory, gross margin, EBITDA target, BFR, breakeven year. Capital structure: KUZOG France 75–80% / Investor 20–25%. Founder dilution localised in MICROPLANTES, not the holding. | Tables + `DiagramSlot` D-6 |
| 10 | Team | Gibril (President / Waterloo nanotech / clean-room expert) · Malik (Director / Wharton / international ops) · Anne Buchwalder (strategic consultant) · Fernando Alvaredo (technical partner). | 4× `TeamMember` |
| 11 | SWOT / strategic synthesis | Brief strategic close — what makes this credible (recognitions: Paris&Co incubation, Ville de Paris €30k grant, Open Carca 2025 laureate). | Beat |
| 12 | Contact CTA | "Talk to us about Microplantes" → modal with `topic="microplantes"`. Optional deck download. | `ContactCTA` |

## 9. `/group` page

| # | Beat | Content |
|---|---|---|
| 1 | Hero | "KUZOG — the parent operation." Short paragraph: Paris-based, Paris&Co incubated, Ville de Paris-backed, Open Carca 2025 laureate. Operating across import/export, manufacturing, capital, and AI. |
| 2 | Activities grid | 6 `ActivityCard`s in a 3×2 grid: |
| | | • **Import / Export & Commissioning** — turnkey procurement and commissioning across MENA + EU. |
| | | • **Manufacturing** — industrial reconversion + greenfield builds (Microplantes is the flagship). |
| | | • **Consulting** — strategy & advisory for industrial agri/agronomy clients. External link to `kuzog.ca`. |
| | | • **Distressed-Asset Investing** — opportunistic acquisitions of industrial sites and businesses with strategic value. |
| | | • **AI** — applied AI projects internal + advisory. |
| | | • **Investment Fund** — KUZOG-anchored vehicle for adjacent ventures. |
| 3 | Recognition | `RecognitionBar` — Paris&Co · Ville de Paris · Open Carca 2025 |
| 4 | Contact CTA | General contact → modal with `topic="group"`. |

## 10. Interactions

- All linked cards: `transition` on hover — `translateY(-2px)`, shadow grows to `0 24px 60px -16px rgba(15,20,25,0.12)`. 200ms ease-out.
- Product page story beats: framer-motion `whileInView` reveal — opacity 0→1, y 24px→0, viewport `{ once: true, margin: "-15%" }`. Already a dep.
- Anchor scroll: smooth, accounting for header height.
- `BottomBar` (current): re-purposed to show product-page beats (Hero / Solution / Market / Roadmap / Team / Contact) when on a product page; original site-section behaviour preserved on `/`.
- No carousels, no auto-rotating elements.
- No glass blur (removed).

## 11. Internationalisation

- 3 locales preserved: EN / FR / AR (already wired via `LanguageContext`).
- Hydrobio: EN copy from EN deck; FR copy from FR deck; AR copy translated from EN by user.
- Microplantes: FR copy from dossier (canonical); EN translated from FR; AR translated from EN.
- Group: EN/FR/AR — light, ~150 words per locale.
- RTL: verify each new component handles `dir="rtl"`. `ComparisonTable`, `Roadmap`, and `StatGrid` need explicit RTL check.
- Content lives in `src/i18n/content/{en,fr,ar}/*.ts` — split per page (`home.ts`, `hydrobio.ts`, `microplantes.ts`, `group.ts`).

## 12. Diagrams — prompts for user to generate

User will produce these (AI-generated or hand-drawn). Each spec includes: intent, dimensions, palette hint, content checklist, and AI prompt.

### Home page

**P-1 — Hydrobio hero abstract**
- Intent: Quiet, premium, "soil-and-life" abstract for the top of the Hydrobio card.
- Dimensions: 1200×800 (3:2). Will be cropped to top 50% of card.
- Palette: `--accent-hydrobio` (#7a8c7e) + warm off-white + soft umber accents.
- Content: Abstract macro of soil structure / mycelium-like filaments / cross-section of a soil profile with roots — no people, no products.
- Prompt: *"Premium minimalist macro photography of soil cross-section with delicate mycelium filaments and a single fine root, sage-green and warm umber tones on a soft white background, very shallow depth of field, editorial product-page aesthetic, no text, no logo"*.

**P-2 — Microplantes hero abstract**
- Intent: Clean lab/plant feel, sterile but alive.
- Dimensions: 1200×800.
- Palette: `--accent-microplantes` (#5f8a4f) + cool whites + glass.
- Content: Abstract macro of vitroplants in a culture vessel or rack of glass tubes on a clean shelf — no labels, no faces.
- Prompt: *"Minimalist editorial macro of a small green plantlet growing inside a clear glass culture tube, soft natural daylight, clean ISO-5 cleanroom background slightly out of focus, fresh green and clinical white tones, no text, no logo, Apple product page aesthetic"*.

**P-3 — KUZOG Group hero abstract**
- Intent: Neutral, industrial-but-elevated, parent operation feel.
- Dimensions: 1200×800.
- Palette: `--accent-group` (#3a3a3a) + warm white.
- Content: Abstract geometry — overlapping shapes representing the diverse activities, or a Parisian-rooftop abstract.
- Prompt: *"Minimalist abstract geometric composition of overlapping soft-edged rectangles in graphite, charcoal, and warm off-white, suggesting interconnected operations, paper-like texture, editorial Apple-page aesthetic, no text, no logo"*.

### Hydrobio page

**D-1 — Three-component synergy diagram (Beat 3)**
- Intent: Show Clay + Zeolite + Mycorrhizae → Synergy.
- Dimensions: 1600×900.
- Content: Three labelled circles (Clay / Zeolite / Mycorrhizae) overlapping in a Venn-style centre marked "Synergy: 3× faster colonisation + 3–5 yr effect". Minimal, monoline.
- Prompt: *"Minimalist Venn diagram, three overlapping circles in sage green tones, labels 'Micronised Clay', 'Micronised Zeolite', 'Mycorrhizal Consortium', centre intersection labelled 'Synergy', monoline strokes, white background, editorial aesthetic, no other decoration"*.

**D-2 — Revenue trajectory chart (Beat 7)**
- Intent: Show revenue ramp 2026–2030 (€M).
- Dimensions: 1600×900.
- Content: Simple line or stepped bar chart, 2026 (~0) → 2028 (break-even) → 2030 (€22M). Sage accent line on white.
- Prompt: *"Minimalist editorial revenue chart, single sage-green line graph from 2026 to 2030, y-axis €M scale 0 to 25, milestone markers at 'Break-even 2028' and '€22M 2030', clean axes, no gridlines, white background, Apple keynote aesthetic"*.

### Microplantes page

**D-3 — Density comparison bar chart (Beat 3)**
- Intent: Show MICROPLANTES density (19,000 plants/m²) vs alternatives (100 / 50 / 30 / 5).
- Dimensions: 1600×900.
- Content: 5 horizontal bars, MICROPLANTES bar dramatically longer. Labels include surface-equivalence: "7 ha for the same volume in intensive serre". Light green accent for MICROPLANTES.
- Prompt: *"Minimalist horizontal bar chart comparing planting density of 5 methods: 'MICROPLANTES (5-tier shelves)' 19,000 / 'Intensive greenhouse' 100 / 'Stolons fraisier' 50 / 'Framboisier drageons' 30 / 'Greffage' 5 — MICROPLANTES bar in fresh green far longer than the others, secondary labels showing surface needed for 7M plants/year (370 m² vs 7 ha vs 14 ha vs 23 ha vs 140 ha), white background, editorial aesthetic"*.

**D-4 — Site floor plan diagram (Beat 4)**
- Intent: Show the Boissy-l'Aillerie facility footprint.
- Dimensions: 1600×900.
- Content: Simplified floor plan, two floors stacked, 370 m² ISO-5 cleanroom highlighted in green, total 952 m², 1,307 m² land outline.
- Prompt: *"Minimalist architectural floor-plan diagram of a two-floor industrial building, 952 m² total footprint, 370 m² ISO 5 cleanroom area highlighted in soft green, surrounded by a 1,307 m² land outline in light grey, monoline strokes on white background, labels in small caps, editorial style"*.

**D-5 — France ↔ Costa Rica partnership map (Beat 5)**
- Intent: Show the strategic transfer of know-how + explants from Costa Rica to France.
- Dimensions: 1600×900.
- Content: Simplified world map showing two points (Alajuela CR + Boissy-l'Aillerie FR) connected by a curved line. Annotations of the 5 pillars.
- Prompt: *"Minimalist world map showing only two labelled points connected by a thin sage-green arc — 'Alajuela, Costa Rica' to 'Boissy-l'Aillerie, France' — five small text annotations along the arc reading 'Know-how transfer', 'Staff training', 'Day-1 supervision', 'Process license', 'Joint R&D', white background, geographic outlines in very light grey, editorial style"*.

**D-6 — Capital structure diagram (Beat 9)**
- Intent: Show holding ↔ filiale structure before/after raise.
- Dimensions: 1600×900.
- Content: Two stacked org charts. Before: KUZOG France (Gibril 70% / Malik 30%) → owns MICROPLANTES 100%. After: same holding, Investor 20–25% direct in MICROPLANTES, KUZOG France 75–80%.
- Prompt: *"Minimalist organisational chart diagram showing capital structure before and after fundraise. Top half: KUZOG France SAS with two shareholders (Gibril 70%, Malik 30%) owning 100% of MICROPLANTES SAS. Bottom half: same KUZOG France structure, but MICROPLANTES SAS now owned 75–80% by KUZOG France and 20–25% by Investor. Boxes connected with thin grey lines, sage-green accent on shareholder percentages, white background, editorial style"*.

User can replace any of these with custom artwork — the `DiagramSlot` component reserves the space and shows the prompt inline in dev so the asset can be slotted in later.

## 13. Security findings — separate workstream (issue to be filed)

Audit summary (full report in conversation log; will be filed as issue #2):

**Critical fixes (file as Issue #2, separate branch):**

1. **Rotate the leaked Web3Forms key** — `src/lib/contact.ts:9` ships `f2ce33a4-b6ff-430d-8df0-83d86a51c7f5` in the public bundle. Rotate it, restrict to `kuzog.com` in Web3Forms settings, and add hCaptcha + honeypot to `ContactModal`.
2. **Add meta-tag CSP** to `index.html` (GitHub Pages can't set HTTP headers). Move the inline SPA-redirect script at `index.html:35-49` to an external file first.
3. **Add `X-Content-Type-Options`, `Referrer-Policy` meta tags.**
4. **Delete `api/contact.ts`** — dead code on GitHub Pages, but a live endpoint with vulnerabilities if/when migrated.
5. **Run `npm audit`** locally and bump deps.

**Not blocking the redesign**, but touching `index.html` and `ContactModal` is shared surface — coordinate so we don't conflict. Recommend: ship redesign first on `feat/1`, then layer security fixes on top in `fix/2`.

## 14. Implementation phases (rough — full plan written separately via `writing-plans` skill)

| Phase | Outcome |
|---|---|
| 1 | Token + colour refactor. Body becomes white, gradients gone. No new pages yet. |
| 2 | Retire audience picker. `App.tsx` becomes thin home composition. Site looks empty but clean. |
| 3 | `HomeHero` with 3 cards. Diagrams as placeholders. |
| 4 | `/hydrobio` scaffold + all 12 beats with EN content + placeholder diagrams. |
| 5 | `/microplantes` scaffold + 12 beats with FR content + placeholder diagrams. |
| 6 | `/group` page. |
| 7 | i18n fill: EN/FR/AR for all new pages. |
| 8 | Real diagrams swapped in. |
| 9 | QA: responsive, RTL, Lighthouse, type-check, smoke tests. |

## 15. Risks & open questions

1. **Roadmap discrepancy EN vs FR Hydrobio deck.** EN slide 8 has *Q2 2026 → Pre-Industrialization, Q4 → Validation*. FR slide 8 has them swapped. User to confirm canonical order before populating i18n.
2. **Validation milestones differ** between EN and FR decks (FR mentions FarmInnLab + Occitanie; EN doesn't). Assume FR is newer; user to confirm.
3. **Contact email** — EN deck shows `contact@kuzog.com`; FR deck shows `management@kuzog.com`. Spec defaults to `contact@`. User to confirm.
4. **AR translations not yet produced.** User to supply or commission.
5. **RTL layout** of horizontal `Roadmap` and `ComparisonTable` components — needs test coverage.
6. **Diagram availability** — pages will look incomplete until user generates assets from the prompts in § 12.
7. **Deck download** — gated on user providing a clean PDF of each deck. Optional in v1.
8. **`/agri` retirement** — confirm no inbound links / SEO weight before removing.
9. **`BottomBar` repurpose** — current behaviour drives audience funnel; new behaviour drives in-page beat navigation. Consider if this surprises returning users.
10. **Build deploy on GitHub Pages** — site uses Pages (per security audit). Make sure new routes work with Pages SPA fallback (`404.html` redirect trick already in place at `index.html:35-49`).

## 16. Acceptance criteria (mirrors issue #1)

- [ ] Visiting `/` shows three product cards above the fold on desktop with no audience-selection gate
- [ ] `/hydrobio` exists and walks through 12 story beats matching the Rotary 2026 deck content
- [ ] `/microplantes` exists and walks through ~12 story beats matching the investment dossier
- [ ] `/group` exists with the 6 activity cards + recognition section
- [ ] Body background is pure white, no radial gradients
- [ ] All three languages (EN/FR/AR) render correctly on all pages, RTL verified
- [ ] No regression in `BottomBar`, `ContactModal`, `LanguageSelector` behaviour
- [ ] `tsc --noEmit` clean
- [ ] Lighthouse perf ≥ 90 on each new page
- [ ] All `DiagramSlot`s either show real artwork or show the spec prompt in dev only (not on prod)

— Claude + gib
