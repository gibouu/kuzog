import { useState } from 'react';
import { ProductPageShell } from '../components/ProductPageShell';
import { StoryBeat } from '../components/StoryBeat';
import { BigStat } from '../components/BigStat';
import { StatGrid } from '../components/StatGrid';
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
          <StatGrid columns={3}>
            {m.hero.leadStats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </StatGrid>
          {m.hero.positioning && (
            <div className="rounded-card border border-accent-microplantes bg-surface px-6 py-4">
              <p className="text-base font-semibold text-ink md:text-lg">{m.hero.positioning}</p>
            </div>
          )}
        </StoryBeat>

        {/* ── 2. Why in-vitro ── */}
        <StoryBeat id="why-in-vitro" eyebrow={m.whyInVitro.eyebrow} title={m.whyInVitro.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.whyInVitro.body}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {m.whyInVitro.benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-8">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-microplantes" aria-hidden />
                <h3 className="text-base font-semibold text-ink md:text-lg">{benefit.title}</h3>
                <p className="text-sm text-muted-ink md:text-base">{benefit.detail}</p>
              </div>
            ))}
          </div>
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {m.formats.items.map((fmt) => (
              <div key={fmt.format} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-microplantes" aria-hidden />
                  <h3 className="text-base font-semibold text-ink">{fmt.format}</h3>
                </div>
                <p className="text-sm text-muted-ink md:text-base">{fmt.description}</p>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{fmt.audience}</p>
              </div>
            ))}
          </div>
        </StoryBeat>

        {/* ── 6. Services on demand ── */}
        <StoryBeat id="services" eyebrow={m.services.eyebrow} title={m.services.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.services.body}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {m.services.items.map((svc) => (
              <div key={svc.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-6">
                <h3 className="text-base font-semibold text-ink">{svc.title}</h3>
                <p className="text-sm text-muted-ink md:text-base">{svc.detail}</p>
              </div>
            ))}
          </div>
        </StoryBeat>

        {/* ── 7. R&D ── */}
        <StoryBeat id="rnd" eyebrow={m.rnd.eyebrow} title={m.rnd.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.rnd.body}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {m.rnd.axes.map((axis) => (
              <div key={axis.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-microplantes" aria-hidden />
                  <h3 className="text-base font-semibold text-ink">{axis.title}</h3>
                </div>
                <p className="text-sm text-muted-ink md:text-base">{axis.detail}</p>
              </div>
            ))}
          </div>
        </StoryBeat>

        {/* ── 8. Our laboratory ── */}
        <StoryBeat id="lab" eyebrow={m.lab.eyebrow} title={m.lab.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.lab.body}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {m.lab.spaces.map((space) => (
              <div key={space.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-6">
                <h3 className="text-base font-semibold text-ink">{space.title}</h3>
                <p className="text-sm text-muted-ink md:text-base">{space.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-card border border-accent-microplantes bg-surface px-6 py-5 flex flex-col gap-2">
            <h3 className="text-base font-semibold text-ink">{m.lab.capacityHeading}</h3>
            <p className="text-sm text-muted-ink md:text-base">{m.lab.capacityBody}</p>
          </div>
        </StoryBeat>

        {/* ── 9. Quality & traceability ── */}
        <StoryBeat id="quality" eyebrow={m.quality.eyebrow} title={m.quality.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.quality.body}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {m.quality.commitments.map((c) => (
              <div key={c.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-microplantes" aria-hidden />
                  <h3 className="text-base font-semibold text-ink">{c.title}</h3>
                </div>
                <p className="text-sm text-muted-ink md:text-base">{c.detail}</p>
              </div>
            ))}
          </div>
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
