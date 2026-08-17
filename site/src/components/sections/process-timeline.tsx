import { whatsappHref } from "@/lib/brand";

type ProcessStep = {
  number: string;
  title: string;
  text: string;
  cta?: string;
  href?: string;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Você informa a ocorrência",
    text: "Conte o tipo de praga, o imóvel, o bairro e quando precisa do atendimento.",
    cta: "Iniciar avaliação",
    href: "/agendar",
  },
  {
    number: "02",
    title: "A equipe avalia o cenário",
    text: "Confirmamos a cobertura e orientamos a preparação, a necessidade de inspeção e o método a considerar.",
  },
  {
    number: "03",
    title: "O atendimento é executado e registrado",
    text: "Método, cuidados e documentação são informados conforme o serviço efetivamente contratado.",
    cta: "Falar no WhatsApp",
    href: whatsappHref(),
  },
];

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
