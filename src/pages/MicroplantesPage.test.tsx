import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import MicroplantesPage from './MicroplantesPage';
import { LanguageProvider } from '../contexts/LanguageContext';
import { en } from '../i18n/content/en';

function renderPage() {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={['/microplantes']}>
        <MicroplantesPage />
      </MemoryRouter>
    </LanguageProvider>
  );
}

describe('MicroplantesPage figures (#65)', () => {
  it('wires the four product figures into the page', () => {
    renderPage();
    expect(screen.getByRole('img', { name: en.figures.multiplication.title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: en.figures.notGmo.title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: en.figures.labJourney.title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: en.figures.virusFree.title })).toBeInTheDocument();
  });
});
