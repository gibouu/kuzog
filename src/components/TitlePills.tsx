import clsx from 'clsx';
import { type HTMLAttributes, type ReactNode } from 'react';

type PillProps = Omit<HTMLAttributes<HTMLElement>, 'as'> & {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  size?: 'lg' | 'md' | 'sm';
  tone?: 'primary' | 'secondary';
};

const base = 'inline-flex items-center rounded-full font-semibold select-none';
const sizes = {
  lg: 'text-2xl md:text-3xl px-4 py-1.5',
  md: 'text-base md:text-lg px-3 py-1',
  sm: 'text-[11px] md:text-sm px-2.5 py-1'
};
const tones = {
  primary: 'bg-white/65 text-[color:var(--pill-text)] shadow-[0_2px_6px_rgba(31,41,51,0.1)] backdrop-blur-sm border border-white/60',
  secondary: 'bg-white/45 text-[color:var(--muted-ink)] shadow-[0_1px_4px_rgba(31,41,51,0.08)] backdrop-blur-sm border border-white/50'
};

function Pill({ as: Tag = 'div', children, className, size = 'md', tone = 'primary', ...rest }: PillProps) {
  return (
    <Tag
      className={clsx(base, sizes[size], tones[tone], className)}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
}

export function MainTitlePill(props: PillProps) {
  return <Pill {...props} size={props.size ?? 'lg'} tone={props.tone ?? 'primary'} />;
}

export function SubTitlePill(props: PillProps) {
  return <Pill {...props} size={props.size ?? 'sm'} tone={props.tone ?? 'secondary'} />;
}
