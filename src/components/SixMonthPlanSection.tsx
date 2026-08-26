"use client";

import { Fragment } from "react";
import { useLanguage } from "@/lib/language-context";

const stepIconPaths = [
  // Set Up — gear
  <Fragment key="setup">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </Fragment>,
  // Plan — clipboard
  <Fragment key="plan">
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h6" />
  </Fragment>,
  // Approve — shield check
  <Fragment key="approve">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Fragment>,
  // Run — rocket
  <path
    key="run"
    d="M12 2c3 1 5 4 5 8 0 2-.5 3.5-1.5 5L18 18l-3 1-2.5 2.5L11 19l-3 1 1-3-2.5-2.5L9 13c-1-1.5-1.5-3-1.5-5 0-4 2-7 5-8Zm-1 12-4 4M5 19l-1 3 3-1"
  />,
];

function StepIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      {stepIconPaths[index]}
    </svg>
  );
}

export default function SixMonthPlanSection() {
  const { t } = useLanguage();
  const plan = t.sixMonthPlan;

  return (
    <section
      id="six-month-plan"
      className="flex min-h-screen flex-col items-center justify-center bg-[var(--surface)] px-6 py-16 text-center sm:py-20"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
        {plan.eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-6xl font-display text-4xl font-bold leading-[1.05] text-[var(--text)] sm:text-5xl">
        {plan.title}
      </h2>
      <p className="mx-auto mt-5 max-w-6xl text-lg text-[var(--text-muted)]">{plan.body}</p>

      <div className="mx-auto mt-14 flex w-full max-w-5xl flex-wrap items-stretch justify-center">
        {plan.flow.map((step, i) => (
          <div key={step} className="flex flex-1 basis-40 items-stretch">
            <div className="group flex flex-1 flex-col items-center gap-3 rounded-[var(--radius-lg)] border-2 border-[var(--border)] bg-[var(--surface-2)] px-6 py-8 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                style={{ background: "var(--brand-gradient)" }}
              >
                {i + 1}
              </span>
              <div className="text-[var(--accent-text)] transition-transform duration-200 group-hover:scale-110">
                <StepIcon index={i} />
              </div>
              <p className="font-display text-lg font-bold text-[var(--text)]">{step}</p>
            </div>
            {i < plan.flow.length - 1 && (
              <div className="flex w-8 shrink-0 items-center justify-center sm:w-10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rtl-flip h-5 w-5 shrink-0 text-[var(--text-faint)]"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
