import { engagementModels } from "@/lib/content";

const accents = [
  { badge: "bg-indigo text-white", border: "border-indigo/10" },
  { badge: "bg-violet text-white", border: "border-violet/10" }
];

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
          <div className="grid gap-5 sm:grid-cols-2">
            {engagementModels.map((model, index) => (
              <article
                key={model.title}
                className={`group rounded-xl border bg-white/60 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${accents[index].border}`}
              >
                <span className={`inline-flex h-7 items-center rounded-full px-3 text-xs font-bold ${accents[index].badge}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{model.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{model.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
