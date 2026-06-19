"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Who owns the code and intellectual property?",
    answer: "You do. We write clean, standard-compliant code directly in a Git repository you own. All intellectual property, assets, third-party accounts, and access keys belong to you from day one. We hand over the code without proprietary lock-ins or licensing fees."
  },
  {
    question: "How long does a typical MVP build take?",
    answer: "A focused MVP usually takes 4 to 8 weeks to release. If a project scope requires more time, we advise splitting it into smaller, testable versions so you can get real user feedback earlier rather than delaying your launch."
  },
  {
    question: "What happens if we need to change our stack or direction mid-build?",
    answer: "We develop in two-week cycles precisely to handle change. If new customer feedback or business needs require us to pivot, we adjust the upcoming cycle's backlog together. There are no surprise contract restart fees or bureaucratic delays."
  },
  {
    question: "How do we communicate during the project?",
    answer: "We set up a shared Slack channel for asynchronous questions and deliver a weekly video update with working software you can click and test. You communicate directly with the engineers building your product, not through account managers."
  },
  {
    question: "How does Tora coordinate with our internal team?",
    answer: "We act as an extension of your team. We align our git practices with yours, participate in technical syncs, write developer-facing documentation, and run joint handoff sessions to ensure your internal developers can inherit the codebase seamlessly."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mt-16 max-w-3xl space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-indigo/20 bg-[#F5F5F4]/40"
                : "border-hairline/80 bg-background hover:border-hairline hover:bg-[#F5F5F4]/20"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-6 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`font-display text-base font-semibold leading-relaxed transition-colors duration-200 ${
                  isOpen ? "text-indigo" : "text-ink"
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/[0.04] transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-indigo/10 text-indigo" : "text-ink/40"
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="border-t border-hairline/50 p-6 pt-0 text-sm leading-7 text-[#9A9A92]">
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
