"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

const indicators = [
  {
    title: "Security Assurance",
    value: "ISO 27001",
    sub: "Standard Practices"
  },
  {
    title: "Clean Handoff",
    value: "100% IP",
    sub: "Codebase Ownership"
  },
  {
    title: "QA Verified",
    value: "CI Pipelines",
    sub: "Strict Sprints"
  },
  {
    title: "Compliance Ready",
    value: "GDPR & UAE",
    sub: "Data Protection Frameworks"
  }
];

export function ImpactBanner() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] py-20 sm:py-28 text-white">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.25] pointer-events-none mix-blend-luminosity" 
        style={{ backgroundImage: `url('/images/tech_banner_bg.png')` }}
        aria-hidden="true"
      />

      {/* Layered glows for dark-impact banner */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(61,90,254,0.18)_0%,transparent_60%)]" />
        <div className="absolute -left-20 top-1/3 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.25em] text-indigo/70"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Engineering Excellence
        </motion.p>
        
        <motion.h2
          className="mx-auto mt-7 max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We fix, transform, and scale your software.
        </motion.h2>
        
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Tell us where your codebase or architecture needs help — we will outline the path forward with clarity, speed, and strict developer standards.
        </motion.p>
        
        <motion.div
          className="mt-10"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <ButtonLink
            href="/contact"
            className="bg-gradient-to-r from-indigo to-violet px-10 py-3.5 text-base text-white shadow-lg shadow-indigo/20 hover:shadow-xl hover:shadow-indigo/35 hover:-translate-y-0.5 transition-all duration-200"
          >
            Arrange a scoping call
            <span className="ml-2 font-mono text-sm">→</span>
          </ButtonLink>
        </motion.div>

        {/* Minimalist Trust & Standards indicators */}
        <div className="mx-auto mt-24 max-w-5xl border-t border-white/[0.08] pt-12">
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {indicators.map((ind, index) => (
              <motion.div
                key={ind.title}
                className="pt-6 lg:pt-0 lg:px-6 text-center"
                initial={initial}
                whileInView={animate}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-indigo/60">
                  {ind.title}
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  {ind.value}
                </p>
                <p className="mt-1 text-xs text-white/40">
                  {ind.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
