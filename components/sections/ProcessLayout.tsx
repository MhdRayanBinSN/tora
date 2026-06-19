"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";

type Step = {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  body: string;
  activities: string[];
  deliverable: string;
  image: string;
  accent: string;
};

const detailedSteps: Step[] = [
  {
    id: "define",
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
    id: "stack",
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
    id: "build",
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
    id: "launch",
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

export function ProcessLayout() {
  const [activeId, setActiveId] = useState<string>("define");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -60% 0px"
    });

    detailedSteps.forEach((step) => {
      const el = document.getElementById(step.id);
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="container py-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        {/* Left Sticky Column */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#9A9A92]">Contents</p>
              <nav className="mt-4 space-y-1 border-l border-hairline/80">
                {detailedSteps.map((step) => {
                  const isActive = activeId === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => scrollToSection(step.id)}
                      className={`flex w-full items-center py-2.5 pl-4 text-left text-[13px] font-semibold transition-all duration-200 border-l -ml-px ${
                        isActive
                          ? "border-indigo text-indigo"
                          : "border-transparent text-[#9A9A92] hover:text-ink"
                      }`}
                    >
                      <span className="font-mono mr-2 text-[10px] opacity-60">{step.step}</span>
                      {step.title}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Devox-style Scoping Consultation Card */}
            <div className="rounded-xl border border-hairline/80 bg-[#F5F5F4]/40 p-5 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
              <span className="inline-block rounded-full bg-indigo/10 px-2.5 py-0.5 text-[10px] font-bold text-indigo">
                CONSULTATION
              </span>
              <h3 className="mt-3 font-display text-sm font-bold text-ink">
                Scoping Consultation
              </h3>
              <p className="mt-2 text-xs leading-5 text-[#9A9A92]">
                Have a product idea? We will run a scoping layout review to outline your requirements and select the right stack.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-ink py-2 text-xs font-semibold text-white transition hover:bg-ink/85"
              >
                Book a scoping call
              </Link>
            </div>

            <div className="pt-2">
              <CoordinateLabel />
            </div>
          </div>
        </aside>

        {/* Right Content Column */}
        <div className="space-y-24 lg:space-y-32">
          {detailedSteps.map((step, idx) => (
            <section
              key={step.id}
              id={step.id}
              className="grid gap-10 scroll-mt-28 md:grid-cols-[1.1fr_0.9fr] md:items-center"
            >
              <div>
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

                {/* Key Activities Checklist */}
                <div className="mt-8 border-t border-hairline/60 pt-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#9A9A92]">
                    Key Activities
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {step.activities.map((act) => (
                      <li key={act} className="flex items-start gap-3 text-sm text-[#2A2A2E]">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-indigo/5 text-indigo ring-1 ring-indigo/10">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2.5 6L5 8.5L9.5 3.5"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
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

              {/* Visual Frame */}
              <div className="flex justify-center">
                <div className={`relative flex aspect-square w-full max-w-[360px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${step.accent} ring-1 ring-hairline/80 shadow-[0_1px_3px_rgba(0,0,0,0.02),_0_8px_24px_rgba(0,0,0,0.03)] group`}>
                  <div className="relative h-36 w-36 rounded-full bg-background p-6 ring-1 ring-hairline/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-md">
                    <Image
                      src={step.image}
                      alt=""
                      width={144}
                      height={144}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/[0.01] pointer-events-none" />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
