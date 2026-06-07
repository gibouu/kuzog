import { useState, ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

interface ExpandableCardProps {
  title: string;
  teaser?: string;
  accent?: 'hydrobio' | 'microplantes' | 'group';
  defaultExpanded?: boolean;
  children: ReactNode;
}

const ACCENT_DOT: Record<NonNullable<ExpandableCardProps['accent']>, string> = {
  hydrobio: 'bg-accent-hydrobio',
  microplantes: 'bg-accent-microplantes',
  group: 'bg-accent-group',
};

export function ExpandableCard({ title, teaser, accent, defaultExpanded = false, children }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="overflow-hidden rounded-card border border-hairline bg-surface transition-shadow hover:shadow-card">
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset md:px-8 md:py-6"
      >
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-2">
            {accent && (
              <span className={clsx('inline-block h-1.5 w-1.5 rounded-full', ACCENT_DOT[accent])} aria-hidden />
            )}
            <h3 className="text-base font-semibold text-ink md:text-lg">{title}</h3>
          </div>
          {teaser && <p className="text-sm text-muted-ink md:text-base">{teaser}</p>}
        </div>
        <span
          className={clsx(
            'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-hairline bg-surface-elevated transition-colors md:h-10 md:w-10',
            isExpanded && 'bg-brand text-brand-ink border-brand'
          )}
          aria-hidden
        >
          {isExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 text-sm text-muted-ink md:px-8 md:pb-8 md:text-base">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
