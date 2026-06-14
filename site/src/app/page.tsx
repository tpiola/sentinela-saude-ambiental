import { HeroVideo } from "@/components/hero-video";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StatsMarquee } from "@/components/sections/stats-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { DiagnosticFunnel } from "@/components/sections/diagnostic-funnel";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { B2bSection } from "@/components/sections/b2b-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { AreaAtendimentoSection } from "@/components/sections/area-atendimento-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroVideo />
        <StatsMarquee />
        <AboutSection />
        <DiagnosticFunnel />
        <ServicesGrid />
        <B2bSection />
        <AreaAtendimentoSection />
        <ProcessTimeline />
        <FaqSection />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
