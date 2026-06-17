import { engagementModels } from "@/lib/content";

export function EngagementModels() {
  return (
    <section className="py-section-sm">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase text-muted">Engagement</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink">
              Two ways to build, depending on what the product knows.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
            {engagementModels.map((model) => (
              <article key={model.title} className="bg-background p-7">
                <h3 className="font-display text-2xl font-semibold text-ink">{model.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{model.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
