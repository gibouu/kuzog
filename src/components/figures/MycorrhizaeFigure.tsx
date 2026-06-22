import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

const ROOT_FILL = '#f4efe1';
const ROOT_EDGE = '#d8cdb0';
const HAIR = '#c7bda0';
const CELL = '#ece5d2';

export function MycorrhizaeFigure() {
  const { content } = useLanguage();
  const f = content.figures.mycorrhizae;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        {/* ── Root body (epidermis), a vertical root with a rounded tip ── */}
        <path
          d="M212 4 L212 196 Q212 236 250 236 Q288 236 288 196 L288 4"
          fill={ROOT_FILL}
          stroke={ROOT_EDGE}
          strokeWidth="2"
        />
        {/* cell files + faint divisions */}
        <g stroke={CELL} strokeWidth="1" fill="none">
          <line x1="234" y1="14" x2="234" y2="206" />
          <line x1="250" y1="14" x2="250" y2="220" />
          <line x1="266" y1="14" x2="266" y2="206" />
          <line x1="214" y1="44" x2="286" y2="44" />
          <line x1="214" y1="84" x2="286" y2="84" />
          <line x1="214" y1="124" x2="286" y2="124" />
        </g>

        {/* ── Root hairs (fine projections near the upper root) ── */}
        <g stroke={HAIR} strokeWidth="1" strokeLinecap="round">
          <line x1="212" y1="26" x2="190" y2="20" /><line x1="212" y1="48" x2="188" y2="46" /><line x1="212" y1="70" x2="190" y2="70" />
          <line x1="288" y1="26" x2="310" y2="20" /><line x1="288" y1="48" x2="312" y2="46" /><line x1="288" y1="70" x2="310" y2="70" />
        </g>

        {/* ── Mycorrhizal hyphae: fine, dichotomously branching threads ── */}
        <g stroke={FIG.hy} strokeWidth="1.1" fill="none" strokeLinecap="round">
          {/* left */}
          <path d="M212 120 Q 150 112 110 100" /><path d="M110 100 l-16 -8 M110 100 l-12 12" />
          <path d="M212 150 Q 140 156 96 152" /><path d="M96 152 l-16 -6 M96 152 l-10 12" />
          <path d="M212 182 Q 150 196 108 214" /><path d="M108 214 l-16 2 M108 214 l-2 14" />
          {/* right */}
          <path d="M288 120 Q 350 112 392 100" /><path d="M392 100 l16 -8 M392 100 l12 12" />
          <path d="M288 150 Q 360 156 404 152" /><path d="M404 152 l16 -6 M404 152 l10 12" />
          <path d="M288 182 Q 350 196 392 214" /><path d="M392 214 l16 2 M392 214 l2 14" />
        </g>

        {/* ── Arbuscule interacting with a root cell (lower left) ── */}
        <g>
          <path d="M150 206 Q 185 206 214 204" fill="none" stroke={FIG.hy} strokeWidth="1.2" />
          <ellipse cx="236" cy="204" rx="15" ry="11" fill="none" stroke={ROOT_EDGE} strokeWidth="1" />
          <g stroke={FIG.hy} strokeWidth="1" fill="none" strokeLinecap="round">
            <path d="M224 208 L236 198" />
            <path d="M236 198 l-5 -5 M236 198 l5 -4 M232 202 l-6 -3 M240 201 l6 -3" />
          </g>
        </g>

        {/* ── Labels with leaders ── */}
        <g stroke={FIG.muted} strokeWidth="1" fill="none">
          <path d="M158 30 L206 42" /> {/* root */}
          <path d="M70 168 L104 158" /> {/* fungi */}
          <path d="M330 36 L312 46" /> {/* root hairs */}
        </g>
        <text className="fig-lab-sm" x="156" y="28" textAnchor="end">{f.root}</text>
        <text className="fig-lab-sm" x="12" y="170">{f.fungi}</text>
        <text className="fig-lab-sm" x="332" y="34">{f.rootHairs}</text>

        {/* takeaway */}
        <text className="fig-lab-b" x="230" y="270" textAnchor="middle" fill={FIG.hy}>{f.reachLabel}</text>
      </svg>
    </FigureCard>
  );
}
