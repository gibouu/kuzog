import clsx from 'clsx';
import { X } from 'lucide-react';
import { useCallback, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
// Single source of truth for the ethics policy. The same fragment is rendered into
// the standalone /compliance-ethics/ page by scripts/generate-compliance-page.mjs,
// so the modal and the static page can never drift. Static, first-party content —
// no user input — so dangerouslySetInnerHTML is safe here.
import policyHtml from '../content/ethics-policy.html?raw';

type PolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

export function PolicyModal({ open, onClose }: PolicyModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { content } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const onOverlayClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div
      aria-hidden={!open}
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 transition-opacity duration-200',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
      onClick={onOverlayClick}
    >
      {/* Render the dialog (and its focusable controls) only while open, so closed
          modal contents never sit in the tab order or the accessibility tree. */}
      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-title"
          className="relative w-full max-w-3xl transform overflow-hidden rounded-[36px] border border-white/50 bg-white/90 shadow-[0_40px_80px_rgba(31,41,51,0.25)] backdrop-blur-2xl"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/70 p-2 text-muted-ink shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label={content.policyModal.closeLabel}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="max-h-[70vh] overflow-y-auto px-6 py-8 md:px-8">
            <h2 id="policy-modal-title" className="text-xl font-semibold text-ink md:text-2xl">
              {content.policyModal.title}
            </h2>
            <div
              className="policy-prose mt-4 text-sm leading-6 text-muted-ink md:text-base"
              dangerouslySetInnerHTML={{ __html: policyHtml }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
