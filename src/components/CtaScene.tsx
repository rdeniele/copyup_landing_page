"use client";

import { Fragment } from "react";
import { siteUrl } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

const keyIconPaths = [
  // One hour — hourglass
  <Fragment key="hourglass">
    <path d="M6 2h12M6 22h12" />
    <path d="M6 2c0 5 4 6 6 8 2-2 6-3 6-8M6 22c0-5 4-6 6-8 2 2 6 3 6 8" />
  </Fragment>,
  // Six months — megaphone
  <path
    key="megaphone"
    d="M3 11v3a1 1 0 0 0 1 1h2l3 5V6L6 11H4a1 1 0 0 0-1 1Zm9-4.5v11a4 4 0 0 0 3-3.8v-3.4a4 4 0 0 0-3-3.8Z"
    strokeLinejoin="round"
  />,
  // Google + AI — brain
  <Fragment key="brain">
    <path d="M9 4a2.5 2.5 0 0 0-2.5 2.5c0 .3.04.6.11.87A2.5 2.5 0 0 0 5 9.5c0 .68.28 1.3.72 1.75A2.5 2.5 0 0 0 5 13.5a2.5 2.5 0 0 0 2.05 2.46A2.5 2.5 0 0 0 9.5 19H10V4Z" />
    <path d="M15 4a2.5 2.5 0 0 1 2.5 2.5c0 .3-.04.6-.11.87A2.5 2.5 0 0 1 19 9.5c0 .68-.28 1.3-.72 1.75A2.5 2.5 0 0 1 19 13.5a2.5 2.5 0 0 1-2.05 2.46A2.5 2.5 0 0 1 14.5 19H14V4Z" />
  </Fragment>,
  // One system — connected nodes
  <Fragment key="system">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="m8.2 7.2 6.4 8.6M15.8 7.2 9.4 15.8M8.5 6h7" />
  </Fragment>,
];

function KeyIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
    >
      {keyIconPaths[index]}
    </svg>
  );
}

export default function CtaScene() {
  const { t } = useLanguage();
  const keyMessage = t.keyMessage;
  const leadCta = t.leadCta;

  return (
    <section className="reel-scene flex flex-col items-center justify-center bg-[var(--surface)] px-6 py-16 text-center sm:py-20">
      <div
        className="mx-auto w-full max-w-5xl rounded-[var(--radius-lg)] px-6 py-8 sm:px-10 sm:py-10"
        style={{ background: "#7b3aec" }}
      >
        <p className="font-display text-xl font-bold text-white sm:text-2xl">{keyMessage.closing}</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/20 pt-6">
          {keyMessage.lines.map((line, i) => (
            <div key={line} className="flex items-center gap-2.5 text-white">
              <KeyIcon index={i} />
              <p className="font-display text-base font-semibold text-white sm:text-lg">{line}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)] sm:mt-20">
        {leadCta.eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-6xl font-display text-3xl font-bold leading-[1.05] text-[var(--text)] sm:text-4xl">
        {leadCta.title}
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-[var(--text-muted)]">{leadCta.sub}</p>

      <a
        href={`${siteUrl}/signup`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 rounded-[var(--radius-pill)] px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:brightness-105"
        style={{ background: "var(--brand-gradient)" }}
      >
        {leadCta.cta}
      </a>
      <p className="mt-3 text-xs text-[var(--text-faint)]">{leadCta.microcopy}</p>
    </section>
  );
}
