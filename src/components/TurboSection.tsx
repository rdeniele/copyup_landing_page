"use client";

import { Fragment } from "react";
import { useLanguage } from "@/lib/language-context";

const flowIconPaths = [
  // Strategy — compass
  <Fragment key="strategy">
    <circle cx="12" cy="12" r="9" />
    <path d="m14.5 9.5-2 5-3 1.5 2-5z" strokeLinejoin="round" />
  </Fragment>,
  // SEO — magnifying glass
  <Fragment key="seo">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.35-4.35" />
  </Fragment>,
  // GEO — sparkle (AI search)
  <path key="geo" d="M12 3v3M12 18v3M3 12h3M18 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" />,
  // Content — document
  <Fragment key="content">
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </Fragment>,
  // Publishing — paper plane
  <path key="publishing" d="M21 3 3 10.5l7.5 3L14 21z M10.5 13.5 21 3" strokeLinejoin="round" />,
  // Measurement — bar chart
  <path key="measurement" d="M4 20V10M11 20V4M18 20v-7" />,
  // Improvement — trending up
  <path key="improvement" d="m3 17 6-6 4 4 8-8M15 7h6v6" strokeLinejoin="round" />,
];

function FlowIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
    >
      {flowIconPaths[index]}
    </svg>
  );
}

export default function TurboSection() {
  const { t } = useLanguage();
  const turbo = t.turbo;

  return (
    <section
      className="flex flex-col items-center justify-center rounded-[2.5rem] px-6 py-16 text-center sm:rounded-[4rem] sm:py-20"
      style={{ background: "#59d5c9" }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">{turbo.eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-6xl font-display text-3xl font-bold text-white sm:text-4xl">
          {turbo.title}
        </h2>
        <p className="mx-auto mt-4 max-w-6xl text-base text-white/85">{turbo.intro}</p>

        <div className="mx-auto mt-9 flex max-w-6xl flex-wrap items-center justify-center gap-y-3">
          {turbo.flow.map((step, i) => (
            <div key={step} className="flex items-center">
              <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/25">
                <FlowIcon index={i} />
                {step}
              </span>
              {i < turbo.flow.length - 1 && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rtl-flip mx-1.5 h-4 w-4 shrink-0"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold text-white/90">{turbo.flowNote}</p>

        <p className="mx-auto mt-8 max-w-6xl text-base text-white/85">{turbo.body}</p>
      </div>
    </section>
  );
}
