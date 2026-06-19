import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessLayout } from "@/components/sections/ProcessLayout";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Tora works: a step-by-step breakdown of our design and development cycle. We prioritize constraints, match stacks to products, build iteratively, and deliver production-ready software.",
  openGraph: {
    title: "How We Build | Tora",
    description:
      "A systematic approach that replaces guessing with working code. Shape scope, pick the stack, build in cycles, and launch securely."
  }
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-hairline py-16 sm:py-24">
        <div className="container max-w-4xl">
          <CoordinateLabel className="mb-6" />
          <p className="font-mono text-xs uppercase tracking-widest text-[#9A9A92]">How We Work</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            A systematic build loop that replaces guesswork with working code.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#9A9A92] sm:text-xl">
            We don't sell bloated discovery workshops or throwaway mockups. We work through a repeatable, four-step structure designed to bring precision to software delivery.
          </p>
        </div>
      </section>

      {/* Two-Column Steps Deep-Dive */}
      <section className="border-b border-hairline/60 bg-background">
        <ProcessLayout />
      </section>

      {/* Decision-making Philosophy */}
      <section className="py-section-sm bg-[#F9F9F8]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Principles over industry templates
            </h2>
            <p className="mt-4 text-base leading-7 text-[#9A9A92]">
              We run builds with a small set of principles that prevent the common failures of outsourced software development:
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-hairline/80 bg-background p-8">
              <h3 className="font-display text-lg font-bold text-ink">We don't hide code</h3>
              <p className="mt-4 text-sm leading-6 text-[#9A9A92]">
                You have immediate access to the Git repository from day one. You can inspect check-ins, commits, and lines of code whenever you want.
              </p>
            </div>
            <div className="rounded-xl border border-[#E8E6E1]/80 bg-background p-8">
              <h3 className="font-display text-lg font-bold text-ink">No proprietary lock-in</h3>
              <p className="mt-4 text-sm leading-6 text-[#9A9A92]">
                We build on open-source frameworks, standard deploy configurations, and readable syntax. You own all IP, assets, and repository content.
              </p>
            </div>
            <div className="rounded-xl border border-hairline/80 bg-background p-8">
              <h3 className="font-display text-lg font-bold text-ink">Constraints are parameters</h3>
              <p className="mt-4 text-sm leading-6 text-[#9A9A92]">
                Budget, timeline, and compliance goals are not obstacles to work around; they are parameters that shape the technical design of the software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-hairline py-section-sm bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-[#9A9A92]">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Common questions about working together
            </h2>
            <p className="mt-4 text-base leading-7 text-[#9A9A92]">
              Everything you need to know about our project engagement model, development schedule, and delivery process.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      <CTA />
    </>
  );
}
