import { HeroVideo } from "@/components/hero-video";
import { SiteHeader } from "@/components/site-header";
import { GuidedServiceAssistant } from "@/components/guided-service-assistant";
import { PainSolution } from "@/components/sections/pain-solution";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { GallerySection } from "@/components/sections/gallery-section";
import { B2BSection } from "@/components/sections/b2b-section";
import { AreaAtendimentoSection } from "@/components/sections/area-atendimento-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroVideo />
        <TrustStrip />
        <PainSolution />
        <ServicesGrid />
        <ProcessTimeline />
        <GallerySection />
        <B2BSection />
        <AreaAtendimentoSection />
        <FaqSection />
        <CtaFinal />
      </main>
      <SiteFooter />
      <GuidedServiceAssistant />
    </>
  );
}
