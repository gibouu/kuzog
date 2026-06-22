// Generates public/compliance-ethics/index.html from the single canonical policy
// source at src/content/ethics-policy.html, so the standalone compliance page and
// the in-app PolicyModal never drift (both read the same fragment).
//
//   node scripts/generate-compliance-page.mjs          # write the static page
//   node scripts/generate-compliance-page.mjs --check  # fail (exit 1) if stale
//
// Runs automatically before every build via the "prebuild" npm script.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SOURCE = resolve(ROOT, 'src/content/ethics-policy.html');
const OUTPUT = resolve(ROOT, 'public/compliance-ethics/index.html');

const HEAD = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>KUZOG — Ethics Code</title>
    <!-- GENERATED FILE — do not edit by hand. Source: src/content/ethics-policy.html
         Regenerate: npm run build (prebuild) or node scripts/generate-compliance-page.mjs -->
    <style>
      :root {
        color-scheme: light;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --bg: #f7f1e6;
        --surface: rgba(255, 255, 255, 0.7);
        --ink: #1f2933;
        --muted: #5a646f;
      }
      body {
        margin: 0;
        min-height: 100vh;
        background: radial-gradient(circle at 25% 20%, rgba(214, 168, 106, 0.2), transparent 60%),
          radial-gradient(circle at 75% 10%, rgba(157, 183, 178, 0.2), transparent 65%),
          var(--bg);
        color: var(--ink);
        line-height: 1.65;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      header {
        padding: 4rem 1.5rem 1.5rem;
        text-align: center;
      }
      header h1 {
        font-size: clamp(2.5rem, 5vw, 3.25rem);
        margin-bottom: 0.75rem;
      }
      header p {
        margin: 0;
        font-size: 1rem;
        color: var(--muted);
      }
      main {
        width: min(960px, calc(100% - 2.5rem));
        background: var(--surface);
        border-radius: 32px;
        box-shadow: 0 30px 60px rgba(31, 41, 51, 0.12);
        backdrop-filter: blur(18px);
        padding: clamp(2rem, 6vw, 3.5rem);
        margin-bottom: 4rem;
      }
      h2 {
        font-size: 1.5rem;
        margin-top: 2.5rem;
        margin-bottom: 0.75rem;
      }
      h3 {
        font-size: 1.15rem;
        margin-bottom: 0.5rem;
      }
      ul {
        margin: 0.5rem 0 0.5rem 1.25rem;
      }
      footer {
        padding-bottom: 3rem;
        color: var(--muted);
      }
      a {
        color: inherit;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>KUZOG Ethics Code</h1>
      <p>Version bilingue FR/EN — KUZOG FRANCE, 22 rue Sébastien-Mercier, 75015 Paris</p>
    </header>
    <main>
      <article>
`;

const TAIL = `      </article>
    </main>
    <footer>
      <a href="/">Retour à kuzog.com</a>
    </footer>
  </body>
</html>
`;

/** Pure: assemble the full static compliance page from the policy fragment. */
export function renderCompliancePage(fragment) {
  return `${HEAD}${fragment.replace(/\n+$/, '\n')}${TAIL}`;
}

/** Read the canonical fragment from disk. */
export function readPolicyFragment() {
  return readFileSync(SOURCE, 'utf8');
}

// CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const expected = renderCompliancePage(readPolicyFragment());
  const check = process.argv.includes('--check');
  if (check) {
    let current = '';
    try {
      current = readFileSync(OUTPUT, 'utf8');
    } catch {
      current = '';
    }
    if (current !== expected) {
      console.error(
        '✗ public/compliance-ethics/index.html is out of date with src/content/ethics-policy.html.\n' +
          '  Run: node scripts/generate-compliance-page.mjs'
      );
      process.exit(1);
    }
    console.log('✓ compliance page is in sync with the canonical policy source.');
  } else {
    writeFileSync(OUTPUT, expected);
    console.log(`✓ wrote ${OUTPUT} from src/content/ethics-policy.html`);
  }
}
