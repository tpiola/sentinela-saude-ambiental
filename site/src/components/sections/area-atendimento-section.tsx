import { PestIcon } from "@/components/pest-icons";
import { BRAND } from "@/lib/brand";

const serviceTypes = [
  { icon: "baratas" as const, label: "Baratas" },
  { icon: "ratos" as const, label: "Ratos" },
  { icon: "escorpiao" as const, label: "Escorpiões" },
  { icon: "formigas" as const, label: "Formigas" },
  { icon: "aranhas" as const, label: "Aranhas" },
  { icon: "mosquitos" as const, label: "Mosquitos" },
  { icon: "moscas" as const, label: "Moscas" },
  { icon: "cupins" as const, label: "Cupins" },
  { icon: "caixa-dagua" as const, label: "Caixa d'água" },
] as const;

export function AreaAtendimentoSection() {
  return (
    <section
      id="area-atendimento"
      className="scroll-mt-28 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
            Área de atendimento
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Franca e municípios da região
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[color:var(--brand-muted)]">
            A disponibilidade é confirmada pelo WhatsApp conforme cidade, bairro,
            serviço solicitado e agenda da equipe.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-center font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
            Bairros informados na cobertura de Franca
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {BRAND.servicedBairros.map((bairro) => (
              <span
                key={bairro}
                className="rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-navy)]"
              >
                {bairro}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-center font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
            Municípios consultados para atendimento
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {BRAND.areaServed.map((city) => (
              <span
                key={city}
                className="rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-navy)]"
              >
                {city} — SP
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-center font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
            Tipos de ocorrência atendidos
          </h3>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-9">
            {serviceTypes.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-2 py-4 text-center"
              >
                <PestIcon
                  name={item.icon}
                  size={28}
                  className="text-[color:var(--brand-navy)]"
                />
                <span className="text-xs font-semibold text-[color:var(--brand-navy)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 text-center md:p-8">
          <p className="text-sm leading-6 text-[color:var(--brand-muted)]">
            <strong className="text-[color:var(--brand-navy)]">
              CNPJ: {BRAND.cnpj}
            </strong>
            . A rota, o escopo e os documentos previstos são confirmados antes da
            contratação.
          </p>
          <p className="mt-3 text-sm text-[color:var(--brand-muted)]">
            Horários informados: {BRAND.openingHours.weekdays} ·{" "}
            {BRAND.openingHours.sunday}
          </p>
        </div>
      </div>
    </section>
  );
}
