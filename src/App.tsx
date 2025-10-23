import { useCallback, useEffect, useMemo, useState } from 'react';
import { Briefcase, Building2, Home as HomeIcon, Mail, Sprout, Factory, Ship, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from './contexts/LanguageContext';
import { useNavigation } from './contexts/NavigationContext';
import { LanguageSelector } from './components/LanguageSelector';
import { CallToActionCard } from './components/CallToActionCard';
import { SolutionsCard } from './components/SolutionsCard';
import { BottomBar } from './components/BottomBar';
import { ContactModal } from './components/ContactModal';
import { PolicyModal } from './components/PolicyModal';
import { SectionCard } from './components/SectionCard';
import { SubCard } from './components/SubCard';
import { SubTitlePill } from './components/TitlePills';
import { Toast } from './components/Toast';
import { SiteFooter } from './components/SiteFooter';

const AGRI_URL = '/agri';
const CANADA_URL = 'https://kuzog.ca';

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '-45% 0px -45% 0px',
  threshold: 0
};

export default function App() {
  const { content } = useLanguage();
  const { showSolutions, setSelectedAudience, setShowSolutions, resetNavigation } = useNavigation();
  const [activeNav, setActiveNav] = useState<'home' | 'manufacturing' | 'trade' | 'startup' | 'services' | 'contact'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isContactOpen || isPolicyOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactOpen, isPolicyOpen]);

  useEffect(() => {
    const sections: Array<{ id: string; key: 'home' | 'industries' | 'services' }> = [
      { id: 'hero', key: 'home' },
      { id: 'industries', key: 'industries' },
      { id: 'services', key: 'services' }
    ];

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const target = sections.find((section) => section.id === visible.target.id);
      if (target) setActiveNav(target.key);
    }, OBSERVER_OPTIONS);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleReturnToStart = useCallback(() => {
    resetNavigation();
    setActiveNav('home');

    if (typeof window === 'undefined') {
      return;
    }

    window.requestAnimationFrame(() => {
      const headerSection = document.getElementById('home');
      if (headerSection) {
        headerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [resetNavigation, setActiveNav]);

  const navItems = useMemo(
    () => [
      {
        key: 'home',
        label: content.navigation.home,
        icon: HomeIcon,
        onSelect: handleReturnToStart
      },
      {
        key: 'manufacturing',
        label: content.navigation.manufacturing,
        icon: Factory,
        onSelect: () => {
          setSelectedAudience('manufacturer');
          setShowSolutions(true);
          setTimeout(() => {
            document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      },
      {
        key: 'trade',
        label: content.navigation.trade,
        icon: Ship,
        onSelect: () => {
          setSelectedAudience('importer');
          setShowSolutions(true);
          setTimeout(() => {
            document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      },
      {
        key: 'startup',
        label: content.navigation.startup,
        icon: Lightbulb,
        onSelect: () => {
          setSelectedAudience('startup');
          setShowSolutions(true);
          setTimeout(() => {
            document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      },
      {
        key: 'agri',
        label: content.navigation.agri,
        icon: Sprout,
        onSelect: () => {
          setSelectedAudience('farmer');
          setShowSolutions(true);
          setTimeout(() => {
            document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      },
      {
        key: 'contact',
        label: content.navigation.contact,
        icon: Mail,
        onSelect: () => {
          setIsContactOpen(true);
          setActiveNav('contact');
        }
      }
    ],
    [content, handleReturnToStart, setSelectedAudience, setShowSolutions]
  );

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
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-ink text-2xl font-semibold text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">K</div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">{content.header.logoText}</span>
          </Link>

          {/* Language Selector + Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => {
                setIsContactOpen(true);
                setActiveNav('contact');
              }}
              className="inline-flex h-11 flex-shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 px-4 text-xs font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-12 sm:w-44 sm:text-sm"
            >
              {content.header.contactButton}
            </button>
          </div>
        </div>
      </header>

      <main className="mt-8 flex-1 space-y-12 md:space-y-16">
        {/* Audience Selection - "Find Your Solution" - ALWAYS SHOW FIRST */}
        {!showSolutions && <CallToActionCard />}

        {/* Dynamic Solutions Card */}
        <AnimatePresence mode="wait">
          {showSolutions && (
            <SolutionsCard onContactClick={() => setIsContactOpen(true)} />
          )}
        </AnimatePresence>

        {/* ONLY SHOW REST OF WEBSITE AFTER AUDIENCE IS SELECTED */}
        {showSolutions && (
          <>
            <section id="hero" className="px-6">
              <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-[42px] border border-white/45 bg-white/60 px-6 py-8 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 md:py-10">
                <div className="space-y-6 text-ink">
                  <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-[var(--pill-text)] shadow-inner sm:text-sm">
                    {content.hero.badge}
                  </div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                    {content.hero.title}
                  </h1>
                  <p className="text-sm leading-relaxed text-muted-ink sm:text-base md:text-lg">
                    {content.hero.description}
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => {
                        setIsContactOpen(true);
                        setActiveNav('contact');
                      }}
                      className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-ink transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-44"
                    >
                      {content.hero.contactButton}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById('regional-delivery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setActiveNav('services');
                      }}
                      className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-white/60 bg-white/70 px-6 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-44"
                    >
                      {content.hero.exploreButton}
                    </button>
                  </div>
                </div>
                <div className="grid gap-4">
                  <SubCard className="items-start text-left">
                    <SubTitlePill as="h3" className="mb-2 text-sm sm:text-base md:text-lg">
                      {content.hero.operatorsFocus.title}
                    </SubTitlePill>
                    <p className="text-xs text-muted-ink sm:text-sm md:text-base">
                      {content.hero.operatorsFocus.description}
                    </p>
                  </SubCard>
                  <SubCard className="items-start text-left">
                    <SubTitlePill as="h3" className="mb-2 text-sm sm:text-base md:text-lg">
                      {content.hero.deliveryNotes.title}
                    </SubTitlePill>
                    <p className="text-xs text-muted-ink sm:text-sm md:text-base">
                      {content.hero.deliveryNotes.description}
                    </p>
                  </SubCard>
                </div>
              </div>
            </section>

            <SectionCard id="regional-delivery" title={content.regionalDelivery.title} sectionLabel={content.regionalDelivery.sectionLabel}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {Object.entries(content.regionalDelivery.regions).map(([region, description]) => (
                  <SubCard key={region} className="items-center text-center">
                    <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                      {region}
                    </SubTitlePill>
                    <p className="mt-1">{description}</p>
                  </SubCard>
                ))}
              </div>
            </SectionCard>

            <SectionCard id="services" title={content.services.title} sectionLabel={content.services.sectionLabel}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {content.services.items.map((service) => (
                  <SubCard key={service.title} className="items-start text-left">
                    <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                      {service.title}
                    </SubTitlePill>
                    <p className="mt-1">{service.body}</p>
                  </SubCard>
                ))}
              </div>
            </SectionCard>

            <SectionCard id="operations" title={content.operations.title} sectionLabel={content.operations.sectionLabel}>
              <div className="space-y-4">
                <p className="text-ink">
                  {content.operations.description}
                </p>
                <SubCard className="items-start text-left">
                  <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                    {content.operations.commitmentsTitle}
                  </SubTitlePill>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-ink md:text-base">
                    {content.operations.commitments.map((commitment, index) => (
                      <li key={index}>{commitment}</li>
                    ))}
                  </ul>
                </SubCard>
                <button
                  type="button"
                  onClick={() => setIsPolicyOpen(true)}
                  className="inline-flex h-12 w-48 items-center justify-center rounded-full border border-white/60 bg-white/70 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {content.operations.viewCodeButton}
                </button>
              </div>
            </SectionCard>

            <SectionCard id="other-projects" title={content.otherProjects.title} sectionLabel={content.otherProjects.sectionLabel}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* KUZOG Consulting */}
                <SubCard className="items-start text-left">
                  <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                    {content.otherProjects.kuzogConsulting.title}
                  </SubTitlePill>
                  <p>
                    {content.otherProjects.kuzogConsulting.description}
                  </p>
                  <a
                    href={CANADA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex h-11 w-44 items-center justify-center rounded-full border border-white/60 bg-white/70 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {content.otherProjects.kuzogConsulting.button}
                  </a>
                </SubCard>

                {/* KUZOG INSIGHTS (Blog) - NEW */}
                <SubCard className="items-start text-left">
                  <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                    {content.otherProjects.blog.title}
                  </SubTitlePill>
                  <p>
                    {content.otherProjects.blog.description}
                  </p>
                  <Link
                    to="/blog"
                    className="mt-auto inline-flex h-11 w-44 items-center justify-center rounded-full border border-white/60 bg-white/70 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {content.otherProjects.blog.button}
                  </Link>
                </SubCard>

                {/* KUZOG AGRI */}
                <SubCard className="items-start text-left">
                  <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                    {content.otherProjects.kuzogAgri.title}
                  </SubTitlePill>
                  <p>
                    {content.otherProjects.kuzogAgri.description}
                  </p>
                  <a
                    href={AGRI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex h-11 w-44 items-center justify-center rounded-full border border-white/60 bg-white/70 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {content.otherProjects.kuzogAgri.button}
                  </a>
                </SubCard>
              </div>
            </SectionCard>
          </>
        )}
      </main>

      <SiteFooter onShowPolicy={() => setIsPolicyOpen(true)} />
    </div>
  );
}
