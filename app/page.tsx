import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { StackShowcase } from "@/components/sections/StackShowcase";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Software and MVP development agency in Dubai",
  description:
    "Tora builds MVPs, custom software, AI integrations, product interfaces, cloud foundations, and SaaS products from Dubai for global teams.",
  openGraph: {
    title: "Tora | Software and MVP development agency in Dubai",
    description:
      "A Dubai-based full-stack software agency that picks the stack to fit the product, team, and timeline."
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="relative overflow-hidden py-section-sm">
        {/* Section background accent */}
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.04)_0%,transparent_70%)]"
          aria-hidden="true"
        />
        <div className="container relative">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-light">Services</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink">
                Focused capabilities for the full product path.
              </h2>
            </div>
            <ButtonLink href="/services" variant="secondary">
              View services
            </ButtonLink>
          </div>
          <ServiceGrid limit={3} />
        </div>
      </section>
      <StackShowcase compact />
      <Process />
      <EngagementModels />
      <CTA />
    </>
  );
}
