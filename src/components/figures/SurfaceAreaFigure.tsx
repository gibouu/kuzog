import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

// Irregular powder specks (small angular polygons).
const SPECKS = [
  'M206 100 l8 -3 l5 6 -6 5 -7 -3 z', 'M224 96 l7 1 l1 7 -7 2 -3 -6 z', 'M242 104 l7 -2 l4 6 -6 4 -6 -3 z', 'M260 98 l7 2 l-1 7 -7 1 -2 -7 z', 'M278 106 l7 -1 l2 6 -6 4 -5 -4 z',
  'M210 120 l7 -2 l4 5 -6 4 -6 -2 z', 'M228 116 l7 1 l1 7 -7 2 -3 -6 z', 'M246 124 l7 -2 l4 6 -6 4 -6 -3 z', 'M264 118 l7 2 l-1 6 -6 1 -2 -6 z', 'M282 126 l6 -1 l2 6 -6 3 -4 -4 z',
  'M208 142 l7 -2 l4 5 -6 5 -6 -3 z', 'M226 138 l7 1 l1 7 -7 2 -3 -7 z', 'M244 146 l7 -2 l4 5 -6 5 -6 -3 z', 'M262 140 l7 2 l-1 6 -6 1 -2 -6 z', 'M280 148 l6 -1 l2 6 -6 3 -4 -4 z',
  'M214 162 l7 -2 l3 5 -5 5 -6 -3 z', 'M232 158 l7 1 l1 6 -7 2 -3 -6 z', 'M250 166 l7 -2 l3 5 -5 5 -6 -3 z', 'M268 160 l6 2 l-1 6 -6 1 -1 -6 z',
];

export function SurfaceAreaFigure() {
  const { content } = useLanguage();
  const f = content.figures.surfaceArea;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        {/* one mineral grain (faceted) */}
        <path d="M52 110 L78 96 L112 104 L120 138 L100 168 L64 164 L46 138 Z" fill={FIG.hySoft} stroke={FIG.hy} strokeWidth="2" strokeLinejoin="round" />
        <g stroke={FIG.hy} strokeWidth="1" opacity="0.5" fill="none"><path d="M78 96 L92 134 L64 164 M112 104 L92 134 L120 138" /></g>
        <text className="fig-lab-sm" x="84" y="186" textAnchor="middle">{f.grain}</text>
        <path d="M132 132 H 188" stroke={FIG.ink} strokeWidth="2" markerEnd="url(#saArrow)" />
        <text className="fig-lab-sm" x="160" y="123" textAnchor="middle">{f.micronised}</text>
        {/* micron powder */}
        <g fill={FIG.hySoft} stroke={FIG.hy} strokeWidth="0.8">
          {SPECKS.map((d, i) => <path key={i} d={d} />)}
        </g>
        {/* magnifier showing texture */}
        <g transform="translate(250,150)">
          <circle r="34" fill="#fff" stroke={FIG.ink} strokeWidth="2" />
          <clipPath id="saMag"><circle r="32" /></clipPath>
          <g clipPath="url(#saMag)" fill={FIG.hySoft} stroke={FIG.hy} strokeWidth="1.2">
            <path d="M-22 -6 l12 -6 l8 10 -10 9 -12 -5 z" /><path d="M0 -14 l14 4 l-2 14 -13 1 -3 -13 z" /><path d="M-8 10 l13 -3 l6 11 -11 7 -10 -6 z" />
          </g>
          <line x1="-16" y1="22" x2="2" y2="22" stroke={FIG.muted} strokeWidth="1.4" />
          <text className="fig-lab-sm" x="-7" y="34" textAnchor="middle">~10 µm</text>
          <line x1="24" y1="24" x2="40" y2="40" stroke={FIG.ink} strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(332,98)">
          <rect x="0" y="0" width="104" height="74" rx="16" fill={FIG.hySoft} />
          <text x="52" y="36" textAnchor="middle" fontSize="26" fontWeight="700" fill={FIG.hy}>×200</text>
          <text className="fig-lab-sm" x="52" y="56" textAnchor="middle">{f.surfaceArea}</text>
        </g>
        <defs>
          <marker id="saArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.ink} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
