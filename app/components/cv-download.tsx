export default function CvDownload() {
  return (
    <div className="inline-flex overflow-hidden rounded border border-accent font-mono text-xs uppercase tracking-wide text-accent">
      <a
        href="/CV_Romain_Darde_EN.pdf"
        download
        className="flex items-center gap-1.5 px-3 py-1.5 transition hover:bg-accent hover:text-ink hover:shadow-[0_0_20px_-4px_var(--color-accent)]"
      >
        CV · EN ↓
      </a>
      <span className="w-px bg-accent/40" />
      <a
        href="/CV_Romain_Darde_FR.pdf"
        download
        className="flex items-center gap-1.5 px-3 py-1.5 transition hover:bg-accent hover:text-ink hover:shadow-[0_0_20px_-4px_var(--color-accent)]"
      >
        CV · FR ↓
      </a>
    </div>
  );
}
