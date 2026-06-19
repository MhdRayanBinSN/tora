"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { site } from "@/lib/content";

const categories = [
  {
    tag: "MODERNIZE",
    description: "Untangle complex legacy systems without disrupting the business. We modernize the systems you can't afford to break - refactoring in controlled slices with AI-assisted analysis, automated testing, and human governance that keep production running throughout.",
    accent: "group-hover:border-indigo/40 group-hover:shadow-[0_8px_30px_rgba(61,90,254,0.12)]"
  },
  {
    tag: "BUILD",
    description: "Create scalable enterprise software foundations for growth. Our senior engineers take ownership of architecture and delivery, using AI-accelerated workflows to reduce time across key SDLC stages by up to 70% while maintaining quality, security, and control.",
    accent: "group-hover:border-violet/40 group-hover:shadow-[0_8px_30px_rgba(124,77,255,0.12)]"
  },
  {
    tag: "INNOVATE",
    description: "Turn a stable, modern platform into competitive advantage. We engineer AI, automation, and intelligent systems into your product so you adopt emerging technology securely, with measurable business impact, not experiments.",
    accent: "group-hover:border-[#B84DFF]/40 group-hover:shadow-[0_8px_30px_rgba(184,77,255,0.12)]"
  }
];

const badges = [
  {
    label: "Security In Accordance To",
    value: "ISO 27001:2022",
    icon: (
      <svg className="w-10 h-10 text-indigo/70 mb-3 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    label: "Quality in Accordance to",
    value: "ISO 9001:2015",
    icon: (
      <svg className="w-10 h-10 text-violet/70 mb-3 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    label: "Insurance",
    value: "COVERAGE",
    icon: (
      <svg className="w-10 h-10 text-indigo/70 mb-3 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  },
  {
    label: "100%",
    value: "GDPR COMPLIANCE",
    icon: (
      <svg className="w-10 h-10 text-[#B84DFF]/70 mb-3 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    label: "Reviewed on",
    value: "Clutch 43 REVIEWS",
    isClutch: true
  }
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] text-white -mt-[72px] pt-[184px] pb-16 sm:pt-[216px] sm:pb-24 lg:pt-[232px] lg:pb-28">
      {/* Background image and glows */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] mix-blend-luminosity" 
          style={{ backgroundImage: `url('/images/hero_dark_bg.png')` }}
        />
        {/* Layered neon accents */}
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(61,90,254,0.15)_0%,transparent_60%)]" />
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.06)_0%,transparent_65%)]" />
        <div className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(184,77,255,0.05)_0%,transparent_65%)]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Coordinates/Location badge */}
          <motion.p
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 }}
          >
            {site.coordinate} &bull; DUBAI, UAE
          </motion.p>

          <motion.h1
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.2rem]"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            We Fix, Transform, and Skyrocket
            <br />
            Your Software
          </motion.h1>

          <motion.div
            className="mt-10"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3.5 rounded-full bg-white px-8 py-4 text-[14px] font-semibold text-black hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-white/5"
            >
              Arrange a Call with Us
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-[10px]" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Categories cards grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.tag}
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.24 + index * 0.08 }}
              className="group"
            >
              <div className={`h-full rounded-2xl border border-white/[0.05] bg-[#0E0D12]/45 p-8 backdrop-blur-md transition-all duration-300 ${cat.accent}`}>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-center font-bold mb-5 bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent group-hover:text-indigo transition-colors duration-200">
                  {cat.tag}
                </p>
                <p className="text-sm leading-relaxed text-white/60 text-center font-medium">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges bottom row */}
        <div className="mx-auto mt-24 max-w-5xl border-t border-white/[0.08] pt-14">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.value}
                className="pt-6 md:pt-0 md:px-4 text-center flex flex-col justify-between"
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5, delay: 0.48 + index * 0.08 }}
              >
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">
                    {badge.label}
                  </p>
                  {badge.isClutch ? (
                    <div className="flex flex-col items-center mb-3">
                      <span className="font-display font-extrabold text-[15px] text-white tracking-tight leading-none">
                        Clutch
                      </span>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ) : (
                    badge.icon
                  )}
                </div>
                <p className="font-display text-[15px] font-bold text-white tracking-tight leading-tight mt-auto">
                  {badge.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
