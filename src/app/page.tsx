import type { Metadata } from "next";
import { Audience } from "@/components/sections/Audience";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Trust } from "@/components/sections/Trust";
import { homeMetadataByLocale, landingContentByLocale } from "@/content/site";
import { getContactConfig } from "@/lib/env";
import { resolveLocale } from "@/lib/i18n";

type SearchParams = Record<string, string | string[] | undefined>;

type HomePageProps = {
  searchParams?: Promise<SearchParams>;
};

const getLocaleFromSearchParams = async (searchParams?: Promise<SearchParams>) => {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  return resolveLocale(resolvedSearchParams?.lang);
};

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const locale = await getLocaleFromSearchParams(searchParams);
  const metadata = homeMetadataByLocale[locale];

  return {
    title: { absolute: metadata.title },
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function Home({ searchParams }: HomePageProps) {
  const locale = await getLocaleFromSearchParams(searchParams);
  const content = landingContentByLocale[locale];
  const contactConfig = getContactConfig();
  const phoneHref = `tel:${contactConfig.phone}`;

  return (
    <div className="min-h-screen bg-sand-100 text-ink-900">
      <Header
        brandName={content.brandName}
        navItems={content.nav}
        contactHref={contactConfig.primaryContactHref}
        ctaLabel={content.hero.primaryCta}
        locale={locale}
        languageLabel={content.header.languageLabel}
      />
      <main lang={locale}>
        <Hero
          content={content.hero}
          contactHref={contactConfig.primaryContactHref}
          phoneHref={phoneHref}
        />
        <Trust content={content.trust} />
        <Services content={content.services} />
        <HowItWorks content={content.howItWorks} />
        <Audience content={content.audience} />
        <FAQ content={content.faq} />
        <FinalCta
          content={content.finalCta}
          contactHref={contactConfig.primaryContactHref}
        />
      </main>
      <Footer
        content={content.footer}
        contactHref={contactConfig.primaryContactHref}
        phoneHref={phoneHref}
        locale={locale}
      />
    </div>
  );
}
