import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

const COLS = [214, 228, 242, 256, 270, 284];
const ROWS = [92, 106, 120, 134, 148, 162];

export function SurfaceAreaFigure() {
  const { content } = useLanguage();
  const f = content.figures.surfaceArea;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <rect x="46" y="92" width="78" height="78" rx="10" fill={FIG.hySoft} stroke={FIG.hy} strokeWidth="2" />
        <text className="fig-lab-sm" x="85" y="190" textAnchor="middle">{f.grain}</text>
        <path d="M138 131 H 196" stroke={FIG.ink} strokeWidth="2" markerEnd="url(#saArrow)" />
        <text className="fig-lab-sm" x="167" y="122" textAnchor="middle">{f.micronised}</text>
        <g fill={FIG.hySoft} stroke={FIG.hy} strokeWidth="1.2">
          {ROWS.map((y) => COLS.map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="11" height="11" rx="2" />))}
        </g>
        <line x1="214" y1="186" x2="236" y2="186" stroke={FIG.muted} strokeWidth="1.6" />
        <text className="fig-lab-sm" x="240" y="190">~10 µm</text>
        <g transform="translate(330,96)">
          <rect x="0" y="0" width="104" height="74" rx="16" fill={FIG.hySoft} />
          <text x="52" y="34" textAnchor="middle" fontSize="26" fontWeight="700" fill={FIG.hy}>×200</text>
          <text className="fig-lab-sm" x="52" y="54" textAnchor="middle">{f.surfaceArea}</text>
        </g>
        <defs>
          <marker id="saArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.ink} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
