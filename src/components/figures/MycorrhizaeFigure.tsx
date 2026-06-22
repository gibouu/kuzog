import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function MycorrhizaeFigure() {
  const { content } = useLanguage();
  const f = content.figures.mycorrhizae;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <line x1="24" y1="48" x2="436" y2="48" stroke={FIG.hair} strokeWidth="1.5" />
        <text className="fig-lab-sm" x="28" y="40">{f.soilSurface}</text>
        {/* root's own reach */}
        <circle cx="230" cy="150" r="52" fill="none" stroke="#cfd3cb" strokeWidth="1.4" strokeDasharray="4 5" />
        <text className="fig-lab-sm" x="230" y="150" textAnchor="middle" fill="#aeb3aa">{f.rootReach}</text>
        {/* hyphae network */}
        <g stroke={FIG.hy} strokeWidth="1.3" fill="none" strokeLinecap="round">
          <path d="M230 96 Q 150 70 92 84" />
          <path d="M214 120 Q 130 118 70 150" />
          <path d="M222 168 Q 140 196 96 222" />
          <path d="M236 188 Q 220 224 214 250" />
          <path d="M248 168 Q 330 196 372 226" />
          <path d="M250 120 Q 338 116 396 148" />
          <path d="M242 98 Q 318 72 372 86" />
          <path d="M92 84 l-14 -6 M92 84 l-10 10" />
          <path d="M70 150 l-14 -2 M70 150 l-8 11" />
          <path d="M96 222 l-13 4 M96 222 l-2 13" />
          <path d="M372 226 l13 5 M372 226 l1 13" />
          <path d="M396 148 l13 -3 M396 148 l9 10" />
          <path d="M372 86 l13 -5 M372 86 l3 13" />
        </g>
        {/* root system */}
        <g stroke={FIG.soil} fill="none" strokeLinecap="round">
          <path d="M230 48 L230 200" strokeWidth="3" />
          <path d="M230 92 Q 210 108 204 132" strokeWidth="2.4" />
          <path d="M230 120 Q 252 134 258 158" strokeWidth="2.4" />
          <path d="M230 158 Q 214 176 210 196" strokeWidth="2.2" />
        </g>
        {/* mushrooms */}
        <g fill={FIG.hy}>
          <g transform="translate(92,84)"><path d="M-6 0 a6 6 0 0 1 12 0 z" /><rect x="-1.4" y="0" width="2.8" height="6" /></g>
          <g transform="translate(96,222)"><path d="M-5 0 a5 5 0 0 1 10 0 z" /><rect x="-1.2" y="0" width="2.4" height="5" /></g>
          <g transform="translate(372,86)"><path d="M-5 0 a5 5 0 0 1 10 0 z" /><rect x="-1.2" y="0" width="2.4" height="5" /></g>
        </g>
        {/* distant water/nutrients reached */}
        <circle cx="70" cy="150" r="3.5" fill={FIG.water} />
        <circle cx="396" cy="148" r="3.5" fill={FIG.mp} />
        <circle cx="214" cy="250" r="3.5" fill={FIG.water} />
        <circle cx="372" cy="226" r="3.5" fill={FIG.mp} />
        <text className="fig-lab-b" x="230" y="270" textAnchor="middle" fill={FIG.hy}>{f.reachLabel}</text>
      </svg>
    </FigureCard>
  );
}
