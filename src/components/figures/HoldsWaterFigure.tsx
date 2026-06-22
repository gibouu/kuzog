import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function HoldsWaterFigure() {
  const { content } = useLanguage();
  const f = content.figures.holdsWater;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <circle cx="200" cy="150" r="58" fill={FIG.waterSoft} stroke={FIG.hy} strokeWidth="2" />
        <g fill={FIG.water}>
          <path d="M188 132 c -8 9 -8 16 0 16 c 8 0 8 -7 0 -16 z" />
          <path d="M214 140 c -7 8 -7 14 0 14 c 7 0 7 -6 0 -14 z" />
          <path d="M196 162 c -7 8 -7 14 0 14 c 7 0 7 -6 0 -14 z" />
          <path d="M220 168 c -6 7 -6 12 0 12 c 6 0 6 -5 0 -12 z" />
        </g>
        <g fill={FIG.water}>
          <path d="M120 92 c -7 8 -7 14 0 14 c 7 0 7 -6 0 -14 z" />
          <path d="M96 130 c -6 7 -6 12 0 12 c 6 0 6 -5 0 -12 z" />
        </g>
        <path d="M128 104 q 24 18 30 30" fill="none" stroke={FIG.water} strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#hwArrow)" />
        <path d="M104 140 q 30 10 40 12" fill="none" stroke={FIG.water} strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#hwArrow)" />
        <path d="M260 120 q 30 20 18 60" fill="none" stroke={FIG.soil} strokeWidth="2.6" strokeLinecap="round" />
        <text className="fig-lab-sm" x="286" y="118">{f.root}</text>
        <g transform="translate(300,170)">
          <rect x="0" y="0" width="96" height="40" rx="12" fill={FIG.waterSoft} />
          <text x="48" y="26" textAnchor="middle" fontSize="17" fontWeight="700" fill={FIG.water}>{f.waterBadge}</text>
        </g>
        <defs>
          <marker id="hwArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.water} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
