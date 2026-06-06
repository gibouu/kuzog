interface CitationProps {
  text: string;
}

export function Citation({ text }: CitationProps) {
  return <p className="text-xs italic text-muted-ink">{text}</p>;
}
