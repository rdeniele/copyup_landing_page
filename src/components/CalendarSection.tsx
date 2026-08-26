"use client";

import { Fragment } from "react";
import { useLanguage } from "@/lib/language-context";

const tagIconPaths = [
  // Holidays — gift
  <Fragment key="holidays">
    <rect x="3" y="9" width="18" height="12" rx="1" />
    <path d="M3 13h18M12 9v12M12 9C9.5 9 8 7.5 8 6a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 1.5-1.5 3-4 3Z" />
  </Fragment>,
  // Seasonal Events — leaf
  <path key="seasonal" d="M5 20C5 11 11 5 20 5c0 9-6 15-15 15Zm0 0c2-4 5-7 9-9" />,
  // Important Dates — calendar with star
  <Fragment key="dates">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <path d="m12 13 1 2 2 .3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 15.3l2-.3z" strokeLinejoin="round" />
  </Fragment>,
  // Industry Events — briefcase
  <Fragment key="industry">
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
  </Fragment>,
  // Marketing Opportunities — megaphone
  <path key="marketing" d="M3 11v3a1 1 0 0 0 1 1h2l3 5V6L6 11H4a1 1 0 0 0-1 1Zm9-4.5v11a4 4 0 0 0 3-3.8v-3.4a4 4 0 0 0-3-3.8Z" strokeLinejoin="round" />,
];

function TagIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0"
    >
      {tagIconPaths[index]}
    </svg>
  );
}

export default function CalendarSection() {
  const { t } = useLanguage();
  const calendar = t.calendar;

  return (
    <section
      className="flex sm:min-h-[50vh] flex-col items-center justify-center px-6 py-16 text-center sm:py-20"
      style={{ background: "#7b3aec" }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
        {calendar.eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-6xl font-display text-3xl font-bold leading-[1.05] text-white sm:text-4xl">
        {calendar.title}
      </h2>
      <p className="mx-auto mt-4 max-w-6xl text-base text-white/85">{calendar.intro}</p>

      <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
        {calendar.tags.map((tag, i) => (
          <span
            key={tag}
            className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/25"
          >
            <TagIcon index={i} />
            {tag}
          </span>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-base text-white/85">{calendar.body}</p>
    </section>
  );
}
