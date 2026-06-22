import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function VirusFreeFigure() {
  const { content } = useLanguage();
  const f = content.figures.virusFree;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        {/* shoot tip longitudinal section */}
        <g transform="translate(70,40)">
          <path d="M-26 150 L-26 70 Q-26 40 0 28 Q26 40 26 70 L26 150 Z" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1.4" />
          <g fill={FIG.warn}><circle cx="-12" cy="120" r="3" /><circle cx="8" cy="110" r="3" /><circle cx="-4" cy="135" r="3" /><circle cx="14" cy="128" r="3" /><circle cx="-16" cy="100" r="3" /></g>
          <path d="M0 30 q -18 -2 -22 10" fill="none" stroke={FIG.mp} strokeWidth="1.6" />
          <path d="M0 30 q 18 -2 22 10" fill="none" stroke={FIG.mp} strokeWidth="1.6" />
          <path d="M0 22 q -12 -4 -16 4" fill="none" stroke={FIG.mp} strokeWidth="1.4" />
          <path d="M0 22 q 12 -4 16 4" fill="none" stroke={FIG.mp} strokeWidth="1.4" />
          <path d="M-10 18 Q 0 4 10 18 Q 0 24 -10 18 Z" fill="#fff" stroke={FIG.mpDeep} strokeWidth="1.8" />
          <path d="M-20 22 L20 22" stroke={FIG.warn} strokeWidth="1.4" strokeDasharray="4 3" />
          <text className="fig-lab-sm" x="0" y="172" textAnchor="middle">{f.shootTip}</text>
          <text className="fig-lab-sm" x="0" y="186" textAnchor="middle" fill={FIG.warn}>{f.virusesLag}</text>
        </g>
        {/* magnifier on dome */}
        <g transform="translate(70,58)">
          <circle cx="0" cy="0" r="26" fill="none" stroke={FIG.ink} strokeWidth="2" />
          <line x1="19" y1="19" x2="34" y2="34" stroke={FIG.ink} strokeWidth="3" strokeLinecap="round" />
        </g>
        <text className="fig-lab-sm" x="70" y="22" textAnchor="middle" fill={FIG.mpDeep}>{f.apicalDome}</text>
        <path d="M150 140 H 196" stroke={FIG.muted} strokeWidth="2" markerEnd="url(#vfArrow)" />
        <text className="fig-lab-sm" x="173" y="132" textAnchor="middle">{f.exciseTip}</text>
        {/* clean plantlets */}
        <g transform="translate(300,96)">
          <g stroke={FIG.mp} strokeWidth="2.2" fill="none" strokeLinecap="round">
            {[0, 34, 68].map((dx) => (
              <g key={dx} transform={`translate(${dx},0)`}><path d="M0 70 V36" /><path d="M0 44 l-12 -7 M0 48 l12 -6" /></g>
            ))}
          </g>
          <circle cx="34" cy="16" r="11" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1.6" />
          <path d="M29 16 l4 4 l6 -7" fill="none" stroke={FIG.mp} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <text className="fig-lab-sm" x="34" y="88" textAnchor="middle" fill={FIG.muted}>{f.uniform}</text>
        </g>
        <defs>
          <marker id="vfArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill={FIG.muted} /></marker>
        </defs>
      </svg>
    </FigureCard>
  );
}
