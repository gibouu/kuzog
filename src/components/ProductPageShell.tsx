import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { SiteFooter } from './SiteFooter';
import { PolicyModal } from './PolicyModal';
import { BottomBar } from './BottomBar';

interface ProductPageShellProps {
  accent: 'hydrobio' | 'microplantes' | 'group';
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
}

const ACCENT_BAR: Record<ProductPageShellProps['accent'], string> = {
  hydrobio: 'bg-accent-hydrobio',
  microplantes: 'bg-accent-microplantes',
  group: 'bg-accent-group',
};

export function ProductPageShell({ accent, eyebrow, title, children }: ProductPageShellProps) {
  const { content } = useLanguage();
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const navItems = [
    { key: 'home', label: content.navigation.home, icon: HomeIcon, href: '/' },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <PolicyModal open={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
      <BottomBar items={navItems} />
      <header className="px-6 pt-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-brand text-2xl font-semibold text-brand-ink shadow-card sm:h-16 sm:w-16 sm:text-3xl">
              K
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">
              {content.header.logoText}
            </span>
          </Link>
          <LanguageSelector />
        </div>
      </header>
      <main className="flex-1">
        {(eyebrow || title) && (
          <section className="px-6 pt-12">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
              {eyebrow && (
                <div className="flex items-center gap-2">
                  <span className={`inline-block h-2 w-2 rounded-full ${ACCENT_BAR[accent]}`} aria-hidden />
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-ink">{eyebrow}</span>
                </div>
              )}
              {title && <h1 className="text-display-lg text-ink">{title}</h1>}
            </div>
          </section>
        )}
        {children ?? (
          <section className="px-6 pt-12">
            <div className="mx-auto max-w-6xl rounded-card border border-hairline bg-surface-elevated p-12 text-center">
              <p className="text-base text-muted-ink">Coming soon.</p>
            </div>
          </section>
        )}
      </main>
      <SiteFooter onShowPolicy={() => setIsPolicyOpen(true)} />
    </div>
  );
}
