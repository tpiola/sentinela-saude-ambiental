import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

const facts = [
  "Residências, empresas e condomínios",
  "Orientação antes e depois do serviço",
  "Franca e municípios da região",
] as const;

export function SovereignHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--brand-navy)] pt-20 text-white">
      <div className="container-responsive grid gap-10 py-12 lg:min-h-[720px] lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)] lg:items-center lg:py-16">
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-lime)]">
            Controle profissional de pragas em Franca e região
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Dedetização em Franca com diagnóstico antes da aplicação.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Encontrou escorpião, barata, cupim ou rato? Informe a ocorrência e o
            bairro. A equipe confirma a cobertura e orienta o atendimento adequado
            para sua casa, empresa ou condomínio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/agendar"
              data-track="hero_start_assessment"
              className="inline-flex min-h-14 items-center justify-center bg-[color:var(--brand-lime)] px-7 font-bold text-[color:var(--brand-navy-heading)] transition hover:bg-[color:var(--brand-green-light)]"
            >
              Solicitar avaliação
            </Link>
            <Link
              href="/servicos"
              className="inline-flex min-h-14 items-center justify-center border border-white/30 px-7 font-bold text-white transition hover:bg-white/10"
            >
              Ver serviços
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 border-t border-white/15 pt-6 text-sm text-white/70 sm:grid-cols-3">
            {facts.map((fact) => (
              <li key={fact} className="flex gap-2">
                <span aria-hidden className="text-[color:var(--brand-lime)]">✓</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-5 text-white/55">
            Em caso de picada, intoxicação ou sintomas, procure atendimento de
            saúde imediatamente. O controle de pragas não substitui atendimento
            médico.
          </p>
        </div>

        <figure className="relative min-h-[440px] overflow-hidden border border-white/15 bg-[color:var(--brand-navy-soft)] lg:min-h-[650px]">
          <Image
            src="/media/sentinela/drive/dedetizacao-centro-franca-sp.webp"
            alt="Técnico em atendimento de controle de pragas em Franca"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--brand-navy)] via-[color:var(--brand-navy)]/80 to-transparent p-6 pt-24">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-lime)]">
              Registro de atendimento local
            </p>
            <p className="mt-2 max-w-sm font-[family-name:var(--font-heading)] text-xl font-semibold">
              {BRAND.name} · CNPJ {BRAND.cnpj}
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default SovereignHero;
