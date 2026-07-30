import { whatsappHref } from "@/lib/brand";
import { calendarBookingHref } from "@/lib/integrations";

const steps = [
  {
    number: "01",
    title: "Contato inicial",
    text: "Informe o tipo de ocorrência, o bairro e a urgência. A equipe confirma a cobertura e orienta os próximos passos.",
    cta: "Falar no WhatsApp",
    href: whatsappHref(),
  },
  {
    number: "02",
    title: "Inspeção e diagnóstico",
    text: "O ambiente é avaliado para identificar sinais, acessos, abrigos e condições que favorecem a atividade das pragas.",
  },
  {
    number: "03",
    title: "Proposta do serviço",
    text: "O escopo informa as medidas indicadas, a preparação necessária, os cuidados, as condições comerciais e o acompanhamento previsto.",
  },
  {
    number: "04",
    title: "Agendamento",
    text: "A visita é combinada conforme disponibilidade, área atendida e nível de prioridade informado pelo cliente.",
    cta: "Abrir agendamento",
    href: calendarBookingHref(),
  },
  {
    number: "05",
    title: "Execução orientada",
    text: "A equipe realiza o serviço conforme o diagnóstico e informa os cuidados com pessoas, animais, alimentos e áreas tratadas.",
  },
  {
    number: "06",
    title: "Registro e acompanhamento",
    text: "Quando previsto no escopo, o cliente recebe o comprovante do serviço, recomendações preventivas e orientação sobre retorno ou monitoramento.",
  },
] as const;

export function ProcessTimeline() {
  return (
    <section
      id="como-trabalhamos"
      className="scroll-mt-24 bg-[color:var(--brand-navy)] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-lime)]">
            Como funciona
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
            Da ocorrência ao acompanhamento
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            Um processo claro, com diagnóstico antes da indicação do tratamento.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative border border-white/15 bg-white/5 p-6"
            >
              <span className="text-sm font-bold text-[color:var(--brand-lime)]">
                {step.number}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                {step.text}
              </p>
              {step.cta && step.href ? (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center font-semibold text-[color:var(--brand-lime)] underline-offset-4 hover:underline"
                >
                  {step.cta}
                </a>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-10 py-3 font-[family-name:var(--font-heading)] font-bold text-[color:var(--brand-navy)] transition hover:bg-[color:var(--brand-green-light)]"
          >
            Solicitar avaliação inicial
          </a>
        </div>
      </div>
    </section>
  );
}
