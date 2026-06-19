"use client";

import { motion, useReducedMotion } from "framer-motion";

export function WhoWeAre() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative z-25 -mt-10 rounded-t-[32px] bg-[#F5F5F4] py-20 sm:-mt-16 sm:rounded-t-[48px] sm:py-28 lg:-mt-20 lg:rounded-t-[64px] shadow-[0_-24px_48px_rgba(0,0,0,0.12)]">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-black uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Who we are
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] max-w-xl">
              Engineering-first.
              <br />
              Powered by precision.
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6 text-[15px] sm:text-base leading-relaxed text-[#3B3B42] lg:pt-14"
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <p>
              Tora is a trusted engineering partner built to construct release-ready software. We work directly with product teams, delivering readable code that stands up to production velocity.
            </p>
            <p>
              We help mid-market and enterprise teams refactor critical legacy code, design intuitive digital interfaces, and deploy scalable business transformations.
            </p>
            <p>
              Our philosophy is engineering-first: we prioritize clean, maintainable architecture and put 100% of the codebase and IP in the hands of our clients from day one.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
