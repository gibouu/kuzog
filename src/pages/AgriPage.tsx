import { Mail, Home as HomeIcon, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomBar } from '../components/BottomBar';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';
import { PolicyModal } from '../components/PolicyModal';
import { Toast } from '../components/Toast';
import { SiteFooter } from '../components/SiteFooter';

const HYDROBIO_PROGRAMMES = [
  {
    title: 'Water retention',
    body: 'HydroBio blends engineered microstructures that increase plant-available water in sandy and degraded soils.'
  },
  {
    title: 'Nutrient buffering',
    body: 'Adaptive mineral matrices cultivate habitats for beneficial microbes and stabilise nutrient exchange in the rhizosphere.'
  },
  {
    title: 'Soil regeneration',
    body: 'Programmes pair HydroBio with reforestation and cover-crop initiatives to rebuild organic matter and soil structure.'
  },
  {
    title: 'Operator playbooks',
    body: 'Field teams co-develop playbooks covering sourcing, commissioning, and commercial rollouts for KUZOG AGRI partners.'
  }
];

export default function AgriPage() {
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
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,106,0.22),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(157,183,178,0.2),transparent_65%),#f7f1e6]">
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
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink sm:text-sm sm:tracking-[0.4em]">KUZOG</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="inline-flex h-11 flex-shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 px-4 text-xs font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-12 sm:w-44 sm:text-sm"
          >
            Contact us
          </button>
        </div>
      </header>

      <main className="mt-14 flex-1 space-y-8 px-6 pb-10">
        <div className="mx-auto w-full max-w-6xl">
          <section className="rounded-[42px] border border-white/45 bg-white/60 px-6 py-10 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:px-9 md:py-12">
            <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-[rgba(31,41,51,0.7)] shadow-inner">
              KUZOG AGRI
            </div>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink md:text-6xl">
              HydroBio &amp; Agricultural Innovation
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-ink md:text-lg">
              KUZOG AGRI incubates agricultural ventures that regenerate soils and optimise water usage. Explore HydroBio
              mineral microstructures, precision irrigation programmes, and technology partnerships supporting resilient
              farming systems.
            </p>
          </section>

          <section className="mt-8 rounded-[42px] border border-white/45 bg-white/60 px-6 py-10 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:px-9 md:py-12">
            <h2 className="mb-6 text-4xl font-semibold text-ink md:text-5xl">HydroBio programmes</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {HYDROBIO_PROGRAMMES.map((programme) => (
                <div
                  key={programme.title}
                  className="rounded-[28px] border border-white/45 bg-white/55 px-6 py-6 shadow-[0_20px_40px_rgba(31,41,51,0.12)] backdrop-blur-xl"
                >
                  <h3 className="mb-3 text-lg font-semibold text-ink">{programme.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-ink md:text-base">{programme.body}</p>
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
