import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { SiteFooter } from "@/components/site-footer";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: "Dúvidas sobre dedetização em Franca SP",
  description:
    "Respostas sobre preparação, cuidados, prazos, garantia e contratação de controle de pragas em Franca e região.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="pt-20">
        <section className="bg-[color:var(--brand-navy)] py-14 text-white sm:py-20">
          <div className="container-responsive">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-lime)]">
              Perguntas frequentes
            </p>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
              Dúvidas sobre dedetização em Franca SP
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Veja como funciona a avaliação, o preparo do ambiente e os cuidados
              informados em cada serviço.
            </p>
          </div>
        </section>
        <FaqSection />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
