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
      className="w-full px-4 py-8 sm:px-6 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="mb-6 flex justify-center md:mb-8">
          <MainTitlePill size="lg" tone="primary">
            {content.findSolution.title}
          </MainTitlePill>
        </div>

        {/* Company Description */}
        <p className="mx-auto mb-8 max-w-3xl text-center text-base font-semibold uppercase tracking-[0.3em] text-[var(--muted-ink)] sm:text-sm md:mb-12 md:tracking-[0.4em]">
          {content.findSolution.description}
        </p>

        {/* Audience Cards Grid - Reordered */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {content.audiences.map((audience) => {
            const IconComponent = AUDIENCE_ICONS[audience.id];

            return (
              <motion.button
                key={audience.id}
                onClick={() => handleAudienceSelect(audience.id)}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group relative flex flex-col items-center gap-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/60 p-8 text-center shadow-sm backdrop-blur-2xl transition-all duration-300 hover:border-[var(--brand)]/30 hover:bg-white/80 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 sm:p-10 md:gap-6 md:rounded-[42px] md:p-12"
                aria-label={`Select ${audience.label}`}
              >
                {/* Icon Circle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand)]/10 transition-colors duration-300 group-hover:bg-[var(--brand)]/20 md:h-20 md:w-20">
                  <IconComponent
                    className="h-8 w-8 text-[var(--brand)] md:h-10 md:w-10"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--brand)] sm:text-2xl md:text-3xl">
                  {audience.label}
                </h3>

                {/* Tagline */}
                <p className="text-sm leading-relaxed text-[var(--muted-ink)] sm:text-base">
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
        <p className="mt-8 text-center text-sm text-[var(--muted-ink)] md:mt-12">
          {content.findSolution.subtitle}
        </p>
      </div>
    </motion.section>
  );
}
