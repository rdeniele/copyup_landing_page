"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import FaqAccordion from "./FaqAccordion";

export default function ContactContent() {
  const { t } = useLanguage();
  const contact = t.contact;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section
        className="rounded-b-[2.5rem] px-6 pb-16 pt-32 text-center sm:rounded-b-[4rem] sm:pt-40"
        style={{ background: "linear-gradient(180deg, #59d5c9 0%, #3fbfb0 100%)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          {contact.eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.2)] sm:text-5xl">
          {contact.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-white/90">{contact.sub}</p>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="card-shadow rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-8">
            <h2 className="font-display text-xl font-bold text-[var(--text)]">{contact.form.heading}</h2>

            {sent ? (
              <div className="mt-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-2)] p-6">
                <p className="font-display text-lg font-bold text-[var(--accent-text)]">
                  {contact.form.thanksTitle}
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{contact.form.thanksBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  required
                  type="text"
                  placeholder={contact.form.name}
                  className="w-full rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:border-[var(--accent)]"
                />
                <input
                  required
                  type="email"
                  placeholder={contact.form.email}
                  className="w-full rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:border-[var(--accent)]"
                />
                <input
                  type="text"
                  placeholder={contact.form.company}
                  className="w-full rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:border-[var(--accent)]"
                />
                <input
                  type="tel"
                  placeholder={contact.form.phone}
                  className="w-full rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:border-[var(--accent)]"
                />
                <textarea
                  required
                  rows={5}
                  placeholder={contact.form.message}
                  className="w-full rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:border-[var(--accent)]"
                />
                <button
                  type="submit"
                  className="w-full rounded-[var(--radius-pill)] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  {contact.form.submit}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg font-bold text-[var(--text)]">{contact.infoHeading}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{contact.infoSub}</p>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-2)] p-6 transition duration-200 hover:border-[var(--accent)] hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-faint)]">
                {contact.emailHeading}
              </p>
              <ul className="mt-3 space-y-1">
                {contact.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-medium text-[var(--accent-text)] hover:underline"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-2)] p-6 transition duration-200 hover:border-[var(--accent)] hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-faint)]">
                {contact.visitHeading}
              </p>
              <ul className="mt-3 space-y-1">
                {contact.locations.map((loc) => (
                  <li key={loc} className="text-sm text-[var(--text)]">
                    {loc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-2)] p-6 transition duration-200 hover:border-[var(--accent)] hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-faint)]">
                {contact.hoursHeading}
              </p>
              <div className="mt-3 flex justify-between text-sm text-[var(--text)]">
                <span>{contact.hoursWeekday}</span>
                <span className="text-[var(--text-muted)]">{contact.hoursWeekdayTime}</span>
              </div>
              <div className="mt-1 flex justify-between text-sm text-[var(--text)]">
                <span>{contact.hoursWeekend}</span>
                <span className="text-[var(--text-muted)]">{contact.hoursWeekendTime}</span>
              </div>
              <p className="mt-3 text-xs text-[var(--text-faint)]">{contact.hoursNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-text)]">
            {contact.faq.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 text-center font-display text-3xl font-bold text-[var(--text)] sm:text-4xl">
            {contact.faq.title}
          </h2>
          <p className="mt-3 text-center text-[var(--text-muted)]">{contact.faq.sub}</p>

          <FaqAccordion items={contact.faq.items} />
        </div>
      </section>
    </>
  );
}
