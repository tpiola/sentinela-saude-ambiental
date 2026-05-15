import { HeroVideo } from "@/components/hero-video";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StatsMarquee } from "@/components/sections/stats-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PragasUrbanasCards } from "@/components/sections/pragas-urbanas-cards";
import { EmpresasConformidadeSection } from "@/components/sections/empresas-conformidade-section";
import { DiagnosticFunnel } from "@/components/sections/diagnostic-funnel";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { EmpresasVigilanciaLaudosSection } from "@/components/sections/empresas-vigilancia-laudos-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { GoogleCalendarBookingSection } from "@/components/sections/google-calendar-booking-section";
import { LeadCaptureSection } from "@/components/sections/lead-capture-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroVideo />
        <StatsMarquee />
        <EmpresasConformidadeSection />
        <AboutSection />
        <ServicesGrid />
        <PragasUrbanasCards />
        <DiagnosticFunnel />
        <ProcessTimeline />
        <FaqSection />
        <EmpresasVigilanciaLaudosSection />
        <CtaFinal />
        <GoogleCalendarBookingSection />
        <LeadCaptureSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
