import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ServicesGrid } from "@/components/sections/services-grid";
import { B2bSection } from "@/components/sections/b2b-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { GallerySection } from "@/components/sections/gallery-section";
import { AreaAtendimentoSection } from "@/components/sections/area-atendimento-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { SiteFooter } from "@/components/site-footer";

export default function ServicosPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <ServicesGrid />
        <B2bSection />
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
