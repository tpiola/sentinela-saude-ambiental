import { HeroVideo } from "@/components/hero-video";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { PainSolution } from "@/components/sections/pain-solution";
import { B2BSection } from "@/components/sections/b2b-section";
import { CtaFinal } from "@/components/sections/cta-final";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroVideo />
        <PainSolution />
        <B2BSection />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
