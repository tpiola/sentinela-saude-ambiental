import { BRAND } from "@/lib/brand";

const cidadesPrincipais = [
  "Franca",
  "Batatais",
  "Cristais Paulista",
  "Orlandia",
  "Ituverava",
  "Sao Joaquim da Barra",
  "Pedregulho",
  "Patrocinio Paulista",
  "Restinga",
];

const tiposPraga = [
  { emoji: "🪲", label: "Baratas" },
  { emoji: "🐀", label: "Ratos" },
  { emoji: "🦂", label: "Escorpioes" },
  { emoji: "🐜", label: "Formigas" },
  { emoji: "🕷️", label: "Aranhas" },
  { emoji: "🦟", label: "Mosquitos" },
  { emoji: "🪰", label: "Moscas" },
  { emoji: "🪱", label: "Cupins" },
  { emoji: "💧", label: "Caixa d'agua" },
];

export function AreaAtendimentoSection() {
  return (
    <section
      id="area-atendimento"
      className="scroll-mt-28 bg-white py-16 md:py-24"
      itemScope
      itemType="https://schema.org/PestControlService"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-[color:var(--brand-green-deep)] uppercase">
            Area de Atendimento
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Dedetizacao Profissional em Franca e Regiao
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--brand-muted)]">
            A Sentinela Saude Ambiental atende residencias e empresas em Franca/SP e cidades da regiao. Confirmamos disponibilidade pelo WhatsApp antes do agendamento.
          </p>
        </div>

        {/* Cidades atendidas */}
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

        {/* Tipos de praga */}
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

        {/* Info adicional */}
        <div className="mt-10 rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 text-center md:p-8">
          <p className="text-sm text-[color:var(--brand-muted)]">
            <strong className="text-[color:var(--brand-navy)]">CNPJ: {BRAND.cnpj}</strong> — Empresa registrada e licenciada pela Vigilancia Sanitaria para atuar em controle de pragas urbanas em Franca/SP e regiao.
          </p>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            Horarios: {BRAND.openingHours.weekdays} | {BRAND.openingHours.sunday}
          </p>
        </div>
      </div>
    </section>
  );
}
