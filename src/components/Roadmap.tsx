interface RoadmapStep {
  phase: string;
  label: string;
  detail?: string;
}

interface RoadmapProps {
  steps: RoadmapStep[];
}

export function Roadmap({ steps }: RoadmapProps) {
  return (
    <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {steps.map((step, idx) => (
        <li
          key={step.phase}
          className="flex flex-col gap-3 rounded-card-sm border border-hairline bg-surface p-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">{step.phase}</span>
            <span className="text-xs font-medium text-muted-ink">{idx + 1}/{steps.length}</span>
          </div>
          <h3 className="text-base font-semibold text-ink md:text-lg">{step.label}</h3>
          {step.detail && <p className="text-sm text-muted-ink">{step.detail}</p>}
        </li>
      ))}
    </ol>
  );
}
