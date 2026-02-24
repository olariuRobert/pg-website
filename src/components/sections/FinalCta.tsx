import { ContactLink } from "@/components/ui/ContactLink";
import type { LandingContent } from "@/types/site";

type FinalCtaProps = {
  content: LandingContent["finalCta"];
  contactHref: string;
};

export function FinalCta({ content, contactHref }: FinalCtaProps) {
  return (
    <section id="contact" className="scroll-mt-24 py-20" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-brand-200 bg-gradient-to-r from-brand-100 to-brand-50 p-8 sm:p-10">
          <h2 id="cta-heading" className="font-heading text-3xl text-ink-950">
            {content.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">{content.description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <ContactLink
              source="footer"
              href={contactHref}
              className="rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              {content.primaryCta}
            </ContactLink>
            <p className="text-sm text-ink-700">{content.responseTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
