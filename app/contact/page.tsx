import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";
import { UAEFlag } from "@/components/ui/UAEFlag";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Tora. Send details for an MVP, custom software build, AI integration, product design, cloud work, or SaaS product.",
  openGraph: {
    title: "Contact Tora",
    description: "Start a software or MVP project with Tora in Dubai."
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-hairline py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <CoordinateLabel className="mb-6" />
            <h1 className="font-display text-5xl font-semibold leading-[1] text-ink sm:text-6xl">
              Start with the product you need to ship.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Send the context, constraints, and target timeline. Tora will reply with the next practical step.
          </p>
        </div>
      </section>
      <section className="py-section-sm">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Direct contact</h2>
              <ul className="mt-5 space-y-4 text-sm leading-6">
                <li>
                  <span className="block font-mono text-[0.68rem] uppercase text-muted">Email</span>
                  <a href={`mailto:${site.email}`} className="text-ink hover:text-indigo">
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="block font-mono text-[0.68rem] uppercase text-muted">WhatsApp</span>
                  <a href={site.whatsapp} className="text-ink hover:text-indigo">
                    {site.whatsappLabel}
                  </a>
                </li>
                <li>
                  <span className="block font-mono text-[0.68rem] uppercase text-muted">Dubai address</span>
                  <span className="flex items-center gap-2 text-muted">
                    <UAEFlag className="h-4 w-6" />
                    {site.address}
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          <div className="rounded-lg border border-hairline p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
