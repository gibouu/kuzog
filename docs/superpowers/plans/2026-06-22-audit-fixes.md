# KUZOG site — audit fixes (issues #45–55 subset)

Applying the AI Engineering Review Protocol. Mapped & verified all claims against current
code (Explore pass, 2026-06-22). Site = static GitHub Pages SPA, **no backend**.

Scope (confirmed with user): bugs + foundation → **#45, #46, #47, #48, #49, #50, #51, #52, #55**.
Out of scope this round: #53 (route code-splitting), #54 (policy de-duplication) → leave open.

Delivery: **3 grouped PRs**, each branched off `main`, each closing its issues, each with tests.
Verification gate per PR: `npm run lint` + `npm test` + `npm run build` all green; `npm audit` clean.

---

## Visibility gate (protocol step 1)
The app has **zero runtime tests** (#52) — we are debugging blind. So PR 1 installs the test
harness FIRST; it is the instrumentation that makes every subsequent bug fix verifiable.

---

## PR 1 — Foundation / visibility  (closes #52, #49, #50)
Branch `fix/test-foundation`.
1. **#52 test harness**: add devDeps `vitest`, `@testing-library/react`, `@testing-library/user-event`,
   `@testing-library/jest-dom`, `jsdom`. Add `vitest.config.ts` (jsdom env, setup file with
   jest-dom). Add `"test": "vitest run"` + `"test:watch": "vitest"` scripts. One smoke test
   (renders `<App/>` without crashing) to prove the harness runs.
3. **#49 npm audit**: `npm audit fix` (non-breaking; advisories are patch-level on
   vite/rollup/picomatch). Re-verify lint + build. If `fix` is insufficient, bump vite/rollup
   minor manually. No `--force`.
4. **#50 node engines**: add `engines.node: ">=20.19.0"` to package.json, add `.nvmrc` (`22`),
   document Node floor in README. Point CI `setup-node` at `.nvmrc` (node-version-file).
5. **CI**: add `npm test` step to `.github/workflows/deploy.yml` before build.

## PR 2 — Correctness bugs  (closes #45, #51, #55)
Branch `fix/correctness-bugs`.
1. **#45 contact**: in `src/lib/contact.ts`, parse the Web3Forms JSON response and **require
   `data.success === true`** before resolving; throw `data.message` otherwise. Keep the access
   key client-side (public by design — add a one-line comment citing that). hCaptcha enforcement
   stays in the UI (no backend to move it to; documented as residual risk).
   Tests: HTTP non-ok → throws; 2xx `{success:false}` → throws; success → resolves.
2. **#51 wildcard route**: add a branded `src/pages/NotFoundPage.tsx` (i18n, link to `/`), wire a
   `<Route path="*">` in `src/main.tsx`. Verify it cooperates with the 404.html/spa-redirect flow.
   Test: render router at unknown path → NotFound UI.
3. **#55 lang validation**: `getStoredLanguage` in `LanguageContext.tsx` validates via
   `SUPPORTED_LANGUAGES.some(l => l.code === stored)`; drop the literal `['en','fr','ar']`.
   Test: every SUPPORTED_LANGUAGES code persists; junk → default.

## PR 3 — i18n + accessibility  (closes #46, #47, #48)
Branch `fix/i18n-a11y`.
1. **#46 ethics button**: `ProductPageShell` owns `PolicyModal` open state + passes a real
   `onShowPolicy`; render `<PolicyModal/>` in the shell. Test: footer Ethics Code on a shell page
   opens the modal.
2. **#47 modal a11y**: stop keeping closed modals focusable — conditionally render modal contents
   when `open` (keeping framer-motion exit via `AnimatePresence` where present), and add
   `aria-labelledby` to `PolicyModal` linked to its heading id. Tests: tab order with modals closed
   never hits modal controls; PolicyModal has an accessible name; ContactModal still focuses first
   field when open.
3. **#48 i18n strings**: move all hardcoded chrome into `src/i18n/content/{en,fr,ar}.ts` (+ `types.ts`):
   render `content.footer.copyright`/`ethicsLink` in `SiteFooter`; blog chrome (insights/coming-soon/
   body/back); careers count + Responsibilities/Profile headings (pluralized); `RecognitionBeat`
   KIND_LABEL; ContactModal "Contact" eyebrow + close aria-label; `LanguageSelector` aria-label.
   Tests: render fr + ar, assert representative non-English strings on blog/careers/footer/contact.

---

## Alternatives considered
- **#45 serverless proxy** vs client-side fix → chose client-side (no backend; key public by
  design). Documented as deliberate.
- **#47 unmount** vs `inert` attribute → prefer conditional render (simplest, fully removes focus
  stops); fall back to `inert` only if a transition regresses.
- **Test stack** Vitest+RTL vs Playwright → Vitest+RTL for component/unit (fast, in-CI);
  Playwright deferred (heavier, separate follow-up if needed).

## Risks / not-verified
- No Playwright E2E this round — route/modal behavior covered by RTL, not a real browser.
- `npm audit fix` could nudge vite minor; gated by build re-run.
- hCaptcha still enforced only client-side (static-host constraint).

## Evidence to collect per PR
File:line refs in commits; `npm run lint && npm test && npm run build` output; `npm audit`
summary; bundle size note. Final report uses the protocol's report template.
