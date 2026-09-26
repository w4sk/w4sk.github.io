import { createContext, useContext } from "react";

export type Lang = "ja" | "en";

/** A value that differs between languages. */
export type Localized<T> = { ja: T; en: T };

/**
 * Either a localized value or a plain one. Plain values are shown as-is in both
 * languages — used for content that stays in its original language, such as the
 * titles and venues of domestic (Japanese-language) publications.
 */
export type Loc<T> = T | Localized<T>;

export function tr<T>(value: Loc<T>, lang: Lang): T {
  if (value !== null && typeof value === "object" && "ja" in value && "en" in value) {
    return (value as Localized<T>)[lang];
  }
  return value as T;
}

export const ui = {
  education: { ja: "学歴", en: "Education" },
  experience: { ja: "職歴", en: "Experience" },
  // Keep in sync with the <title> of index.html / en/index.html.
  pageTitle: {
    ja: "渡辺 圭貴 | Official Portfolio",
    en: "Yoshiki WATANABE | Official Portfolio",
  },
} satisfies Record<string, Localized<string>>;

export const LangContext = createContext<Lang>("ja");

export const useLang = () => useContext(LangContext);

const STORAGE_KEY = "preferred-lang";

/** The language the visitor last picked explicitly, if any. */
export function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "ja" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

export function storeLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage can be unavailable (Safari private mode); fall back to detection.
  }
}

export function prefersJapanese(): boolean {
  const preferred = navigator.languages?.[0] ?? navigator.language ?? "";
  return preferred.toLowerCase().startsWith("ja");
}
