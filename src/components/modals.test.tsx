import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ContactModal } from './ContactModal';
import { PolicyModal } from './PolicyModal';
import { LanguageProvider } from '../contexts/LanguageContext';
import { en } from '../i18n/content/en';

function withProvider(ui: React.ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

describe('PolicyModal accessibility', () => {
  it('renders no dialog or focusable controls when closed', () => {
    withProvider(<PolicyModal open={false} onClose={() => {}} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: en.policyModal.closeLabel })).not.toBeInTheDocument();
  });

  it('exposes an accessible name when open', () => {
    withProvider(<PolicyModal open onClose={() => {}} />);
    // aria-labelledby resolves to the heading text → the dialog has an accessible name.
    expect(screen.getByRole('dialog', { name: en.policyModal.title })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: en.policyModal.closeLabel })).toBeInTheDocument();
  });
});

describe('ContactModal accessibility', () => {
  it('renders no dialog or focusable controls when closed', () => {
    withProvider(<ContactModal open={false} onClose={() => {}} onSuccess={() => {}} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: en.contactModal.closeLabel })).not.toBeInTheDocument();
  });

  it('focuses the first field and is labelled when open', async () => {
    withProvider(<ContactModal open onClose={() => {}} onSuccess={() => {}} />);
    const dialog = screen.getByRole('dialog', { name: en.contactModal.title });
    expect(dialog).toBeInTheDocument();
    const nameField = screen.getByLabelText(en.contactModal.nameLabel);
    await waitFor(() => expect(nameField).toHaveFocus());
  });

  it('invokes onClose from the close control', async () => {
    const onClose = vi.fn();
    const { default: userEvent } = await import('@testing-library/user-event');
    const user = userEvent.setup();
    withProvider(<ContactModal open onClose={onClose} onSuccess={() => {}} />);
    await user.click(screen.getByRole('button', { name: en.contactModal.closeLabel }));
    expect(onClose).toHaveBeenCalled();
  });
});
