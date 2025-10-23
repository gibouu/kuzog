import { Language, SiteContent } from '../types';
import { en } from './en';
import { fr } from './fr';
import { ar } from './ar';

export const content: Record<Language, SiteContent> = {
  en,
  fr,
  ar,
};

export function getContent(lang: Language): SiteContent {
  return content[lang] || content.en;
}
