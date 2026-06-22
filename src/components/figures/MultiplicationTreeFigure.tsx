import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

const TRAY_SPROUTS = [70, 86, 102, 118, 134, 150, 166, 182, 198, 214, 230, 246];

export function MultiplicationTreeFigure() {
  const { content } = useLanguage();
  const f = content.figures.multiplication;
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <text className="fig-lab-sm" x="14" y="74">{`${f.gen} 1`}</text>
        <text className="fig-lab-sm" x="14" y="140">{`${f.gen} 2`}</text>
        <text className="fig-lab-sm" x="14" y="208">{`${f.gen} 3`}</text>
        <line x1="268" y1="40" x2="268" y2="250" stroke={FIG.hair} strokeWidth="1.5" strokeDasharray="4 5" />
        <text className="fig-lab-b" x="160" y="32" textAnchor="middle" fill={FIG.mp}>{f.micropropagation}</text>
        <text className="fig-lab-b" x="364" y="32" textAnchor="middle" fill={FIG.muted}>{f.conventional}</text>

        <g stroke={FIG.mp} fill="none" opacity="0.6">
          <path d="M160 84 L96 124" /><path d="M160 84 L138 124" /><path d="M160 84 L186 124" /><path d="M160 84 L228 124" />
        </g>
        {/* Gen 1 vessel + shoot */}
        <g transform="translate(146,52)">
          <path d="M0 20 h28 v6 a14 14 0 0 1 -28 0 z" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1.2" />
          <g stroke={FIG.mp} strokeWidth="1.6" fill="none" strokeLinecap="round"><path d="M14 20 V8" /><path d="M14 12 l-6 -5 M14 14 l6 -4" /></g>
        </g>
        {/* Gen 2 shoot clumps */}
        <g stroke={FIG.mp} strokeWidth="1.6" fill="none" strokeLinecap="round">
          {[96, 138, 186, 228].map((x) => (
            <g key={x} transform={`translate(${x},120)`}><path d="M0 12 V2" /><path d="M0 6 l-5 -4 M0 8 l5 -3" /></g>
          ))}
        </g>
        <g stroke={FIG.mp} fill="none" opacity="0.45" strokeWidth="1.2">
          <path d="M96 134 L96 182" /><path d="M138 134 L138 182" /><path d="M186 134 L186 182" /><path d="M228 134 L228 182" />
        </g>
        {/* Gen 3 tray of sprouts */}
        <rect x="58" y="182" width="200" height="34" rx="8" fill={FIG.mpSoft} stroke={FIG.mp} strokeWidth="1" />
        <g stroke={FIG.mp} strokeWidth="1.2" strokeLinecap="round">
          {TRAY_SPROUTS.map((x) => (
            <path key={x} d={`M${x} 210 v-12 M${x} 202 l-4 -4 M${x} 204 l4 -3`} />
          ))}
        </g>
        <text className="fig-lab-b" x="244" y="80" fill={FIG.mp}>1</text>
        <text className="fig-lab-b" x="244" y="135" fill={FIG.mp}>4</text>
        <text className="fig-lab-b" x="158" y="232" textAnchor="middle" fill={FIG.mp}>16 → thousands</text>

        {/* conventional */}
        <g stroke={FIG.conv} fill="none" strokeWidth="1.6">
          <path d="M364 80 L340 128" /><path d="M364 80 L388 128" />
          <path d="M340 134 L328 184" /><path d="M340 134 L352 184" /><path d="M388 134 L376 184" /><path d="M388 134 L400 184" />
        </g>
        <g stroke={FIG.conv} strokeWidth="1.4" strokeLinecap="round" fill="none">
          <path d="M364 80 v-10 M364 74 l-4 -4 M364 76 l4 -3" />
          <path d="M340 132 v-9 M388 132 v-9" />
          <path d="M328 188 v-8 M352 188 v-8 M376 188 v-8 M400 188 v-8" />
        </g>
        <text className="fig-lab-sm" x="420" y="82">1</text>
        <text className="fig-lab-sm" x="420" y="135">2</text>
        <text className="fig-lab-sm" x="364" y="206" textAnchor="middle">4</text>
      </svg>
    </FigureCard>
  );
}
