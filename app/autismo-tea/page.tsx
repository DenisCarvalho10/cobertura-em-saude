import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TeaContent from '@/components/TeaContent';
import { teaFaqs, faqJsonLd, legalServiceJsonLd } from '@/lib/faq-data';

const URL = 'https://coberturaemsaude.com.br/autismo-tea';

export const metadata: Metadata = {
  title: 'Plano Negou Terapia para Autismo? Direitos da Criança com TEA',
  description:
    'Plano de saúde limitou ou negou terapias para criança com autismo? Entenda os direitos, a decisão do STJ de 2026 (Tema 1.295) e os documentos necessários.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Direitos da Criança com Autismo (TEA)',
    description: 'Terapias sem limite de sessões, plano de saúde e escola — o que a lei e o STJ garantem.',
    url: URL,
    type: 'website',
  },
};

export default function AutismoTeaPage() {
  const schema = [
    legalServiceJsonLd(
      'Direitos da Criança com Autismo (TEA) — Denis Carvalho Advocacia',
      URL,
      'Orientação jurídica sobre cobertura de terapias para TEA pelo plano de saúde, à luz da Lei 12.764/2012, das RN ANS 539 e 541/2022 e do Tema 1.295 do STJ.',
    ),
    faqJsonLd(teaFaqs),
  ];
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <TeaContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
