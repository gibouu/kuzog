import { Award, Newspaper, Coins, Handshake, Sparkles, ArrowUpRight } from 'lucide-react';
import { StoryBeat } from './StoryBeat';
import { RecognitionContent, RecognitionItem } from '../i18n/types';

const KIND_ICON: Record<RecognitionItem['kind'], typeof Award> = {
  award: Award,
  press: Newspaper,
  grant: Coins,
  partnership: Handshake,
  incubation: Sparkles,
};

const KIND_LABEL: Record<RecognitionItem['kind'], string> = {
  award: 'Award',
  press: 'Press',
  grant: 'Grant',
  partnership: 'Partnership',
  incubation: 'Incubation',
};

interface RecognitionBeatProps {
  content: RecognitionContent;
  accent: 'hydrobio' | 'microplantes' | 'group';
}

export function RecognitionBeat({ content, accent }: RecognitionBeatProps) {
  return (
    <StoryBeat id="recognition" eyebrow={content.eyebrow} title={content.title} accent={accent}>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item, idx) => {
          const Icon = KIND_ICON[item.kind];
          const card = (
            <div className="flex h-full flex-col gap-3 rounded-card border border-hairline bg-surface p-6 transition group-hover:-translate-y-0.5 group-hover:shadow-card">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-ink">
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {KIND_LABEL[item.kind]}
                </span>
                {item.date && <span className="text-xs text-muted-ink">{item.date}</span>}
                {item.href && <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden />}
              </div>
              <h3 className="text-base font-semibold text-ink md:text-lg">{item.source}</h3>
              <p className="text-sm text-muted-ink md:text-base">{item.detail}</p>
            </div>
          );
          return (
            <li key={`${item.source}-${idx}`} className="group">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-card">
                  {card}
                </a>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ul>
    </StoryBeat>
  );
}
