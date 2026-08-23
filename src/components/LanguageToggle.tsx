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
          : "bg-white text-[var(--deep-navy)] hover:brightness-95"
      }`}
    >
      {lang === "en" ? "עברית" : "English"}
    </button>
  );
}
