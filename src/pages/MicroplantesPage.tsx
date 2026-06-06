import { ProductPageShell } from '../components/ProductPageShell';
import { useLanguage } from '../contexts/LanguageContext';

export default function MicroplantesPage() {
  const { content } = useLanguage();
  return (
    <ProductPageShell
      accent="microplantes"
      eyebrow={content.home.cards.microplantes.eyebrow}
      title={content.home.cards.microplantes.title}
    />
  );
}
