import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../i18n/languages';
import { Language } from '../i18n/types';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === language);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-white/60 bg-white/70 px-4 text-xs font-semibold text-ink shadow-sm transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-12 sm:text-sm"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="uppercase">{currentLang?.code}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-lg backdrop-blur-sm">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`
                flex w-full items-center justify-between px-4 py-3 text-sm transition-colors
                ${
                  language === lang.code
                    ? 'bg-[var(--brand)]/10 text-[var(--brand)] font-semibold'
                    : 'text-[var(--ink)] hover:bg-[var(--chip)]'
                }
              `}
            >
              <span>{lang.nativeName}</span>
              <span className="text-xs uppercase opacity-60">{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
