import type { LandingContent } from "@/types/site";

type AudienceProps = {
  content: LandingContent["audience"];
};

export function Audience({ content }: AudienceProps) {
  return (
    <section
      id="for-landlords"
      className="scroll-mt-24 py-20"
      aria-labelledby="audience-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="audience-heading" className="font-heading text-3xl text-ink-950">
          {content.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">
          {content.description}
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="font-heading text-xl text-ink-950">
              {content.landlordHeading}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-800">
              {content.landlordPoints.map((item) => (
                <li key={item.title} className="rounded-xl bg-white/85 p-4">
                  <p className="font-semibold text-ink-900">{item.title}</p>
                  <p className="mt-1 text-ink-700">{item.description}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-ink-200 bg-white p-6">
            <h3 className="font-heading text-xl text-ink-950">
              {content.renterHeading}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-800">
              {content.renterPoints.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-ink-100 bg-sand-100 p-4"
                >
                  <p className="font-semibold text-ink-900">{item.title}</p>
                  <p className="mt-1 text-ink-700">{item.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
