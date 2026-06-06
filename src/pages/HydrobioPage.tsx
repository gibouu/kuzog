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
        {/* Hero */}
        <StoryBeat id="hero" eyebrow={h.hero.eyebrow} title={h.hero.title} accent="hydrobio">
          {h.hero.recognition && (
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-hydrobio bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-hydrobio" aria-hidden />
              {h.hero.recognition}
            </div>
          )}
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{h.hero.tagline}</p>
          <StatGrid columns={3}>
            {h.hero.leadStats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </StatGrid>
        </StoryBeat>

        {/* Problem */}
        <StoryBeat id="problem" eyebrow={h.problem.eyebrow} title={h.problem.title} accent="hydrobio" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{h.problem.body}</p>
          <StatGrid columns={3}>
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
        </StoryBeat>

        {/* Solution / Science */}
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

        {/* Results */}
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

        {/* Team & IP */}
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

        {/* Impact */}
        <StoryBeat id="impact" eyebrow={h.impact.eyebrow} title={h.impact.title} accent="hydrobio" bleed>
          <StatGrid columns={3}>
            {h.impact.stats.map((s) => (
              <BigStat key={s.label} value={s.value} label={s.label} caption={s.caption} source={s.source && <Citation text={s.source} />} />
            ))}
            <BigStat value={h.impact.sdgValue} label={h.impact.sdgLabel} caption={h.impact.sdgCaption} />
          </StatGrid>
        </StoryBeat>

        {/* Contact CTA */}
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
