import SEOHead from '@/components/SEOHead';
import TopBar, { Navbar } from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import AlertSection from '@/sections/AlertSection';
import Services from '@/sections/Services';
import DiagnosisFunnel from '@/sections/DiagnosisFunnel';
import Plans from '@/sections/Plans';
import FAQ from '@/sections/FAQ';
import CTAFinal from '@/sections/CTAFinal';
import Footer from '@/sections/Footer';
import WhatsAppFloat from '@/sections/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <SEOHead />
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AlertSection />
        <Services />
        <DiagnosisFunnel />
        <Plans />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
