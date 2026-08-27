"use client";

import { useLanguage } from "@/lib/language-context";

export default function MultilingualSection() {
  const { t } = useLanguage();
  const multilingual = t.multilingual;

  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface)] px-6 py-16 text-center sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:text-start">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
            {multilingual.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] text-[var(--text)] sm:text-4xl">
            {multilingual.title}
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)]">{multilingual.body}</p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div
            className="flex h-28 w-28 items-center justify-center rounded-full text-white sm:h-32 sm:w-32"
            style={{ background: "var(--brand-gradient)" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-14 w-14"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
