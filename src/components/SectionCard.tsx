import clsx from 'clsx';
import { type ReactNode } from 'react';
import { MainTitlePill } from './TitlePills';

export type SectionCardProps = {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
  sectionLabel?: string;
};

export function SectionCard({ id, title, children, className, sectionLabel }: SectionCardProps) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <div className="px-6">
      <section
        id={id}
        aria-labelledby={titleId}
        className={clsx(
          'mx-auto mb-8 mt-16 w-full max-w-6xl rounded-[40px] border border-white/40 bg-white/65 px-6 py-10 shadow-[0_36px_80px_rgba(31,41,51,0.14)] backdrop-blur-2xl md:mb-8 md:mt-20 md:px-9 md:py-12',
          className
        )}
      >
        <div className="mb-6 flex flex-col gap-3 md:mb-8">
          {sectionLabel ? (
            <span className="inline-flex w-fit items-center rounded-full bg-white/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-muted-ink">
              {sectionLabel}
            </span>
          ) : null}
          <MainTitlePill as="h2" id={titleId}>
            {title}
          </MainTitlePill>
        </div>
        <div className="grid gap-6 md:gap-8 text-base md:text-lg leading-relaxed text-muted-ink">{children}</div>
      </section>
    </div>
  );
}
