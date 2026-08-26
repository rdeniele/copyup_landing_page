"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { BrandLogo } from "./BrandLogos";

export default function GoogleAISection() {
  const { t } = useLanguage();
  const googleAI = t.googleAI;

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center bg-[var(--surface)] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-start">
            <p className="font-display text-lg font-semibold leading-snug text-[var(--text)] sm:text-2xl">
              {t.hero.valueStatement}
            </p>
            <p className="mt-6 font-display text-xl font-bold leading-tight gradient-text sm:text-3xl">
              {t.hero.hook}
            </p>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-lg)] bg-[#e7e7ea] shadow-xl shadow-black/15 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25">
            <div dir="ltr" className="flex items-center gap-2 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="mx-auto flex items-center gap-1.5 rounded-full bg-white px-4 py-1 text-[11px] text-[var(--text-faint)]">
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                  <path d="M6 1a5 5 0 100 10A5 5 0 006 1zM6 1v10M1 6h10" stroke="currentColor" strokeWidth="0.8" />
                </svg>
                app.copyup.ai
              </span>
            </div>
            <Image
              src="/marketing/distribution-engine-screenshot.png"
              alt="CopyUp distribution dashboard showing content scheduled across 12 platforms"
              width={1024}
              height={768}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center bg-[var(--surface)] px-6 py-16 text-center sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-start">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
              {googleAI.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-[var(--text)] sm:text-5xl">
              {googleAI.title}
            </h2>
            <p className="mt-5 text-lg text-[var(--text-muted)]">{googleAI.body}</p>
          </div>

          <div className="grid grid-cols-3 gap-8 sm:grid-cols-6 lg:grid-cols-3">
            {googleAI.engines.map((engine) => (
              <div key={engine} title={engine} className="flex items-center justify-center">
                <BrandLogo
                  name={engine}
                  className="h-14 w-14 transition-transform duration-200 hover:-translate-y-1 hover:scale-110 sm:h-16 sm:w-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
