/**
 * KUZOG Audience-Centric Navigation - Integration Snippets
 *
 * Copy and paste these snippets into your existing files.
 * Follow the numbered steps below.
 */

// ============================================================
// STEP 1: Update src/main.tsx
// ============================================================

// ADD this import at the top:
import { NavigationProvider } from './contexts/NavigationContext.tsx';

// WRAP your RouterProvider like this:
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationProvider>
      <RouterProvider router={router} />
    </NavigationProvider>
  </StrictMode>
);


// ============================================================
// STEP 2: Update src/App.tsx - Imports
// ============================================================

// ADD these imports at the top of App.tsx:
import { AnimatePresence } from 'framer-motion';
import { useNavigation } from './contexts/NavigationContext';
import { CallToActionCard } from './components/CallToActionCard';
import { SolutionsCard } from './components/SolutionsCard';


// ============================================================
// STEP 3: Update src/App.tsx - Inside App() function
// ============================================================

export default function App() {
  // ... existing state declarations ...
  const [activeNav, setActiveNav] = useState<'home' | 'industries' | 'services' | 'contact'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  // ADD THIS LINE to access navigation context:
  const { showSolutions } = useNavigation();

  // ... rest of your existing hooks and logic ...
}


// ============================================================
// STEP 4: Update src/App.tsx - Main Content Section
// ============================================================

// REPLACE your main section with this (insert new components after hero):

<main className="mt-14 flex-1 space-y-16 md:space-y-20">
  {/* ========== EXISTING HERO SECTION ========== */}
  <section id="hero" className="px-6">
    <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-[42px] border border-white/45 bg-white/60 px-6 py-10 shadow-[0_40px_90px_rgba(31,41,51,0.18)] backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-9 md:py-12">
      {/* ... your existing hero content ... */}
    </div>
  </section>

  {/* ========== NEW: AUDIENCE SELECTION ========== */}
  {!showSolutions && <CallToActionCard />}

  {/* ========== NEW: DYNAMIC SOLUTIONS CARD ========== */}
  <AnimatePresence mode="wait">
    {showSolutions && (
      <SolutionsCard onContactClick={() => setIsContactOpen(true)} />
    )}
  </AnimatePresence>

  {/* ========== EXISTING SECTIONS CONTINUE BELOW ========== */}
  <SectionCard id="industries" title="Strategic Position" sectionLabel="Section 01">
    {/* ... existing content ... */}
  </SectionCard>

  <SectionCard id="regional-delivery" title="Regional Delivery" sectionLabel="Section 02">
    {/* ... existing content ... */}
  </SectionCard>

  <SectionCard id="services" title="Services" sectionLabel="Section 03">
    {/* ... existing content ... */}
  </SectionCard>

  {/* ... rest of your sections ... */}
</main>


// ============================================================
// ALTERNATIVE: If you want dynamic bottom navigation
// ============================================================

// You can optionally update your navItems to change based on selected audience.
// This is an ADVANCED feature - only implement if you want the bottom nav to
// dynamically update when users select an audience.

export default function App() {
  const { selectedAudience, showSolutions } = useNavigation();

  // Compute dynamic nav items based on selected audience
  const navItems = useMemo(() => {
    const baseItems = [
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
      // Add dynamic item when solutions is shown
      ...(showSolutions && selectedAudience ? [{
        key: 'solutions',
        label: selectedAudience === 'farmer' ? 'Agriculture' :
               selectedAudience === 'startup' ? 'Start-ups' :
               selectedAudience === 'manufacturer' ? 'Manufacturing' :
               'Trade',
        icon: selectedAudience === 'farmer' ? Sprout :
              selectedAudience === 'startup' ? Lightbulb :
              selectedAudience === 'manufacturer' ? Factory :
              Ship,
        onSelect: () => {
          document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }] : []),
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
    ];

    return baseItems;
  }, [selectedAudience, showSolutions]);

  // ... rest of your component
}


// ============================================================
// COMPLETE MINIMAL INTEGRATION EXAMPLE
// ============================================================

// Here's a minimal working example showing the exact placement:

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion'; // NEW
import { useNavigation } from './contexts/NavigationContext'; // NEW
import { CallToActionCard } from './components/CallToActionCard'; // NEW
import { SolutionsCard } from './components/SolutionsCard'; // NEW
// ... other existing imports ...

export default function App() {
  const [activeNav, setActiveNav] = useState<'home' | 'industries' | 'services' | 'contact'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const { showSolutions } = useNavigation(); // NEW

  // ... all your existing useEffect and useMemo hooks ...

  return (
    <div className="flex min-h-screen flex-col">
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message="Message sent. We will respond shortly." />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} onSuccess={() => setToastOpen(true)} />
      <PolicyModal open={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
      <BottomBar items={navItems} activeKey={activeNav} />

      <header className="px-6 pt-10" id="home">
        {/* ... existing header code ... */}
      </header>

      <main className="mt-14 flex-1 space-y-16 md:space-y-20">
        <section id="hero" className="px-6">
          {/* ... existing hero code ... */}
        </section>

        {/* NEW: Audience Selection & Solutions */}
        {!showSolutions && <CallToActionCard />}

        <AnimatePresence mode="wait">
          {showSolutions && (
            <SolutionsCard onContactClick={() => setIsContactOpen(true)} />
          )}
        </AnimatePresence>

        {/* All existing sections below */}
        <SectionCard id="industries" title="Strategic Position" sectionLabel="Section 01">
          {/* ... */}
        </SectionCard>

        {/* ... rest of your sections ... */}
      </main>

      <SiteFooter onShowPolicy={() => setIsPolicyOpen(true)} />
    </div>
  );
}
