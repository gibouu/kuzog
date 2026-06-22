import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductPageShell } from '../components/ProductPageShell';
import { StoryBeat } from '../components/StoryBeat';
import { BigStat } from '../components/BigStat';
import { StatGrid } from '../components/StatGrid';
import { Citation } from '../components/Citation';
import { ContactCTA } from '../components/ContactCTA';
import { RecognitionBeat } from '../components/RecognitionBeat';
import { ContactModal } from '../components/ContactModal';
import { Toast } from '../components/Toast';
import { ExpandableCard } from '../components/ExpandableCard';
import { ExpandableList } from '../components/ExpandableList';
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

        {/* ── 1. Hero ── */}
        <StoryBeat id="hero" eyebrow={h.hero.eyebrow} title={h.hero.title} accent="hydrobio">
          {h.hero.recognition && (
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-hydrobio bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-hydrobio" aria-hidden />
              {h.hero.recognition}
            </div>
          )}
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{h.hero.tagline}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {h.hero.leadStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-6 md:p-8">
                <div className="text-[clamp(28px,3vw,44px)] font-semibold leading-tight tracking-tight text-ink">{stat.value}</div>
                <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-ink shadow-card transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:text-base"
            >
              <span>{h.hero.pilotCta}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#formul"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-hairline bg-surface px-6 text-sm font-semibold text-ink transition hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:text-base"
            >
              {h.hero.scienceCta}
            </a>
          </div>
        </StoryBeat>

        {/* ── 2. Solution / Science ── */}
        <StoryBeat id="solution" eyebrow={h.solution.eyebrow} title={h.solution.title} accent="hydrobio" bleed>
          <p className="text-base text-muted-ink md:text-lg md:max-w-4xl">{h.solution.intro}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {h.solution.components.map((comp) => (
              <div key={comp.name} className="flex flex-col gap-4 rounded-card border border-hairline bg-surface p-8 md:p-10 xl:p-12">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">{comp.name}</h3>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{comp.role}</p>
                <ul className="flex flex-col gap-3 text-sm text-muted-ink md:text-base">
                  {comp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-[0.5em] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-hydrobio" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-base font-medium text-ink md:text-lg md:max-w-4xl">{h.solution.synergyLine}</p>
        </StoryBeat>

        {/* ── 3. Journey — 4 numbered steps ── */}
        <StoryBeat id="journey" eyebrow={h.journey.eyebrow} title={h.journey.title} accent="hydrobio">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{h.journey.body}</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.journey.steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4 rounded-card-sm border border-hairline bg-surface p-6">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent-hydrobio text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-ink md:text-lg">{step.title}</h3>
                <p className="text-sm text-muted-ink md:text-base">{step.body}</p>
              </div>
            ))}
          </div>
        </StoryBeat>

        {/* ── 4. HydrobioFormul — machine-learning formulation engine ── */}
        <StoryBeat id="formul" eyebrow={h.formul.eyebrow} title={h.formul.title} accent="hydrobio" bleed>
          {/* Tagline + intro */}
          <div className="flex flex-col gap-3 md:max-w-3xl">
            <p className="text-base font-semibold text-ink md:text-lg">{h.formul.tagline}</p>
            <p className="text-base text-muted-ink md:text-lg">{h.formul.body}</p>
          </div>

          {/* Inputs / Engine / Outputs — 3-column pipeline */}
          <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-card border border-hairline md:grid-cols-3">
            {/* Inputs */}
            <div className="flex flex-col gap-4 border-b border-hairline bg-surface p-6 md:border-b-0 md:border-r md:p-8">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent-hydrobio" aria-hidden />
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-ink">{h.formul.inputsHeading}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {h.formul.inputs.map((input) => (
                  <li key={input} className="text-sm text-ink md:text-base">{input}</li>
                ))}
              </ul>
            </div>

            {/* Engine */}
            <div className="flex flex-col gap-4 border-b border-hairline bg-surface-elevated p-6 md:border-b-0 md:border-r md:p-8">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent-hydrobio" aria-hidden />
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-ink">{h.formul.engineHeading}</h3>
              </div>
              <p className="text-sm text-ink md:text-base">{h.formul.engineBody}</p>
              <div className="mt-auto flex items-center justify-center rounded-card-sm border border-hairline bg-surface px-4 py-6">
                <span className="text-2xl font-bold tracking-tight text-accent-hydrobio">{h.formul.mlBadge}</span>
              </div>
            </div>

            {/* Outputs */}
            <div className="flex flex-col gap-4 bg-surface p-6 md:p-8">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent-hydrobio" aria-hidden />
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-ink">{h.formul.outputsHeading}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {h.formul.outputs.map((output) => (
                  <li key={output} className="flex items-start gap-2 text-sm text-ink md:text-base">
                    <span className="mt-[0.35em] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-hydrobio" aria-hidden />
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why it matters — 5 advantages as ExpandableList */}
          <div className="flex flex-col gap-6">
            <h4 className="text-display-md text-ink">{h.formul.advantagesHeading}</h4>
            <ExpandableList>
              {h.formul.advantages.map((adv) => (
                <ExpandableCard key={adv.title} title={adv.title} accent="hydrobio">
                  <p>{adv.detail}</p>
                </ExpandableCard>
              ))}
            </ExpandableList>
          </div>

          {/* ML explainer */}
          <div className="rounded-card border border-hairline bg-surface-elevated p-6 md:p-8">
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-ink">{h.formul.mlExplainer.heading}</h4>
            <p className="mt-3 text-sm text-ink md:text-base">{h.formul.mlExplainer.body}</p>
          </div>
        </StoryBeat>

        {/* ── 5. Application ── */}
        <StoryBeat id="application" eyebrow={h.application.eyebrow} title={h.application.title} accent="hydrobio">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{h.application.body}</p>

          {/* When / Dose / How */}
          <ExpandableList>
            <ExpandableCard title={h.application.whenHeading} accent="hydrobio">
              <p>{h.application.whenBody}</p>
            </ExpandableCard>
            <ExpandableCard title={h.application.doseHeading} accent="hydrobio">
              <p>{h.application.doseBody}</p>
            </ExpandableCard>
            <ExpandableCard title={h.application.howHeading} accent="hydrobio">
              <ul className="flex flex-col gap-2 list-disc pl-4">
                {h.application.howSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </ExpandableCard>
          </ExpandableList>

          {/* On-site formulation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-display-md text-ink">{h.application.onSiteHeading}</h4>
            <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{h.application.onSiteBody}</p>
            <ExpandableList>
              {h.application.onSitePillars.map((pillar) => (
                <ExpandableCard key={pillar.title} title={pillar.title} accent="hydrobio">
                  <p>{pillar.detail}</p>
                </ExpandableCard>
              ))}
            </ExpandableList>
          </div>
        </StoryBeat>

        {/* ── 6. Results & ROI ── */}
        <StoryBeat id="results" eyebrow={h.results.eyebrow} title={h.results.title} accent="hydrobio" bleed>
          <StatGrid columns={4}>
            {h.results.stats.map((stat) => (
              <BigStat key={stat.label} value={stat.value} label={stat.label} caption={stat.caption} />
            ))}
          </StatGrid>
          <p className="text-xs italic text-muted-ink">{h.results.footnote}</p>

          {/* ROI table */}
          <div className="flex flex-col gap-4">
            <h3 className="text-display-md text-ink">{h.results.roiHeading}</h3>
            <p className="text-sm text-muted-ink md:text-base">{h.results.roiCaption}</p>
            <div className="overflow-x-auto rounded-card border border-hairline bg-surface">
              <table className="w-full min-w-[640px] text-sm md:text-base">
                <thead>
                  <tr className="border-b border-hairline bg-surface-elevated">
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-ink">{h.results.roiColumns.crop}</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-muted-ink">{h.results.roiColumns.irrigation}</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-muted-ink">{h.results.roiColumns.fertilizer}</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-muted-ink">{h.results.roiColumns.yieldGain}</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-muted-ink">{h.results.roiColumns.total}</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-muted-ink">{h.results.roiColumns.payback}</th>
                  </tr>
                </thead>
                <tbody>
                  {h.results.roiRows.map((row, i) => (
                    <tr
                      key={row.crop}
                      className={i < h.results.roiRows.length - 1 ? 'border-b border-hairline' : ''}
                    >
                      <td className="px-5 py-4 font-medium text-ink">{row.crop}</td>
                      <td className="px-5 py-4 text-right text-muted-ink">{row.irrigation}</td>
                      <td className="px-5 py-4 text-right text-muted-ink">{row.fertilizer}</td>
                      <td className="px-5 py-4 text-right text-muted-ink">{row.yieldGain}</td>
                      <td className="px-5 py-4 text-right font-semibold text-ink">{row.total}</td>
                      <td className="px-5 py-4 text-right text-accent-hydrobio">{row.payback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </StoryBeat>

        {/* ── 7. Cultures & soils ── */}
        <StoryBeat id="cultures" eyebrow={h.cultures.eyebrow} title={h.cultures.title} accent="hydrobio">
          <p className="text-base text-muted-ink md:text-lg md:max-w-3xl">{h.cultures.body}</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Crops */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-ink md:text-3xl">{h.cultures.cropsHeading}</h3>
              <ul className="flex flex-col gap-3">
                {h.cultures.crops.map((crop) => (
                  <li key={crop.name} className="flex flex-col gap-2 rounded-card border border-hairline bg-surface p-6 md:p-8">
                    <span className="text-base font-semibold text-ink md:text-lg">{crop.name}</span>
                    <span className="text-sm text-muted-ink md:text-base">{crop.examples}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Soils */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-ink md:text-3xl">{h.cultures.soilsHeading}</h3>
              <ul className="flex flex-col gap-3">
                {h.cultures.soils.map((soil) => (
                  <li key={soil.name} className="flex flex-col gap-2 rounded-card border border-hairline bg-surface p-6 md:p-8">
                    <span className="text-base font-semibold text-ink md:text-lg">{soil.name}</span>
                    <span className="text-sm text-muted-ink md:text-base">{soil.benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </StoryBeat>

        {/* ── 8. Impact ── */}
        <StoryBeat id="impact" eyebrow={h.impact.eyebrow} title={h.impact.title} accent="hydrobio" bleed>
          <StatGrid columns={4}>
            {h.impact.stats.map((s) => (
              <BigStat
                key={s.label}
                value={s.value}
                label={s.label}
                caption={s.caption}
                source={s.source && <Citation text={s.source} />}
              />
            ))}
          </StatGrid>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 md:max-w-3xl">
              <h3 className="text-display-md text-ink">{h.impact.sdgHeading}</h3>
              <p className="text-base text-muted-ink md:text-lg">{h.impact.sdgIntro}</p>
            </div>
            <ExpandableList>
              {h.impact.sdgs.map((sdg) => (
                <ExpandableCard
                  key={sdg.number}
                  title={`${sdg.number} · ${sdg.name}`}
                  accent="hydrobio"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <img
                      src={`/sdg/sdg-${sdg.number}.png`}
                      alt={`UN SDG ${sdg.number} — ${sdg.name}`}
                      className="h-20 w-20 flex-shrink-0 rounded-[14px] object-cover md:h-24 md:w-24"
                    />
                    <div className="flex flex-col gap-3">
                      <p className="text-sm text-ink md:text-base">{sdg.impact}</p>
                      <a
                        href={`https://sdgs.un.org/goals/goal${sdg.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-1 text-sm font-medium text-ink underline-offset-4 hover:underline"
                      >
                        Learn more on un.org →
                      </a>
                    </div>
                  </div>
                </ExpandableCard>
              ))}
            </ExpandableList>
          </div>
        </StoryBeat>

        {/* ── 9. Innovation ── */}
        <StoryBeat id="innovation" eyebrow={h.innovation.eyebrow} title={h.innovation.title} accent="hydrobio">
          <ExpandableList>
            {h.innovation.items.map((item) => (
              <ExpandableCard key={item.title} title={item.title} accent="hydrobio">
                <p>{item.detail}</p>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 10. FAQ ── */}
        <StoryBeat id="faq" eyebrow={h.faq.eyebrow} title={h.faq.title} accent="hydrobio" bleed>
          <ExpandableList>
            {h.faq.items.map((item) => (
              <ExpandableCard key={item.question} title={item.question} accent="hydrobio">
                <p>{item.answer}</p>
              </ExpandableCard>
            ))}
          </ExpandableList>
        </StoryBeat>

        {/* ── 11. Recognition ── */}
        <RecognitionBeat content={h.recognition} accent="hydrobio" />

        {/* ── 12. Contact CTA ── */}
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
