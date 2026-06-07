import { ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  title: string;
  description: string;
  ctaLabel: string;
  onContactClick: () => void;
}

export function ContactCTA({ title, description, ctaLabel, onContactClick }: ContactCTAProps) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-card border border-hairline bg-surface-elevated p-7 md:p-10 xl:p-12">
      <div className="flex flex-col gap-4 md:max-w-3xl">
        <h2 className="text-display-md text-ink">{title}</h2>
        <p className="text-base text-muted-ink md:text-lg">{description}</p>
      </div>
      <button
        type="button"
        onClick={onContactClick}
        className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-ink shadow-card transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:text-base"
      >
        <span>{ctaLabel}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
