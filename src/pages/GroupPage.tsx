import { ProductPageShell } from '../components/ProductPageShell';
import { useLanguage } from '../contexts/LanguageContext';

export default function GroupPage() {
  const { content } = useLanguage();
  return (
    <ProductPageShell
      accent="group"
      eyebrow={content.home.cards.group.eyebrow}
      title={content.home.cards.group.title}
    />
  );
}
