"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className={`rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm transition ${
        dark
          ? "bg-white/10 text-white hover:bg-white/20"
          : "border border-[var(--border-strong)] bg-[var(--surface-2)] text-[var(--deep-navy)] hover:bg-[var(--border)]"
      }`}
    >
      {lang === "en" ? "עברית" : "English"}
    </button>
  );
}
