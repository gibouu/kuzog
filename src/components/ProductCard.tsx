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

export function ProductCard({ name, slogan, cta, accent, href }: ProductCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col justify-between gap-10 rounded-card border border-hairline bg-surface p-10 shadow-card transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:p-12"
    >
      <div className="flex flex-col gap-6">
        <span className={`inline-block h-2 w-2 rounded-full ${ACCENT_DOT[accent]}`} aria-hidden />
        <h2 className="text-display-lg text-ink">{name}</h2>
        <p className="text-base text-muted-ink md:text-lg">{slogan}</p>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-ink transition group-hover:gap-3">
        <span>{cta}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
