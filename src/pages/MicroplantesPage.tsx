import { useState } from 'react';
import { ProductPageShell } from '../components/ProductPageShell';
import { StoryBeat } from '../components/StoryBeat';
import { MultiplicationTreeFigure, NotGmoFigure, LabJourneyFigure, VirusFreeFigure } from '../components/figures';
import { ContactCTA } from '../components/ContactCTA';
import { ContactModal } from '../components/ContactModal';
import { Toast } from '../components/Toast';
import { ExpandableCard } from '../components/ExpandableCard';
import { ExpandableList } from '../components/ExpandableList';
import { useLanguage } from '../contexts/LanguageContext';

export default function MicroplantesPage() {
  const { content } = useLanguage();
  const m = content.microplantes;
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <>
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message={content.contactModal.successMessage} />
      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSuccess={() => setToastOpen(true)}
        topic="microplantes"
      />
      <ProductPageShell accent="microplantes">

        {/* ── 1. Hero ── */}
        <StoryBeat id="hero" eyebrow={m.hero.eyebrow} title={m.hero.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.hero.tagline}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {m.hero.leadStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-6 md:p-8">
                <div className="text-[clamp(28px,3vw,44px)] font-semibold leading-tight tracking-tight text-ink">{stat.value}</div>
                <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          {m.hero.positioning && (
            <div className="rounded-card border border-accent-microplantes bg-surface px-6 py-4">
              <p className="text-base font-semibold text-ink md:text-lg">{m.hero.positioning}</p>
            </div>
          )}
        </StoryBeat>

        {/* ── 2. Why in-vitro ── */}
        <StoryBeat id="why-in-vitro" eyebrow={m.whyInVitro.eyebrow} title={m.whyInVitro.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.whyInVitro.body}</p>
          <ExpandableList>
            {m.whyInVitro.benefits.map((b) => (
              <ExpandableCard key={b.title} title={b.title} accent="microplantes">
                <p>{b.detail}</p>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 3. 4-step process ── */}
        <StoryBeat id="process" eyebrow={m.process.eyebrow} title={m.process.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.process.body}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {m.process.steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4 rounded-card border border-hairline bg-surface p-8">
                <span className="text-display-md font-bold text-accent-microplantes">{String(step.number).padStart(2, '0')}</span>
                <h3 className="text-base font-semibold text-ink md:text-lg">{step.title}</h3>
                <p className="text-sm text-muted-ink md:text-base">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <MultiplicationTreeFigure />
            <NotGmoFigure />
            <LabJourneyFigure />
            <VirusFreeFigure />
          </div>
        </StoryBeat>

        {/* ── 4. Filières & variétés ── */}
        <StoryBeat id="filieres" eyebrow={m.filieres.eyebrow} title={m.filieres.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.filieres.body}</p>
          <ExpandableList>
            {m.filieres.items.map((f) => (
              <ExpandableCard
                key={f.number}
                title={`${f.number} · ${f.name}`}
                teaser={f.intro}
                accent="microplantes"
              >
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{f.latin}</p>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {f.varieties.map((v) => (
                      <div key={v.name} className="rounded-card-sm border border-hairline bg-surface-elevated p-4 flex flex-col gap-1">
                        <h4 className="text-sm font-semibold text-ink">{v.name}</h4>
                        {v.type && <p className="text-xs italic text-muted-ink">{v.type}</p>}
                        <p className="text-sm text-muted-ink">{v.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 5. Plant formats ── */}
        <StoryBeat id="formats" eyebrow={m.formats.eyebrow} title={m.formats.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.formats.body}</p>
          <ExpandableList>
            {m.formats.items.map((fmt) => (
              <ExpandableCard
                key={fmt.format}
                title={fmt.format}
                accent="microplantes"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-ink md:text-base">{fmt.description}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-ink md:text-sm">
                    {m.formats.audienceLabel}: {fmt.audience}
                  </p>
                </div>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 6. Services on demand ── */}
        <StoryBeat id="services" eyebrow={m.services.eyebrow} title={m.services.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.services.body}</p>
          <ExpandableList>
            {m.services.items.map((service) => (
              <ExpandableCard key={service.title} title={service.title} accent="microplantes">
                <p>{service.detail}</p>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 7. R&D ── */}
        <StoryBeat id="rnd" eyebrow={m.rnd.eyebrow} title={m.rnd.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.rnd.body}</p>
          <ExpandableList>
            {m.rnd.axes.map((axis) => (
              <ExpandableCard key={axis.title} title={axis.title} accent="microplantes">
                <p>{axis.detail}</p>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 8. Our laboratory ── */}
        <StoryBeat id="lab" eyebrow={m.lab.eyebrow} title={m.lab.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.lab.body}</p>
          <ExpandableList>
            {m.lab.spaces.map((space) => (
              <ExpandableCard key={space.title} title={space.title} accent="microplantes">
                <p>{space.detail}</p>
              </ExpandableCard>
            ))}
          </ExpandableList>
          <div className="rounded-card border border-accent-microplantes bg-surface px-6 py-5 flex flex-col gap-2">
            <h3 className="text-base font-semibold text-ink">{m.lab.capacityHeading}</h3>
            <p className="text-sm text-muted-ink md:text-base">{m.lab.capacityBody}</p>
          </div>
        </StoryBeat>

        {/* ── 9. Quality & traceability ── */}
        <StoryBeat id="quality" eyebrow={m.quality.eyebrow} title={m.quality.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.quality.body}</p>
          <ExpandableList>
            {m.quality.commitments.map((commitment) => (
              <ExpandableCard key={commitment.title} title={commitment.title} accent="microplantes">
                <p>{commitment.detail}</p>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 10. FAQ ── */}
        <StoryBeat id="faq" eyebrow={m.faq.eyebrow} title={m.faq.title} accent="microplantes" bleed>
          <ExpandableList>
            {m.faq.items.map((item) => (
              <ExpandableCard
                key={item.question}
                title={item.question}
                accent="microplantes"
              >
                <p>{item.answer}</p>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 11. Contact CTA ── */}
        <StoryBeat id="contact">
          <ContactCTA
            title={m.contactCTA.title}
            description={m.contactCTA.description}
            ctaLabel={m.contactCTA.ctaLabel}
            onContactClick={() => setIsContactOpen(true)}
          />
        </StoryBeat>

      </ProductPageShell>
    </>
  );
}
