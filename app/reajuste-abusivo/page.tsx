import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ReajusteContent from '@/components/ReajusteContent';
import { reajusteFaqs, faqJsonLd, legalServiceJsonLd } from '@/lib/faq-data';

const URL = 'https://coberturaemsaude.com.br/reajuste-abusivo';

export const metadata: Metadata = {
  title: 'Reajuste Abusivo do Plano de Saúde? Entenda e Conteste',
  description:
    'Plano de saúde aumentou demais por faixa etária ou sinistralidade? Entenda os tipos de reajuste, o que diz o STJ e o Estatuto do Idoso e quando a revisão é possível.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Reajuste Abusivo do Plano de Saúde',
    description: 'Faixa etária, sinistralidade e teto anual da ANS — quando o reajuste pode ser revisto.',
    url: URL,
    type: 'website',
  },
};

export default function ReajusteAbusivoPage() {
  const schema = [
    legalServiceJsonLd(
      'Reajuste Abusivo de Planos de Saúde — Denis Carvalho Advocacia',
      URL,
      'Orientação jurídica sobre reajustes abusivos de planos de saúde (faixa etária, sinistralidade e anual), à luz do Estatuto do Idoso, do Tema 952 do STJ e da regulamentação da ANS.',
    ),
    faqJsonLd(reajusteFaqs),
  ];
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <ReajusteContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
