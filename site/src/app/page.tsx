import { SovereignHero } from "@/components/sovereign-hero";
import { JsonLdLocalBusiness } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { EmpresaVideoBanner } from "@/components/sections/empresa-video-banner";
import { PainSolution } from "@/components/sections/pain-solution";
import { TrustStrip } from "@/components/sections/trust-strip";
import { GallerySection } from "@/components/sections/gallery-section";
import { B2BSection } from "@/components/sections/b2b-section";
import { PertoDeMimSection } from "@/components/sections/perto-de-mim-section";
import { AreaAtendimentoSection } from "@/components/sections/area-atendimento-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { SiteFooter } from "@/components/site-footer";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata = buildPageMetadata({
  title: "Dedetização em Franca SP",
  description:
    "Dedetizadora perto de mim em Franca SP: controle de escorpião, barata, cupim e rato para casas, empresas e condomínios. Solicite uma avaliação pelo WhatsApp.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <JsonLdLocalBusiness />
      <SiteHeader />
      <main id="conteudo">
        <EmpresaVideoBanner />
        <SovereignHero />
        <TrustStrip />
        <PainSolution />
        <GallerySection />
        <B2BSection />
        <PertoDeMimSection />
        <AreaAtendimentoSection />
        <FaqSection />
        <CtaFinal />
      </main>
      <SiteFooter />
    </>
  );
}
