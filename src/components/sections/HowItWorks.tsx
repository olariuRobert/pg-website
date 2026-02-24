import type { LandingContent } from "@/types/site";

type HowItWorksProps = {
  content: LandingContent["howItWorks"];
};

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 py-20"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="how-heading" className="font-heading text-3xl text-ink-950">
          {content.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">
          {content.description}
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {content.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                {content.stepLabel} {index + 1}
              </p>
              <h3 className="mt-2 font-heading text-xl text-ink-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
