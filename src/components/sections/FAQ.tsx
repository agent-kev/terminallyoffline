"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({
  title = "Frequently Asked Questions",
  items,
}: {
  title?: string;
  items: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-10">
          {title}
        </h2>

        <div className="space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-surface border border-foreground/[0.06] overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-foreground/[0.02] transition-colors"
              >
                <span className="font-medium text-sm sm:text-base pr-4">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 text-foreground/30 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-sm text-foreground/65 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
