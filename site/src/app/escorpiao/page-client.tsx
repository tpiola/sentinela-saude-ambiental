"use client";

import { motion } from "framer-motion";
import { BRAND, whatsappHref } from "@/lib/brand";

/* ─── Animação padrão (Reveal-style) ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Seção: Hero ─── */
export function EscorpiaoHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[color:var(--brand-navy)] pt-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden>
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-lime)] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[color:var(--brand-lime)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_360px]">
          <div>
            <Reveal>
              <span className="inline-block rounded-full border border-red-400/40 bg-red-500/20 px-4 py-1 text-xs font-bold tracking-wider text-red-300 uppercase">
                ⚠ Alerta — Região de Franca
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Controle de <br />
                <span className="text-[color:var(--brand-lime)]">Escorpiões</span> em Franca SP
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                <strong className="text-[color:var(--brand-lime)]">777 acidentes</strong> com escorpiões foram
                registrados em Franca em 2024 — um aumento de{" "}
                <strong className="text-red-400">+24%</strong> em relação ao ano
                anterior. Crianças e idosos são as principais vítimas.{" "}
                <strong className="text-white">Não espere o pior.</strong>
              </p>
            </Reveal>

            <Reveal delay={0.20}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref(
                    "Olá, Sentinela! Tem escorpião aqui em casa. Preciso de ajuda URGENTE em Franca/SP.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] min-w-[260px] items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white shadow-2xl transition hover:bg-red-700"
                >
                  🦂 Emergência com escorpião? <br className="sm:hidden" />
                  Chame agora!
                </a>
                <a
                  href={whatsappHref(
                    "Olá, Sentinela! Quero saber mais sobre o plano preventivo de escorpiões para minha casa em Franca/SP.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full border-2 border-[color:var(--brand-lime)]/60 px-8 py-4 font-semibold text-[color:var(--brand-lime)] transition hover:bg-[color:var(--brand-lime)]/10"
                >
                  Plano preventivo →
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
                <span>✅ Laudo técnico ANVISA</span>
                <span className="hidden md:inline">·</span>
                <span>✅ Atendimento imediato via WhatsApp</span>
              </p>
            </Reveal>
          </div>

          {/* Stats card */}
          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
              <div className="text-center">
                <span className="text-5xl font-black text-[color:var(--brand-lime)] md:text-6xl">
                  777
                </span>
                <p className="mt-1 text-sm font-semibold text-white/70 uppercase tracking-wider">
                  Acidentes em Franca (2024)
                </p>
                <div className="mx-auto mt-4 flex w-fit items-center gap-3 rounded-full bg-red-500/20 px-4 py-2">
                  <span className="text-2xl font-bold text-red-400">+24%</span>
                  <span className="text-xs text-red-300">em relação a 2023</span>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-base">
                    👶
                  </span>
                  <span>Crianças são o grupo de maior risco</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-base">
                    👴
                  </span>
                  <span>Idosos também estão entre as principais vítimas</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Seção: Por que escorpiões são perigosos ─── */
export function EscorpiaoPerigo() {
  const dados = [
    {
      emoji: "🦂",
      title: "Veneno potente",
      desc: "O escorpião-amarelo (Tityus serrulatus), mais comum em Franca, possui toxina que pode causar insuficiência respiratória e cardíaca em crianças pequenas e idosos.",
    },
    {
      emoji: "🏠",
      title: "Invadem residências",
      desc: "Escorpiões se abrigam em entulhos, telhas, ralos e frestas. Buscam abrigo e alimento (baratas) dentro de casa — principalmente no verão.",
    },
    {
      emoji: "⚡",
      title: "Acidentes silenciosos",
      desc: "Segundo levantamento do G1, Franca registrou 777 acidentes com escorpiões em 2024, o maior número da região. Muitos casos ocorrem dentro de casa, à noite.",
    },
    {
      emoji: "👶",
      title: "Crianças são as mais vulneráveis",
      desc: "Crianças de até 9 anos respondem por parcela significativa dos acidentes graves. O peso corporal reduzido faz com que o veneno se espalhe mais rápido.",
    },
  ];

  return (
    <section className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Perigo real
          </p>
          <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Por que escorpiões são perigosos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[color:var(--brand-muted)]">
            Dados do G1 mostram que Franca lidera os casos de acidentes com escorpiões na região.
            Entenda por que você deve agir agora.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {dados.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-lime)]/20 text-2xl">
                  {item.emoji}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[color:var(--brand-muted)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center md:p-8">
            <p className="text-sm font-semibold text-red-800">
              🚨 Fonte: G1 — Franca registrou 777 acidentes com escorpiões em 2024,
              maior número da região. O aumento foi de 24% em relação ao ano anterior.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Seção: Plano Preventivo (4 passos) ─── */
export function EscorpiaoPreventivo() {
  const passos = [
    {
      numero: "01",
      title: "Vistoria Técnica",
      desc: "Um de nossos técnicos visita o imóvel para identificar pontos críticos: frestas, ralos sem tela, entulhos, baratas e possíveis abrigos de escorpiões.",
      icone: "🔍",
    },
    {
      numero: "02",
      title: "Aplicação Estratégica",
      desc: "Aplicamos produtos registrados na ANVISA (RDC 622/2022) com baixa toxicidade. O serviço cobre rodapés, ralos, jardins e perímetro externo — sempre com segurança para crianças e pets.",
      icone: "🧪",
    },
    {
      numero: "03",
      title: "Eliminação de Baratas",
      desc: "O escorpião-amarelo se alimenta de baratas. Nosso plano inclui desinsetização preventiva para eliminar a fonte de alimento e tornar o ambiente hostil ao escorpião.",
      icone: "🪳",
    },
    {
      numero: "04",
      title: "Laudo Técnico e Reforço",
      desc: "Emitimos laudo técnico com validade documental. O plano preventivo (out–mar) inclui reforço bimestral nos meses de maior incidência para proteção contínua da sua família.",
      icone: "📋",
    },
  ];

  return (
    <section className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Como protegemos sua família
          </p>
          <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Plano Preventivo de Escorpiões
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[color:var(--brand-muted)]">
            O período crítico vai de outubro a março. Comece a proteção em setembro
            e mantenha sua casa segura durante todo o verão.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {passos.map((passo, idx) => (
            <Reveal key={passo.numero} delay={idx * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-white p-6 transition hover:shadow-lg md:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] text-2xl font-black text-[color:var(--brand-lime)]">
                    {passo.numero}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{passo.icone}</span>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
                        {passo.title}
                      </h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-[color:var(--brand-muted)]">
                      {passo.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Seção: Área de Cobertura ─── */
export function EscorpiaoCobertura() {
  return (
    <section className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Onde Atendemos
          </p>
          <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Área de Cobertura
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[color:var(--brand-muted)]">
            Atendemos Franca e toda a região com plano preventivo de escorpiões.
            Confirme a disponibilidade para sua cidade pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {BRAND.areaServed.map((cidade) => (
              <span
                key={cidade}
                className="rounded-full border border-[color:var(--brand-lime)] bg-[color:var(--brand-surface)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-navy)]"
              >
                🦂 {cidade} — SP
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 text-center">
            <p className="text-sm text-[color:var(--brand-muted)]">
              Empresa registrada e licenciada pela{" "}
              <strong className="text-[color:var(--brand-navy)]">
                Vigilância Sanitária
              </strong>{" "}
              para controle de pragas urbanas.
            </p>
            <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
              CNPJ {BRAND.cnpj} · {BRAND.openingHours.weekdays}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Seção: FAQ Específica ─── */
const escorpiaoFaq = [
  {
    q: "O que fazer se encontrar um escorpião dentro de casa?",
    a: "Mantenha distância, não tente pegar com as mãos. Feche o local e chame um profissional imediatamente. Se houver vítima (especialmente criança ou idoso), procure o pronto-socorro mais próximo e leve o escorpião para identificação, se possível. Depois, contate a Sentinela para vistoria e aplicação preventiva.",
  },
  {
    q: "Qual o período mais crítico para escorpiões em Franca?",
    a: "De outubro a março, com pico no verão chuvoso. O calor e as chuvas aumentam a atividade dos escorpiões. O ideal é iniciar o plano preventivo em setembro, antes do período crítico. Franca registrou 777 acidentes em 2024 — a prevenção salva vidas.",
  },
  {
    q: "O plano preventivo elimina as baratas também?",
    a: "Sim. O escorpião-amarelo se alimenta principalmente de baratas. Nosso plano preventivo inclui desinsetização para eliminar a fonte de alimento, tornando o ambiente hostil para escorpiões. Sem baratas, o risco de escorpiões dentro de casa cai drasticamente.",
  },
  {
    q: "O serviço é seguro para crianças e pets?",
    a: "Sim. Utilizamos produtos registrados na ANVISA (RDC 622/2022) com baixa toxicidade. Informamos o tempo de afastamento necessário após cada aplicação. Crianças, gestantes e animais de estimação ficam protegidos seguindo as orientações técnicas que fornecemos antes do serviço.",
  },
];

export function EscorpiaoFaq() {
  return (
    <section className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Reveal>
          <p className="text-center text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Dúvidas Frequentes
          </p>
          <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Escorpiões: tire suas dúvidas
          </h2>
        </Reveal>

        <ul className="mt-12 space-y-3">
          {escorpiaoFaq.map((item, idx) => (
            <Reveal key={item.q} delay={idx * 0.06}>
              <FaqItem question={item.q} answer={item.a} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <li className="overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-white shadow-sm">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-[color:var(--brand-navy)]">
          {question}
          <span className="shrink-0 text-xl text-[color:var(--brand-green-deep)] transition group-open:rotate-45">
            +
          </span>
        </summary>
        <p className="border-t border-[color:var(--brand-border)] px-5 pt-3 pb-4 leading-relaxed text-[color:var(--brand-muted)]">
          {answer}
        </p>
      </details>
    </li>
  );
}

/* ─── Seção: CTA Final ─── */
export function EscorpiaoCtaFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand-green)] via-[color:var(--brand-green-deep)] to-[color:var(--brand-navy)] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute top-0 -left-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-[color:var(--brand-green-light)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-4xl">
            Não espere o pico de escorpiões
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            Franca registrou <strong className="text-white">777 acidentes</strong> em 2024.
            O plano preventivo começa em setembro e protege sua família durante todo
            o período crítico (out–mar). Laudo ANVISA, atendimento rápido e
            segurança para crianças e pets.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10">
            <a
              href={whatsappHref(
                "Olá, Sentinela! Quero contratar o plano preventivo de escorpiões para minha residência em Franca/SP. Pode me ajudar?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] min-w-[280px] items-center justify-center gap-3 rounded-full bg-[color:var(--brand-navy)] px-10 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white shadow-2xl transition hover:bg-[color:var(--brand-navy-soft)]"
            >
              🦂 Quero o plano preventivo
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 text-sm text-white/60">
            Ou ligue / WhatsApp: <strong className="text-white">{BRAND.phoneDisplay}</strong> ·{" "}
            Atendimento rápido em horário comercial
          </p>
        </Reveal>
      </div>
    </section>
  );
}
