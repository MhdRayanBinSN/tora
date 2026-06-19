"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { process } from "@/lib/content";

const stepImages = [
  "/images/process/define.png",
  "/images/process/stack.png",
  "/images/process/build.png",
  "/images/process/launch.png"
];

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-[#F5F5F4] py-section border-t border-hairline/60">
      {/* Premium layered glows (light theme) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-[500px] w-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(61,90,254,0.04)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(124,77,255,0.03)_0%,transparent_65%)]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo/80">Our process</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Four steps from constraint to{" "}
            <span className="bg-gradient-to-r from-indigo to-violet bg-clip-text text-transparent">
              shipped product.
            </span>
          </h2>
        </div>

        {/* Timeline with connector */}
        <div className="relative">
          {/* Connecting line (desktop - light) */}
          <div
            className="absolute left-0 right-0 top-[52px] mx-auto hidden h-px w-full bg-gradient-to-r from-transparent via-hairline to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                className="group relative"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-hairline/60 bg-white/50 p-7 backdrop-blur-sm transition-all duration-400 hover:border-indigo/15 hover:bg-white hover:shadow-card-hover">
                  {/* Shimmer effect on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo/[0.02] to-violet/[0.01] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Icon + number row */}
                    <div className="mb-6 flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo/5 to-violet/5 ring-1 ring-hairline/35 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                        <Image
                          src={stepImages[index]}
                          alt={step.title}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-ink/20">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-hairline/40 to-transparent" />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
