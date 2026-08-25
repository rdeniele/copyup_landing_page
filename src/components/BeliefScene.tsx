"use client";

import { useLanguage } from "@/lib/language-context";

const iconPaths = [
  // Visibility — eye
  <>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </>,
  // Authority — badge / ribbon
  <>
    <circle cx="12" cy="8" r="5" />
    <path d="M9 12.5 7 21l5-3 5 3-2-8.5" />
  </>,
  // Context — layers
  <>
    <path d="M12 3 21 8l-9 5-9-5 9-5Z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 16l9 5 9-5" />
  </>,
  // Trust — shield check
  <>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
  // Presence — map pin
  <>
    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </>,
  // Consistency — repeat
  <>
    <path d="M17 2l4 4-4 4" />
    <path d="M21 6H8a5 5 0 0 0-5 5v1" />
    <path d="M7 22l-4-4 4-4" />
    <path d="M3 18h13a5 5 0 0 0 5-5v-1" />
  </>,
];

function PillarIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {iconPaths[index]}
    </svg>
  );
}

export default function BeliefScene() {
  const { t } = useLanguage();
  const belief = t.belief;

  return (
    <section className="bg-[var(--surface)] px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
        {belief.eyebrow}
      </p>
      <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.01em] text-[var(--text)] sm:text-5xl">
        {belief.title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-muted)]">{belief.body}</p>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {belief.pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="group rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-2)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-200 group-hover:scale-110"
              style={{ background: "var(--brand-gradient)" }}
            >
              <PillarIcon index={i} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-[var(--accent-text)]">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{pillar.desc}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-xl font-display text-xl font-semibold text-[var(--text)]">
        {belief.closing}
      </p>
    </section>
  );
}
