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
  it('renders the branded NotFound page for an unknown path', async () => {
    renderAt('/does-not-exist');
    // NotFoundPage is code-split (React.lazy), so it resolves asynchronously
    // behind the Suspense fallback.
    expect(await screen.findByRole('heading', { name: en.notFound.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: en.notFound.backHome })).toHaveAttribute('href', '/');
  });

  it('still renders a known (eager) route without the NotFound page', () => {
    renderAt('/');
    expect(screen.queryByText(en.notFound.title)).not.toBeInTheDocument();
  });
});
