import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, SiteContent } from '../i18n/types';
import { getContent } from '../i18n/content';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../i18n/languages';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: SiteContent;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'kuzog_language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize language from localStorage or default
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return (stored && ['en', 'fr', 'ar'].includes(stored) ? stored : DEFAULT_LANGUAGE) as Language;
  });

  const content = getContent(language);
  const direction = SUPPORTED_LANGUAGES.find((l) => l.code === language)?.dir || 'ltr';

  // Persist language choice and update document direction
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', direction);
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content, direction }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
