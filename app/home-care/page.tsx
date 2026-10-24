import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HomecareContent from '@/components/HomecareContent';
import { homecareFaqs, faqJsonLd, legalServiceJsonLd } from '@/lib/faq-data';

const URL = 'https://coberturaemsaude.com.br/home-care';

export const metadata: Metadata = {
  title: 'Plano Negou o Home Care? Direitos do Paciente',
  description:
    'Plano de saúde negou ou cortou o home care (internação domiciliar)? Entenda quando é devido, o que dizem o TJSP e o STJ e os documentos necessários.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Plano Negou o Home Care? Direitos do Paciente',
    description: 'Atendimento domiciliar indicado pelo médico: quando a negativa do plano é abusiva.',
    url: URL,
    type: 'website',
  },
};

export default function HomeCarePage() {
  const schema = [
    legalServiceJsonLd(
      'Home Care — Negativa de Plano de Saúde — Denis Carvalho Advocacia',
      URL,
      'Orientação jurídica sobre negativa de home care (internação domiciliar) pelo plano de saúde, à luz da Súmula 90 do TJSP, da Súmula 302 do STJ e do Código de Defesa do Consumidor.',
    ),
    faqJsonLd(homecareFaqs),
  ];
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <HomecareContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
