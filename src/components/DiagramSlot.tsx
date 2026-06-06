interface DiagramSlotProps {
  id: string;
  title: string;
  prompt: string;
  aspectRatio?: string;
  src?: string;
  alt?: string;
}

export function DiagramSlot({ id, title, prompt, aspectRatio = '16 / 9', src, alt }: DiagramSlotProps) {
  if (src) {
    return (
      <figure className="overflow-hidden rounded-card border border-hairline bg-surface">
        <img src={src} alt={alt ?? title} className="w-full" style={{ aspectRatio }} />
      </figure>
    );
  }

  const isDev = (import.meta as unknown as { env: { DEV: boolean } }).env.DEV;

  return (
    <figure
      className="flex flex-col items-center justify-center gap-3 rounded-card border border-dashed border-hairline bg-surface-elevated p-8 text-center"
      style={{ aspectRatio }}
      aria-label={title}
    >
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-ink">Diagram {id}</span>
      <span className="text-display-md text-ink">{title}</span>
      {isDev && (
        <p className="max-w-2xl text-xs italic text-muted-ink">
          {prompt}
        </p>
      )}
    </figure>
  );
}
