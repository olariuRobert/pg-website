import Link from "next/link";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ContactLink } from "@/components/ui/ContactLink";
import { type Locale, withLocale } from "@/lib/i18n";
import type { NavItem } from "@/types/site";

type HeaderProps = {
  brandName: string;
  navItems: NavItem[];
  contactHref: string;
  ctaLabel: string;
  locale: Locale;
  languageLabel: string;
};

export function Header({
  brandName,
  navItems,
  contactHref,
  ctaLabel,
  locale,
  languageLabel,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100/70 bg-sand-100/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={withLocale("/", locale)}
            className="font-heading text-lg font-semibold tracking-tight text-ink-950"
          >
            {brandName}
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} ariaLabel={languageLabel} />
            <ContactLink
              source="header"
              href={contactHref}
              className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              {ctaLabel}
            </ContactLink>
          </div>
        </div>
        <nav className="mt-3 flex gap-5 overflow-x-auto pb-1 text-sm font-medium text-ink-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
