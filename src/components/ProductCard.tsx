import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HomeCardContent } from '../i18n/types';

type ProductCardProps = HomeCardContent & {
  href: string;
};

const ACCENT_DOT: Record<HomeCardContent['accent'], string> = {
  hydrobio: 'bg-accent-hydrobio',
  microplantes: 'bg-accent-microplantes',
  group: 'bg-accent-group',
};

export function ProductCard({ eyebrow, title, microStats, chips, cta, accent, href }: ProductCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col justify-between gap-8 rounded-card border border-hairline bg-surface p-8 shadow-card transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:p-10"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className={`inline-block h-2 w-2 rounded-full ${ACCENT_DOT[accent]}`} aria-hidden />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-ink">{eyebrow}</span>
        </div>
        <h2 className="text-display-md text-ink">{title}</h2>
        {microStats.length > 0 && (
          <ul className="flex flex-col gap-2">
            {microStats.map((stat) => (
              <li key={stat} className="text-sm text-muted-ink md:text-base">
                {stat}
              </li>
            ))}
          </ul>
        )}
        {chips && chips.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li key={chip} className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-ink">
                {chip}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-ink transition group-hover:gap-3">
        <span>{cta}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
