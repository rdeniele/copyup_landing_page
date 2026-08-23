"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { content, type Language } from "./content";

const STORAGE_KEY = "copyup-lang";

type LanguageContextValue = {
  lang: Language;
  toggle: () => void;
  t: (typeof content)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const isFirstRun = useRef(true);

  useEffect(() => {
    // On the very first run, restore any saved language before applying/persisting
    // anything — otherwise this effect's own write-back would clobber the saved
    // value with the initial "en" state before the restore's re-render lands.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if ((saved === "en" || saved === "he") && saved !== lang) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLang(saved);
        return;
      }
    }

    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "he" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
