import Image from "next/image";
import { BRAND, whatsappHref } from "@/lib/brand";
import { Reveal } from "@/components/reveal";

const highlights = [
  "Inspeção técnica para residências, empresas e condomínios.",
  "Método definido conforme a praga, o ambiente e a atividade encontrada.",
  "Orientações de preparação, afastamento e cuidados após o serviço.",
  "Registros e documentação conforme o escopo contratado.",
] as const;

const miniGallery = [
  {
    src: "/media/sentinela/drive/aplicacao-jardim-francano-franca-sp.webp",
    alt: "Equipe em atendimento no Jardim Francano em Franca SP",
  },
  {
    src: "/media/sentinela/drive/controle-pragas-city-petropolis-franca-sp.webp",
    alt: "Controle de pragas no City Petrópolis em Franca SP",
  },
  {
    src: "/media/sentinela/drive/dedetizacao-parque-progresso-franca-sp.webp",
    alt: "Atendimento empresarial no Parque Progresso em Franca SP",
  },
  {
    src: "/media/sentinela/facebook/images/02-trabalho-campo.jpg",
    alt: "Serviço na Vila Santa Terezinha em Franca SP",
  },
] as const;

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/5">
              <Image
                src="/media/sentinela/drive/dedetizacao-centro-franca-sp.webp"
                alt="Equipe da Sentinela Saúde Ambiental em atendimento em Franca SP"
                width={800}
                height={1067}
                className="h-[280px] w-full object-cover object-top sm:h-[380px] lg:h-[440px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {miniGallery.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-xl ring-1 ring-black/5"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="h-24 w-full object-cover sm:h-32"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-deep)]">
              <span className="h-0.5 w-8 bg-[color:var(--brand-lime)]" />
              Sobre a Sentinela
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[color:var(--brand-navy)] md:text-4xl lg:text-5xl">
              Controle de pragas com diagnóstico e responsabilidade.
            </h2>
            </Reveal>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--brand-muted)]">
              A <strong className="text-[color:var(--brand-navy)]">{BRAND.name}</strong>{" "}
              atende Franca e municípios da região. O trabalho começa pela leitura
              do ambiente e segue com orientação, execução e acompanhamento
              compatíveis com a ocorrência encontrada.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-1 text-[color:var(--brand-green-deep)]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="font-medium text-[color:var(--brand-navy)]/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-[48px] items-center rounded-full bg-[color:var(--brand-navy)] px-8 py-3 font-bold text-white transition hover:bg-[color:var(--brand-navy-soft)]"
            >
              Solicitar avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
