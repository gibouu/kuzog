import { useCallback, useEffect, useState } from 'react';
import { Home as HomeIcon, Mail, Sprout, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { BottomBar } from './components/BottomBar';
import { ContactModal } from './components/ContactModal';
import { PolicyModal } from './components/PolicyModal';
import { Toast } from './components/Toast';
import { SiteFooter } from './components/SiteFooter';
import { HomeHero } from './components/HomeHero';
import { MissionLine } from './components/MissionLine';

export default function App() {
  const { content } = useLanguage();
  const [activeNav, setActiveNav] = useState<'home' | 'hydrobio' | 'microplantes' | 'group' | 'contact'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isContactOpen || isPolicyOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactOpen, isPolicyOpen]);

  const handleReturnToStart = useCallback(() => {
    setActiveNav('home');
    if (typeof window === 'undefined') return;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);

  const navItems = [
    { key: 'home' as const, label: content.navigation.home, icon: HomeIcon, onSelect: handleReturnToStart },
    { key: 'hydrobio' as const, label: 'Hydrobio', icon: Sprout, onSelect: () => { window.location.href = '/hydrobio'; } },
    { key: 'microplantes' as const, label: 'Microplantes', icon: Sprout, onSelect: () => { window.location.href = '/microplantes'; } },
    { key: 'group' as const, label: 'Group', icon: Building2, onSelect: () => { window.location.href = '/group'; } },
    { key: 'contact' as const, label: content.navigation.contact, icon: Mail, onSelect: () => { setIsContactOpen(true); setActiveNav('contact'); } },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message={content.contactModal.successMessage} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} onSuccess={() => setToastOpen(true)} />
      <PolicyModal open={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
      <BottomBar items={navItems} activeKey={activeNav} />

      <header className="px-6 pt-10" id="home">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-3 no-underline"
            onClick={handleReturnToStart}
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-brand text-2xl font-semibold text-brand-ink shadow-card sm:h-16 sm:w-16 sm:text-3xl">K</div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">{content.header.logoText}</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => { setIsContactOpen(true); setActiveNav('contact'); }}
              className="inline-flex h-11 flex-shrink-0 items-center justify-center rounded-full border border-hairline bg-surface px-4 text-xs font-semibold text-ink shadow-card transition hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:h-12 sm:w-44 sm:text-sm"
            >
              {content.header.contactButton}
            </button>
          </div>
        </div>
      </header>

      <main className="mt-12 flex-1 space-y-16 md:space-y-24">
        <HomeHero />
        <MissionLine />
      </main>

      <SiteFooter onShowPolicy={() => setIsPolicyOpen(true)} />
    </div>
  );
}
