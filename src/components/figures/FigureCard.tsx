import { ReactNode } from 'react';

interface FigureCardProps {
  tag?: string;
  title: string;
  caption?: string;
  children: ReactNode;
}

// Bordered card frame shared by every product figure: optional eyebrow tag,
// title, the SVG, and an optional caption. The SVG itself carries role="img"
// and an aria-label, so this wrapper stays presentational.
export function FigureCard({ tag, title, caption, children }: FigureCardProps) {
  return (
    <figure className="m-0 flex flex-col rounded-card border border-hairline bg-surface p-5 shadow-card">
      {tag && (
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-ink">{tag}</span>
      )}
      <h3 className="mb-3 mt-0.5 text-base font-semibold text-ink">{title}</h3>
      <div className="overflow-hidden rounded-card-sm bg-surface">{children}</div>
      {caption && <figcaption className="mt-3 text-sm leading-relaxed text-muted-ink">{caption}</figcaption>}
    </figure>
  );
}
