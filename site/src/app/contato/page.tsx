import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { JsonLd } from "@/components/json-ld";
import { BRAND, whatsappHref } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/page-metadata";
import { buildContactPageGraph } from "@/lib/seo-schema";

export const metadata = buildPageMetadata({
  title: "Contato e avaliação",
  description:
    "Solicite avaliação para controle de pragas em Franca e região pelo WhatsApp ou telefone.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildContactPageGraph("/contato")} />
      <SiteHeader />
      <main
        id="conteudo"
        className="min-h-[75vh] bg-[color:var(--brand-surface)] px-4 pb-20 pt-36"
      >
        <div className="container-responsive grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <section>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-green-deep)]">
              Fale com a Sentinela
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-[-0.035em] text-[color:var(--brand-navy)] sm:text-6xl">
              Conte o que apareceu. A equipe orienta o próximo passo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--brand-muted)]">
              Para agilizar, informe a ocorrência, o bairro e o tipo de imóvel.
              Uma foto ou vídeo pode ajudar na orientação inicial, sem substituir a
              inspeção quando ela for necessária.
            </p>
            <a
              href={whatsappHref(
                "Olá, Sentinela. Preciso de orientação para controle de pragas. Cidade/bairro: Tipo de imóvel: Ocorrência:",
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-track="contact_whatsapp"
              className="mt-8 inline-flex min-h-14 items-center bg-[color:var(--brand-lime)] px-8 font-bold text-[color:var(--brand-navy-heading)]"
            >
              Iniciar pelo WhatsApp
            </a>
          </section>

          <aside className="border-t-2 border-[color:var(--brand-lime)] bg-[color:var(--brand-navy)] p-8 text-white">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              Contato direto
            </h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-white/50">WhatsApp e telefone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:+${BRAND.phoneE164}`}
                    data-track="contact_phone"
                    className="font-bold"
                  >
                    {BRAND.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/50">Horários informados</dt>
                <dd className="mt-1">
                  {BRAND.openingHours.weekdays}
                  <br />
                  {BRAND.openingHours.sunday}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/50">Endereço cadastral</dt>
                <dd className="mt-1">{BRAND.addressFull}</dd>
              </div>
              <div>
                <dt className="text-sm text-white/50">E-mail</dt>
                <dd className="mt-1 break-all">
                  <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
