import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function VirusFreeFigure() {
  const { content } = useLanguage();
  const f = content.figures.virusFree;
  return (
    <FigureCard tag={f.tag} title={f.title}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        {/* field stock */}
        <g transform="translate(70,70)">
          <line x1="0" y1="86" x2="0" y2="34" stroke={FIG.soil} strokeWidth="2.6" strokeLinecap="round" />
          <path d="M0 50 C -22 40,-24 64,-4 66Z" fill="#9bb083" /><path d="M0 44 C 22 34,24 58,4 60Z" fill="#9bb083" />
          <path d="M0 64 C -18 58,-20 78,-2 80Z" fill="#9bb083" />
          <circle cx="-8" cy="55" r="3" fill={FIG.warn} /><circle cx="9" cy="48" r="3" fill={FIG.warn} /><circle cx="-3" cy="72" r="3" fill={FIG.warn} />
          <text className="fig-lab-sm" x="0" y="104" textAnchor="middle">{f.fieldStock}</text>
          <text className="fig-lab-sm" x="0" y="118" textAnchor="middle" fill={FIG.warn}>{f.carriesViruses}</text>
        </g>
        <path d="M118 130 H 168" stroke={FIG.muted} strokeWidth="2" markerEnd="url(#vfArrow)" />
        {/* meristem magnify */}
        <g transform="translate(210,70)">
          <line x1="0" y1="86" x2="0" y2="40" stroke={FIG.mp} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="0" cy="34" r="4.5" fill={FIG.mp} />
          <circle cx="0" cy="34" r="22" fill="none" stroke={FIG.ink} strokeWidth="2" />
          <line x1="16" y1="50" x2="30" y2="64" stroke={FIG.ink} strokeWidth="3" strokeLinecap="round" />
          <text className="fig-lab-sm" x="0" y="104" textAnchor="middle">{f.meristemTip}</text>
          <text className="fig-lab-sm" x="0" y="118" textAnchor="middle">{f.cleanestCells}</text>
        </g>
        <path d="M258 130 H 308" stroke={FIG.muted} strokeWidth="2" markerEnd="url(#vfArrow)" />
        {/* clean uniform */}
        <g transform="translate(360,76)" fill={FIG.mp}>
          {[0, 28, 56].map((dx) => (
            <g key={dx} transform={`translate(${dx},0)`}>
              <line x1="0" y1="74" x2="0" y2="40" stroke={FIG.mp} strokeWidth="2.2" strokeLinecap="round" />
              <path d="M0 48 C -13 42,-14 56,-2 58Z" />
              <path d="M0 45 C 13 39,14 53,2 56Z" />
            </g>
          ))}
          <circle cx="28" cy="18" r="10" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1.6" />
          <path d="M24 18 l3 3 l5 -6" fill="none" stroke={FIG.mp} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text className="fig-lab-sm" x="28" y="92" textAnchor="middle" fill={FIG.muted}>{f.uniform}</text>
        </g>
        <defs>
          <marker id="vfArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.muted} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
