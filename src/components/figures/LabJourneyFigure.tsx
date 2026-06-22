import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function LabJourneyFigure() {
  const { content } = useLanguage();
  const f = content.figures.labJourney;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <rect x="16" y="40" width="250" height="200" rx="14" fill={FIG.mpSoft} opacity="0.55" />
        <rect x="280" y="40" width="164" height="200" rx="14" fill="#f0ece2" opacity="0.7" />
        <text className="fig-lab-sm" x="30" y="58">{f.inLab}</text>
        <text className="fig-lab-sm" x="294" y="58">{f.outGrowers}</text>

        {/* sterile hood */}
        <g transform="translate(40,80)">
          <rect x="0" y="0" width="64" height="78" rx="6" fill="#fff" stroke={FIG.mp} strokeWidth="1.6" />
          <rect x="6" y="6" width="52" height="34" rx="3" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1" />
          <g stroke={FIG.mp} strokeWidth="1" opacity="0.7"><line x1="14" y1="8" x2="14" y2="38" /><line x1="26" y1="8" x2="26" y2="38" /><line x1="38" y1="8" x2="38" y2="38" /><line x1="50" y1="8" x2="50" y2="38" /></g>
          <rect x="8" y="52" width="48" height="20" rx="3" fill="#fff" stroke={FIG.mp} strokeWidth="1" />
          <ellipse cx="26" cy="62" rx="9" ry="4" fill="none" stroke={FIG.mp} strokeWidth="1.2" />
          <path d="M44 50 l6 12 -3 2 -6 -12 z" fill={FIG.mp} />
          <text className="fig-lab-sm" x="32" y="92" textAnchor="middle">{f.hood}</text>
        </g>
        <path d="M108 116 H 130" stroke={FIG.mp} strokeWidth="2" markerEnd="url(#labArrow)" />
        {/* growth room rack */}
        <g transform="translate(136,80)">
          <rect x="0" y="0" width="60" height="78" rx="5" fill="#fff" stroke={FIG.mp} strokeWidth="1.6" />
          <line x1="0" y1="26" x2="60" y2="26" stroke={FIG.mp} strokeWidth="1" /><line x1="0" y1="52" x2="60" y2="52" stroke={FIG.mp} strokeWidth="1" />
          <g fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1">
            <rect x="8" y="14" width="12" height="10" rx="2" /><rect x="24" y="14" width="12" height="10" rx="2" /><rect x="40" y="14" width="12" height="10" rx="2" />
            <rect x="8" y="40" width="12" height="10" rx="2" /><rect x="24" y="40" width="12" height="10" rx="2" /><rect x="40" y="40" width="12" height="10" rx="2" />
            <rect x="8" y="66" width="12" height="10" rx="2" /><rect x="24" y="66" width="12" height="10" rx="2" /><rect x="40" y="66" width="12" height="10" rx="2" />
          </g>
          <text className="fig-lab-sm" x="30" y="92" textAnchor="middle">{f.growthRoom}</text>
        </g>
        <path d="M200 116 H 224" stroke={FIG.mp} strokeWidth="2" markerEnd="url(#labArrow)" />
        {/* rooting jars */}
        <g transform="translate(228,92)">
          <g fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1.2">
            <path d="M0 30 h16 v8 a8 8 0 0 1 -16 0 z" /><path d="M22 30 h16 v8 a8 8 0 0 1 -16 0 z" />
          </g>
          <g stroke={FIG.mp} strokeWidth="1.4" fill="none" strokeLinecap="round">
            <path d="M8 30 V18 M8 22 l-4 -3 M8 24 l4 -3 M8 30 q -4 6 -6 10 M8 30 q 4 6 6 10" />
            <path d="M30 30 V18 M30 22 l-4 -3 M30 24 l4 -3 M30 30 q -4 6 -6 10 M30 30 q 4 6 6 10" />
          </g>
          <text className="fig-lab-sm" x="19" y="58" textAnchor="middle">{f.rooting}</text>
        </g>
        <path d="M266 140 H 300" stroke={FIG.mp} strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#labArrow)" />
        {/* greenhouse */}
        <g transform="translate(306,86)">
          <path d="M0 18 L28 0 L56 18 Z" fill="none" stroke={FIG.mp} strokeWidth="1.6" strokeLinejoin="round" />
          <rect x="4" y="18" width="48" height="40" rx="3" fill="#fff" stroke={FIG.mp} strokeWidth="1.4" />
          <g stroke={FIG.mp} strokeWidth="1.2" fill="none" strokeLinecap="round"><path d="M12 50 v-8 M22 50 v-8 M32 50 v-8 M42 50 v-8" /></g>
          <rect x="8" y="50" width="40" height="8" rx="2" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1" />
          <text className="fig-lab-sm" x="28" y="74" textAnchor="middle">{f.greenhouse}</text>
        </g>
        <path d="M368 140 H 388" stroke={FIG.mp} strokeWidth="2" markerEnd="url(#labArrow)" />
        {/* field + person */}
        <g transform="translate(392,92)">
          <circle cx="14" cy="6" r="5" fill={FIG.mp} />
          <path d="M6 26 C 6 14, 22 14, 22 26" fill="none" stroke={FIG.mp} strokeWidth="2" strokeLinecap="round" />
          <g stroke={FIG.mp} strokeWidth="1.2"><path d="M0 40 q 7 -6 14 0 t 14 0 t 14 0" fill="none" /><path d="M0 48 q 7 -6 14 0 t 14 0 t 14 0" fill="none" /></g>
          <text className="fig-lab-sm" x="20" y="66" textAnchor="middle">{f.growers}</text>
        </g>
        <defs>
          <marker id="labArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.mp} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
