import type { LandingContent } from "@/types/site";

type FaqProps = {
  content: LandingContent["faq"];
};

export function FAQ({ content }: FaqProps) {
  return (
    <section id="faq" className="scroll-mt-24 py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="faq-heading" className="font-heading text-3xl text-ink-950">
          {content.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">{content.description}</p>
        <div className="mt-8 space-y-3">
          {content.items.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-ink-200 bg-white p-5 open:border-brand-300 open:bg-brand-50/40">
              <summary className="cursor-pointer list-none font-semibold text-ink-900 marker:content-none">
                <span className="flex items-center justify-between gap-3">
                  {item.question}
                  <span className="text-brand-700 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
