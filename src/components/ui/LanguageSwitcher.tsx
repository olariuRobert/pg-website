"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  LANGUAGE_OPTION_LABELS,
  type Locale,
  withLocale,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  ariaLabel: string;
};

export function LanguageSwitcher({ locale, ariaLabel }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const currentSearch = searchParams.toString();
  const currentPath = currentSearch ? `${pathname}?${currentSearch}` : pathname;

  const englishHref = withLocale(currentPath, "en");
  const romanianHref = withLocale(currentPath, "ro");

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex items-center rounded-full border border-brand-200 bg-white p-1"
    >
      <Link
        href={englishHref}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
          locale === "en"
            ? "bg-brand-500 text-white"
            : "text-ink-700 hover:bg-brand-50"
        }`}
      >
        {LANGUAGE_OPTION_LABELS.en}
      </Link>
      <Link
        href={romanianHref}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
          locale === "ro"
            ? "bg-brand-500 text-white"
            : "text-ink-700 hover:bg-brand-50"
        }`}
      >
        {LANGUAGE_OPTION_LABELS.ro}
      </Link>
    </div>
  );
}
