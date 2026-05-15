"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

/**
 * Bloco empresarial (posição inicial na home): conformidade e documentação.
 */
export function EmpresasConformidadeSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="empresas"
      className="scroll-mt-28 border-y border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 0.45 }}
          >
            <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
              Empresas e conformidade
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
              Operação alinhada à Vigilância Sanitária e às exigências do seu
              segmento
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[color:var(--brand-muted)]">
              Indústria, comércio, condomínios e prestadores com fiscalização
              ativa precisam de controle integrado documentado — não apenas
              aplicação pontual. A Sentinela estrutura visitas, registros e
              laudos quando aplicável, com produtos conforme{" "}
              <strong className="text-[color:var(--brand-navy)]">
                ANVISA (RDC 622/2022)
              </strong>{" "}
              e CNAE compatível com saneantes e controle de vetores/reservatórios.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-[color:var(--brand-navy)] sm:grid-cols-2">
              {[
                "Check-list e cronograma preventivo sob medida",
                "Certificados e comunicação técnica para auditoria",
                "Horários que respeitam produção e fluxo do cliente",
                "Transparência de método e segurança operacional",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 rounded-xl border border-[color:var(--brand-border)] bg-white px-4 py-3"
                >
                  <span className="text-[color:var(--brand-lime)]" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.06 }}
            className="rounded-3xl bg-[color:var(--brand-navy)] p-8 text-white shadow-xl md:p-10"
          >
            <p className="text-sm font-semibold text-[color:var(--brand-lime)]">
              Por que conformidade importa
            </p>
            <p className="mt-4 leading-relaxed text-white/85">
              Multas e interdições costumam surgir onde não há histórico claro
              de prevenção. Um contrato com a Sentinela reduz lacunas entre o que
              a legislação espera e o que a operação faz no dia a dia — com apoio
              técnico em Franca e região ({BRAND.radiusKm} km).
            </p>
            <a
              href={whatsappHref(
                "Olá, Sentinela! Preciso adequar minha empresa às exigências de controle de pragas e Vigilância Sanitária.",
              )}
              className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-6 py-3 text-center text-sm font-bold text-[color:var(--brand-navy-heading)] transition hover:bg-[color:var(--brand-green-light)]"
            >
              Falar com a equipe B2B
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
