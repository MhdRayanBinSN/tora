"use client";

import { motion, useReducedMotion } from "framer-motion";

const centers = [
  {
    title: "Legacy System Modernization",
    description: "Modernize critical legacy systems without disrupting operations. We audit the codebase, map dependencies, and move changes in controlled slices, using AI-assisted engineering to reduce risk and keep delivery predictable."
  },
  {
    title: "Product Engineering",
    description: "Your release-ready software starts with an architecture that can grow past the MVP. We build comprehensive SaaS platforms and core systems, taking products from early-stage MVPs to reliable, production-grade front-end and back-end systems."
  },
  {
    title: "AI Product Engineering",
    description: "AI adoption only works if you trust what's under the hood. We build the agent systems, the LLM platforms, and the retrieval tools, backed by a proprietary AI harness that isolates client code and protects IP."
  },
  {
    title: "Enterprise Integration",
    description: "We make disconnected systems work together reliably in high-stakes environments. Our architects govern data transformation and interoperability with deep domain context, especially in areas requiring operational nuance."
  }
];

export function Expertise() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative z-30 -mt-10 rounded-t-[32px] bg-[#0A0A0C] text-white py-20 sm:-mt-16 sm:rounded-t-[48px] sm:py-28 lg:-mt-20 lg:rounded-t-[64px] shadow-[0_-24px_48px_rgba(0,0,0,0.18)]">
      {/* Background neon glows */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute right-10 top-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.06)_0%,transparent_65%)]" />
        <div className="absolute left-10 top-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.04)_0%,transparent_65%)]" />
      </div>

      <div className="container relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B84DFF]" />
            Our Expertise
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.06]">
            Our Centers of Excellence
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centers.map((center, index) => (
            <motion.div
              key={center.title}
              initial={initial}
              whileInView={animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.05] bg-[#0E0D12]/45 p-7 backdrop-blur-md transition-all duration-300 hover:border-violet/30 hover:shadow-[0_8px_32px_rgba(124,77,255,0.08)] group">
                <div>
                  <h3 className="font-display text-lg font-bold text-white transition-colors duration-200 group-hover:text-[#B84DFF] leading-snug">
                    {center.title}
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/50 font-medium">
                    {center.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
