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
              <div className="rounded-[var(--radius-lg)] bg-[var(--surface)] p-2 shadow-xl shadow-black/10">
                <Image
                  src={engine.screenshot}
                  alt={engine.title}
                  width={900}
                  height={620}
                  className="w-full rounded-[calc(var(--radius-lg)-6px)]"
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
