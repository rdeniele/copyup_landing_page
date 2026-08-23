"use client";

import { useLanguage } from "@/lib/language-context";

export default function BeliefScene() {
  const { t } = useLanguage();
  const belief = t.belief;

  return (
    <section className="reel-scene flex flex-col items-center justify-center bg-[var(--surface)] px-6 py-20 text-center sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
        {belief.eyebrow}
      </p>
      <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.01em] text-[var(--text)] sm:text-5xl">
        {belief.title}
      </h2>
      <p className="mx-auto mt-6 max-w-lg text-lg text-[var(--text-muted)]">{belief.body}</p>
    </section>
  );
}
