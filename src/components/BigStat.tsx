import { ReactNode } from 'react';

interface BigStatProps {
  value: string;
  label: string;
  caption?: string;
  source?: ReactNode;
}

export function BigStat({ value, label, caption, source }: BigStatProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[clamp(36px,4.5vw,64px)] font-semibold leading-none tracking-tight text-ink">{value}</div>
      <div className="text-sm font-medium uppercase tracking-[0.12em] text-ink md:text-base">{label}</div>
      {caption && <p className="text-sm text-muted-ink md:text-base">{caption}</p>}
      {source && <div className="text-xs italic text-muted-ink">{source}</div>}
    </div>
  );
}
