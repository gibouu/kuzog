import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import BlogPage from './BlogPage';
import { LanguageProvider } from '../contexts/LanguageContext';
import { fr } from '../i18n/content/fr';

function renderBlog(lang?: string) {
  if (lang) window.localStorage.setItem('kuzog_language', lang);
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={['/blog']}>
        <BlogPage />
      </MemoryRouter>
    </LanguageProvider>
  );
}

beforeEach(() => window.localStorage.clear());

describe('BlogPage localization (#48)', () => {
  it('renders localized blog chrome in French', () => {
    renderBlog('fr');
    expect(screen.getByRole('heading', { name: fr.blog.title })).toBeInTheDocument();
    expect(screen.getByText(fr.blog.body)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: fr.blog.backHome })).toBeInTheDocument();
    expect(screen.getByText(fr.footer.copyright)).toBeInTheDocument();
  });
});
