import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface StatGridProps {
  columns?: 2 | 3 | 4;
  children: ReactNode;
}

const COLUMN_CLASS: Record<NonNullable<StatGridProps['columns']>, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 xl:grid-cols-4',
};

export function StatGrid({ columns = 3, children }: StatGridProps) {
  return <div className={clsx('grid grid-cols-1 gap-10 md:gap-12', COLUMN_CLASS[columns])}>{children}</div>;
}
