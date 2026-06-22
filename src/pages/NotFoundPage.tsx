import { Link } from 'react-router-dom';
import { SiteFooter } from '../components/SiteFooter';
import { PolicyModal } from '../components/PolicyModal';
import { LanguageSelector } from '../components/LanguageSelector';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFoundPage() {
  const { content } = useLanguage();
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,106,0.22),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(157,183,178,0.2),transparent_65%),#f7f1e6]">
      <PolicyModal open={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />

      <header className="px-6 pt-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-ink text-2xl font-semibold text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
              K
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">{content.header.logoText}</span>
          </Link>
          <LanguageSelector />
        </div>
      </header>

      <main className="mt-14 flex flex-1 items-center justify-center px-6 pb-24">
        <div className="mx-auto w-full max-w-3xl">
          <section className="rounded-[42px] border border-white/45 bg-white/60 px-6 py-16 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:px-12 md:py-24">
            <div className="space-y-6 text-center text-ink">
              <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-[var(--pill-text)] shadow-inner">
                {content.notFound.eyebrow}
              </div>
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                {content.notFound.title}
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-ink md:text-lg">
                {content.notFound.message}
              </p>
              <div className="pt-4">
                <Link
                  to="/"
                  className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-ink transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {content.notFound.backHome}
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
