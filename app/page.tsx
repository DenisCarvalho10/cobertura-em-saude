import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import HowWeHelp from '@/components/HowWeHelp';
import About from '@/components/About';
import Authority from '@/components/Authority';
import AutismSection from '@/components/AutismSection';
import Medications from '@/components/Medications';
import LegalBasis from '@/components/LegalBasis';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <HowWeHelp />
      <About />
      <Authority />
      <AutismSection />
      <Medications />
      <LegalBasis />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

