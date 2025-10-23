import clsx from 'clsx';
import { Mail, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { submitContact } from '../lib/contact';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigation } from '../contexts/NavigationContext';

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type FormState = {
  name: string;
  email: string;
  message: string;
  industry: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
  industry: ''
};

export function ContactModal({ open, onClose, onSuccess }: ContactModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const { content } = useLanguage();
  const { selectedAudience } = useNavigation();
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pre-populate industry based on selected audience
  useEffect(() => {
    if (selectedAudience) {
      const audienceContent = content.audiences.find((a) => a.id === selectedAudience);
      if (audienceContent) {
        setFormState((prev) => ({ ...prev, industry: audienceContent.industry }));
      }
    }
  }, [selectedAudience, content]);

  useEffect(() => {
    if (!open) {
      setFormState(initialState);
      setSubmitting(false);
      setError(null);
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }

      if (event.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const timer = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 60);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [open, onClose]);

  const handleOverlayClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const trimmed = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      message: formState.message.trim(),
      industry: formState.industry.trim()
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message || !trimmed.industry) {
      setError(content.contactModal.errorRequired);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed.email)) {
      setError(content.contactModal.errorEmail);
      return;
    }

    try {
      setSubmitting(true);
      await submitContact({ ...trimmed, timestamp: new Date().toISOString() });
      setSubmitting(false);
      onSuccess();
      onClose();
    } catch (submissionError) {
      console.error(submissionError);
      setSubmitting(false);
      setError(content.contactModal.errorSubmit);
    }
  };

  return (
    <div
      aria-hidden={!open}
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 transition-all duration-200 ease-out',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className={clsx(
          'relative w-full max-w-xl transform overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-2xl transition-all duration-200 md:p-8',
          open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-ink transition hover:bg-chip focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Close contact modal"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="pr-10 text-neutral-900">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-ink">Contact</p>
          <h2 id="contact-modal-title" className="mt-2 text-2xl font-semibold text-ink">
            {content.contactModal.title}
          </h2>
          <p className="mt-2 text-sm text-muted-ink">
            {content.contactModal.subtitle}
          </p>
        </div>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-medium text-ink">
            {content.contactModal.nameLabel}
            <input
              ref={firstFieldRef}
              value={formState.name}
              onChange={handleChange('name')}
              autoComplete="name"
              required
              className="h-12 rounded-2xl border border-border bg-chip px-4 text-base text-ink shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-ink">
            {content.contactModal.emailLabel}
            <input
              type="email"
              value={formState.email}
              onChange={handleChange('email')}
              autoComplete="email"
              required
              className="h-12 rounded-2xl border border-border bg-chip px-4 text-base text-ink shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-ink">
            {content.contactModal.industryLabel}
            <select
              value={formState.industry}
              onChange={(e) => setFormState((prev) => ({ ...prev, industry: e.target.value }))}
              required
              className="h-12 rounded-2xl border border-border bg-chip px-4 text-base text-ink shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <option value="">{content.contactModal.industryOptions.placeholder}</option>
              <option value="Agriculture">{content.contactModal.industryOptions.agriculture}</option>
              <option value="Manufacturing">{content.contactModal.industryOptions.manufacturing}</option>
              <option value="Import / Export">{content.contactModal.industryOptions.importExport}</option>
              <option value="Technology / Startups">{content.contactModal.industryOptions.technology}</option>
              <option value="Renewable Energy">{content.contactModal.industryOptions.renewableEnergy}</option>
              <option value="Other">{content.contactModal.industryOptions.other}</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-ink">
            {content.contactModal.messageLabel}
            <textarea
              value={formState.message}
              onChange={handleChange('message')}
              rows={4}
              maxLength={4000}
              required
              className="rounded-2xl border border-border bg-chip px-4 py-3 text-base text-ink shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            />
          </label>

          {error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
          ) : null}

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-12 min-w-[140px] items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-ink transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60"
            >
              {submitting ? content.contactModal.submittingButton : content.contactModal.submitButton}
            </button>
            <a
              href="mailto:management@kuzog.com"
              className="inline-flex h-12 min-w-[140px] items-center justify-center gap-2 rounded-full border border-border bg-chip px-6 text-sm font-semibold text-ink transition hover:bg-chip-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {content.contactModal.emailButton}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
