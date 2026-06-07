import { useLanguage } from '../contexts/LanguageContext';
import { ProductCard } from './ProductCard';

const HREFS = {
  hydrobio: '/hydrobio',
  microplantes: '/microplantes',
} as const;

export function HomeHero() {
  const { content } = useLanguage();
  const { cards } = content.home;

  return (
    <section id="hero" className="px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
        <ProductCard {...cards.hydrobio} href={HREFS.hydrobio} />
        <ProductCard {...cards.microplantes} href={HREFS.microplantes} />
      </div>
    </section>
  );
}
