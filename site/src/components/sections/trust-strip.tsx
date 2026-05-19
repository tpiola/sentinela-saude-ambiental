"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

const items = [
  { label: "Resposta no WhatsApp", value: "Ágil" },
  { label: "Atendimento", value: "Residencial & empresarial" },
  { label: "Cobertura", value: BRAND.region },
];

export function TrustStrip() {
  return (
    <section className="border-y border-[color:var(--brand-border)] bg-white py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="text-center md:text-left"
          >
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)] md:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm font-medium text-[color:var(--brand-muted)]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
