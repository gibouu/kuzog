import { useEffect, useMemo, useState } from 'react';
import { Briefcase, Building2, Home as HomeIcon, Mail, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const REGION_ORDER = ['Europe', 'North America', 'Middle East', 'Africa'] as const;
const REGION_COPY: Record<(typeof REGION_ORDER)[number], string> = {
  Europe:
    'We acquire distressed assets, restructure operations, and scale agricultural ventures across European markets.',
  'North America':
    'Relationship management, lobbying, and legal advisory for North American companies seeking to export or operate abroad.',
  'Middle East': 'In-market operators coordinate partnerships, project delivery, and compliance across the Gulf and wider ME landscape.',
  Africa:
    'We create companies, commission factories, and steward agricultural and technology programmes throughout the continent.'
};

const SERVICES = [
  {
    title: 'Private & tailor-made execution',
    body:
      'We manage sensitive transformations discreetly—aligning operators, financiers, and public stakeholders so every mandate holds up under scrutiny.'
  },
  {
    title: 'Operator-first governance',
    body:
      'Weekly field sprints merge with board-ready reporting, keeping roadmaps, compliance, and delivery tied together everywhere we operate.'
  },
  {
    title: 'Capital fluency',
    body:
      'We translate operating realities into investor-grade narratives so capital providers see both upside and controls before the deal closes.'
  },
  {
    title: 'International Trade',
    body:
      'For 10+ years KUZOG has helped African operators secure international goods and services through private, tailored sourcing, financing, and logistics.'
  }
];

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '-45% 0px -45% 0px',
  threshold: 0
};

