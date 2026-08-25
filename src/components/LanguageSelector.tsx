"use client";

import { useEffect, useRef, useState } from "react";
import { languageOptions } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function LanguageSelector({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = languageOptions.find((o) => o.code === lang) ?? languageOptions[0];

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm transition ${
          dark
            ? "bg-white/10 text-white hover:bg-white/20"
            : "border border-[var(--border-strong)] bg-[var(--surface-2)] text-[var(--deep-navy)] hover:bg-[var(--border)]"
        }`}
      >
        <span aria-hidden>{current.flag}</span>
        <span>{current.code.toUpperCase()}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute end-0 top-[calc(100%+8px)] z-50 w-44 overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] py-1 shadow-[var(--shadow-lift)]"
        >
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              role="option"
              aria-selected={option.code === lang}
              onClick={() => {
                setLang(option.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm transition ${
                option.code === lang
                  ? "bg-[var(--primary-soft)] font-semibold text-[var(--accent-text)]"
                  : "text-[var(--text)] hover:bg-[var(--surface-2)]"
              }`}
            >
              <span aria-hidden>{option.flag}</span>
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
