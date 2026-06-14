import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CtaFinal } from "@/components/sections/cta-final";
import { BRAND, whatsappHref } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Dedetização para Condomínios em Franca SP | Sentinela Saúde Ambiental",
  description:
    "Plano de Manejo de Controle de Pragas (PMOC) para condomínios em Franca SP. Laudo técnico, cronograma preventivo, conformidade com Vigilância Sanitária. Atendimento rápido para síndicos e administradoras.",
  alternates: { canonical: "/condominio" },
};

const whyCards = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Responsabilidade legal",
    desc: "Condomínios são responsáveis pela segurança dos moradores. A Vigilância Sanitária exige o PMOC conforme RDC 622/2022. A ausência do plano gera multas e passivo trabalhista.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Saúde dos moradores",
    desc: "Baratas, ratos, escorpiões e mosquitos transmitem doenças. Em condomínios, a infestação se propaga por áreas comuns. Um plano preventivo protege centenas de famílias.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V9M12 4.031V9m0 0h-1.5m1.5 0h1.5M5.25 9h13.5M3.75 15.75h16.5M3.75 18.75h16.5" />
      </svg>
    ),
    title: "Valorização do patrimônio",
    desc: "Cupins e roedores causam danos silenciosos que desvalorizam o imóvel. Um condomínio com PMOC ativo transmite segurança e cuidado.",
  },
];

const pmocSteps = [
  {
    number: "1",
    title: "Vistoria técnica",
    desc: "Inspeção de áreas comuns — garagem, lixeira, dutos, jardins, hall e reservatórios. Identificamos pontos críticos e focos de infestação.",
  },
  {
    number: "2",
    title: "Diagnóstico",
    desc: "Relatório com espécies identificadas, nível de infestação e recomendações baseadas na RDC 622/2022.",
  },
  {
    number: "3",
    title: "Cronograma preventivo",
    desc: "Calendário personalizado de visitas com frequência ajustada ao perfil do condomínio. Cada visita inclui aplicação, monitoramento e registro.",
  },
  {
    number: "4",
    title: "Execução",
    desc: "Técnicos treinados realizam aplicações com produtos ANVISA de baixa toxicidade. Mínimo impacto na rotina dos moradores.",
  },
  {
    number: "5",
    title: "Laudo técnico",
    desc: "Laudo Técnico de Controle de Pragas com validade legal, contendo ações, produtos e conformidade com a legislação.",
  },
];

const areasInfo = [
  {
    type: "Áreas comuns (sob responsabilidade do condomínio)",
    items: [
      "Garagem e estacionamento — pontos de entrada de roedores",
      "Lixeira e depósito de lixo — principal atrativo de baratas e ratos",
      "Hall de entrada e elevadores — circulação de pragas entre andares",
      "Dutos de ventilação e shafts — rota de escorpiões e baratas",
      "Jardins e áreas externas — foco de mosquitos e formigas",
      "Cobertura e telhado — ninhos de pombos e entrada de cupins",
      "Casa de máquinas e reservatórios — risco de contaminação da água",
      "Salão de festas e academia — ambientes de convivência que exigem monitoramento",
    ],
  },
  {
    type: "Áreas privativas (orientação ao morador)",
    items: [
      "Apartamentos — vistorias internas sob agendamento com autorização",
      "Varandas e sacadas — acúmulo de água parada e entulho",
      "Armários embutidos e despensas — focos de traças e baratas",
      "Ralos e pias — via de acesso para baratas e escorpiões",
      "Animais domésticos — orientação sobre proteção durante aplicações",
    ],
  },
];

const condominioFaq = [
  {
    question: "O condomínio precisa de autorização dos moradores para contratar o PMOC?",
    answer:
      "Não. O Plano de Manejo de Controle de Pragas é obrigação legal do condomínio (RDC 622/2022) e deve constar no orçamento anual como despesa ordinária de manutenção. O síndico pode contratar independentemente de assembleia, embora seja boa prática comunicar os moradores sobre o cronograma e os produtos utilizados — transparência gera confiança.",
  },
  {
    question: "Qual a frequência ideal de visitas preventivas para condomínios?",
    answer:
      "Para condomínios residenciais em Franca SP, recomendamos visitas mensais ou bimestrais, dependendo do porte e do histórico de infestações. Condomínios com área verde, lixeira central ou histórico de escorpiões se beneficiam de visitas mensais. O cronograma é revisado a cada semestre com base nos registros de monitoramento.",
  },
  {
    question: "O laudo técnico da Sentinela atende às exigências da Vigilância Sanitária?",
    answer:
      "Sim. Todos os laudos seguem as diretrizes da ANVISA RDC 622/2022 e incluem: identificação da empresa executora (CNPJ e responsável técnico), relação de produtos registrados, método de aplicação, croqui do imóvel, cronograma de visitas e assinatura do responsável. O laudo é aceito em fiscalizações da Vigilância Sanitária, Corpo de Bombeiros e auditorias trabalhistas.",
  },
];

