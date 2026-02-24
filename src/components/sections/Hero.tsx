import Image from "next/image";
import { ContactLink } from "@/components/ui/ContactLink";
import type { LandingContent } from "@/types/site";

type HeroProps = {
  content: LandingContent["hero"];
  contactHref: string;
  phoneHref: string;
};

export function Hero({ content, contactHref, phoneHref }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-24">
      <Image
        src="/images/hero-apartment-sky-trees.webp"
        alt={content.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_55%] md:object-[center_42%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-700/25 via-brand-300/10 to-brand-50/20 mix-blend-multiply" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex min-h-[520px] max-w-3xl flex-col justify-center py-8 md:min-h-[620px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">
            {content.kicker}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">{content.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ContactLink
              source="hero"
              href={contactHref}
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              {content.primaryCta}
            </ContactLink>
            <a
              href={phoneHref}
              className="text-sm font-semibold text-brand-50 underline decoration-brand-300 underline-offset-4"
            >
              {content.secondaryCta}
            </a>
          </div>
          {content.imageCredit ? (
            <p className="mt-5 text-xs text-white/70">{content.imageCredit}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
