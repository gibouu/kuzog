import { motion } from 'framer-motion';
import { Factory, Ship, Sprout, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigation } from '../contexts/NavigationContext';
import { MainTitlePill } from './TitlePills';

// Icon mapping for each audience
const AUDIENCE_ICONS = {
  manufacturer: Factory,
  importer: Ship,
  farmer: Sprout,
  startup: Lightbulb,
};

export function CallToActionCard() {
  const { content } = useLanguage();
  const { setSelectedAudience, setShowSolutions } = useNavigation();

  const handleAudienceSelect = (audienceId: string) => {
    setSelectedAudience(audienceId as any);
    setShowSolutions(true);

    // Smooth scroll to solutions section after a brief delay
    setTimeout(() => {
      const solutionsElement = document.getElementById('solutions-section');
      if (solutionsElement) {
        solutionsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <motion.section
      id="find-solution-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full px-4 py-4 sm:px-6 md:py-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Company Description - Now at the top */}
        <p className="mx-auto mb-4 max-w-3xl text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-ink)] sm:text-sm sm:tracking-[0.3em] md:mb-6 md:tracking-[0.4em]">
          {content.findSolution.description}
        </p>

        {/* Audience Cards Grid - Reordered */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {content.audiences.map((audience) => {
            const IconComponent = AUDIENCE_ICONS[audience.id];

            return (
              <motion.button
                key={audience.id}
                onClick={() => handleAudienceSelect(audience.id)}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group relative flex flex-col items-center gap-3 rounded-[28px] border border-[var(--ink)]/10 bg-white/60 p-6 text-center shadow-sm backdrop-blur-2xl transition-all duration-300 hover:border-[var(--brand)]/30 hover:bg-white/80 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 sm:p-7 md:gap-4 md:rounded-[42px] md:p-8"
                aria-label={`Select ${audience.label}`}
              >
                {/* Icon Circle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)]/10 transition-colors duration-300 group-hover:bg-[var(--brand)]/20 md:h-16 md:w-16">
                  <IconComponent
                    className="h-7 w-7 text-[var(--brand)] md:h-8 md:w-8"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Label */}
                <h3 className="text-base font-semibold text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--brand)] sm:text-lg md:text-xl">
                  {audience.label}
                </h3>

                {/* Tagline */}
                <p className="text-xs leading-relaxed text-[var(--muted-ink)] sm:text-sm">
                  {audience.tagline}
                </p>

                {/* Hover Arrow Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg
                    className="h-5 w-5 text-[var(--brand)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Subtitle hint */}
        <p className="mt-4 text-center text-xs text-[var(--muted-ink)] sm:text-sm md:mt-6">
          {content.findSolution.subtitle}
        </p>
      </div>
    </motion.section>
  );
}
