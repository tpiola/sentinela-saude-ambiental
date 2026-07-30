import Link from "next/link";

export function CtaFinal() {
  return (
    <section className="bg-[color:var(--brand-green-deep)] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
          Próximo passo
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-5xl">
          Identifique a ocorrência antes de decidir o tratamento.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
          Informe o problema, o bairro e a urgência. A equipe orienta a preparação
          e confirma os próximos passos do atendimento.
        </p>
        <div className="mt-10">
          <Link
            href="/agendar"
            className="inline-flex min-h-[56px] min-w-[260px] items-center justify-center rounded-full bg-[color:var(--brand-navy)] px-10 py-4 font-[family-name:var(--font-heading)] text-lg font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)]"
          >
            Solicitar avaliação
          </Link>
        </div>
      </div>
    </section>
  );
}
