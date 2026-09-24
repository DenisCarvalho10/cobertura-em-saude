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
import AdvX from '@/components/AdvX';
import OutrosSites from '@/components/OutrosSites';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EbookButton from '@/components/EbookButton';
import LatestPosts from '@/components/LatestPosts';
import { getAllPostMeta } from '@/lib/blog';

export default function Home() {
  const posts = getAllPostMeta();
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
      <LatestPosts posts={posts} />
      <AdvX />
      <FinalCTA />
      <OutrosSites />
      <Footer />
      <WhatsAppButton />
      <EbookButton />
    </main>
  );
}
