import { HeroVideo } from "@/components/hero-video";
import { PromoVideoSection } from "@/components/promo-video-section";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StatsMarquee } from "@/components/sections/stats-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PrevencaoB2BSection } from "@/components/sections/prevencao-b2b-section";
import { DiagnosticFunnel } from "@/components/sections/diagnostic-funnel";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { B2bSection } from "@/components/sections/b2b-section";
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
          <PromoVideoSection />
        <HeroVideo />
        <StatsMarquee />
        <AboutSection />
        <ServicesGrid />
        <DiagnosticFunnel />
        <PrevencaoB2BSection />
        <ProcessTimeline />
        <B2bSection />
        <FaqSection />
        <CtaFinal />
        <GoogleCalendarBookingSection />
        <LeadCaptureSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
