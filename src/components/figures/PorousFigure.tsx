import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

// [cx, cy, r] cavities filling the particle cross-section.
const CAVITIES: [number, number, number][] = [
  [134, 110, 6], [158, 96, 5], [182, 90, 6], [208, 98, 5], [228, 116, 6],
  [122, 134, 6], [146, 124, 5], [170, 116, 6], [196, 120, 5], [220, 138, 6], [240, 130, 4.5],
  [118, 158, 5], [140, 150, 6], [166, 142, 5], [190, 146, 6], [214, 160, 5], [236, 156, 5],
  [130, 180, 6], [156, 172, 5], [180, 168, 6], [204, 178, 5], [226, 182, 5],
  [150, 198, 5], [178, 192, 6], [202, 200, 4.5],
];

export function PorousFigure() {
  const { content } = useLanguage();
  const f = content.figures.porous;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <circle cx="178" cy="138" r="92" fill={FIG.hySoft} stroke={FIG.hy} strokeWidth="2" />
        <g fill="#fff" stroke={FIG.hy} strokeWidth="1">
          {CAVITIES.map(([cx, cy, r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />)}
        </g>
        {/* held water + nutrients */}
        <circle cx="170" cy="116" r="3" fill={FIG.water} />
        <circle cx="140" cy="150" r="3" fill={FIG.water} />
        <circle cx="180" cy="168" r="3" fill={FIG.water} />
        <circle cx="190" cy="146" r="3" fill={FIG.mp} />
        <circle cx="214" cy="160" r="3" fill={FIG.mp} />
        <g stroke={FIG.hy} strokeWidth="1.8" fill="none" strokeDasharray="3 5">
          <path d="M268 116 q 26 -6 42 -4" markerEnd="url(#poArrow)" />
          <path d="M270 158 q 28 6 44 14" markerEnd="url(#poArrow)" />
        </g>
        <text className="fig-lab-sm" x="320" y="112">{f.water}</text>
        <text className="fig-lab-sm" x="324" y="178">{f.nutrients}</text>
        <text className="fig-lab-sm" x="178" y="252" textAnchor="middle">{f.porousLabel}</text>
        <defs>
          <marker id="poArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.hy} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
