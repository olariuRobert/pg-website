import type { LandingContent } from "@/types/site";

type TrustProps = {
  content: LandingContent["trust"];
};

export function Trust({ content }: TrustProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-10">
          <h2 className="font-heading text-3xl text-ink-950">{content.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">{content.description}</p>
          <ul className="mt-8 grid gap-3 text-sm text-ink-800 sm:grid-cols-3">
            {content.points.map((point) => (
              <li key={point} className="rounded-2xl border border-brand-100/80 bg-brand-50 p-4">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
