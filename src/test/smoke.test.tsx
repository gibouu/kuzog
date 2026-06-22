import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../App';
import { LanguageProvider } from '../contexts/LanguageContext';

// Proves the test harness boots a real React tree (jsdom + RTL + providers).
describe('App smoke test', () => {
  it('renders the home shell without crashing', () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </LanguageProvider>
    );
    // KUZOG wordmark in the header is always present.
    expect(screen.getAllByText('KUZOG').length).toBeGreaterThan(0);
  });
});