export default function CondominioPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        {/* ─── Hero ─── */}
        <section className="bg-[color:var(--brand-navy)] py-16 text-white md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime)] uppercase">
              Condomínios
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
              Proteja seu condomínio contra pragas — laudo, conformidade e prevenção
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              PMOC completo para condomínios em Franca SP. Plano personalizado,
              laudo técnico com validade legal e atendimento ágil para síndicos
              e administradoras.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {[
                "✅ Plano de Manejo (PMOC)",
                "✅ ANVISA RDC 622/2022",
                "✅ Laudo técnico",
                "✅ 11+ anos em Franca",
              ].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-medium"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={whatsappHref(
                  "Olá, Sentinela! Sou síndico de um condomínio em Franca SP e quero saber sobre o PMOC para condomínios.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-bold text-[color:var(--brand-navy-heading)] shadow-lg transition hover:bg-[color:var(--brand-green-light)]"
              >
                Solicitar orçamento para condomínio
              </a>
              <Link
                href="/agendar"
                className="inline-flex min-h-[52px] items-center gap-3 rounded-full border-2 border-white/30 px-8 py-3 font-bold text-white transition hover:border-white/60"
              >
                Agendar vistoria
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Por que condomínios precisam de controle profissional ─── */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime-deep)] uppercase">
                Por que contratar?
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                Por que condomínios precisam de controle profissional de pragas
              </h2>
              <p className="mt-4 text-[color:var(--brand-muted)]">
                Diferente de residências, condomínios concentram dezenas de
                pessoas, áreas comuns extensas e responsabilidades legais que
                exigem um plano estruturado e documentado.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-[color:var(--brand-border)] bg-white p-8 shadow-sm transition hover:border-[color:var(--brand-lime)] hover:shadow-md"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--brand-lime)]/10 text-[color:var(--brand-lime-deep)]">
                    {card.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[color:var(--brand-muted)]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PMOC Completo (5 etapas) ─── */}
        <section className="bg-[color:var(--brand-surface)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime-deep)] uppercase">
                Metodologia
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                PMOC completo — da vistoria ao laudo técnico
              </h2>
              <p className="mt-4 text-[color:var(--brand-muted)]">
                Nosso Plano de Manejo de Controle de Pragas cobre todas as
                etapas exigidas pela ANVISA, com documentação e rastreabilidade
                total.
              </p>
            </div>

            <div className="mt-14 space-y-6">
              {pmocSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="flex items-start gap-5 rounded-2xl border border-[color:var(--brand-border)] bg-white p-6 shadow-sm md:p-8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-[color:var(--brand-muted)]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Áreas comuns vs áreas privativas ─── */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime-deep)] uppercase">
                Abrangência
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                Áreas comuns vs áreas privativas
              </h2>
              <p className="mt-4 text-[color:var(--brand-muted)]">
                Entenda a divisão de responsabilidades no controle de pragas do
                seu condomínio e como atuamos em cada frente.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {areasInfo.map((area) => (
                <div
                  key={area.type}
                  className="rounded-2xl border border-[color:var(--brand-border)] bg-white p-8 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-navy)]/10">
                    {area.type.includes("comuns") ? (
                      <svg className="h-6 w-6 text-[color:var(--brand-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-[color:var(--brand-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                    {area.type}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--brand-muted)]">
                        <span className="mt-0.5 shrink-0 text-[color:var(--brand-lime-deep)]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 text-center text-sm text-[color:var(--brand-muted)] md:p-8">
              <p className="font-semibold text-[color:var(--brand-navy)]">
                💡 Como funciona na prática
              </p>
              <p className="mt-2 max-w-2xl mx-auto">
                O contrato de PMOC cobre <strong>todas as áreas comuns</strong> do condomínio.
                Para áreas privativas, orientamos os moradores e realizamos vistorias internas
                sob agendamento quando necessário. O laudo final consolida ambos os escopos
                em um único documento com validade legal.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ específica condomínio ─── */}
        <section
          id="faq-condominio"
          className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="text-center">
              <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime-deep)] uppercase">
                Dúvidas de síndicos
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                Perguntas frequentes sobre PMOC em condomínios
              </h2>
            </div>

            <ul className="mt-12 space-y-3">
              {condominioFaq.map((item, index) => (
                <li
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-white shadow-sm"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-[color:var(--brand-navy)]">
                      {item.question}
                      <span className="shrink-0 text-xl text-[color:var(--brand-lime-deep)] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="border-t border-[color:var(--brand-border)] px-5 pt-3 pb-4 leading-relaxed text-[color:var(--brand-muted)]">
                      {item.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center text-sm text-[color:var(--brand-muted)]">
              Tem outra dúvida?{" "}
              <a
                href={whatsappHref(
                  "Olá, Sentinela! Sou síndico e tenho dúvidas sobre o PMOC para condomínios em Franca SP.",
                )}
                className="font-semibold text-[color:var(--brand-navy)] hover:underline"
              >
                Pergunte no WhatsApp
              </a>
            </p>
          </div>
        </section>

        {/* ─── CTA Final ─── */}
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
