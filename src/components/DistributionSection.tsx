"use client";

import Image from "next/image";
import { platformIcons } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function DistributionSection() {
  const { t } = useLanguage();
  const distribution = t.distribution;
  const platforms = t.platforms.map((name, i) => ({ name, icon: platformIcons[i] }));
  const row = [...platforms, ...platforms];

  return (
    <section
      id="distribution"
      className="flex min-h-screen flex-col items-center justify-center bg-[var(--surface)] px-6 py-16 text-center sm:py-20"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
        {distribution.eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-6xl font-display text-4xl font-bold leading-[1.05] text-[var(--text)] sm:text-5xl">
        {distribution.title}
      </h2>
      <p className="mx-auto mt-5 max-w-6xl text-lg text-[var(--text-muted)]">{distribution.body}</p>

      <div className="mx-auto mt-12 w-full max-w-lg overflow-hidden sm:max-w-4xl">
        <div className="animate-marquee flex w-max items-center gap-14">
          {row.map((platform, i) => (
            <div
              key={`${platform.name}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image src={platform.icon} alt={platform.name} width={32} height={32} className="h-8 w-8" />
              <span className="text-lg font-medium text-[var(--text-muted)]">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
