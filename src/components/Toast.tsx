import { useEffect } from 'react';
import clsx from 'clsx';

type ToastProps = {
  message: string;
  open: boolean;
  onDismiss: () => void;
};

export function Toast({ message, open, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => onDismiss(), 4000);
    return () => window.clearTimeout(timer);
  }, [open, onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        'pointer-events-none fixed right-4 top-4 z-50 transform transition-all duration-300 ease-out',
        open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      )}
    >
      <div className="pointer-events-auto flex max-w-sm items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 text-sm font-medium text-ink shadow-lg">
        {message}
      </div>
    </div>
  );
}
