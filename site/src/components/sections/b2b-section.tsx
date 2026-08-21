import Link from "next/link";
import { whatsappHref } from "@/lib/brand";

const sectors = [
  { label: "Condomínios", href: "/mercados/condominios" },
  { label: "Indústrias e galpões", href: "/mercados/industrias" },
  { label: "Clínicas", href: "/mercados/clinicas" },
  { label: "Restaurantes", href: "/mercados/restaurantes" },
  { label: "Escolas", href: "/mercados/escolas" },
  { label: "Comércios", href: "/mercados/comercios" },
] as const;

export function B2BSection() {
  return (
    <section className="bg-[color:var(--brand-navy)] py-20 text-white sm:py-24" aria-labelledby="b2b-title">
      <div className="container-responsive">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-lime)]">Controle preventivo</p>
            <h2 id="b2b-title" className="mt-4 max-w-[14ch] min-w-0 [overflow-wrap:anywhere] font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
              Continuidade para ambientes que não podem parar.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
              Acompanhamento para empresas e condomínios com escopo definido, cronograma preventivo e registro do serviço executado.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref("Olá, Sentinela. Gostaria de conversar sobre controle preventivo para empresa ou condomínio.")} target="_blank" rel="noopener noreferrer" data-track="whatsapp_empresarial" className="inline-flex min-h-14 items-center justify-center whitespace-nowrap bg-[color:var(--brand-lime)] px-7 font-bold text-[color:var(--brand-navy-heading)] hover:bg-[color:var(--brand-green-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Solicitar conversa técnica
              </a>
              <Link href="/condominio" className="inline-flex min-h-14 items-center justify-center whitespace-nowrap border border-white/35 px-7 font-semibold hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Ver solução para condomínios
              </Link>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <dl className="divide-y divide-white/15">
              <div className="pb-6"><dt className="font-[family-name:var(--font-heading)] text-lg font-bold">Plano de atendimento</dt><dd className="mt-2 text-sm leading-6 text-white/65">Frequência e pontos de controle definidos conforme o ambiente e o risco observado.</dd></div>
              <div className="py-6"><dt className="font-[family-name:var(--font-heading)] text-lg font-bold">Documentação técnica</dt><dd className="mt-2 text-sm leading-6 text-white/65">Comprovante de execução com informações aplicáveis ao serviço contratado.</dd></div>
              <div className="py-6"><dt className="font-[family-name:var(--font-heading)] text-lg font-bold">Rotina preservada</dt><dd className="mt-2 text-sm leading-6 text-white/65">Agendamento e orientações para reduzir interferências na operação.</dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/20 pt-6">
              {sectors.map((sector) => (
                <Link
                  key={sector.href}
                  href={sector.href}
                  className="inline-flex min-h-10 items-center rounded-full border border-white/20 px-4 text-sm font-semibold text-white/80 transition hover:border-[color:var(--brand-accent-blue)] hover:bg-[color:var(--brand-accent-blue)]/15 hover:text-white"
                >
                  {sector.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
