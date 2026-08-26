"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { content, languageOptions, type Language } from "./content";

const STORAGE_KEY = "copyup-lang";
const VALID_LANGUAGES = new Set<Language>(languageOptions.map((o) => o.code));

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof content)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const isFirstRun = useRef(true);

  useEffect(() => {
    // On the very first run, restore any saved language before applying/persisting
    // anything — otherwise this effect's own write-back would clobber the saved
    // value with the initial "en" state before the restore's re-render lands.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && VALID_LANGUAGES.has(saved as Language) && saved !== lang) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(saved as Language);
        return;
      }
    }

    // The layout stays LTR for every language, including Hebrew — only the
    // text and font swap. document.documentElement.dir is intentionally left
    // at its default ("ltr") so structure matches the English page exactly.
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Language) => setLangState(next);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
