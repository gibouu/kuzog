import { ProductPageShell } from '../components/ProductPageShell';
import { useLanguage } from '../contexts/LanguageContext';

export default function HydrobioPage() {
  const { content } = useLanguage();
  return (
    <ProductPageShell
      accent="hydrobio"
      eyebrow={content.home.cards.hydrobio.eyebrow}
      title={content.home.cards.hydrobio.title}
    />
  );
}
