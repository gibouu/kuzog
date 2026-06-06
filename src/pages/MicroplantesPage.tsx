import { useState } from 'react';
import { ProductPageShell } from '../components/ProductPageShell';
import { StoryBeat } from '../components/StoryBeat';
import { BigStat } from '../components/BigStat';
import { StatGrid } from '../components/StatGrid';
import { Citation } from '../components/Citation';
import { Roadmap } from '../components/Roadmap';
import { TeamMember } from '../components/TeamMember';
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
        {/* Beat 1 — Hero */}
        <StoryBeat id="hero" eyebrow={m.hero.eyebrow} title={m.hero.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.hero.tagline}</p>
          <StatGrid columns={3}>
            {m.hero.leadStats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </StatGrid>
        </StoryBeat>

        {/* Beat 2 — Opportunity */}
        <StoryBeat id="opportunity" eyebrow={m.opportunity.eyebrow} title={m.opportunity.title} accent="microplantes" bleed>
          <StatGrid columns={4}>
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
          <p className="text-base font-medium text-ink md:text-lg md:max-w-4xl">{m.opportunity.framingLine}</p>
        </StoryBeat>

        {/* Beat 3 — Method */}
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
          <DiagramSlot id="D-3" title="Density comparison" prompt="Minimalist horizontal bar chart comparing 5 propagation methods by plants/m²/yr (MICROPLANTES 19,000 dominant in fresh green; intensive greenhouse 100; strawberry stolons 50; raspberry drageons 30; tree grafting 5). Secondary labels showing surface needed for 7M plants/yr. White background, editorial Apple aesthetic." />
        </StoryBeat>

        {/* Beat 4 — Site */}
        <StoryBeat id="site" eyebrow={m.site.eyebrow} title={m.site.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.site.body}</p>
          <StatGrid columns={4}>
            {m.site.stats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </StatGrid>
          <p className="text-base font-medium text-ink md:text-lg md:max-w-4xl">{m.site.advantageLine}</p>
          <DiagramSlot id="D-4" title="Site floor plan" prompt="Minimalist architectural floor-plan diagram of a two-floor industrial building, 952 m² total footprint, 370 m² ISO 5 cleanroom highlighted in soft green, surrounded by a 1,307 m² land outline in light grey, monoline strokes on white background, editorial style." />
        </StoryBeat>

        {/* Beat 5 — Partnership */}
        <StoryBeat id="partnership" eyebrow={m.partnership.eyebrow} title={m.partnership.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.partnership.body}</p>
          <DiagramSlot id="D-5" title="France ↔ Costa Rica partnership" prompt="Minimalist world map showing only two labelled points connected by a thin sage-green arc — 'Alajuela, Costa Rica' to 'Boissy-l'Aillerie, France' — five small text annotations along the arc reading 'Know-how transfer', 'Staff training', 'Day-1 supervision', 'Process license', 'Joint R&D', white background, geographic outlines in very light grey, editorial style." />
          <div className="flex flex-col gap-6">
            <h3 className="text-display-md text-ink">{m.partnership.pillarsHeading}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
              {m.partnership.pillars.map((pillar) => (
                <div key={pillar.title} className="flex flex-col gap-2 rounded-card-sm border border-hairline bg-surface p-6">
                  <h4 className="text-base font-semibold text-ink md:text-lg">{pillar.title}</h4>
                  <p className="text-sm text-muted-ink">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-card border border-hairline bg-surface-elevated p-6">
            <h4 className="text-base font-semibold text-ink md:text-lg">{m.partnership.partnerName}</h4>
            <p className="text-sm text-muted-ink md:text-base">{m.partnership.partnerCredentials}</p>
          </div>
        </StoryBeat>

        {/* Beat 6 — Market segments */}
        <StoryBeat id="market" eyebrow={m.market.eyebrow} title={m.market.title} accent="microplantes" bleed>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {m.market.segments.map((seg) => (
              <div key={seg.name} className="flex flex-col gap-3 rounded-card-sm border border-hairline bg-surface p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-display-md text-ink">{seg.name}</h3>
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{seg.share}</span>
                </div>
                <p className="text-sm font-medium text-ink md:text-base">{seg.volume}</p>
                <p className="text-sm text-muted-ink">{seg.caption}</p>
              </div>
            ))}
          </div>
          <p className="text-base font-medium text-ink md:text-lg">{m.market.totalLine}</p>
        </StoryBeat>

        {/* Beat 7 — Competition */}
        <StoryBeat id="competition" eyebrow={m.competition.eyebrow} title={m.competition.title} accent="microplantes">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {m.competition.competitors.map((c) => (
              <div key={c.name} className="flex flex-col gap-2 rounded-card-sm border border-hairline bg-surface p-6">
                <h4 className="text-base font-semibold text-ink md:text-lg">{c.name}</h4>
                <p className="text-sm font-medium text-muted-ink">{c.capacity}</p>
                <p className="text-sm text-muted-ink">{c.positioning}</p>
              </div>
            ))}
          </div>
          <p className="text-base font-medium text-ink md:text-lg md:max-w-4xl">{m.competition.positioningLine}</p>
        </StoryBeat>

        {/* Beat 8 — Operations & ramp */}
        <StoryBeat id="operations" eyebrow={m.operations.eyebrow} title={m.operations.title} accent="microplantes" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.operations.body}</p>
          <div className="flex flex-col gap-6">
            <h3 className="text-display-md text-ink">{m.operations.rampHeading}</h3>
            <div className="overflow-x-auto rounded-card border border-hairline bg-surface">
              <table className="w-full text-left">
                <tbody>
                  {m.operations.rampSteps.map((step, idx) => (
                    <tr key={step.year} className={idx !== m.operations.rampSteps.length - 1 ? 'border-b border-hairline' : ''}>
                      <td className="px-6 py-4 text-sm font-semibold text-ink whitespace-nowrap">{step.year}</td>
                      <td className="px-6 py-4 text-sm text-ink whitespace-nowrap">{step.capacity}</td>
                      <td className="px-6 py-4 text-sm text-muted-ink whitespace-nowrap">{step.workforce}</td>
                      <td className="px-6 py-4 text-sm text-muted-ink">{step.caption}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </StoryBeat>

        {/* Beat 9 — Financials */}
        <StoryBeat id="financials" eyebrow={m.financials.eyebrow} title={m.financials.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.financials.body}</p>
          <div className="overflow-x-auto rounded-card border border-hairline bg-surface">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-ink"></th>
                  {m.financials.years.map((y) => (
                    <th key={y} className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{y}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {m.financials.rows.map((row, idx) => (
                  <tr key={row.label} className={idx !== m.financials.rows.length - 1 ? 'border-b border-hairline' : ''}>
                    <td className="px-6 py-4 text-sm font-medium text-ink whitespace-nowrap">{row.label}</td>
                    {row.values.map((v, vIdx) => (
                      <td key={vIdx} className="px-6 py-4 text-sm text-muted-ink whitespace-nowrap">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 gap-6 rounded-card border border-hairline bg-surface-elevated p-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{m.financials.capitalStructureHeading}</h4>
              <p className="text-base text-muted-ink md:text-lg">{m.financials.capitalStructureLine}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">ROI</h4>
              <p className="text-base font-medium text-ink md:text-lg">{m.financials.roiLine}</p>
            </div>
          </div>
          <DiagramSlot id="D-6" title="Capital structure" prompt="Minimalist organisational chart showing capital structure: KUZOG France SAS owned 70/30 by Gibril and Malik Bachouchi, owning 75–80% of MICROPLANTES SAS with an external Investor at 20–25%. Boxes connected with thin grey lines, sage-green accent on shareholder percentages, white background, editorial style." />
        </StoryBeat>

        {/* Beat 10 — Team */}
        <StoryBeat id="team" eyebrow={m.team.eyebrow} title={m.team.title} accent="microplantes" bleed>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {m.team.members.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                highlights={member.highlights}
              />
            ))}
          </div>
        </StoryBeat>

        {/* Beat 11 — Success Factors */}
        <StoryBeat id="success-factors" eyebrow={m.successFactors.eyebrow} title={m.successFactors.title} accent="microplantes">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{m.successFactors.intro}</p>
          <ol className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {m.successFactors.factors.map((factor, idx) => (
              <li key={factor} className="flex gap-4 rounded-card-sm border border-hairline bg-surface p-4">
                <span className="text-sm font-semibold text-muted-ink min-w-[2rem]">{String(idx + 1).padStart(2, '0')}</span>
                <p className="text-sm text-ink md:text-base">{factor}</p>
              </li>
            ))}
          </ol>
          <p className="text-base font-medium text-ink md:text-lg md:max-w-4xl">{m.successFactors.closing}</p>
        </StoryBeat>

        {/* Beat 12 — Contact CTA */}
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
