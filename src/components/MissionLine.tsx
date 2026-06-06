import { useLanguage } from '../contexts/LanguageContext';

export function MissionLine() {
  const { content } = useLanguage();
  return (
    <section className="px-6">
      <p className="mx-auto max-w-3xl text-center text-base text-muted-ink md:text-lg">
        {content.home.mission}
      </p>
    </section>
  );
}
