import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CtaFinal } from "@/components/sections/cta-final";
import { whatsappHref } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: "Controle de Pragas para Condomínios em Franca SP",
  description:
    "Programa preventivo e corretivo de controle de pragas para condomínios em Franca e região, com inspeção, cronograma, registros e orientação aos responsáveis.",
  path: "/condominio",
});

const benefits = [
  {
    title: "Visão do condomínio inteiro",
    description:
      "A inspeção considera áreas comuns, acessos, lixeiras, jardins, garagens, shafts, reservatórios e pontos de circulação entre unidades.",
  },
  {
    title: "Rotina preventiva documentada",
    description:
      "O cronograma é definido conforme estrutura, histórico, atividade observada e necessidades operacionais do condomínio.",
  },
  {
    title: "Comunicação com a administração",
    description:
      "Síndico ou administradora recebe orientações de preparação, cuidados, registros do atendimento e medidas preventivas prioritárias.",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Levantamento inicial",
    description:
      "Conversa com a administração para entender ocorrências, reclamações, áreas críticas, rotina de limpeza e histórico de serviços.",
  },
  {
    number: "02",
    title: "Inspeção técnica",
    description:
      "Verificação das áreas definidas no escopo para identificar sinais, acessos, abrigos, alimento, umidade e pontos de monitoramento.",
  },
  {
    number: "03",
    title: "Plano de ação",
    description:
      "Definição das medidas preventivas e corretivas, métodos indicados, preparação do local e frequência inicial de acompanhamento.",
  },
  {
    number: "04",
    title: "Execução programada",
    description:
      "Realização do serviço com comunicação prévia aos responsáveis e orientação sobre circulação, afastamento e cuidados quando aplicáveis.",
  },
  {
    number: "05",
    title: "Registro e revisão",
    description:
      "Entrega dos registros previstos no contrato e revisão do cronograma conforme os sinais encontrados nas visitas seguintes.",
  },
] as const;

const coverage = [
  "Garagens, estacionamentos e áreas técnicas",
  "Lixeiras, depósitos e locais de armazenamento",
  "Jardins, corredores, halls e salões de uso comum",
  "Shafts, tubulações, ralos e possíveis acessos",
  "Casas de máquinas e áreas próximas a reservatórios",
  "Orientação para ocorrências em unidades privativas, mediante autorização",
] as const;

const faq = [
  {
    question: "O condomínio precisa contratar um plano mensal?",
    answer:
      "Não existe uma frequência única para todos os condomínios. A periodicidade deve considerar estrutura, atividade observada, histórico de ocorrências e regras específicas aplicáveis ao local.",
  },
  {
    question: "O serviço de controle de pragas é um PMOC?",
    answer:
      "Não. PMOC é o Plano de Manutenção, Operação e Controle de sistemas de climatização. Para pragas, trabalhamos com um programa preventivo e corretivo documentado, definido conforme o condomínio.",
  },
  {
    question: "Quais documentos são entregues?",
    answer:
      "O contrato define os registros e comprovantes do serviço. Eles podem incluir identificação da empresa, áreas atendidas, método, produtos utilizados quando aplicáveis, orientações e responsável pelo atendimento.",
  },
  {
    question: "Os moradores precisam sair durante o serviço?",
    answer:
      "Depende das áreas e do método escolhido. A administração recebe as orientações antes da execução para comunicar moradores, funcionários e prestadores.",
  },
] as const;

export default function CondominioPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="min-h-screen pt-20">
        <section className="bg-[color:var(--brand-navy)] py-16 text-white md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-lime)]">
              Condomínios residenciais e comerciais
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
              <div>
                <h1 className="max-w-[15ch] font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight md:text-6xl">
                  Controle de pragas com rotina, registro e acompanhamento.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Estrutura preventiva para áreas comuns, pontos críticos e
                  ocorrências recorrentes em condomínios de Franca e região.
                </p>
              </div>
              <div className="border-l-2 border-[color:var(--brand-lime)] pl-6">
                <p className="text-sm leading-6 text-white/70">
                  A RDC 622/2022 estabelece requisitos de funcionamento para
                  empresas especializadas em controle de vetores e pragas urbanas.
                  O escopo do condomínio é definido após avaliação do local.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappHref(
                  "Olá, Sentinela. Sou responsável por um condomínio e gostaria de solicitar uma avaliação para controle de pragas.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-bold text-[color:var(--brand-navy-heading)] transition hover:bg-[color:var(--brand-green-light)]"
              >
                Solicitar avaliação do condomínio
              </a>
              <Link
                href="/agendar"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/30 px-8 py-3 font-bold text-white transition hover:border-white/60"
              >
                Informar uma ocorrência
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
                Operação preventiva
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                Mais do que uma aplicação isolada
              </h2>
              <p className="mt-4 leading-7 text-[color:var(--brand-muted)]">
                Condomínios têm múltiplas áreas, rotinas e responsáveis. O controle
                funciona melhor quando inspeção, prevenção e acompanhamento fazem
                parte do mesmo processo.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="border border-[color:var(--brand-border)] p-8"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[color:var(--brand-muted)]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--brand-surface)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
                  Metodologia
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
                  Como o programa é estruturado
                </h2>
                <p className="mt-5 leading-7 text-[color:var(--brand-muted)]">
                  O cronograma não é vendido como pacote genérico. Ele nasce da
                  realidade do condomínio e pode ser ajustado conforme os registros.
                </p>
              </div>

              <ol className="space-y-4">
                {steps.map((step) => (
                  <li
                    key={step.number}
                    className="grid gap-4 border border-[color:var(--brand-border)] bg-white p-6 sm:grid-cols-[64px_1fr]"
                  >
                    <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-green-deep)]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-[color:var(--brand-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
                  Áreas avaliadas
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)]">
                  Cobertura definida no escopo
                </h2>
                <ul className="mt-8 space-y-4">
                  {coverage.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-[color:var(--brand-border)] pb-4 text-[color:var(--brand-muted)]"
                    >
                      <span aria-hidden className="text-[color:var(--brand-green-deep)]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[color:var(--brand-navy)] p-8 text-white md:p-10">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                  Informações para preparar uma proposta
                </h2>
                <p className="mt-4 leading-7 text-white/70">
                  Para dimensionar o atendimento, informe quantidade de blocos,
                  áreas comuns, principais ocorrências, histórico de serviços e
                  restrições de horário.
                </p>
                <a
                  href={whatsappHref(
                    "Olá, Sentinela. Quero enviar os dados do condomínio para receber uma proposta de controle de pragas.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-8 py-3 font-bold text-[color:var(--brand-navy-heading)]"
                >
                  Enviar dados pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--brand-surface)] py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
              Perguntas frequentes
            </p>
            <h2 className="mt-3 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)]">
              Dúvidas de síndicos e administradoras
            </h2>
            <div className="mt-10 divide-y divide-[color:var(--brand-border)] border-y border-[color:var(--brand-border)]">
              {faq.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 font-bold text-[color:var(--brand-navy)]">
                    {item.question}
                  </summary>
                  <p className="mt-3 max-w-3xl leading-7 text-[color:var(--brand-muted)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
