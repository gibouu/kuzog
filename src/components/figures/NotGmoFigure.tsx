import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function NotGmoFigure() {
  const { content } = useLanguage();
  const f = content.figures.notGmo;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <line x1="230" y1="34" x2="230" y2="232" stroke={FIG.hair} strokeWidth="1.5" strokeDasharray="4 5" />

        {/* LEFT: GMO */}
        <text className="fig-lab-b" x="112" y="30" textAnchor="middle">{f.gmo}</text>
        <circle cx="182" cy="25" r="11" fill={FIG.warnSoft} stroke={FIG.warn} strokeWidth="2" />
        <line x1="177" y1="20" x2="187" y2="30" stroke={FIG.warn} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="187" y1="20" x2="177" y2="30" stroke={FIG.warn} strokeWidth="2.4" strokeLinecap="round" />
        <g strokeLinecap="round">
          <path d="M95 70 C 140 95, 90 120, 135 145 C 90 170, 140 195, 95 210" fill="none" stroke={FIG.ink} strokeWidth="2.4" />
          <path d="M135 70 C 90 95, 140 120, 95 145 C 140 170, 90 195, 135 210" fill="none" stroke={FIG.ink} strokeWidth="2.4" />
          <line x1="104" y1="84" x2="126" y2="84" stroke="#aab0a8" strokeWidth="2" />
          <line x1="103" y1="120" x2="127" y2="120" stroke="#aab0a8" strokeWidth="2" />
          <line x1="104" y1="170" x2="126" y2="170" stroke="#aab0a8" strokeWidth="2" />
          <line x1="103" y1="206" x2="127" y2="206" stroke="#aab0a8" strokeWidth="2" />
          <rect x="108" y="138" width="14" height="14" rx="3" fill={FIG.warn} />
          <path d="M165 120 l-30 18" fill="none" stroke={FIG.warn} strokeWidth="2" markerEnd="url(#gmoArrow)" />
          <text className="fig-lab-sm" x="150" y="112" textAnchor="middle">{f.foreignGene}</text>
        </g>
        <text className="fig-lab-sm" x="112" y="228" textAnchor="middle">{f.dnaAltered}</text>

        {/* RIGHT: Micropropagation */}
        <text className="fig-lab-b" x="345" y="30" textAnchor="middle">{f.micropropagation}</text>
        <circle cx="412" cy="25" r="11" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="2" />
        <path d="M407 26 l4 4 l7 -9" fill="none" stroke={FIG.mp} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <g transform="translate(258,58)">
          <line x1="20" y1="50" x2="20" y2="22" stroke={FIG.mp} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M20 30 C 6 24, 4 38, 18 40 Z" fill={FIG.mp} />
          <path d="M20 26 C 34 20, 36 34, 22 38 Z" fill={FIG.mp} />
          <text className="fig-lab-sm" x="20" y="66" textAnchor="middle">{f.mother}</text>
        </g>
        <text className="fig-lab" x="300" y="92" fontWeight="650">=</text>
        <g transform="translate(312,58)" fill={FIG.mp}>
          {[0, 40, 80].map((dx) => (
            <g key={dx} transform={`translate(${dx},0)`}>
              <line x1="14" y1="50" x2="14" y2="22" stroke={FIG.mp} strokeWidth="2.4" strokeLinecap="round" />
              <path d="M14 30 C 2 25,1 37,12 39Z" />
              <path d="M14 27 C 26 22,27 34,16 37Z" />
            </g>
          ))}
        </g>
        <g transform="translate(300,150)">
          <rect x="0" y="0" width="120" height="56" rx="12" fill={FIG.mpSoft} />
          <g strokeLinecap="round" transform="translate(14,8)">
            <path d="M0 4 C 22 16, 0 28, 22 40" fill="none" stroke={FIG.mp} strokeWidth="2.2" />
            <path d="M22 4 C 0 16, 22 28, 0 40" fill="none" stroke={FIG.mp} strokeWidth="2.2" />
          </g>
          <text className="fig-lab-sm" x="70" y="26" textAnchor="middle">{f.genome}</text>
          <text className="fig-lab-b" x="70" y="42" textAnchor="middle" fill={FIG.mp}>{f.unchanged}</text>
        </g>
        <text className="fig-lab-sm" x="345" y="228" textAnchor="middle">{f.wholePlantCopied}</text>

        <defs>
          <marker id="gmoArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.warn} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
