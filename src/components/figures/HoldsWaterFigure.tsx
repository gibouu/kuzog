import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function HoldsWaterFigure() {
  const { content } = useLanguage();
  const f = content.figures.holdsWater;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        {/* soil aggregates */}
        <g fill={FIG.soilSoft} stroke={FIG.soil} strokeWidth="1" opacity="0.9">
          <path d="M40 70 l20 -8 l16 12 -8 18 -20 4 -12 -14 z" />
          <path d="M150 56 l18 -6 l14 12 -8 14 -18 2 -10 -12 z" />
          <path d="M360 78 l18 -8 l16 10 -6 16 -18 4 -12 -12 z" />
          <path d="M70 196 l18 -6 l16 12 -8 14 -18 2 -12 -12 z" />
          <path d="M330 196 l18 -6 l16 12 -8 14 -18 2 -12 -12 z" />
        </g>
        {/* amendment particle holding water */}
        <circle cx="180" cy="150" r="56" fill={FIG.waterSoft} stroke={FIG.hy} strokeWidth="2" />
        <circle cx="180" cy="150" r="56" fill="none" stroke={FIG.hy} strokeWidth="1" strokeDasharray="2 5" opacity="0.6" />
        <g fill={FIG.water}>
          <path d="M168 130 c -8 9 -8 16 0 16 c 8 0 8 -7 0 -16 z" />
          <path d="M196 138 c -7 8 -7 14 0 14 c 7 0 7 -6 0 -14 z" />
          <path d="M172 162 c -7 8 -7 14 0 14 c 7 0 7 -6 0 -14 z" />
          <path d="M198 166 c -6 7 -6 12 0 12 c 6 0 6 -5 0 -12 z" />
          <path d="M182 150 c -6 7 -6 12 0 12 c 6 0 6 -5 0 -12 z" />
        </g>
        <text className="fig-lab-sm" x="180" y="220" textAnchor="middle">{f.holdsLabel}</text>
        {/* root with hairs */}
        <g transform="translate(300,40)">
          <path d="M20 0 L20 200" stroke={FIG.rootEdge} strokeWidth="14" strokeLinecap="round" />
          <path d="M20 0 L20 200" stroke={FIG.rootFill} strokeWidth="10" strokeLinecap="round" />
          <g stroke={FIG.hairTan} strokeWidth="1" strokeLinecap="round">
            <path d="M13 60 l-12 -3 M13 84 l-12 0 M13 108 l-12 3 M27 60 l12 -3 M27 84 l12 0 M27 108 l12 3" />
          </g>
          <text className="fig-lab-sm" x="20" y="216" textAnchor="middle">{f.root}</text>
        </g>
        <path d="M236 150 q 30 -2 56 -40" fill="none" stroke={FIG.water} strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#hwArrow)" />
        <path d="M236 158 q 36 14 60 30" fill="none" stroke={FIG.water} strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#hwArrow)" />
        <g transform="translate(40,118)">
          <rect x="0" y="0" width="92" height="38" rx="12" fill={FIG.waterSoft} />
          <text x="46" y="25" textAnchor="middle" fontSize="16" fontWeight="700" fill={FIG.water}>{f.waterBadge}</text>
        </g>
        <defs>
          <marker id="hwArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.water} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
