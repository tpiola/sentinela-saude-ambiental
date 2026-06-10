"use client";

import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

const serviceIcons: Record<string, React.ReactNode> = {
  bug: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  rat: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  droplet: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.3 0 6 6.5 6 10a6 6 0 01-12 0C6 9.5 11.7 3 12 3z" />
    </svg>
  ),
  alert: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  building: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
};

export function ServicesGrid() {
  return (
    <section id="servicos" className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">Nossas soluções</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">Controle integrado — método, não só aplicação</h2>
          <p className="mt-4 text-lg text-[color:var(--brand-muted)]">Diagnóstico, plano e documentação para residências e empresas na região de Franca — com laudo técnico e foco em Vigilância Sanitária quando o seu segmento exige comprovação.</p>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRAND.services.map((s, i) => (
            <motion.article key={s.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }} whileHover={{ y: -6 }} className="group flex flex-col rounded-3xl border border-[color:var(--brand-border)] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-surface)] text-[color:var(--brand-green-deep)] transition group-hover:bg-[color:var(--brand-lime)]/30" aria-hidden>
                {serviceIcons[s.icon] ?? serviceIcons.shield}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">{s.title}</h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-[color:var(--brand-muted)]">{s.desc}</p>
              <a href={whatsappHref("Olá! Quero saber mais sobre " + s.title + " em Franca SP.")} className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand-green-deep)] transition group-hover:gap-2">Saber mais</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
