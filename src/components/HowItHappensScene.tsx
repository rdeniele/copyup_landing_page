"use client";

import { useLanguage } from "@/lib/language-context";

export default function HowItHappensScene() {
  const { t } = useLanguage();
  const howItHappens = t.howItHappens;

  return (
    <section
      id="how-it-happens"
      className="reel-scene flex flex-col items-center justify-center bg-[var(--surface)] px-6 py-20 text-center sm:py-28"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
        {howItHappens.eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-xl font-display text-4xl font-bold text-[var(--text)] sm:text-5xl">
        {howItHappens.title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base text-[var(--text-muted)]">
        {howItHappens.intro}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {howItHappens.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
        {howItHappens.steps.map((s) => (
          <div key={s.n} className="flex flex-col items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-bold text-white"
              style={{ background: "var(--brand-gradient)" }}
            >
              {s.n}
            </div>
            <p className="font-display text-base font-semibold text-[var(--text)]">{s.label}</p>
            <p className="text-xs text-[var(--text-muted)]">{s.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 font-display text-xl font-semibold text-[var(--accent-text)]">
        {howItHappens.approve}
      </p>
    </section>
  );
}
