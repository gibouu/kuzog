import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

// Irregular interconnected pores (SEM-style).
const PORES = [
  'M124 96 q 14 -10 26 0 q 6 12 -6 18 q -16 6 -22 -6 q -4 -8 2 -12 z',
  'M168 88 q 12 -6 20 4 q 4 12 -8 16 q -14 2 -16 -10 q 0 -6 4 -10 z',
  'M206 108 q 12 -4 16 8 q 0 12 -12 12 q -12 0 -12 -12 q 2 -6 8 -8 z',
  'M118 138 q 12 -6 20 4 q 4 12 -8 15 q -13 2 -16 -9 q 0 -6 4 -10 z',
  'M160 132 q 14 -6 22 6 q 4 13 -9 17 q -15 2 -18 -11 q 0 -7 5 -12 z',
  'M208 146 q 11 -3 15 8 q 0 11 -11 12 q -12 0 -12 -12 q 2 -6 8 -8 z',
  'M132 178 q 12 -5 19 5 q 3 11 -8 14 q -13 2 -15 -9 q 0 -6 4 -10 z',
  'M174 174 q 12 -4 17 7 q 1 12 -11 13 q -12 0 -13 -11 q 1 -6 7 -9 z',
];

export function PorousFigure() {
  const { content } = useLanguage();
  const f = content.figures.porous;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <path
          d="M96 110 Q 110 60 170 56 Q 240 52 258 110 Q 274 170 226 206 Q 170 236 124 204 Q 84 172 96 110 Z"
          fill={FIG.hySoft}
          stroke={FIG.hy}
          strokeWidth="2"
        />
        <g fill="#fff" stroke={FIG.hy} strokeWidth="1">
          {PORES.map((d, i) => <path key={i} d={d} />)}
        </g>
        <circle cx="137" cy="106" r="3" fill={FIG.water} />
        <circle cx="171" cy="142" r="3" fill={FIG.water} />
        <circle cx="178" cy="98" r="3" fill={FIG.mp} />
        <circle cx="213" cy="118" r="3" fill={FIG.mp} />
        <circle cx="142" cy="148" r="3" fill={FIG.water} />
        <circle cx="183" cy="183" r="3" fill={FIG.mp} />
        <g stroke={FIG.hy} strokeWidth="1.8" fill="none" strokeDasharray="3 6">
          <path d="M262 118 q 28 -6 46 -2" markerEnd="url(#poArrow)" />
          <path d="M262 160 q 30 8 48 18" markerEnd="url(#poArrow)" />
        </g>
        <text className="fig-lab-sm" x="318" y="116">{f.water}</text>
        <text className="fig-lab-sm" x="322" y="184">{f.nutrients}</text>
        <text className="fig-lab-sm" x="178" y="256" textAnchor="middle">{f.porousLabel}</text>
        <defs>
          <marker id="poArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.hy} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
