import { HeroVideo } from "@/components/hero-video";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StatsMarquee } from "@/components/sections/stats-marquee";
import { TrustStrip } from "@/components/sections/trust-strip";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Showcase3DLazy } from "@/components/sections/showcase-3d-lazy";
import { DiagnosticFunnel } from "@/components/sections/diagnostic-funnel";
import { PrevencaoB2BSection } from "@/components/sections/prevencao-b2b-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SocialGallerySection } from "@/components/sections/social-gallery-section";
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
      <main className="min-w-0 flex-1">
        <HeroVideo />
        <StatsMarquee />
        <TrustStrip />
        <AboutSection />
        <ServicesGrid />
        <Showcase3DLazy />
        <DiagnosticFunnel />
        <PrevencaoB2BSection />
        <ProcessTimeline />
        <SocialGallerySection />
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
