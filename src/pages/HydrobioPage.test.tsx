import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import HydrobioPage from './HydrobioPage';
import { LanguageProvider } from '../contexts/LanguageContext';
import { fr } from '../i18n/content/fr';
import { ar } from '../i18n/content/ar';

function renderHydrobio(lang?: string) {
  if (lang) window.localStorage.setItem('kuzog_language', lang);
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={['/hydrobio']}>
        <HydrobioPage />
      </MemoryRouter>
    </LanguageProvider>
  );
}

beforeEach(() => window.localStorage.clear());

describe('HydrobioPage localization (#59)', () => {
  it('renders localized ROI table headers in French', () => {
    renderHydrobio('fr');
    expect(screen.getByRole('columnheader', { name: fr.hydrobio.results.roiColumns.irrigation })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: fr.hydrobio.results.roiColumns.yieldGain })).toBeInTheDocument();
  });

  it('renders localized ROI table headers in Arabic', () => {
    renderHydrobio('ar');
    expect(screen.getByRole('columnheader', { name: ar.hydrobio.results.roiColumns.fertilizer })).toBeInTheDocument();
  });
});
