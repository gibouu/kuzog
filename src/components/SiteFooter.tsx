type FooterProps = {
  onShowPolicy?: () => void;
};

export function SiteFooter({ onShowPolicy }: FooterProps) {
  return (
    <footer className="mt-8 border-t border-white/40 bg-white/45 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 pb-20 pt-6 text-center text-sm text-muted-ink md:flex-row md:items-center md:justify-between md:pb-24 md:pt-8 md:text-left">
        <div>
          <span className="font-semibold tracking-[0.2em] text-ink">KUZOG</span>
          <span className="ml-3 text-muted-ink">© 2025 KUZOG France. Paris</span>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:justify-end">
          <a
            href="mailto:management@kuzog.com"
            className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-ink transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            management@kuzog.com
          </a>
          <button
            type="button"
            onClick={onShowPolicy}
            className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-ink transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Ethics Code
          </button>
        </div>
      </div>
    </footer>
  );
}
