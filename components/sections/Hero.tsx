"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { CoordinateLabel } from "@/components/ui/CoordinateLabel";

const stats = [
  { value: "6+", label: "Core technologies" },
  { value: "2", label: "Engagement models" },
  { value: "4", label: "Step process" }
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      {/* Premium layered background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Primary indigo glow - top left */}
        <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.10)_0%,transparent_65%)]" />
        {/* Violet glow - right */}
        <div className="absolute -right-20 top-16 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.08)_0%,transparent_65%)]" />
        {/* Warm accent glow - bottom */}
        <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.05)_0%,transparent_70%)]" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-[0.35]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <CoordinateLabel className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-4 py-1.5 backdrop-blur-sm" />
          </motion.div>

          <motion.h1
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Software built for
            <br className="hidden sm:block" />
            {" "}the stack the product
            <br className="hidden sm:block" />
            {" "}actually{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-indigo via-[#5D53FF] to-violet bg-clip-text text-transparent">
                needs.
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo to-violet"
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tora takes an idea from zero to a market-ready MVP, then scales it
            into durable software for startups and enterprises.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ButtonLink href="/contact">Start a project</ButtonLink>
            <ButtonLink href="/stack" variant="secondary">
              See our stack
            </ButtonLink>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mx-auto mt-20 max-w-3xl"
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="rounded-2xl border border-hairline/80 bg-white/60 p-1.5 shadow-card backdrop-blur-md">
            <div className="grid grid-cols-3 divide-x divide-hairline/60">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 py-5 text-center">
                  <p className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
