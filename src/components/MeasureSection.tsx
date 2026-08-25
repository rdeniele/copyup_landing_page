"use client";

import { useLanguage } from "@/lib/language-context";

export default function MeasureSection() {
  const { t } = useLanguage();
  const measure = t.measure;

  return (
    <section
      id="measure"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center sm:py-20"
      style={{ background: "#7b3aec" }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
        {measure.eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-6xl font-display text-3xl font-bold leading-[1.05] text-white sm:text-4xl">
        {measure.title}
      </h2>
      <p className="mx-auto mt-4 max-w-6xl text-base text-white/85">{measure.body}</p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
        {measure.flow.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="flex items-center gap-2 rounded-full bg-white/15 py-2 ps-2 pe-4 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/25">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-[#7b3aec]">
                {i + 1}
              </span>
              {step}
            </span>
            {i < measure.flow.length - 1 && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-white/50">
                <path d="m9 6 6 6-6 6" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
