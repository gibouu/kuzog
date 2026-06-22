import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { AppRoutes } from './AppRoutes';
import { LanguageProvider } from './contexts/LanguageContext';
import { en } from './i18n/content/en';

function renderAt(path: string) {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </LanguageProvider>
  );
}

describe('route fallback', () => {
  it('renders the branded NotFound page for an unknown path', () => {
    renderAt('/does-not-exist');
    expect(screen.getByRole('heading', { name: en.notFound.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: en.notFound.backHome })).toHaveAttribute('href', '/');
  });

  it('still renders a known route', () => {
    renderAt('/');
    expect(screen.queryByText(en.notFound.title)).not.toBeInTheDocument();
  });
});
