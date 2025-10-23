import { motion } from 'framer-motion';
import { Factory, Ship, Sprout, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigation } from '../contexts/NavigationContext';
import { SubCard } from './SubCard';
import { SubTitlePill } from './TitlePills';

// Icon mapping for each audience
const AUDIENCE_ICONS = {
  manufacturer: Factory,
  importer: Ship,
  farmer: Sprout,
  startup: Lightbulb,
};

interface SolutionsCardProps {
  onContactClick: () => void;
}

export function SolutionsCard({ onContactClick }: SolutionsCardProps) {
  const { content } = useLanguage();
  const { selectedAudience, setSelectedAudience } = useNavigation();

  // Find the current audience content
  const currentAudience = content.audiences.find((a) => a.id === selectedAudience);

  if (!currentAudience) return null;

  const handleAudienceSwitch = (audienceId: string) => {
    setSelectedAudience(audienceId as any);

    // Smooth scroll to top of solutions section
    setTimeout(() => {
      const solutionsElement = document.getElementById('solutions-section');
      if (solutionsElement) {
        solutionsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <motion.section
      id="solutions-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full px-4 py-8 sm:px-6 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Main Card */}
        <div className="overflow-hidden rounded-[28px] border border-[var(--ink)]/10 bg-white/60 shadow-lg backdrop-blur-2xl md:rounded-[42px]">

          {/* Audience Selector Pills - Centered & Responsive */}
          <div className="border-b border-[var(--ink)]/10 bg-gradient-to-br from-[var(--brand)]/5 to-[var(--accent)]/5 px-4 py-6 sm:px-6 md:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {content.audiences.map((audience) => {
                const AudienceIcon = AUDIENCE_ICONS[audience.id];
                const isActive = selectedAudience === audience.id;

                return (
                  <button
                    key={audience.id}
                    onClick={() => handleAudienceSwitch(audience.id)}
                    className={`
                      flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2
                      sm:px-5 sm:py-3 sm:text-base
                      ${
                        isActive
                          ? 'bg-[var(--brand)] text-white shadow-lg scale-105'
                          : 'bg-white/60 text-[var(--muted-ink)] border border-[var(--ink)]/10 hover:bg-[var(--brand)]/10 hover:text-[var(--brand)] hover:border-[var(--brand)]/20'
                      }
                    `}
                  >
                    <AudienceIcon
                      className={`h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5 ${isActive ? 'text-white' : 'text-[var(--brand)]'}`}
                      strokeWidth={1.5}
                    />
                    {/* Full label on large screens */}
                    <span className="hidden whitespace-nowrap lg:inline">{audience.label}</span>
                    {/* Short label on medium screens */}
                    <span className="hidden whitespace-nowrap sm:inline lg:hidden">{audience.shortLabel}</span>
                    {/* Icon only on small screens - handled by hiding text */}
                  </button>
                );
              })}
            </div>

            {/* Tagline */}
            <p className="mt-4 text-center text-base text-[var(--muted-ink)] sm:text-lg">
              {currentAudience.tagline}
            </p>
          </div>

          {/* Sub-sections Grid (Regional Delivery style) */}
          <div className="px-6 py-8 sm:px-8 md:px-12 md:py-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {currentAudience.subSections.map((section) => (
                <SubCard key={section.id} className="items-start text-left">
                  <SubTitlePill as="h3" size="md" className="text-base md:text-lg">
                    {section.title}
                  </SubTitlePill>
                  <p className="mt-2 text-sm text-[var(--muted-ink)] md:text-base">
                    {section.content}
                  </p>
                </SubCard>
              ))}
            </div>
          </div>

          {/* CTA Section with Contact Us and AGRI buttons */}
          <div className="border-t border-[var(--ink)]/10 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--brand)]/5 px-6 py-8 sm:px-8 md:px-12">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-base text-[var(--muted-ink)] sm:text-lg">
                {currentAudience.ctaText}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* AGRI Button - Only show for farmers */}
                {selectedAudience === 'farmer' && (
                  <motion.a
                    href="/agri"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand)] bg-white px-6 py-3 text-base font-semibold text-[var(--brand)] shadow-sm transition-all duration-300 hover:bg-[var(--brand)]/5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 sm:px-8 sm:py-3.5"
                  >
                    <Sprout className="h-5 w-5" strokeWidth={1.5} />
                    <span className="whitespace-nowrap">{content.solutionsCard.agriButton}</span>
                  </motion.a>
                )}

                {/* Contact Us Button */}
                <motion.button
                  onClick={onContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="whitespace-nowrap rounded-full bg-[var(--brand)] px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[var(--brand-ink)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 sm:px-10 sm:py-3.5"
                >
                  {content.solutionsCard.contactButton}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
