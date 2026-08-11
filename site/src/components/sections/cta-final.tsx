import Link from "next/link";

export function CtaFinal() {
  return (
    <section className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] py-16 sm:py-20">
      <div className="container-responsive grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-end">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
            Solicitação de atendimento
          </p>
          <h2 className="mt-4 max-w-[18ch] min-w-0 [overflow-wrap:anywhere] font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-[color:var(--brand-navy)] sm:text-4xl">
            Descreva a ocorrência para receber a orientação inicial.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[color:var(--brand-muted)]">
            Informe o tipo de praga, o bairro e a urgência. A equipe continua o contato pelo WhatsApp.
          </p>
        </div>
        <Link
          href="/agendar"
          className="inline-flex min-h-14 items-center justify-center whitespace-nowrap bg-[color:var(--brand-navy)] px-8 font-bold text-white transition-colors hover:bg-[color:var(--brand-navy-soft)]"
        >
          Iniciar solicitação
        </Link>
      </div>
    </section>
  );
}
