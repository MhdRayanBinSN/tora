"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { engagementModels } from "@/lib/content";

const modelDetails = [
  {
    image: "/images/engagement/fixed-budget.png",
    features: ["Defined scope", "Fixed timeline", "Clear deliverables"]
  },
  {
    image: "/images/engagement/adaptive-partnership.png",
    features: ["Flexible scope", "Iterative cycles", "Evidence-based"]
  }
];

const accents = [
  { gradient: "from-indigo to-[#5D53FF]", border: "border-indigo/10 hover:border-indigo/25", glow: "shadow-indigo/8" },
  { gradient: "from-violet to-[#9B6AFF]", border: "border-violet/10 hover:border-violet/25", glow: "shadow-violet/8" }
];

export function EngagementModels() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-section-sm">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.05)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-light">Engagement</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink">
              Two ways to build, depending on what the product knows.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Every product has a different level of certainty. Tora matches the engagement model to where you are.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {engagementModels.map((model, index) => (
              <motion.article
                key={model.title}
                className={`group relative overflow-hidden rounded-2xl border bg-white/70 p-8 shadow-card backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-card-hover ${accents[index].border}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo/[0.02] to-violet/[0.01] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon + number */}
                  <div className="mb-6 flex items-center gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${accents[index].gradient} shadow-lg ${accents[index].glow} transition-transform duration-300 group-hover:scale-110`}>
                      <Image
                        src={modelDetails[index].image}
                        alt={model.title}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span className="font-mono text-xs font-medium text-muted-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-ink">{model.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{model.body}</p>

                  {/* Feature tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {modelDetails[index].features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-full border border-hairline/60 bg-background/80 px-3 py-1 text-[0.68rem] font-medium text-ink-soft"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
