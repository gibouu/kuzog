import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function LabJourneyFigure() {
  const { content } = useLanguage();
  const f = content.figures.labJourney;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <rect x="20" y="44" width="232" height="150" rx="14" fill={FIG.mpSoft} opacity="0.6" />
        <rect x="266" y="44" width="174" height="150" rx="14" fill="#f0ece2" opacity="0.7" />
        <text className="fig-lab-sm" x="36" y="62">{f.inLab}</text>
        <text className="fig-lab-sm" x="282" y="62">{f.outGrowers}</text>

        {/* mother plant */}
        <g transform="translate(58,96)">
          <circle r="20" cy="14" cx="0" fill="#fff" stroke={FIG.mp} strokeWidth="1.8" />
          <line x1="0" y1="24" x2="0" y2="6" stroke={FIG.mp} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M0 12 C -12 7,-13 18,-2 20Z" fill={FIG.mp} /><path d="M0 9 C 12 4,13 15,2 18Z" fill={FIG.mp} />
          <text className="fig-lab-sm" x="0" y="52" textAnchor="middle">{f.motherPlant}</text>
        </g>
        {/* sample */}
        <g transform="translate(135,96)">
          <circle r="20" cy="14" cx="0" fill="#fff" stroke={FIG.mp} strokeWidth="1.8" />
          <rect x="-9" y="2" width="18" height="22" rx="3" fill="none" stroke={FIG.mp} strokeWidth="1.8" />
          <circle cx="0" cy="16" r="3" fill={FIG.mp} />
          <line x1="0" y1="-2" x2="0" y2="2" stroke={FIG.mp} strokeWidth="1.6" />
          <text className="fig-lab-sm" x="0" y="52" textAnchor="middle">{f.sample}</text>
        </g>
        {/* multiply */}
        <g transform="translate(212,96)">
          <circle r="20" cy="14" cx="0" fill="#fff" stroke={FIG.mp} strokeWidth="1.8" />
          <rect x="-12" y="4" width="7" height="20" rx="2" fill="none" stroke={FIG.mp} strokeWidth="1.6" />
          <rect x="-3.5" y="4" width="7" height="20" rx="2" fill="none" stroke={FIG.mp} strokeWidth="1.6" />
          <rect x="5" y="4" width="7" height="20" rx="2" fill="none" stroke={FIG.mp} strokeWidth="1.6" />
          <circle cx="-8.5" cy="10" r="1.6" fill={FIG.mp} /><circle cx="0" cy="10" r="1.6" fill={FIG.mp} /><circle cx="8.5" cy="10" r="1.6" fill={FIG.mp} />
          <text className="fig-lab-sm" x="0" y="52" textAnchor="middle">{f.multiply}</text>
        </g>
        <path d="M82 110 H 110" stroke={FIG.mp} strokeWidth="2" markerEnd="url(#labArrow)" />
        <path d="M159 110 H 187" stroke={FIG.mp} strokeWidth="2" markerEnd="url(#labArrow)" />
        <path d="M236 110 H 296" stroke={FIG.mp} strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#labArrow)" />
        {/* greenhouse */}
        <g transform="translate(318,96)">
          <circle r="20" cy="14" cx="0" fill="#fff" stroke={FIG.mp} strokeWidth="1.8" />
          <path d="M-12 18 L0 4 L12 18 Z" fill="none" stroke={FIG.mp} strokeWidth="1.8" strokeLinejoin="round" />
          <line x1="0" y1="18" x2="0" y2="12" stroke={FIG.mp} strokeWidth="1.8" />
          <text className="fig-lab-sm" x="0" y="52" textAnchor="middle">{f.greenhouse}</text>
        </g>
        <path d="M342 110 H 372" stroke={FIG.mp} strokeWidth="2" markerEnd="url(#labArrow)" />
        {/* growers */}
        <g transform="translate(398,96)">
          <circle r="20" cy="14" cx="0" fill="#fff" stroke={FIG.mp} strokeWidth="1.8" />
          <circle cx="0" cy="6" r="4" fill={FIG.mp} />
          <path d="M-6 22 C -6 12, 6 12, 6 22" fill="none" stroke={FIG.mp} strokeWidth="2" strokeLinecap="round" />
          <text className="fig-lab-sm" x="0" y="52" textAnchor="middle">{f.growers}</text>
        </g>
        <defs>
          <marker id="labArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.mp} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
