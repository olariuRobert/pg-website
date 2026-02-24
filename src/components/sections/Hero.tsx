import { ContactLink } from "@/components/ui/ContactLink";
import type { LandingContent } from "@/types/site";

type HeroProps = {
  content: LandingContent["hero"];
  contactHref: string;
  phoneHref: string;
};

export function Hero({ content, contactHref, phoneHref }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-brand-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-56 w-56 rounded-full bg-accent-100 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{content.kicker}</p>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-ink-950 sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">{content.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ContactLink
              source="hero"
              href={contactHref}
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              {content.primaryCta}
            </ContactLink>
            <a href={phoneHref} className="text-sm font-semibold text-ink-900 underline decoration-brand-300 underline-offset-4">
              {content.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
