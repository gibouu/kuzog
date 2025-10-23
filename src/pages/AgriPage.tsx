import { Mail, Home as HomeIcon, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomBar } from '../components/BottomBar';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';
import { PolicyModal } from '../components/PolicyModal';
import { Toast } from '../components/Toast';
import { SiteFooter } from '../components/SiteFooter';
import { SubCard } from '../components/SubCard';
import { SubTitlePill } from '../components/TitlePills';
import { LanguageSelector } from '../components/LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export default function AgriPage() {
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
      key: 'agri',
      label: 'AGRI',
      icon: Sprout,
      onSelect: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,106,0.22),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(157,183,178,0.2),transparent_65%),#f7f1e6]">
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message="Message sent. We will respond shortly." />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} onSuccess={() => setToastOpen(true)} />
      <PolicyModal open={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
      <BottomBar items={navItems} activeKey="agri" />

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
              {content.agriPage.header.contactButton}
            </button>
          </div>
        </div>
      </header>

      <main className="mt-14 flex-1 space-y-8 px-6 pb-24">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          {/* SECTION 1 - About KUZOG AGRI - Hero Style */}
          <section className="rounded-[42px] border border-white/45 bg-white/60 px-6 py-8 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:px-8 md:py-10">
            <div className="mx-auto grid w-full gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="space-y-6 text-ink">
                <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-[var(--pill-text)] shadow-inner">
                  {content.agriPage.about.badge}
                </div>
                <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                  {content.agriPage.about.title}
                </h1>
                <p className="text-base leading-relaxed text-muted-ink md:text-lg">
                  {content.agriPage.about.description}
                </p>
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-ink transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-44"
                >
                  {content.agriPage.about.contactButton}
                </button>
              </div>
              <div className="grid gap-4">
                <SubCard className="items-start text-left">
                  <SubTitlePill as="h3" className="mb-2 text-base md:text-lg">
                    {content.agriPage.about.cards.fullCycle.title}
                  </SubTitlePill>
                  <p className="text-sm text-muted-ink md:text-base">
                    {content.agriPage.about.cards.fullCycle.description}
                  </p>
                </SubCard>
                <SubCard className="items-start text-left">
                  <SubTitlePill as="h3" className="mb-2 text-base md:text-lg">
                    {content.agriPage.about.cards.globalReach.title}
                  </SubTitlePill>
                  <p className="text-sm text-muted-ink md:text-base">
                    {content.agriPage.about.cards.globalReach.description}
                  </p>
                </SubCard>
                <SubCard className="items-start text-left">
                  <SubTitlePill as="h3" className="mb-2 text-base md:text-lg">
                    {content.agriPage.about.cards.partnership.title}
                  </SubTitlePill>
                  <p className="text-sm text-muted-ink md:text-base">
                    {content.agriPage.about.cards.partnership.description}
                  </p>
                </SubCard>
              </div>
            </div>
          </section>

          {/* SECTION 2 - Agricultural Services */}
          <section className="rounded-[42px] border border-white/45 bg-white/60 px-6 py-10 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:px-9 md:py-12">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-[rgba(31,41,51,0.7)] shadow-inner">
              {content.agriPage.services.badge}
            </div>
            <h2 className="mb-8 text-4xl font-semibold text-ink md:text-5xl">{content.agriPage.services.title}</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {content.agriPage.services.items.map((service, idx) => (
                <div
                  key={idx}
                  className="rounded-[28px] border border-white/45 bg-white/55 px-6 py-6 shadow-[0_20px_40px_rgba(31,41,51,0.12)] backdrop-blur-xl"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-ink md:text-2xl">{service.title}</h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-ink md:text-base">
                    {service.body}
                  </p>
                  {service.details && (
                    <div className="mt-4 rounded-xl bg-white/50 p-4">
                      <ul className="space-y-2 text-sm text-muted-ink">
                        {service.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start gap-2">
                            <span className="mt-1 text-brand">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3 - Soil Technology */}
          <section className="rounded-[42px] border border-white/45 bg-white/60 px-6 py-10 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:px-9 md:py-12">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-[rgba(31,41,51,0.7)] shadow-inner">
              {content.agriPage.soilTech.badge}
            </div>
            <h2 className="mb-4 text-4xl font-semibold text-ink md:text-5xl">{content.agriPage.soilTech.title}</h2>
            <p className="mb-8 text-lg font-medium text-ink">
              {content.agriPage.soilTech.subtitle}
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-ink md:text-lg">
              {content.agriPage.soilTech.description}
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {content.agriPage.soilTech.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-[28px] border border-white/45 bg-white/55 px-6 py-6 shadow-[0_20px_40px_rgba(31,41,51,0.12)] backdrop-blur-xl"
                >
                  <h3 className="mb-3 text-lg font-semibold text-ink md:text-xl">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-ink md:text-base">{feature.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter onShowPolicy={() => setIsPolicyOpen(true)} />
    </div>
  );
}
