export const SUPPORTED_LOCALES = ["en", "ro"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LANGUAGE_OPTION_LABELS: Record<Locale, string> = {
  en: "EN",
  ro: "RO",
};

export const LANGUAGE_ARIA_LABELS: Record<Locale, string> = {
  en: "Language",
  ro: "Limba",
};

export const resolveLocale = (langParam: string | string[] | undefined): Locale => {
  const candidate = Array.isArray(langParam) ? langParam[0] : langParam;

  if (candidate && SUPPORTED_LOCALES.includes(candidate as Locale)) {
    return candidate as Locale;
  }

  return DEFAULT_LOCALE;
};

export const withLocale = (path: string, locale: Locale): string => {
  const [pathWithQuery, hash = ""] = path.split("#", 2);
  const [pathname = "/", query = ""] = pathWithQuery.split("?", 2);
  const params = new URLSearchParams(query);

  if (locale === DEFAULT_LOCALE) {
    params.delete("lang");
  } else {
    params.set("lang", locale);
  }

  const queryString = params.toString();
  const hashPart = hash ? `#${hash}` : "";

  if (!queryString) {
    return `${pathname}${hashPart}`;
  }

  return `${pathname}?${queryString}${hashPart}`;
};
