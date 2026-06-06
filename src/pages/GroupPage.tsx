import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ProductPageShell } from '../components/ProductPageShell';
import { StoryBeat } from '../components/StoryBeat';
import { RecognitionBeat } from '../components/RecognitionBeat';
import { ContactCTA } from '../components/ContactCTA';
import { ContactModal } from '../components/ContactModal';
import { Toast } from '../components/Toast';
import { useLanguage } from '../contexts/LanguageContext';

export default function GroupPage() {
  const { content } = useLanguage();
  const g = content.group;
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <>
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message={content.contactModal.successMessage} />
      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSuccess={() => setToastOpen(true)}
        topic="group"
      />
      <ProductPageShell accent="group">
        {/* Hero */}
        <StoryBeat id="hero" eyebrow={g.hero.eyebrow} title={g.hero.title} accent="group">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{g.hero.body}</p>
          <p className="text-sm italic text-muted-ink md:text-base md:max-w-3xl">{g.hero.origin}</p>
        </StoryBeat>

        {/* Activities */}
        <StoryBeat id="activities" title={g.activitiesHeading} accent="group" bleed>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {g.activities.map((activity) => {
              const isExternal = Boolean(activity.externalUrl);
              const cardClasses = "flex h-full flex-col gap-3 rounded-card border border-hairline bg-surface p-8 transition duration-200 ease-out";
              const interactiveClasses = isExternal
                ? " hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                : "";

              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-display-md text-ink">{activity.title}</h3>
                    {isExternal && <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-ink" aria-hidden />}
                  </div>
                  <p className="text-sm text-muted-ink md:text-base">{activity.detail}</p>
                </>
              );

              if (isExternal && activity.externalUrl) {
                return (
                  <a
                    key={activity.title}
                    href={activity.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses + interactiveClasses}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <div key={activity.title} className={cardClasses}>
                  {inner}
                </div>
              );
            })}
          </div>
        </StoryBeat>

        {/* Founders */}
        <StoryBeat id="founders" title={g.foundersHeading} accent="group">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {g.founders.map((f) => (
              <article key={f.name} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-elevated text-display-md text-muted-ink" aria-hidden>
                  {f.name.charAt(0)}
                </div>
                <h3 className="text-display-md text-ink">{f.name}</h3>
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted-ink md:text-base">{f.role}</p>
                <p className="text-sm text-muted-ink md:text-base">{f.bio}</p>
              </article>
            ))}
          </div>
        </StoryBeat>

        {/* News & recognition */}
        <RecognitionBeat content={g.recognition} accent="group" />

        {/* Contact CTA */}
        <StoryBeat id="contact">
          <ContactCTA
            title={g.contactCTA.title}
            description={g.contactCTA.description}
            ctaLabel={g.contactCTA.ctaLabel}
            onContactClick={() => setIsContactOpen(true)}
          />
        </StoryBeat>
      </ProductPageShell>
    </>
  );
}
