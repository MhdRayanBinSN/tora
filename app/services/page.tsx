import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Tora services across MVP development, custom software, AI integration, product design, cloud and DevOps, and SaaS development.",
  openGraph: {
    title: "Tora services",
    description:
      "Focused software services for teams that need a clear scope, the right stack, and a product that can keep moving."
  }
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline py-16 sm:py-20">
        <div className="container max-w-4xl">
          <p className="font-mono text-xs uppercase text-muted">Services</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] text-ink sm:text-6xl">
            Software services scoped around the work, not a preset stack.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Tora starts with the product goal, the team behind it, and the timeline it has to meet. The scope is kept clear enough to ship, and the architecture is chosen to keep the next version possible.
          </p>
        </div>
      </section>
      <section className="py-section-sm">
        <div className="container">
          <ServiceGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
