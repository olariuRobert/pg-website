import Link from "next/link";
import type { Metadata } from "next";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { privacyContentByLocale } from "@/content/legal";
import { LANGUAGE_ARIA_LABELS, resolveLocale, withLocale } from "@/lib/i18n";

type SearchParams = Record<string, string | string[] | undefined>;

type PrivacyPageProps = {
  searchParams?: Promise<SearchParams>;
};

const getLocaleFromSearchParams = async (searchParams?: Promise<SearchParams>) => {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  return resolveLocale(resolvedSearchParams?.lang);
};

export async function generateMetadata({
  searchParams,
}: PrivacyPageProps): Promise<Metadata> {
  const locale = await getLocaleFromSearchParams(searchParams);
  const content = privacyContentByLocale[locale];

  return {
    title: { absolute: content.metadata.title },
    description: content.metadata.description,
  };
}

export default async function PrivacyPage({ searchParams }: PrivacyPageProps) {
  const locale = await getLocaleFromSearchParams(searchParams);
  const content = privacyContentByLocale[locale];

  return (
    <main lang={locale} className="min-h-screen bg-sand-100 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
            {content.eyebrow}
          </p>
          <LanguageSwitcher
            locale={locale}
            ariaLabel={LANGUAGE_ARIA_LABELS[locale]}
          />
        </div>
        <h1 className="mt-3 font-heading text-4xl text-ink-950">{content.heading}</h1>
        <p className="mt-3 text-sm text-ink-600">
          {content.updatedLabel}: {content.updatedAt}
        </p>

        <div className="mt-8 space-y-6 rounded-3xl border border-ink-200 bg-white p-8 text-sm leading-relaxed text-ink-700">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-xl text-ink-950">{section.title}</h2>
              <p className="mt-2">{section.body}</p>
            </section>
          ))}
        </div>

        <Link
          href={withLocale("/", locale)}
          className="mt-6 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          {content.backToHomepageLabel}
        </Link>
      </div>
    </main>
  );
}
