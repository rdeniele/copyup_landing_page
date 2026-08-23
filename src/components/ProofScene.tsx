"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { platforms, proof } from "@/lib/content";

const icons: Record<string, string> = {
  Telegram: "/icons/telegram.svg",
  Facebook: "/icons/facebook.svg",
  Instagram: "/icons/instagram.svg",
  LinkedIn: "/icons/linkedin.svg",
  GitHub: "/icons/github.svg",
  TikTok: "/icons/tiktok.svg",
  YouTube: "/icons/youtube.svg",
  Threads: "/icons/threads.svg",
  "Google Business Profile": "/icons/google-business.svg",
};

function useCountUp(target: number, duration = 1400, stepMs = 16) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearInterval(interval);

        if (entry.isIntersecting) {
          const start = Date.now();
          interval = setInterval(() => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress >= 1) clearInterval(interval);
          }, stepMs);
        } else {
          setValue(0);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [target, duration, stepMs]);

  return { value, ref };
}

export default function ProofScene() {
  const row = [...platforms, ...platforms];
  const { value, ref } = useCountUp(Number(proof.stat));

  return (
    <section className="reel-scene flex flex-col items-center justify-center gap-14 bg-[var(--surface)] px-6 py-20 text-center sm:py-28">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-faint)]">
          {proof.eyebrow}
        </p>
        <div
          ref={ref}
          className="mt-4 font-display text-7xl font-bold tabular-nums gradient-text sm:text-8xl"
        >
          {value}
        </div>
        <p className="mt-2 font-display text-lg font-semibold text-[var(--text)]">
          {proof.statLabel}
        </p>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{proof.statSub}</p>
      </div>

      <div className="w-full max-w-md overflow-hidden sm:max-w-2xl">
        <div className="animate-marquee flex w-max items-center gap-10">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              {icons[name] && (
                <Image src={icons[name]} alt={name} width={20} height={20} className="h-5 w-5" />
              )}
              <span className="text-sm font-medium text-[var(--text-muted)]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
