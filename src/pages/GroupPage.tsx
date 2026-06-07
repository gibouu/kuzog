import { useState } from 'react';
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
