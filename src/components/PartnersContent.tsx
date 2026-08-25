"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function PartnersContent() {
  const { t } = useLanguage();
  const partners = t.partners;

  return (
    <>
      <section
        className="rounded-b-[2.5rem] px-6 pb-20 pt-32 text-center sm:rounded-b-[4rem] sm:pt-40"
        style={{ background: "linear-gradient(180deg, #59d5c9 0%, #3fbfb0 100%)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          {partners.eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.2)] sm:text-5xl">
          {partners.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-white/90">{partners.sub}</p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-[var(--radius-pill)] bg-[var(--deep-navy)] px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:brightness-110"
        >
          {partners.cta}
        </Link>
      </section>

      <section className="bg-[var(--surface-2)] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
            {partners.builtEyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
            {partners.builtTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[var(--text-muted)]">{partners.builtBody}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg">
              <h3 className="font-display font-semibold text-[var(--text)]">{partners.weBuilt.heading}</h3>
              <ul className="mt-4 space-y-3">
                {partners.weBuilt.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                    <span className="mt-0.5 text-[var(--success)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg">
              <h3 className="font-display font-semibold text-[var(--text)]">{partners.youDontNeed.heading}</h3>
              <ul className="mt-4 space-y-3">
                {partners.youDontNeed.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                    <span className="mt-0.5 text-[var(--danger)]">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
          {partners.whoForTitle}
        </h2>
        <p className="mt-3 text-[var(--text-muted)]">{partners.whoForIntro}</p>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
          {partners.whoFor.map((label) => (
            <span
              key={label}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-sm font-medium text-[var(--text)] transition duration-200 hover:border-[var(--accent)] hover:bg-[var(--primary-soft)] hover:text-[var(--accent-text)]"
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface-2)] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
            {partners.whyDifferentTitle}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {partners.whyDifferent.map((item) => (
              <div
                key={item.title}
                className="card-shadow rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
              >
                <h3 className="font-display font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2.5rem] px-6 py-20 sm:rounded-[4rem] sm:py-24" style={{ background: "#59d5c9" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            {partners.whyNowTitle}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {partners.whyNow.map((item) => (
              <div key={item.n} className="group text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white font-display text-lg font-bold text-[var(--accent-text)] transition-transform duration-200 group-hover:scale-110">
                  {item.n}
                </div>
                <h3 className="mt-4 font-display font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/85">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
            {partners.customerFirstTitle}
          </h2>
          <p className="mt-5 text-[var(--text-muted)]">{partners.customerFirstBody}</p>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
          {partners.finalTitle}
        </h2>
        <p className="mt-4 text-[var(--text-muted)]">{partners.finalSub}</p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-[var(--radius-pill)] px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:brightness-110"
          style={{ background: "var(--brand-gradient)" }}
        >
          {partners.finalCta}
        </Link>
      </section>
    </>
  );
}
