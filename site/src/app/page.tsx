import { HeroVideo } from "@/components/hero-video";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServicesGrid } from "@/components/sections/services-grid";
import { GallerySocial } from "@/components/gallery-social";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Showcase3DLazy } from "@/components/sections/showcase-3d-lazy";
import { CtaFinal } from "@/components/sections/cta-final";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroVideo />
        <TrustStrip />
        <ServicesGrid />
        <GallerySocial />
        <ProcessTimeline />
        <Showcase3DLazy />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
