import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/components/sections/CTA";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

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

const detailedSteps = [
  {
    step: "01",
    title: "Define the sharp edge",
    subtitle: "Discovery & Scope Control",
    body: "Every product starts with a broad list of ideas. We work to strip away the non-essential layers, focusing solely on the core problem your users need solved. By establishing absolute technical and operational constraints early, we keep timelines predictable and prevent budget bloating before the first line of code is written.",
    activities: [
      "Critical path mapping (first-time user experiences)",
      "Feasibility and integrations checklist",
      "Drafting the 'Constraints Document' aligning stakeholders"
    ],
    deliverable: "Constraint-Driven Scope Document",
    image: "/images/process/define.png",
    accent: "from-[#3D5AFE]/10 to-[#7C4DFF]/5"
  },
  {
    step: "02",
    title: "Pick the stack",
    subtitle: "Architecture & Suitability",
    body: "We do not default to one framework for every project. We look closely at your data structure, scaling expectations, database transactions, third-party services, and internal engineering team's familiarity before proposing the backend and frontend layers. Every choice is made based on technical fit and ease of long-term maintenance.",
    activities: [
      "Framework selection mapping (React, Next.js, .NET, FastAPI, or Express)",
      "Data velocity & API architecture sizing",
      "Third-party integrations mapping"
    ],
    deliverable: "Target Architecture Diagram",
    image: "/images/process/stack.png",
    accent: "from-[#7C4DFF]/10 to-[#3D5AFE]/5"
  },
  {
    step: "03",
    title: "Build in visible cycles",
    subtitle: "Milestone-Driven Iteration",
    body: "We develop in two-week cycles, focusing on delivering working features rather than slide decks. At the end of each cycle, the updated codebase is deployed directly to a secure staging environment. This means you can interact with, test, and provide feedback on real features as they are constructed, keeping design and build fully aligned.",
    activities: [
      "Two-week sprints with clear ticket priorities",
      "Continuous Integration / Continuous Deployment (CI/CD) pipelines",
      "Staging demo and review at every cycle boundary"
    ],
    deliverable: "Functional Staging Environment",
    image: "/images/process/build.png",
    accent: "from-[#3D5AFE]/8 to-[#7C4DFF]/8"
  },
  {
    step: "04",
    title: "Launch and harden",
    subtitle: "Production Setup & Handoff",
    body: "A product is only ready when it is stable, secure, and easily maintainable. We build scalable hosting configurations, set up server-side error tracking and performance logs, optimize build bundles, and clean up the Git history. When we deliver the code, we include developer handoff documentation so another team can step in immediately.",
    activities: [
      "Secure production infrastructure deployment (Vercel, AWS, etc.)",
      "Sentry tracking, database backups, and health monitoring config",
      "Developer handoff documentation and clear Git history clean-up"
    ],
    deliverable: "Production Release & Handoff Bundle",
    image: "/images/process/launch.png",
    accent: "from-[#7C4DFF]/8 to-[#3D5AFE]/6"
  }
];

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

      {/* Steps Deep-Dive */}
      <section className="py-section-sm bg-background">
        <div className="container">
          <div className="space-y-24 sm:space-y-32">
            {detailedSteps.map((step, idx) => (
              <div
                key={step.step}
                className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
              >
                {/* Text Content */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold tracking-wider text-indigo">
                      PHASE {step.step}
                    </span>
                    <div className="h-px w-12 bg-hairline" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#9A9A92]">
                      {step.subtitle}
                    </span>
                  </div>
                  
                  <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {step.title}
                  </h2>
                  
                  <p className="mt-6 text-base leading-7 text-[#0E0E10]/80">
                    {step.body}
                  </p>
                  
                  {/* Detailed Activities */}
                  <div className="mt-8 border-t border-hairline/60 pt-6">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#9A9A92]">
                      Key Activities
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {step.activities.map((act) => (
                        <li key={act} className="flex items-start gap-3 text-sm text-[#2A2A2E]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Deliverable */}
                  <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-hairline/80 bg-[#F5F5F4]/60 px-4 py-2 text-xs font-semibold text-[#0E0E10]/80">
                    <span className="text-indigo">Outcome:</span>
                    <span>{step.deliverable}</span>
                  </div>
                </div>

                {/* Visual Card / Illustration placeholder container */}
                <div className={`flex justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`relative flex aspect-square w-full max-w-[420px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${step.accent} ring-1 ring-hairline/80 shadow-[0_1px_3px_rgba(0,0,0,0.02),_0_10px_30px_rgba(0,0,0,0.03)] group`}>
                    {/* Embedded icon */}
                    <div className="relative h-44 w-44 rounded-full bg-background p-8 ring-1 ring-hairline/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-md">
                      <Image
                        src={step.image}
                        alt=""
                        width={176}
                        height={176}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    {/* Visual grid overlay */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/[0.01] pointer-events-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision-making Philosophy */}
      <section className="border-t border-hairline py-section-sm bg-[#F9F9F8]">
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
            <div className="rounded-xl border border-hairline/80 bg-background p-8">
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
