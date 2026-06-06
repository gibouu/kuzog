import { useState } from 'react';
import { ProductPageShell } from '../components/ProductPageShell';
import { StoryBeat } from '../components/StoryBeat';
import { BigStat } from '../components/BigStat';
import { StatGrid } from '../components/StatGrid';
import { Citation } from '../components/Citation';
import { ContactCTA } from '../components/ContactCTA';
import { DiagramSlot } from '../components/DiagramSlot';
import { ContactModal } from '../components/ContactModal';
import { Toast } from '../components/Toast';
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
        {/* Hero */}
        <StoryBeat id="hero" eyebrow={m.hero.eyebrow} title={m.hero.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.hero.tagline}</p>
          <StatGrid columns={3}>
            {m.hero.leadStats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </StatGrid>
        </StoryBeat>

        {/* Opportunity */}
        <StoryBeat id="opportunity" eyebrow={m.opportunity.eyebrow} title={m.opportunity.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.opportunity.body}</p>
          <StatGrid columns={3}>
            {m.opportunity.stats.map((stat) => (
              <BigStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                caption={stat.caption}
                source={stat.source && <Citation text={stat.source} />}
              />
            ))}
          </StatGrid>
        </StoryBeat>

        {/* Method / Science */}
        <StoryBeat id="method" eyebrow={m.method.eyebrow} title={m.method.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.method.body}</p>
          <p className="text-base font-medium text-ink md:text-lg md:max-w-3xl">{m.method.advantageLine}</p>
          <div className="flex flex-col gap-6">
            <h3 className="text-display-md text-ink">{m.method.densityHeading}</h3>
            <div className="overflow-x-auto rounded-card border border-hairline bg-surface">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">Method</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">Density</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">Surface</th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">Multiplier</th>
                  </tr>
                </thead>
                <tbody>
                  {m.method.densityRows.map((row, idx) => (
                    <tr key={row.method} className={`${idx === 0 ? 'bg-surface-elevated' : ''} ${idx !== m.method.densityRows.length - 1 ? 'border-b border-hairline' : ''}`}>
                      <td className={`px-6 py-4 text-sm ${idx === 0 ? 'font-semibold text-ink' : 'text-ink'}`}>{row.method}</td>
                      <td className={`px-6 py-4 text-sm ${idx === 0 ? 'font-semibold text-ink' : 'text-muted-ink'}`}>{row.density}</td>
                      <td className={`px-6 py-4 text-sm ${idx === 0 ? 'font-semibold text-ink' : 'text-muted-ink'}`}>{row.surface}</td>
                      <td className={`px-6 py-4 text-sm ${idx === 0 ? 'font-semibold text-ink' : 'text-muted-ink'}`}>{row.multiplier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Citation text={m.method.densityFootnote} />
          </div>
          <DiagramSlot id="D-3" title="Density comparison" prompt="Minimalist horizontal bar chart comparing 5 propagation methods by plants/m²/yr (Microplantes 19,000 dominant in fresh green; intensive greenhouse 100; strawberry stolons 50; raspberry drageons 30; tree grafting 5). White background, editorial Apple aesthetic." />
        </StoryBeat>

        {/* Site */}
        <StoryBeat id="site" eyebrow={m.site.eyebrow} title={m.site.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.site.body}</p>
          <StatGrid columns={3}>
            {m.site.stats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </StatGrid>
          <div className="rounded-card border border-accent-microplantes bg-surface px-6 py-4">
            <p className="text-base font-semibold text-ink md:text-lg">{m.site.positioning}</p>
          </div>
          <p className="text-base text-muted-ink md:text-lg md:max-w-4xl">{m.site.advantageLine}</p>
        </StoryBeat>

        {/* Partnership */}
        <StoryBeat id="partnership" eyebrow={m.partnership.eyebrow} title={m.partnership.title} accent="microplantes">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {m.partnership.pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-2 rounded-card-sm border border-hairline bg-surface p-6">
                <h4 className="text-base font-semibold text-ink md:text-lg">{pillar.title}</h4>
                <p className="text-sm text-muted-ink">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </StoryBeat>

        {/* Contact CTA */}
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
