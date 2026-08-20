import { BRAND } from "@/lib/brand";

const items = [
  { label: "Contato", value: "Atendimento pelo WhatsApp" },
  { label: "Perfil", value: "Residencial e empresarial" },
  { label: "Cobertura", value: BRAND.region },
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="Informações de atendimento"
      className="border-y border-[color:var(--brand-border)] bg-white"
    >
      <dl className="container-responsive grid divide-y divide-[color:var(--brand-border)] md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="py-6 md:px-8 md:first:pl-0">
            <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--brand-muted)]">
              {item.label}
            </dt>
            <dd className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-[color:var(--brand-navy)]">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
