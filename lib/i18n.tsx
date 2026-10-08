"use client";
import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

export type Lang = "en" | "hi";
export type L = Record<Lang, string>; // one text in both languages: { en: "...", hi: "..." }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (v: L) => string };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (v) => v.en });

const subscribe = (cb: () => void) => {
  window.addEventListener("langchange", cb);
  return () => window.removeEventListener("langchange", cb);
};
const getSnapshot = (): Lang => {
  try {
    return localStorage.getItem("lang") === "hi" ? "hi" : "en";
  } catch {
    return "en";
  }
};
const getServerSnapshot = (): Lang => "en";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    try {
      localStorage.setItem("lang", l);
    } catch {}
    window.dispatchEvent(new Event("langchange"));
  }, []);

  const t = useCallback((v: L) => v[lang], [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
