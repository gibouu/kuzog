import { useState } from 'react';
import { ProductPageShell } from '../components/ProductPageShell';
import { StoryBeat } from '../components/StoryBeat';
import { BigStat } from '../components/BigStat';
import { StatGrid } from '../components/StatGrid';
import { Citation } from '../components/Citation';
import { ComparisonTable } from '../components/ComparisonTable';
import { Roadmap } from '../components/Roadmap';
import { TeamMember } from '../components/TeamMember';
import { ContactCTA } from '../components/ContactCTA';
import { DiagramSlot } from '../components/DiagramSlot';
import { ContactModal } from '../components/ContactModal';
import { Toast } from '../components/Toast';
import { useLanguage } from '../contexts/LanguageContext';

export default function HydrobioPage() {
  const { content } = useLanguage();
  const h = content.hydrobio;
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <>
      <Toast open={toastOpen} onDismiss={() => setToastOpen(false)} message={content.contactModal.successMessage} />
      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSuccess={() => setToastOpen(true)}
        topic="hydrobio"
      />
      <ProductPageShell accent="hydrobio">
        {/* Beat 1 — Hero */}
        <StoryBeat id="hero" eyebrow={h.hero.eyebrow} title={h.hero.title} accent="hydrobio">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{h.hero.tagline}</p>
          <StatGrid columns={3}>
            {h.hero.leadStats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </StatGrid>
        </StoryBeat>

        {/* Beat 2 — Problem */}
        <StoryBeat id="problem" eyebrow={h.problem.eyebrow} title={h.problem.title} accent="hydrobio" bleed>
          <StatGrid columns={4}>
            {h.problem.stats.map((stat) => (
              <BigStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                caption={stat.caption}
                source={stat.source && <Citation text={stat.source} />}
              />
            ))}
          </StatGrid>
          <blockquote className="border-l-2 border-accent-hydrobio pl-6 text-base italic text-ink md:text-lg">
            "{h.problem.quote}"
            <footer className="mt-2"><Citation text={h.problem.quoteSource} /></footer>
          </blockquote>
          <p className="text-base font-medium text-ink md:text-lg md:max-w-3xl">{h.problem.framingLine}</p>
        </StoryBeat>

        {/* Beat 3 — Solution */}
        <StoryBeat id="solution" eyebrow={h.solution.eyebrow} title={h.solution.title} accent="hydrobio">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {h.solution.components.map((comp) => (
              <div key={comp.name} className="flex flex-col gap-3 rounded-card-sm border border-hairline bg-surface p-6">
                <h3 className="text-display-md text-ink">{comp.name}</h3>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{comp.role}</p>
                <ul className="flex flex-col gap-2 text-sm text-muted-ink md:text-base">
                  {comp.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <DiagramSlot id="D-1" title="3-component synergy" prompt="Minimalist Venn diagram, three overlapping circles in sage green tones, labels 'Micronised Clay', 'Micronised Zeolite', 'Mycorrhizal Consortium', centre intersection labelled 'Synergy', monoline strokes, white background, editorial aesthetic." />
          <p className="text-base font-medium text-ink md:text-lg md:max-w-4xl">{h.solution.synergyLine}</p>
        </StoryBeat>

        {/* Beat 4 — Competitive Edge */}
        <StoryBeat id="competitive-edge" eyebrow={h.competitiveEdge.eyebrow} title={h.competitiveEdge.title} accent="hydrobio" bleed>
          <ComparisonTable
            columns={h.competitiveEdge.columns}
            rows={h.competitiveEdge.rows}
            highlightColumn={3}
            caption={h.competitiveEdge.caption}
          />
        </StoryBeat>

        {/* Beat 5 — Market Opportunity */}
        <StoryBeat id="market" eyebrow={h.market.eyebrow} title={h.market.title} accent="hydrobio">
          <StatGrid columns={3}>
            {h.market.cards.map((card) => (
              <BigStat
                key={card.label}
                value={card.value}
                label={card.label}
                caption={`${card.eyebrow} · ${card.caption}`}
                source={card.source && <Citation text={card.source} />}
              />
            ))}
          </StatGrid>
          <div className="grid grid-cols-1 gap-6 rounded-card border border-hairline bg-surface p-8 md:grid-cols-3">
            <BigStat value={h.market.tamSamSom.tamValue} label={h.market.tamSamSom.tamLabel} caption={h.market.tamSamSom.tamCaption} source={h.market.tamSamSom.tamSource && <Citation text={h.market.tamSamSom.tamSource} />} />
            <BigStat value={h.market.tamSamSom.samValue} label={h.market.tamSamSom.samLabel} caption={h.market.tamSamSom.samCaption} source={h.market.tamSamSom.samSource && <Citation text={h.market.tamSamSom.samSource} />} />
            <BigStat value={h.market.tamSamSom.somValue} label={h.market.tamSamSom.somLabel} caption={h.market.tamSamSom.somCaption} source={h.market.tamSamSom.somSource && <Citation text={h.market.tamSamSom.somSource} />} />
          </div>
        </StoryBeat>

        {/* Beat 6 — Results & Validation */}
        <StoryBeat id="results" eyebrow={h.results.eyebrow} title={h.results.title} accent="hydrobio" bleed>
          <StatGrid columns={4}>
            {h.results.stats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} caption={stat.caption} />
            ))}
          </StatGrid>
          <p className="text-xs italic text-muted-ink">{h.results.footnote}</p>
          <div className="flex flex-col gap-6">
            <h3 className="text-display-md text-ink">{h.results.roadmapHeading}</h3>
            <Roadmap steps={h.results.roadmapSteps} />
          </div>
        </StoryBeat>

        {/* Beat 7 — Business Model */}
        <StoryBeat id="business-model" eyebrow={h.businessModel.eyebrow} title={h.businessModel.title} accent="hydrobio">
          <div className="flex flex-col gap-6">
            <h3 className="text-display-md text-ink">{h.businessModel.pricingHeading}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {h.businessModel.pricing.map((tier) => (
                <div key={tier.label} className="flex flex-col gap-2 rounded-card-sm border border-hairline bg-surface p-6">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{tier.label}</span>
                  <span className="text-display-md text-ink">{tier.price}</span>
                  <span className="text-sm text-muted-ink">{tier.margin}</span>
                </div>
              ))}
            </div>
            <p className="text-sm italic text-muted-ink">{h.businessModel.pricingFootnote}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-display-md text-ink">{h.businessModel.trajectoryHeading}</h3>
            <p className="text-base text-muted-ink md:text-lg">{h.businessModel.trajectoryLine}</p>
            <DiagramSlot id="D-2" title="Revenue trajectory 2026–2030" prompt="Minimalist editorial revenue chart, single sage-green line graph from 2026 to 2030, y-axis €M scale 0 to 25, milestone markers at 'Break-even 2028' and '€22M 2030', clean axes, no gridlines, white background, Apple keynote aesthetic." />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-display-md text-ink">{h.businessModel.distributionHeading}</h3>
            <ul className="flex flex-col gap-2">
              {h.businessModel.distribution.map((d) => (
                <li key={d.label} className="flex items-baseline gap-4">
                  <span className="text-display-md text-ink">{d.share}</span>
                  <span className="text-sm text-muted-ink md:text-base">{d.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </StoryBeat>

        {/* Beat 8 — GTM & Roadmap */}
        <StoryBeat id="gtm" eyebrow={h.gtm.eyebrow} title={h.gtm.title} accent="hydrobio" bleed>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {h.gtm.steps.map((step) => (
              <li key={step.number} className="flex gap-4 rounded-card-sm border border-hairline bg-surface p-6">
                <span className="text-display-md text-muted-ink">{step.number}</span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-semibold text-ink md:text-lg">{step.title}</h4>
                  <p className="text-sm text-muted-ink md:text-base">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-base font-medium text-ink md:text-lg">{h.gtm.priorityLine}</p>
          <div className="flex flex-col gap-6">
            <h3 className="text-display-md text-ink">{h.gtm.roadmapHeading}</h3>
            <Roadmap steps={h.gtm.roadmapSteps} />
          </div>
        </StoryBeat>

        {/* Beat 9 — Team & IP */}
        <StoryBeat id="team" eyebrow={h.team.eyebrow} title={h.team.title} accent="hydrobio">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {h.team.members.map((m) => (
              <TeamMember key={m.name} name={m.name} role={m.role} bio={m.bio} highlights={m.highlights} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-display-md text-ink">{h.team.ipHeading}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {h.team.ipCards.map((ip) => (
                <div key={ip.title} className="flex flex-col gap-2 rounded-card-sm border border-hairline bg-surface p-6">
                  <h4 className="text-base font-semibold text-ink md:text-lg">{ip.title}</h4>
                  <p className="text-sm text-muted-ink md:text-base">{ip.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </StoryBeat>

        {/* Beat 10 — Systemic Impact */}
        <StoryBeat id="impact" eyebrow={h.systemicImpact.eyebrow} title={h.systemicImpact.title} accent="hydrobio" bleed>
          <StatGrid columns={3}>
            {h.systemicImpact.stats.map((s) => (
              <BigStat key={s.label} value={s.value} label={s.label} caption={s.caption} source={s.source && <Citation text={s.source} />} />
            ))}
            <BigStat value={h.systemicImpact.sdgValue} label={h.systemicImpact.sdgLabel} caption={h.systemicImpact.sdgCaption} />
          </StatGrid>
        </StoryBeat>

        {/* Beat 11 — Smallholder story */}
        <StoryBeat id="smallholder" eyebrow={h.smallholder.eyebrow} title={h.smallholder.title} accent="hydrobio">
          <p className="text-base text-muted-ink md:text-lg md:max-w-4xl">{h.smallholder.intro}</p>
          <Citation text={h.smallholder.introSource} />
          <p className="text-base font-medium text-ink md:text-lg md:max-w-4xl">{h.smallholder.body}</p>
          <StatGrid columns={3}>
            {h.smallholder.stats.map((s) => (
              <BigStat key={s.label} value={s.value} label={s.label} caption={s.caption} source={s.source && <Citation text={s.source} />} />
            ))}
          </StatGrid>
          <p className="text-base font-medium text-ink md:text-lg md:max-w-4xl">{h.smallholder.closing}</p>
        </StoryBeat>

        {/* Beat 12 — Contact CTA */}
        <StoryBeat id="contact">
          <ContactCTA
            title={h.contactCTA.title}
            description={h.contactCTA.description}
            ctaLabel={h.contactCTA.ctaLabel}
            onContactClick={() => setIsContactOpen(true)}
          />
        </StoryBeat>
      </ProductPageShell>
    </>
  );
}
