"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero, siteUrl } from "@/lib/content";

function StartFreeButton() {
  return (
    <a
      href={siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-[var(--radius-pill)] bg-[var(--deep-navy)] px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:brightness-110"
    >
      {hero.primaryCta}
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="reel-scene relative overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[4rem] lg:min-h-[44rem]"
    >
      {/* Mobile: full-bleed background photo with text overlaid top and bottom */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/hero_background/copyup_hand_right_mobile.png"
          alt="Hand holding a laptop showing the CopyUp dashboard"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/22 via-transparent to-black/28" />
      </div>

      <div className="absolute inset-x-0 top-6 z-20 flex justify-center px-6 sm:top-8 lg:hidden">
        <Image
          src="/brand/copyup-logo.png"
          alt="CopyUp.ai"
          width={220}
          height={62}
          className="h-10 w-auto brightness-0 invert sm:h-12"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-between px-6 pb-10 pt-28 text-center lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[var(--deep-navy)] shadow-sm">
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-center gap-5"
        >
          <h1 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.01em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            {hero.headline}
          </h1>
          <div className="flex flex-col items-center gap-3">
            <StartFreeButton />
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
          style={{ objectFit: "cover", objectPosition: "left top" }}
          priority
        />
        <div className="absolute inset-0 bg-black/22" />
      </div>

      <div className="absolute inset-0 z-10 hidden lg:flex lg:flex-col">
        <div className="flex justify-center px-10 py-7">
          <Image
            src="/brand/copyup-logo.png"
            alt="CopyUp.ai"
            width={150}
            height={42}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-end px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex max-w-xl flex-col items-end gap-6 text-right"
          >
            <span className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[var(--deep-navy)] shadow-sm">
              {hero.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.45)] xl:text-[3.1rem]">
              {hero.headline}
            </h1>
            <div className="flex flex-col items-end gap-3">
              <StartFreeButton />
              <p className="text-xs text-white/85 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
                {hero.microcopy}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
