import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import HowWeHelp from '@/components/HowWeHelp';
import About from '@/components/About';
import Authority from '@/components/Authority';
import OncologySection from '@/components/OncologySection';
import TeaSection from '@/components/TeaSection';
import MedicamentosSection from '@/components/MedicamentosSection';
import ReajusteSection from '@/components/ReajusteSection';
import HomecareSection from '@/components/HomecareSection';
import LegalBasis from '@/components/LegalBasis';
import FAQ from '@/components/FAQ';
import Agenda from '@/components/Agenda';
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
      <OncologySection />
      <TeaSection />
      <MedicamentosSection />
      <ReajusteSection />
      <HomecareSection />
      <Problems />
      <HowWeHelp />
      <About />
      <Authority />
      <LegalBasis />
      <FAQ />
      <LatestPosts posts={posts} />
      <AdvX />
      <Agenda />
      <OutrosSites />
      <Footer />
      <WhatsAppButton />
      <EbookButton />
    </main>
  );
}
