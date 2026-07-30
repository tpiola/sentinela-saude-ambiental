import Image from "next/image";
import { BRAND, whatsappHref } from "@/lib/brand";

export function ServicesGrid() {
  return (
    <section
      id="servicos"
      className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
            Soluções técnicas
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] md:text-4xl">
            Controle profissional de pragas
          </h1>
          <p className="mt-3 text-sm leading-6 text-[color:var(--brand-muted)]">
            Inspeção, orientação preventiva e tratamento definido conforme a
            ocorrência, o ambiente e as condições identificadas no local.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRAND.services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-border)] bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[color:var(--brand-navy)]">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {service.title.toLowerCase().includes("escorpi") && (
                  <span className="absolute left-3 top-3 rounded-full bg-[color:var(--brand-lime)] px-3 py-1 text-xs font-bold text-black shadow">
                    Atendimento prioritário
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--brand-muted)]">
                  {service.desc}
                </p>
                <a
                  href={whatsappHref(
                    `Quero solicitar uma avaliação para ${service.title.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--brand-lime)] px-5 py-3 text-sm font-bold text-[color:var(--brand-navy-heading)] transition hover:bg-[color:var(--brand-green-light)]"
                >
                  Solicitar avaliação
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
