import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Tora works: a Dubai-based software and MVP development agency focused on precision, useful scope, and stack-matched delivery.",
  openGraph: {
    title: "About Tora",
    description:
      "Tora is a Dubai-based software partner for startups and enterprises building focused MVPs and durable platforms."
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <CoordinateLabel className="mb-6" />
            <h1 className="font-display text-5xl font-semibold leading-[1] text-ink sm:text-6xl">
              Built in Dubai for teams that need software to move with intent.
            </h1>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              Tora exists for the part of software work where decisions matter early. The first version has to be lean enough to launch, but strong enough that success does not create a rebuild.
            </p>
            <p>
              Dubai is a practical base for that kind of work. The region moves quickly across digital government, enterprise modernization, AI adoption, and new company formation. Tora builds for teams that need that pace without loose architecture.
            </p>
            <p>
              The belief is simple: choose the right tool, ship the real thing, and keep the product understandable as it grows.
            </p>
          </div>
        </div>
      </section>
      <EngagementModels />
      <section className="border-t border-hairline py-section-sm">
        <div className="container">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase text-muted">How we work</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ink">
              Process replaces borrowed credibility.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Tora is not filling the site with fake client logos or invented case studies. The useful proof is the way the work is scoped, built, reviewed, and released.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article key={step.title} className="bg-background p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
