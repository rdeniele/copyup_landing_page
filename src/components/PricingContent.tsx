"use client";

import Link from "next/link";
import { siteUrl } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import FaqAccordion from "./FaqAccordion";

export default function PricingContent() {
  const { t } = useLanguage();
  const pricing = t.pricing;

  return (
    <>
      <section
        className="rounded-b-[2.5rem] px-6 pb-16 pt-32 text-center sm:rounded-b-[4rem] sm:pt-40"
        style={{ background: "linear-gradient(180deg, #59d5c9 0%, #3fbfb0 100%)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          {pricing.eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.2)] sm:text-5xl">
          {pricing.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/90">{pricing.sub}</p>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {pricing.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[var(--radius-lg)] border p-8 transition duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "border-transparent text-white shadow-2xl hover:brightness-105"
                  : "card-shadow border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:shadow-lg"
              }`}
              style={plan.highlight ? { background: "var(--brand-gradient)" } : undefined}
            >
              {"badge" in plan && plan.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-[var(--deep-navy)] px-3 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.highlight ? "text-white/80" : "text-[var(--text-muted)]"}`}>
                {plan.scope}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlight ? "text-white/70" : "text-[var(--text-muted)]"}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-1 text-xs ${plan.highlight ? "text-white/70" : "text-[var(--text-faint)]"}`}>
                {plan.note}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${
                      plan.highlight ? "text-white/90" : "text-[var(--text-muted)]"
                    }`}
                  >
                    <span className="mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.ctaType === "contact" ? (
                <Link
                  href="/contact"
                  className={`mt-8 block rounded-[var(--radius-pill)] px-5 py-3 text-center text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-white text-[var(--accent-text)] hover:brightness-95"
                      : "border border-[var(--border-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent-text)]"
                  }`}
                >
                  {plan.cta}
                </Link>
              ) : (
                <a
                  href={`${siteUrl}/signup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-[var(--radius-pill)] px-5 py-3 text-center text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-white text-[var(--accent-text)] hover:brightness-95"
                      : "border border-[var(--border-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent-text)]"
                  }`}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] px-6 py-20 text-center sm:rounded-[4rem] sm:py-24" style={{ background: "#59d5c9" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            {pricing.valueEyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            {pricing.valueTitle}
          </h2>
          <p className="mt-5 text-white/90">{pricing.valueBody}</p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
            {pricing.services.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
            {pricing.services.title}
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {pricing.services.items.map((item) => (
              <div
                key={item.name}
                className="card-shadow rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-faint)]">
                  {item.note}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-[var(--text)]">{item.name}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.desc}</p>
                <p className="mt-4 font-display text-xl font-bold text-[var(--accent-text)]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
            {pricing.faq.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 text-center font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
            {pricing.faq.title}
          </h2>

          <FaqAccordion items={pricing.faq.items} />
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
          {pricing.cta.title}
        </h2>
        <p className="mt-4 text-[var(--text-muted)]">{pricing.cta.sub}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`${siteUrl}/signup`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[var(--radius-pill)] px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:brightness-110"
            style={{ background: "var(--brand-gradient)" }}
          >
            {pricing.cta.primary}
          </a>
          <Link
            href="/contact"
            className="rounded-[var(--radius-pill)] border border-[var(--border-strong)] px-8 py-4 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent-text)]"
          >
            {pricing.cta.secondary}
          </Link>
        </div>
      </section>
    </>
  );
}
