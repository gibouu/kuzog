import { Mail, Home as HomeIcon, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomBar } from '../components/BottomBar';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';
import { PolicyModal } from '../components/PolicyModal';
import { Toast } from '../components/Toast';
import { SiteFooter } from '../components/SiteFooter';
import { LanguageSelector } from '../components/LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export default function BlogPage() {
  const { content } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const navItems = [
    {
      key: 'home',
      label: 'KUZOG',
      icon: HomeIcon,
      href: '/'
    },
    {
      key: 'contact',
      label: 'Contact',
      icon: Mail,
      onSelect: () => setIsContactOpen(true)
    },
    {
      key: 'blog',
      label: 'Blog',
      icon: BookOpen,
      onSelect: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,106,0.22),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(157,183,178,0.2),transparent_65%),#f7f1e6]">
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message={content.contactModal.successMessage} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} onSuccess={() => setToastOpen(true)} />
      <PolicyModal open={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
      <BottomBar items={navItems} activeKey="blog" />

      <header className="px-6 pt-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-ink text-2xl font-semibold text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
              K
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">{content.header.logoText}</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex h-11 flex-shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 px-4 text-xs font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-12 sm:w-44 sm:text-sm"
            >
              {content.header.contactButton}
            </button>
          </div>
        </div>
      </header>

      <main className="mt-14 flex flex-1 items-center justify-center px-6 pb-24">
        <div className="mx-auto w-full max-w-4xl">
          <section className="rounded-[42px] border border-white/45 bg-white/60 px-6 py-16 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:px-12 md:py-24">
            <div className="space-y-6 text-center text-ink">
              <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-[var(--pill-text)] shadow-inner">
                KUZOG Insights
              </div>
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                Coming Soon
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-ink md:text-lg">
                We're preparing insightful content on international trade, sustainable agriculture, and cross-border operations. Stay tuned for practical perspectives from the field.
              </p>
              <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-ink transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-44"
                >
                  {content.header.contactButton}
                </button>
                <Link
                  to="/"
                  className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-white/60 bg-white/70 px-6 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-44"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter onShowPolicy={() => setIsPolicyOpen(true)} />
    </div>
  );
}
