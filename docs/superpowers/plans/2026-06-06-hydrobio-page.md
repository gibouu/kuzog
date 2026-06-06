# KUZOG Redesign — Plan 2: `/hydrobio` Page

**Goal:** Replace the `/hydrobio` placeholder built in Plan 1 with 12 story beats matching the Rotary 2026 deck (EN + FR), using a new set of reusable components that Plans 3 and 4 will also consume.

**Architecture:** Add 9 generic story-beat components (`StoryBeat`, `BigStat`, `StatGrid`, `ComparisonTable`, `Roadmap`, `TeamMember`, `Citation`, `DiagramSlot`, `ContactCTA`) plus a small `ContactModal` enhancement for topic prefill. Add a `HydrobioContent` shape to i18n types + EN/FR/AR content (FR is deck-native; AR is placeholder for Plan 4). Compose `HydrobioPage` to walk through the 12 beats.

**Tech Stack:** Same as Plan 1.

**Branch:** `feat/4-hydrobio-page` (off `main` post-PR-#3-merge).

**Tasks:** 8 tasks (batched larger than Plan 1 since the work is content-heavy and the components are simple).

| # | What |
|---|---|
| P2-T1 | 5 generic components: `BigStat`, `StatGrid`, `Citation`, `StoryBeat`, `DiagramSlot` |
| P2-T2 | 4 more: `ComparisonTable`, `Roadmap`, `TeamMember`, `ContactCTA` |
| P2-T3 | `ContactModal` accepts optional `topic` prop for prefill |
| P2-T4 | i18n types (`HydrobioContent`) + full EN content (12 beats) |
| P2-T5 | FR content (12 beats, deck-native) |
| P2-T6 | AR placeholders (minimal strings to satisfy types; Plan 4 polishes) |
| P2-T7 | `HydrobioPage` composes all 12 beats |
| P2-T8 | Smoke test, push, open PR |

**Story beats (full content extraction in implementer dispatches):**

1. Hero — title + tagline + 3 lead stats (+47% / +18.7% / 3–5 yr)
2. Problem — 4 stats + Souss-Massa pull quote + framing line
3. Solution — Micronised Clay / Micronised Zeolite / Mycorrhizal Consortium + synergy line
4. Competitive edge — comparison table vs chemical / biostim / mineral / Hydrobio
5. Market opportunity — 22.8M ha mandate / €2.6B addressable / €260M analogs / TAM-SAM-SOM (€7B/€3.5B/€22M)
6. Results & validation — 4 stats (+47%, +18.7%, 3-5 yr, −20-30%) + roadmap (Confirmed → In Progress → 2026 → 2027 → 2028)
7. Business model — pricing grid (small/broadacre/premium) + revenue trajectory note + distribution split 55/30/15
8. GTM & roadmap — 4 deployment steps + 36-month timeline + priority split France 60% / Iberia-Italy 20% / MENA 20%
9. Team & IP — Gibril + Malik + IP cards (USPTO / Freedom-to-Operate / EU 2019/1009)
10. Systemic impact — 5 stats with citations + SDG 2/6/13/15 tile
11. Smallholder story — closing emotional beat ("500 million smallholder farmers")
12. Contact CTA — "Talk to us about Hydrobio" → opens `ContactModal` with `topic="hydrobio"`

**Spec reference:** `docs/superpowers/specs/2026-06-06-kuzog-redesign-design.md` § 7.

**Open content questions** (Plan 4 may need to resolve before AR translations):
- EN/FR roadmap order discrepancy (spec § 15 risk #1) — defaulting to FR's order in this plan
- Validation milestones differ — defaulting to FR (more specific)
- Contact email — using `contact@kuzog.com` site-wide

— Claude + gib
