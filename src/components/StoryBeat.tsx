import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface StoryBeatProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  accent?: 'hydrobio' | 'microplantes' | 'group';
  bleed?: boolean;
  children: ReactNode;
}

const ACCENT_DOT: Record<NonNullable<StoryBeatProps['accent']>, string> = {
  hydrobio: 'bg-accent-hydrobio',
  microplantes: 'bg-accent-microplantes',
  group: 'bg-accent-group',
};

export function StoryBeat({ id, eyebrow, title, accent, bleed = false, children }: StoryBeatProps) {
  return (
    <section id={id} className={clsx('px-6 py-16 md:py-24', bleed && 'bg-surface-elevated')}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        {(eyebrow || title) && (
          <div className="flex flex-col gap-4">
            {eyebrow && (
              <div className="flex items-center gap-2">
                {accent && (
                  <span className={clsx('inline-block h-2 w-2 rounded-full', ACCENT_DOT[accent])} aria-hidden />
                )}
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-ink">{eyebrow}</span>
              </div>
            )}
            {title && <h2 className="text-display-md text-ink md:max-w-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
