"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

type CTAProps = {
  title?: string;
  body?: string;
};

export function CTA({
  title = "Bring the product constraint. Tora will bring the build path.",
  body = "Start with the first version worth shipping, then make the technical choices that let it keep growing."
}: CTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-dark-gradient py-section noise-overlay">
      {/* Layered premium glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(61,90,254,0.14)_0%,transparent_60%)]" />
        <div className="absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.10)_0%,transparent_70%)]" />
        <div className="absolute -right-20 top-1/3 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container relative z-10 text-center">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.25em] text-indigo/60"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Let&apos;s build
        </motion.p>
        <motion.h2
          className="mx-auto mt-7 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {body}
        </motion.p>
        <motion.div
          className="mt-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <ButtonLink
            href="/contact"
            className="bg-gradient-to-r from-indigo to-violet px-10 py-3.5 text-base text-white shadow-lg shadow-indigo/30 hover:shadow-xl hover:shadow-indigo/40"
          >
            Start a project
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
