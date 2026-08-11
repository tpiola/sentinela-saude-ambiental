import Image from "next/image";
import { BRAND, whatsappHref } from "@/lib/brand";

export function ServicesGrid() {
  return (
    <section id="servicos" className="scroll-mt-28 bg-[color:var(--brand-surface)] py-20">
      <div className="container-responsive">
        <div className="grid gap-6 border-b border-[color:var(--brand-border)] pb-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-green-deep)]">
              Serviços
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl">
              Controle definido pelo ambiente e pela ocorrência.
            </h2>
          </div>
          <p className="max-w-2xl leading-7 text-[color:var(--brand-muted)] lg:justify-self-end">
            A inspeção orienta o método, a preparação do local e os cuidados posteriores.
          </p>
        </div>

        <div className="grid border-x border-b border-[color:var(--brand-border)] sm:grid-cols-2 lg:grid-cols-3">
          {BRAND.services.map((service) => (
            <article
              key={service.id}
              className="flex min-w-0 flex-col border-t border-[color:var(--brand-border)] bg-white sm:border-r"
            >
              <figure className="relative aspect-[16/10] overflow-hidden bg-[color:var(--brand-navy)]">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </figure>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[color:var(--brand-navy)]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[color:var(--brand-muted)]">
                  {service.desc}
                </p>
                <a
                  href={whatsappHref(
                    `Olá, Sentinela. Gostaria de orientação sobre ${service.title.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center border-t border-[color:var(--brand-border)] pt-4 text-sm font-bold text-[color:var(--brand-navy)] transition-colors hover:text-[color:var(--brand-green-deep)]"
                >
                  Solicitar orientação
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
