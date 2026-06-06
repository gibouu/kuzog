# KUZOG Redesign — Plan 3: `/microplantes` Page

**Goal:** Replace the `/microplantes` placeholder built in Plan 1 with 12 story beats sourced from the investment committee dossier (FR-native). Reuses all 9 components shipped in Plan 2.

**Architecture:** No new components. New `MicroplantesContent` type, full FR (canonical) + EN (translated) + AR (placeholders) content, MicroplantesPage composition.

**Branch:** `feat/6-microplantes-page` (off main after PR #5 merge).

| Task | What |
|---|---|
| P3-T1 | i18n types (`MicroplantesContent`) + EN content (12 beats) |
| P3-T2 | FR content (deck-native — the dossier is French) |
| P3-T3 | AR placeholders |
| P3-T4 | `MicroplantesPage` composition (12 beats) |
| P3-T5 | Smoke test, push, open PR |

**12 story beats:**

1. Hero — title + tagline + lead stats: 6–7.5M plants/yr · 370 m² ISO 5 · 25 jobs at maturity · €1.564M raise (€1.470M net)
2. Opportunity — France imports 60% of young plants; €1B/yr deficit; 12:1 import/export; ~286M plants imported/yr; 5%/yr French actor decline
3. Method — micropropagation explained + density comparison (D-3 diagram): 19,000 vs 100 vs 50 vs 30 vs 5 plants/m²/yr
4. Site — Boissy-l'Aillerie ex-SEBBIN reconversion, 952 m² / 370 m² ISO 5 / 1,307 m² land, SEMAVO lease-to-own (D-4 floor plan)
5. Partnership — Micro Plantas Costa Rica (35 yrs, 10M plants/yr, 200+ species) + Fernando Alvaredo on site Day 1 + 5 collaboration pillars (D-5 France ↔ CR map)
6. Market segments — Ornamentals 65–70% (150–200M) · Maraîchères 30–50M · Arboricoles 20–30M · Tropical/MENA 5–10M
7. Competition — Vitropic 3–5M · Lab. Angevin 1M · Delbard 1.05M · Invenio 500k+ · CTIFL 400k · Plant Palm 250k. MICROPLANTES positions as neutral multi-species industrial platform
8. Operations & ramp — Workforce 25 → 31, capacity 0 → 6–7.5M over 7 years
9. Financials — CA trajectory: 2027 €397k → 2030 €4.95M → 2032 €10.6M. EBITDA margin reaches 82% in 2032. ROI 6.8× capital in 7 years. Capital structure: KUZOG France 75–80% / Investor 20–25% (D-6 capital structure org chart)
10. Team — Gibril Bachouchi (President / Waterloo nanotech / cleanroom expert) · Malik Bachouchi (Director / Wharton / 15-yr international finance ops) · Anne Buchwalder (strategic consultant) · Fernando Alvaredo (technical partner, Costa Rica)
11. SWOT / 10 KSFs — site security, protocol mastery, sanitary quality, commercial debouchés, value-chain positioning, acclimation control, ERP, team, unit-cost discipline, regulatory credibility
12. Contact CTA — "Talk to us about Microplantes" → `ContactModal` with topic="microplantes"

**Spec reference:** `docs/superpowers/specs/2026-06-06-kuzog-redesign-design.md` § 8.

— Claude + gib
