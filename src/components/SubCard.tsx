import clsx from 'clsx';
import { type ReactNode } from 'react';

type SubCardProps = {
  className?: string;
  children: ReactNode;
};

export function SubCard({ className, children }: SubCardProps) {
  return (
    <div
      className={clsx(
        'rounded-[28px] border border-white/45 bg-white/60 p-6 shadow-[0_20px_40px_rgba(31,41,51,0.12)] backdrop-blur-xl text-sm md:text-base leading-relaxed text-muted-ink flex flex-col gap-3',
        className
      )}
    >
      {children}
    </div>
  );
}
