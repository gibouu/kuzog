import type { ComponentType } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { LanguageProvider } from '../../contexts/LanguageContext';
import {
  MultiplicationTreeFigure,
  NotGmoFigure,
  LabJourneyFigure,
  VirusFreeFigure,
  SurfaceAreaFigure,
  HoldsWaterFigure,
  PorousFigure,
  MycorrhizaeFigure,
} from './index';
import { en } from '../../i18n/content/en';
import { fr } from '../../i18n/content/fr';
import { ar } from '../../i18n/content/ar';

function renderFig(Comp: ComponentType, lang?: string) {
  if (lang) window.localStorage.setItem('kuzog_language', lang);
  return render(
    <LanguageProvider>
      <Comp />
    </LanguageProvider>
  );
}

beforeEach(() => window.localStorage.clear());

const cases: [string, ComponentType][] = [
  [en.figures.multiplication.title, MultiplicationTreeFigure],
  [en.figures.notGmo.title, NotGmoFigure],
  [en.figures.labJourney.title, LabJourneyFigure],
  [en.figures.virusFree.title, VirusFreeFigure],
  [en.figures.surfaceArea.title, SurfaceAreaFigure],
  [en.figures.holdsWater.title, HoldsWaterFigure],
  [en.figures.porous.title, PorousFigure],
  [en.figures.mycorrhizae.title, MycorrhizaeFigure],
];

describe('product figures', () => {
  it.each(cases)('renders "%s" with an accessible image name', (title, Comp) => {
    renderFig(Comp);
    expect(screen.getByRole('img', { name: title })).toBeInTheDocument();
  });

  it('localizes the figure in French', () => {
    renderFig(SurfaceAreaFigure, 'fr');
    expect(screen.getByRole('img', { name: fr.figures.surfaceArea.title })).toBeInTheDocument();
    expect(screen.getByText(fr.figures.surfaceArea.micronised)).toBeInTheDocument();
  });

  it('localizes the figure in Arabic', () => {
    renderFig(MycorrhizaeFigure, 'ar');
    expect(screen.getByRole('img', { name: ar.figures.mycorrhizae.title })).toBeInTheDocument();
    expect(screen.getByText(ar.figures.mycorrhizae.reachLabel)).toBeInTheDocument();
  });
});
