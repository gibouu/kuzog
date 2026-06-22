import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import CareersPage from './CareersPage';
import { LanguageProvider } from '../contexts/LanguageContext';
import { fr } from '../i18n/content/fr';
import { ar } from '../i18n/content/ar';
import { en } from '../i18n/content/en';

function renderCareers(lang?: string) {
  if (lang) window.localStorage.setItem('kuzog_language', lang);
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={['/careers']}>
        <CareersPage />
      </MemoryRouter>
    </LanguageProvider>
  );
}

beforeEach(() => window.localStorage.clear());

describe('CareersPage localization (#48)', () => {
  it('renders localized footer + results chrome in French', () => {
    renderCareers('fr');
    // Footer label was previously hardcoded English; now from content.footer.
    expect(screen.getByRole('link', { name: fr.footer.careersLink })).toBeInTheDocument();
    expect(screen.getByText(fr.footer.copyright)).toBeInTheDocument();
    // Results count word was previously hardcoded "openings"; now localized.
    expect(screen.getByText(/^\d+\s+postes?$/)).toBeInTheDocument();
  });

  it('renders localized footer in Arabic', () => {
    renderCareers('ar');
    expect(screen.getByRole('link', { name: ar.footer.careersLink })).toBeInTheDocument();
    expect(screen.getByText(ar.footer.copyright)).toBeInTheDocument();
  });
});

describe('ProductPageShell footer policy action (#46)', () => {
  it('opens the ethics policy modal from the footer button', async () => {
    const user = userEvent.setup();
    renderCareers();
    // No dialog before clicking.
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: en.footer.ethicsLink }));
    expect(screen.getByRole('dialog', { name: en.policyModal.title })).toBeInTheDocument();
  });
});
