import Link from "next/link";
import { whatsappHref } from "@/lib/brand";

const services = [
  {
    number: "01",
    title: "Escorpiões",
    context: "Ocorrências dentro de casa, quintais, ralos e áreas de circulação.",
    response: "Inspeção do ambiente, orientação preventiva e definição do tratamento adequado.",
    action: "escorpiões",
  },
  {
    number: "02",
    title: "Baratas e formigas",
    context: "Infestações em cozinhas, despensas, comércios e áreas técnicas.",
    response: "Aplicação direcionada conforme a espécie, o ambiente e o nível de infestação.",
    action: "baratas ou formigas",
  },
  {
    number: "03",
    title: "Cupins",
    context: "Sinais em móveis, batentes, forros, estruturas e áreas externas.",
    response: "Vistoria para identificar o tipo de cupim antes de indicar o tratamento.",
    action: "cupins",
  },
  {
    number: "04",
    title: "Roedores",
    context: "Vestígios, danos em embalagens, ruídos e circulação em áreas internas.",
    response: "Controle com pontos de monitoramento, orientação e acompanhamento técnico.",
    action: "roedores",
  },
  {
    number: "05",
    title: "Empresas e condomínios",
    context: "Prevenção recorrente, exigências sanitárias e proteção da operação.",
    response: "Plano de controle, cronograma e comprovante técnico de execução do serviço.",
    action: "empresa ou condomínio",
  },
] as const;

export function PainSolution() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="servicos-title">
      <div className="container-responsive">
        <div className="grid gap-8 border-b border-[color:var(--brand-border)] pb-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-green-deep)]">
              Atendimento por diagnóstico
            </p>
            <h2
              id="servicos-title"
              className="mt-4 min-w-0 [overflow-wrap:anywhere] font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-[-0.035em] text-[color:var(--brand-navy)] sm:text-5xl"
            >
              Primeiro identificamos. Depois tratamos.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[color:var(--brand-muted)] lg:justify-self-end">
            Cada ocorrência exige uma leitura diferente do ambiente. A Sentinela
            orienta o cliente antes da aplicação e informa os cuidados necessários
            para pessoas, animais, alimentos e rotina do imóvel.
          </p>
        </div>

        <div className="divide-y divide-[color:var(--brand-border)]">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-5 py-8 sm:grid-cols-[64px_minmax(0,0.8fr)_minmax(0,1.2fr)_auto] sm:items-start"
            >
              <span className="font-mono text-sm font-bold text-[color:var(--brand-green-deep)]" aria-hidden="true">
                {service.number}
              </span>
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[color:var(--brand-navy)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--brand-muted)]">
                  {service.context}
                </p>
              </div>
              <p className="max-w-xl text-sm font-medium leading-6 text-[color:var(--brand-navy)]">
                {service.response}
              </p>
              <a
                href={whatsappHref(
                  `Olá, Sentinela. Preciso de orientação sobre ${service.action}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-track={`whatsapp_servico_${service.number}`}
                className="inline-flex min-h-11 items-center justify-center whitespace-nowrap border-b-2 border-[color:var(--brand-lime)] px-1 text-sm font-bold text-[color:var(--brand-navy)] hover:border-[color:var(--brand-navy)] focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Pedir orientação
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-l-2 border-[color:var(--brand-lime)] bg-[color:var(--brand-surface)] p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[color:var(--brand-navy)]">
            Precisa de documentação para empresa ou condomínio? Entregamos
            comprovante técnico do serviço conforme o escopo contratado.
          </p>
          <Link
            href="/condominio"
            className="inline-flex min-h-11 items-center whitespace-nowrap font-bold text-[color:var(--brand-navy)] underline decoration-[color:var(--brand-lime)] decoration-2 underline-offset-4"
          >
            Ver atendimento empresarial
          </Link>
        </div>
      </div>
    </section>
  );
}
