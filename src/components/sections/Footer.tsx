import Link from "next/link";
import { ContactLink } from "@/components/ui/ContactLink";
import { type Locale, withLocale } from "@/lib/i18n";
import type { LandingContent } from "@/types/site";

type FooterProps = {
  content: LandingContent["footer"];
  contactHref: string;
  phoneHref: string;
  locale: Locale;
};

export function Footer({ content, contactHref, phoneHref, locale }: FooterProps) {
  return (
    <footer className="border-t border-ink-200 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-ink-700 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold text-ink-900">{content.companyLine}</p>
          <p className="mt-2">{content.rights}</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <ContactLink
            source="footer"
            href={contactHref}
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            {content.reachOutLabel}
          </ContactLink>
          <a href={phoneHref} className="hover:text-ink-900">
            {content.bookCallLabel}
          </a>
          <div className="mt-1 flex gap-4">
            <Link href={withLocale("/privacy", locale)} className="hover:text-ink-900">
              {content.privacyLabel}
            </Link>
            <Link href={withLocale("/terms", locale)} className="hover:text-ink-900">
              {content.termsLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
