import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function NotGmoFigure() {
  const { content } = useLanguage();
  const f = content.figures.notGmo;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <line x1="230" y1="34" x2="230" y2="244" stroke={FIG.hair} strokeWidth="1.5" strokeDasharray="4 5" />

        {/* GMO */}
        <text className="fig-lab-b" x="112" y="30" textAnchor="middle">{f.gmo}</text>
        <circle cx="182" cy="25" r="11" fill={FIG.warnSoft} stroke={FIG.warn} strokeWidth="2" />
        <line x1="177" y1="20" x2="187" y2="30" stroke={FIG.warn} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="187" y1="20" x2="177" y2="30" stroke={FIG.warn} strokeWidth="2.4" strokeLinecap="round" />
        <g>
          <path d="M96 60 C 140 86, 96 112, 140 138 C 96 164, 140 190, 96 216" fill="none" stroke={FIG.ink} strokeWidth="2.6" strokeLinecap="round" />
          <path d="M140 60 C 96 86, 140 112, 96 138 C 140 164, 96 190, 140 216" fill="none" stroke={FIG.ink} strokeWidth="2.6" strokeLinecap="round" />
          <g strokeWidth="2.2" strokeLinecap="round">
            <line x1="106" y1="74" x2="130" y2="74" stroke="#9fb6c8" />
            <line x1="102" y1="100" x2="134" y2="100" stroke="#c8b59f" />
            <line x1="102" y1="152" x2="134" y2="152" stroke="#9fb6c8" />
            <line x1="106" y1="178" x2="130" y2="178" stroke="#c8b59f" />
            <line x1="102" y1="204" x2="134" y2="204" stroke="#c8b59f" />
          </g>
          <rect x="110" y="120" width="16" height="13" rx="3" fill={FIG.warn} />
          <path d="M168 116 l-34 12" fill="none" stroke={FIG.warn} strokeWidth="2" markerEnd="url(#gmoArrow)" />
          <text className="fig-lab-sm" x="150" y="108" textAnchor="middle">{f.foreignGene}</text>
        </g>
        <text className="fig-lab-sm" x="112" y="234" textAnchor="middle">{f.dnaAltered}</text>

        {/* Micropropagation */}
        <text className="fig-lab-b" x="346" y="30" textAnchor="middle">{f.micropropagation}</text>
        <circle cx="414" cy="25" r="11" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="2" />
        <path d="M409 26 l4 4 l7 -9" fill="none" stroke={FIG.mp} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <g transform="translate(262,52)">
          <path d="M0 30 h30 v6 a15 15 0 0 1 -30 0 z" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1.2" />
          <g stroke={FIG.mp} strokeWidth="1.8" fill="none" strokeLinecap="round"><path d="M15 30 V10" /><path d="M15 16 l-7 -6 M15 18 l7 -5" /></g>
          <text className="fig-lab-sm" x="15" y="56" textAnchor="middle">{f.mother}</text>
        </g>
        <text className="fig-lab" x="312" y="84" fontWeight="650">=</text>
        <g stroke={FIG.mp} strokeWidth="1.8" fill="none" strokeLinecap="round">
          {[326, 364, 402].map((x) => (
            <g key={x} transform={`translate(${x},64)`}><path d="M0 22 V2" /><path d="M0 8 l-7 -6 M0 10 l7 -5" /></g>
          ))}
        </g>
        <g transform="translate(300,150)">
          <rect x="0" y="0" width="128" height="62" rx="12" fill={FIG.mpSoft} />
          <g fill={FIG.mp}>
            <path d="M22 14 q -7 10 0 22 q 7 -12 0 -22 z" /><path d="M30 14 q 7 10 0 22 q -7 -12 0 -22 z" />
            <path d="M50 16 q -6 9 0 18 q 6 -10 0 -18 z" /><path d="M57 16 q 6 9 0 18 q -6 -10 0 -18 z" />
          </g>
          <text className="fig-lab-sm" x="92" y="28" textAnchor="middle">{f.genome}</text>
          <text className="fig-lab-b" x="92" y="44" textAnchor="middle" fill={FIG.mp}>{f.unchanged}</text>
        </g>
        <text className="fig-lab-sm" x="346" y="234" textAnchor="middle">{f.wholePlantCopied}</text>
        <defs>
          <marker id="gmoArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.warn} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
