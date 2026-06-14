"use client";

import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

export function ServicesGrid() {
  return (
    <section id="servicos" className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">Nossas soluções</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">Controle de pragas em Franca SP</h2>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">Escorpião, barata, rato, cupim e mais — com laudo e garantia.</p>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...BRAND.services].map((s, i) => (
            <motion.article key={s.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }} whileHover={{ y: -8 }} className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-border)] bg-white shadow-sm transition-all hover:shadow-[0_10px_40px_rgba(132,255,0,0.25)]">
              {/* Imagem real da praga */}
              <div className="relative h-48 w-full overflow-hidden bg-[color:var(--brand-navy)]">
                <img
                  src={s.imageUrl || ''}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {s.title.toLowerCase().includes("escorpi") && (
                  <div className="absolute top-3 left-3 rounded-full bg-[color:var(--brand-lime)] px-3 py-1 text-xs font-bold text-black shadow">
                    Prioridade
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--brand-muted)]">{s.desc}</p>
                <a
                  href={whatsappHref("Quero eliminar " + s.title.toLowerCase() + " em Franca SP")}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-lime)] px-5 py-3 text-sm font-bold text-[color:var(--brand-navy-heading)] transition hover:brightness-110"
                >
                  Resolver agora
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
