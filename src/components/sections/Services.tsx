import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { LandingContent } from "@/types/site";

type ServicesProps = {
  content: LandingContent["services"];
};

export function Services({ content }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{content.eyebrow}</p>
        <h2 id="services-heading" className="mt-3 font-heading text-3xl text-ink-950">
          {content.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">{content.description}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {content.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <div className="inline-flex rounded-xl bg-brand-100 p-2 text-brand-700">
                <ServiceIcon name={item.icon} />
              </div>
              <h3 className="mt-4 font-heading text-xl text-ink-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
