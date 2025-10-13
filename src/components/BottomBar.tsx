import clsx from 'clsx';
import { type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type BottomBarItem = {
  key: string;
  label: string;
  icon: LucideIcon;
  onSelect?: () => void;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
};

type BottomBarProps = {
  items: BottomBarItem[];
  activeKey?: string;
};

function Item({ item, isActive }: { item: BottomBarItem; isActive: boolean }) {
  const className = clsx(
    'flex h-11 min-w-[60px] items-center justify-center rounded-full px-2.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white md:h-13 md:min-w-[74px] md:px-3.5 md:text-sm',
    isActive
      ? 'bg-brand/80 text-brand-ink shadow-[0_12px_30px_rgba(31,41,51,0.22)]'
      : 'text-muted-ink bg-white/30 hover:bg-white/45'
  );

  const commonProps = {
    className,
    'aria-label': item.ariaLabel ?? item.label,
    'aria-current': (isActive ? 'page' : undefined) as 'page' | undefined
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-0.5 md:flex-row md:gap-1">
      <item.icon className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
      <span className="text-[10px] font-semibold tracking-[0.01em] md:text-sm md:tracking-[0.02em] md:uppercase">
        {item.label}
      </span>
    </div>
  );

  if (item.href) {
    if (item.external) {
      return (
        <a
          {...commonProps}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link {...commonProps} to={item.href}>
        {content}
      </Link>
    );
  }

  return (
    <button
      {...commonProps}
      type="button"
      onClick={item.onSelect}
    >
      {content}
    </button>
  );
}

export function BottomBar({ items, activeKey }: BottomBarProps) {
  return (
    <div className="fixed left-1/2 bottom-4 z-50 w-full -translate-x-1/2 px-4 md:bottom-6">
      <div className="flex justify-center">
        <nav className="inline-flex items-center rounded-[28px] border border-white/30 bg-white/18 px-2 py-1.5 shadow-[0_24px_60px_rgba(31,41,51,0.18)] backdrop-blur-3xl">
          <ul className="flex items-center gap-1 md:gap-1.5">
            {items.map((item) => (
              <li key={item.key} className="flex-shrink-0">
                <Item item={item} isActive={item.key === activeKey} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
