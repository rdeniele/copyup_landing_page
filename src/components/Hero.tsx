"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteUrl } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

function StartFreeButton({ label }: { label: string }) {
  return (
    <a
      href={`${siteUrl}/signup`}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-[var(--radius-pill)] bg-[var(--deep-navy)] px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:brightness-110"
    >
      {label}
    </a>
  );
}

export default function Hero() {
  const { t, isRtl } = useLanguage();
  const hero = t.hero;
  const mirrored = isRtl ? "scaleX(-1)" : undefined;

  return (
    <section
      id="top"
      className="reel-scene relative overflow-hidden rounded-b-[2.5rem] sm:min-h-[36rem] sm:rounded-b-[4rem] lg:min-h-[44rem]"
    >
      {/* Mobile: full-bleed background photo with text overlaid top and bottom */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/hero_background/copyup_hand_right_mobile.png"
          alt="Hand holding a laptop showing the CopyUp dashboard"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", transform: mirrored }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/60" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-10 pt-24 text-center lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[var(--deep-navy)] shadow-sm">
            {hero.eyebrow}
          </span>
          <h1 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.01em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            {hero.headline}
          </h1>
          <div className="mt-1 flex flex-col items-center gap-2">
            <StartFreeButton label={hero.reviewCta} />
            <p className="text-xs text-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">
              {hero.microcopy}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop: full-bleed background photo with a dark overlay for text contrast */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/hero_background/copyup_hand_left_pc_2.png"
          alt="Hand holding a laptop showing the CopyUp dashboard"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "left top", transform: mirrored }}
          priority
        />
        <div className="absolute inset-0 bg-black/22" />
      </div>

      <div className="absolute inset-0 z-10 hidden items-center lg:flex">
        <div
          dir="ltr"
          className={`mx-auto flex w-full max-w-7xl items-center px-10 pt-16 ${isRtl ? "justify-start" : "justify-end"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex max-w-xl flex-col gap-6 ${isRtl ? "items-start text-left" : "items-end text-right"}`}
          >
            <span dir="rtl" className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[var(--deep-navy)] shadow-sm">
              {hero.eyebrow}
            </span>
            <h1
              dir="rtl"
              className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.45)] xl:text-[3.1rem]"
            >
              {hero.headline}
            </h1>
            <div className={`mt-1 flex flex-col gap-3 ${isRtl ? "items-start" : "items-end"}`}>
              <StartFreeButton label={hero.reviewCta} />
              <p dir="rtl" className="text-xs text-white/85 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
                {hero.microcopy}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
