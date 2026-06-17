import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { stack } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "How Tora chooses between React, Angular, Next.js, .NET, FastAPI, and Express for software and MVP builds.",
  openGraph: {
    title: "Tora stack",
    description:
      "A practical stack guide for product teams that need the right framework for the product, team, and timeline."
  }
};

export default function StackPage() {
  return (
    <>
      <section className="border-b border-hairline py-16 sm:py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase text-muted">Stack</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] text-ink sm:text-6xl">
            Tora picks the stack that fits the product, team, and timeline.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Range is useful only when it has judgment behind it. Tora does not force every client into the same framework. The stack is matched to the product shape, the existing team, the integrations around it, and how quickly the first release needs to move.
          </p>
        </div>
      </section>
      <section className="py-section-sm">
        <div className="container">
          <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline">
            {stack.map((item) => (
              <article key={item.technology} className="grid gap-4 bg-background p-6 md:grid-cols-[0.3fr_0.3fr_1fr] md:items-start">
                <p className="font-mono text-xs uppercase text-muted">{item.layer}</p>
                <h2 className="font-display text-2xl font-semibold text-ink">{item.technology}</h2>
                <p className="text-sm leading-6 text-muted">{item.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-hairline py-section-sm">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase text-muted">Decision process</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink">
              The stack is chosen before momentum hardens into cost.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-7 text-muted">
            <p>
              Tora starts with the product surface, data complexity, integration load, hosting requirements, and the people who will maintain the software after launch.
            </p>
            <p>
              A fast MVP may need React with a lightweight API. A regulated internal platform may need Angular and .NET. A model-backed product may need FastAPI at the center. The point is not to collect frameworks. The point is to choose the few that make the product easier to ship and easier to own.
            </p>
          </div>
        </div>
      </section>
      <CTA title="Bring the product shape. Tora will match the stack." />
    </>
  );
}
