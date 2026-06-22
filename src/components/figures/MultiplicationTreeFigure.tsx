import { useLanguage } from '../../contexts/LanguageContext';
import { FigureCard } from './FigureCard';
import { FIG } from './figureColors';

export function MultiplicationTreeFigure() {
  const { content } = useLanguage();
  const f = content.figures.multiplication;
  const gen3Dots = [72, 86, 100, 114, 128, 142, 156, 170, 184, 198, 212, 226, 240];
  const gen3Row2 = [79, 107, 135, 163, 191, 219];
  return (
    <FigureCard tag={f.tag} title={f.title} caption={f.caption}>
      <svg viewBox="0 0 460 280" role="img" aria-label={f.title} className="h-auto w-full">
        <text className="fig-lab-sm" x="16" y="74">{`${f.gen} 1`}</text>
        <text className="fig-lab-sm" x="16" y="140">{`${f.gen} 2`}</text>
        <text className="fig-lab-sm" x="16" y="206">{`${f.gen} 3`}</text>
        <line x1="268" y1="40" x2="268" y2="246" stroke={FIG.hair} strokeWidth="1.5" strokeDasharray="4 5" />
        <text className="fig-lab-b" x="162" y="32" textAnchor="middle" fill={FIG.mp}>{f.micropropagation}</text>
        <text className="fig-lab-b" x="364" y="32" textAnchor="middle" fill={FIG.muted}>{f.conventional}</text>

        {/* micropropagation edges */}
        <g stroke={FIG.mp} fill="none">
          <g strokeWidth="1.6" opacity="0.75">
            <path d="M162 76 L92 128" /><path d="M162 76 L138 128" /><path d="M162 76 L186 128" /><path d="M162 76 L232 128" />
          </g>
          <g strokeWidth="1.3" opacity="0.5">
            <path d="M92 134 L92 186" /><path d="M138 134 L138 186" /><path d="M186 134 L186 186" /><path d="M232 134 L232 186" />
          </g>
        </g>
        <rect x="58" y="186" width="200" height="30" rx="15" fill={FIG.mpSoft} />
        <g fill={FIG.mp}>
          {gen3Dots.map((x, i) => (
            <circle key={`a${x}`} cx={x} cy={i % 2 === 0 ? 197 : 205} r="2.6" />
          ))}
          {gen3Row2.map((x) => (
            <circle key={`b${x}`} cx={x} cy="208" r="2.6" />
          ))}
        </g>
        <circle cx="162" cy="76" r="6" fill={FIG.mp} />
        <g fill={FIG.mp}><circle cx="92" cy="131" r="5" /><circle cx="138" cy="131" r="5" /><circle cx="186" cy="131" r="5" /><circle cx="232" cy="131" r="5" /></g>
        <text className="fig-lab-b" x="244" y="80" fill={FIG.mp}>1</text>
        <text className="fig-lab-b" x="244" y="135" fill={FIG.mp}>4</text>
        <text className="fig-lab-b" x="160" y="236" textAnchor="middle" fill={FIG.mp}>{f.thousands}</text>

        {/* conventional */}
        <g stroke={FIG.conv} fill="none" strokeWidth="1.6">
          <path d="M364 76 L340 128" /><path d="M364 76 L388 128" />
          <path d="M340 134 L328 184" /><path d="M340 134 L352 184" /><path d="M388 134 L376 184" /><path d="M388 134 L400 184" />
        </g>
        <circle cx="364" cy="76" r="6" fill={FIG.conv} />
        <g fill={FIG.conv}><circle cx="340" cy="131" r="5" /><circle cx="388" cy="131" r="5" /></g>
        <g fill={FIG.conv}><circle cx="328" cy="188" r="4.5" /><circle cx="352" cy="188" r="4.5" /><circle cx="376" cy="188" r="4.5" /><circle cx="400" cy="188" r="4.5" /></g>
        <text className="fig-lab-sm" x="420" y="80">1</text>
        <text className="fig-lab-sm" x="420" y="135">2</text>
        <text className="fig-lab-sm" x="364" y="236" textAnchor="middle">4</text>
      </svg>
    </FigureCard>
  );
}
