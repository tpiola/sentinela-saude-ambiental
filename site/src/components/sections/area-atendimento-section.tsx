import { BRAND } from "@/lib/brand";

const cidadesPrincipais = [
  "Franca",
  "Batatais",
  "Cristais Paulista",
  "Orlândia",
  "Ituverava",
  "São Joaquim da Barra",
  "Pedregulho",
  "Patrocínio Paulista",
  "Restinga",
];

const tiposPraga = [
  { emoji: "🪳", label: "Baratas" },
  { emoji: "🐀", label: "Ratos" },
  { emoji: "🦂", label: "Escorpiões" },
  { emoji: "🐜", label: "Formigas" },
  { emoji: "🕷️", label: "Aranhas" },
  { emoji: "🦟", label: "Mosquitos" },
  { emoji: "🪰", label: "Moscas" },
  { emoji: "🪱", label: "Cupins" },
  { emoji: "💧", label: "Caixa d'água" },
];

export function AreaAtendimentoSection() {
  return (
    <section
      id="area-atendimento"
      className="scroll-mt-28 bg-white py-20 md:py-28"
      itemScope
      itemType="https://schema.org/PestControlService"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Área de Atendimento
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Dedetização Profissional em Franca e Região
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--brand-muted)]">
            A Sentinela Saúde Ambiental atende residências e empresas em Franca/SP e cidades da região. Confirmamos disponibilidade pelo WhatsApp antes do agendamento.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-center font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
            Cidades Atendidas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cidadesPrincipais.map((cidade) => (
              <span
                key={cidade}
                className="rounded-full border border-[color:var(--brand-lime)] bg-[color:var(--brand-surface)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-navy)]"
                itemProp="areaServed"
              >
                {cidade} — SP
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-center font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
            Pragas que Eliminamos
          </h3>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-9">
            {tiposPraga.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-1 rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-2 py-3 text-center"
              >
                <span className="text-2xl" role="img" aria-label={p.label}>{p.emoji}</span>
                <span className="text-xs font-semibold text-[color:var(--brand-navy)]">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 text-center md:p-8">
          <p className="text-sm text-[color:var(--brand-muted)]">
            <strong className="text-[color:var(--brand-navy)]">CNPJ: {BRAND.cnpj}</strong> — Empresa registrada e licenciada pela Vigilância Sanitária para atuar em controle de pragas urbanas em Franca/SP e região.
          </p>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            Horários: {BRAND.openingHours.weekdays} | {BRAND.openingHours.sunday}
          </p>
        </div>
      </div>
    </section>
  );
}
