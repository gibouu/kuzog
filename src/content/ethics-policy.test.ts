import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { describe, it, expect } from 'vitest';
import { renderCompliancePage, readPolicyFragment } from '../../scripts/generate-compliance-page.mjs';
// The modal consumes the exact same fragment (?raw), proving one source feeds both.
import policyHtml from './ethics-policy.html?raw';

const here = dirname(fileURLToPath(import.meta.url));
const STATIC_PAGE = resolve(here, '../../public/compliance-ethics/index.html');

describe('ethics policy single source (#54)', () => {
  it('PolicyModal and the static page read the same canonical fragment', () => {
    // policyHtml is what the modal renders; readPolicyFragment() is what the
    // generator uses. Same file → identical.
    expect(policyHtml).toBe(readPolicyFragment());
  });

  it('the committed static compliance page is in sync with the source (no drift)', () => {
    const onDisk = readFileSync(STATIC_PAGE, 'utf8');
    const expected = renderCompliancePage(readPolicyFragment());
    expect(onDisk).toBe(expected);
  });
});
