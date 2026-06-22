import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { SUPPORTED_LANGUAGES } from '../i18n/languages';

const STORAGE_KEY = 'kuzog_language';

function Probe() {
  const { language } = useLanguage();
  return <span data-testid="lang">{language}</span>;
}

function renderProbe() {
  return render(
    <LanguageProvider>
      <Probe />
    </LanguageProvider>
  );
}

beforeEach(() => {
  window.localStorage.clear();
});

describe('getStoredLanguage (via LanguageProvider)', () => {
  it.each(SUPPORTED_LANGUAGES.map((l) => l.code))('restores persisted language "%s"', (code) => {
    window.localStorage.setItem(STORAGE_KEY, code);
    renderProbe();
    expect(screen.getByTestId('lang')).toHaveTextContent(code);
  });

  it('falls back to the default for an unsupported stored code', () => {
    window.localStorage.setItem(STORAGE_KEY, 'zz');
    renderProbe();
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
  });

  it('falls back to the default when nothing is stored', () => {
    renderProbe();
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
  });
});
