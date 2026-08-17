import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ServicesGrid } from "@/components/sections/services-grid";
import { B2BSection } from "@/components/sections/b2b-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { GallerySection } from "@/components/sections/gallery-section";
import { AreaAtendimentoSection } from "@/components/sections/area-atendimento-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Serviços de dedetização em Franca SP",
  description:
    "Conheça os serviços de controle de pragas da Sentinela para residências, empresas e condomínios em Franca e região.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="pt-20">
        <section className="bg-[color:var(--brand-navy)] py-14 text-white sm:py-20">
          <div className="container-responsive">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-lime)]">
              Soluções por ocorrência
            </p>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
              Serviços de dedetização em Franca SP
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              A inspeção orienta o método, a preparação do local e os cuidados
              necessários em cada atendimento.
            </p>
          </div>
        </section>
        <ServicesGrid />
        <B2BSection />
        <ProcessTimeline />
        <GallerySection />
        <AreaAtendimentoSection />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
import type { Metadata } from "next";
