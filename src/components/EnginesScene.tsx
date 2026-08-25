"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function EnginesScene() {
  const { t } = useLanguage();
  const engines = t.engines;

  return (
    <section
      id="engines"
      className="rounded-[2.5rem] px-6 py-24 sm:rounded-[4rem]"
      style={{ background: "#59d5c9" }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          {engines.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-3xl font-bold text-white sm:text-4xl">
          {engines.title}
        </h2>

        <div className="mt-16 space-y-16">
          {engines.items.map((engine, i) => (
            <div
              key={engine.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-[var(--radius-lg)] bg-[#e7e7ea] shadow-xl shadow-black/15 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25">
                <div className="flex items-center gap-2 px-4 py-2.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="mx-auto flex items-center gap-1.5 rounded-full bg-white px-4 py-1 text-[11px] text-[var(--text-faint)]">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path
                        d="M6 1a5 5 0 100 10A5 5 0 006 1zM6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                    </svg>
                    app.copyup.ai/{engine.id}-engine
                  </span>
                </div>
                <Image
                  src={engine.screenshot}
                  alt={engine.title}
                  width={900}
                  height={620}
                  className="w-full"
                />
              </div>

              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-white/80">
                  {engine.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  {engine.title}
                </h3>
                <p className="mt-4 text-white/85">{engine.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
