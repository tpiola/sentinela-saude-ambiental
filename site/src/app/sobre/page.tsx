import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StatsMarquee } from "@/components/sections/stats-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { SiteFooter } from "@/components/site-footer";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: "Empresa de controle de pragas em Franca SP",
  description:
    "Conheça a Sentinela Saúde Ambiental, empresa de controle de pragas com atendimento em Franca e municípios da região.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="pt-20">
        <section className="bg-[color:var(--brand-navy)] py-14 text-white sm:py-20">
          <div className="container-responsive">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-lime)]">
              Sobre a Sentinela
            </p>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
              Empresa de controle de pragas em Franca SP
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Atendimento residencial e empresarial com inspeção, orientação e
              registros definidos conforme o serviço contratado.
            </p>
          </div>
        </section>
        <StatsMarquee />
        <AboutSection />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
