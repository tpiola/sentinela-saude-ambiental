import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BRAND, whatsappHref } from "@/lib/brand";
import { calendarBookingHref } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "Agendar visita técnica — Sentinela Saúde Ambiental Franca SP",
  description:
    "Agende sua visita técnica gratuita com a Sentinela Saúde Ambiental em Franca SP e região. Diagnóstico residencial, empresarial ou condomínio — resposta rápida pelo WhatsApp.",
  alternates: { canonical: "/agendar" },
};

const agendaTypes = [
  {
    title: "Diagnóstico residencial gratuito",
    duration: "30 min",
    desc: "Para residências em Franca e até 40 km. Identificação de pragas, avaliação de risco e orçamento sem compromisso.",
    emoji: "🏠",
  },
  {
    title: "Diagnóstico empresarial / B2B",
    duration: "45 min",
    desc: "Para empresas, indústrias e comércios. Avaliação para PMOC, laudo técnico e conformidade com a Vigilância Sanitária.",
    emoji: "🏭",
  },
  {
    title: "Vistoria condomínio / PMOC",
    duration: "60 min",
    desc: "Levantamento completo para condomínios residenciais ou comerciais. Elaboração do Plano de Manejo de Controle de Pragas.",
    emoji: "🏢",
  },
  {
    title: "Renovação de contrato preventivo",
    duration: "30 min",
    desc: "Para clientes com contrato vigente. Revisão do plano preventivo e ajuste de cronograma.",
    emoji: "🔄",
  },
];

export default function AgendarPage() {
  const calHref = calendarBookingHref();
  const isGoogleCalendar =
    calHref.includes("calendar.google.com") ||
    calHref.includes("calendar.app.google");
  const hasDedicatedCalendar = isGoogleCalendar;

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-[color:var(--brand-navy)] py-16 text-white md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <p className="text-xs font-bold tracking-widest text-[color:var(--brand-lime)] uppercase">
              Agendamento online
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
              Agende sua visita técnica gratuita
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Franca SP e região em até 40 km — {BRAND.openingHours.weekdays},{" "}
              {BRAND.openingHours.sunday}
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {[
                "✅ Diagnóstico sem compromisso",
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
          </div>
        </section>

        {/* Booking section */}
        <section className="bg-[color:var(--brand-surface)] py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            {hasDedicatedCalendar ? (
              <div className="overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-white shadow-xl">
                <div className="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-navy)] px-6 py-4 text-white">
                  <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold">
                    Selecione o tipo de atendimento e horário
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">
                    Após confirmar, você receberá um e-mail de confirmação e um
                    lembrete 24h antes.
                  </p>
                </div>
                <div className="p-4">
                  <iframe
                    src={calHref}
                    title="Agenda Sentinela Saúde Ambiental"
                    className="h-[700px] w-full rounded-xl border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              /* Fallback: WhatsApp + tipos de atendimento */
              <div className="space-y-8">
                <div className="rounded-2xl border border-[color:var(--brand-border)] bg-white p-8 text-center shadow-lg">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)]">
                    Agende agora pelo WhatsApp
                  </h2>
                  <p className="mt-3 text-[color:var(--brand-muted)]">
                    Resposta rápida em horário comercial. Escolha o tipo de
                    atendimento abaixo e envie uma mensagem.
                  </p>
                  <a
                    href={whatsappHref(
                      "Olá, Sentinela! Quero agendar uma visita técnica gratuita.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#25D366] px-8 py-3 font-bold text-white shadow-lg transition hover:bg-[#1ebe5e]"
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                    Agendar pelo WhatsApp — {BRAND.phoneDisplay}
                  </a>
                </div>

                {/* Service types grid */}
                <div>
                  <h2 className="mb-6 text-center font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)]">
                    Tipos de atendimento disponíveis
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {agendaTypes.map((t) => (
                      <a
                        key={t.title}
                        href={whatsappHref(
                          `Olá, Sentinela! Quero agendar: "${t.title}". Estou em Franca SP.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-2xl border border-[color:var(--brand-border)] bg-white p-6 shadow-sm transition hover:border-[color:var(--brand-lime)] hover:shadow-md"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-3xl" role="img" aria-hidden>
                            {t.emoji}
                          </span>
                          <div>
                            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[color:var(--brand-navy)] group-hover:text-[color:var(--brand-green-deep)]">
                              {t.title}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-[color:var(--brand-lime-deep)]">
                              ⏱ {t.duration}
                            </p>
                            <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
                              {t.desc}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Policy & info */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <div className="rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 text-sm text-[color:var(--brand-muted)]">
              <p className="font-semibold text-[color:var(--brand-navy)]">
                📋 Política de cancelamento
              </p>
              <p className="mt-2">
                Cancelamento ou remarcação gratuitos até 6 horas antes do
                horário agendado. Após esse prazo, entre em contato pelo
                WhatsApp.
              </p>
              <p className="mt-3">
                <strong className="text-[color:var(--brand-navy)]">
                  Horário de atendimento:
                </strong>{" "}
                {BRAND.openingHours.weekdays} · {BRAND.openingHours.sunday}
              </p>
              <p className="mt-2">
                <strong className="text-[color:var(--brand-navy)]">
                  Área de cobertura:
                </strong>{" "}
                {BRAND.coverageSummary}
              </p>
            </div>
            <p className="mt-6 text-xs text-[color:var(--brand-muted)]">
              Tem dúvidas?{" "}
              <a
                href={whatsappHref()}
                className="font-semibold text-[color:var(--brand-navy)] hover:underline"
              >
                Fale no WhatsApp
              </a>{" "}
              ·{" "}
              <Link
                href="/#faq"
                className="font-semibold text-[color:var(--brand-navy)] hover:underline"
              >
                Ver perguntas frequentes
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
