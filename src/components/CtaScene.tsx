import { leadCta, siteUrl } from "@/lib/content";

export default function CtaScene() {
  return (
    <section className="reel-scene flex flex-col items-center justify-center bg-[var(--surface)] px-6 py-20 text-center sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
        {leadCta.eyebrow}
      </p>
      <h2 className="mx-auto mt-6 max-w-xl font-display text-4xl font-bold leading-[1.05] text-[var(--text)] sm:text-5xl">
        {leadCta.title}
      </h2>
      <p className="mx-auto mt-5 max-w-md text-[var(--text-muted)]">{leadCta.sub}</p>

      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 rounded-[var(--radius-pill)] px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:brightness-105"
        style={{ background: "var(--brand-gradient)" }}
      >
        {leadCta.cta}
      </a>
    </section>
  );
}
