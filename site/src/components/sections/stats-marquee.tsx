const highlights = [
  { title: "Franca e região", detail: "Atendimento local" },
  { title: "Residencial", detail: "Casas e apartamentos" },
  { title: "Empresarial", detail: "Empresas e condomínios" },
  { title: "Inspeção", detail: "Diagnóstico antes do tratamento" },
] as const;

export function StatsMarquee() {
  return (
    <section
      className="border-y border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] py-8"
      aria-label="Destaques do atendimento"
    >
      <dl className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="border-l-2 border-[color:var(--brand-lime)] pl-4"
          >
            <dt className="font-[family-name:var(--font-heading)] text-lg font-bold text-[color:var(--brand-navy)]">
              {item.title}
            </dt>
            <dd className="mt-1 text-sm text-[color:var(--brand-muted)]">
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
