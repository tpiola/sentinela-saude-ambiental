"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/brand";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Dúvidas frequentes
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Respostas diretas, sem enrolação
          </h2>
        </motion.div>

        <ul
          className="mt-12 space-y-3"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {BRAND.faq.map((item, index) => {
            const open = openIndex === index;
            return (
              <li
                key={item.question}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-white shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[color:var(--brand-navy)]"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  itemProp="name"
                >
                  {item.question}
                  <span
                    className={`shrink-0 text-xl text-[color:var(--brand-green-deep)] transition ${open ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p
                        className="border-t border-[color:var(--brand-border)] px-5 pt-3 pb-4 leading-relaxed text-[color:var(--brand-muted)]"
                        itemProp="text"
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