export default function App() {
  const [activeNav, setActiveNav] = useState<'home' | 'industries' | 'services' | 'contact'>('home');
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

  const navItems = useMemo(
    () => [
      {
        key: 'home',
        label: 'Home',
        icon: HomeIcon,
        onSelect: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveNav('home');
        }
      },
      {
        key: 'industries',
        label: 'Industries',
        icon: Building2,
        onSelect: () => {
          document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveNav('industries');
        }
      },
      {
        key: 'services',
        label: 'Services',
        icon: Briefcase,
        onSelect: () => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveNav('services');
        }
      },
      {
        key: 'agri',
        label: 'AGRI',
        icon: Sprout,
        href: AGRI_URL,
        ariaLabel: 'KUZOG AGRI'
      },
      {
        key: 'contact',
        label: 'Contact',
        icon: Mail,
        onSelect: () => {
          setIsContactOpen(true);
          setActiveNav('contact');
        }
      }
    ],
    []
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message="Message sent. We will respond shortly." />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} onSuccess={() => setToastOpen(true)} />
      <PolicyModal open={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
      <BottomBar items={navItems} activeKey={activeNav} />

      <header className="px-6 pt-10" id="home">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 no-underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-3xl bg-ink text-2xl font-semibold text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">K</div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">KUZOG</span>
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsContactOpen(true);
              setActiveNav('contact');
            }}
            className="inline-flex h-11 flex-shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 px-4 text-xs font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-12 sm:w-44 sm:text-sm"
          >
            Contact us
          </button>
        </div>
      </header>

      <main className="mt-14 flex-1 space-y-16 md:space-y-20">
        <section id="hero" className="px-6">
          <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-[42px] border border-white/45 bg-white/60 px-6 py-10 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-9 md:py-12">
            <div className="space-y-6 text-ink">
              <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-[var(--pill-text)] shadow-inner">
                Strategic Precision
              </div>
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                We acquire, operationalize, and scale ventures across continents.
              </h1>
              <p className="text-base leading-relaxed text-muted-ink md:text-lg">
                KUZOG deploys practitioner-led teams to stabilise distressed assets, revive stalled projects, and build international operating models that withstand scrutiny.
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
                  Contact us
                </button>
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveNav('industries');
                  }}
                  className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-white/60 bg-white/70 px-6 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-44"
                >
                  Explore industries
                </button>
              </div>
            </div>
            <div className="grid gap-4">
              <SubCard className="items-start text-left">
                <SubTitlePill as="h3" className="mb-2 text-base md:text-lg">
                  Operators’ focus
                </SubTitlePill>
                <p className="text-sm text-muted-ink md:text-base">
                  Multicultural practitioners embedded in each region bring governance, capital fluency, and on-the-ground operatorship to every mandate.
                </p>
              </SubCard>
              <SubCard className="items-start text-left">
                <SubTitlePill as="h3" className="mb-2 text-base md:text-lg">
                  Delivery notes
                </SubTitlePill>
                <p className="text-sm text-muted-ink md:text-base">
                  Use this card to capture upcoming initiatives, launch windows, or bespoke operator capabilities you want to highlight.
                </p>
              </SubCard>
            </div>
          </div>
        </section>

        <SectionCard id="industries" title="Strategic Position" sectionLabel="Section 01">
          <div className="space-y-4 text-ink">
            <p className="text-xl font-semibold md:text-2xl">We acquire, support, and scale projects and companies.</p>
            <p>
              KUZOG provides practitioner-led consulting to help founders, investors, and operators <strong>connect with the right partners, de-risk execution, and revive or launch projects</strong>—from distressed turnarounds to new market entries.
            </p>
          </div>
        </SectionCard>

        <SectionCard id="regional-delivery" title="Regional Delivery" sectionLabel="Section 02">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {REGION_ORDER.map((region) => (
              <SubCard key={region} className="items-center text-center">
                <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                  {region}
                </SubTitlePill>
                <p className="mt-1">{REGION_COPY[region]}</p>
              </SubCard>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="services" title="Services" sectionLabel="Section 03">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service) => (
              <SubCard key={service.title} className="items-start text-left">
                <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                  {service.title}
                </SubTitlePill>
                <p className="mt-1">{service.body}</p>
              </SubCard>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="operations" title="Operations & Ethics" sectionLabel="Section 04">
          <div className="space-y-4">
            <p className="text-ink">
              We operate under a zero-tolerance policy on corruption. Our internal code aligns with Sapin II, FCPA, and UK Bribery Act requirements, structuring every mandate with transparent reporting lines and audit-ready documentation.
            </p>
            <SubCard className="items-start text-left">
              <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                Governance commitments
              </SubTitlePill>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-ink md:text-base">
                <li>Comprehensive partner and intermediary screening before engagement.</li>
                <li>Documented approval chains and financial controls for every project.</li>
                <li>Dedicated compliance officer for sensitive mandates.</li>
              </ul>
            </SubCard>
            <button
              type="button"
              onClick={() => setIsPolicyOpen(true)}
              className="inline-flex h-12 w-48 items-center justify-center rounded-full border border-white/60 bg-white/70 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              View ethics code
            </button>
          </div>
        </SectionCard>

        <SectionCard id="other-projects" title="Other Projects" sectionLabel="Section 05">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SubCard className="items-start text-left">
              <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                KUZOG Consulting Inc.
              </SubTitlePill>
              <p>
                North American programme management and compliance support, headquartered in Toronto with delivery across Canada and USA.
              </p>
              <a
                href={CANADA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex h-11 w-44 items-center justify-center rounded-full border border-white/60 bg-white/70 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Visit kuzog.ca
              </a>
            </SubCard>
            <SubCard className="items-start text-left">
              <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                KUZOG AGRI Inc.
              </SubTitlePill>
              <p>
                HYDROBIO mineral microstructures improve plant-available water, nutrient buffering, and microbial habitats in sandy and degraded soils—supporting resilient root zones with reduced irrigation.
              </p>
              <a
                href={AGRI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex h-11 w-44 items-center justify-center rounded-full border border-white/60 bg-white/70 text-sm font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Visit KUZOG AGRI
              </a>
            </SubCard>
          </div>
        </SectionCard>
      </main>

      <SiteFooter onShowPolicy={() => setIsPolicyOpen(true)} />
    </div>
  );
}
