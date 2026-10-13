import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MedicamentosContent from '@/components/MedicamentosContent';
import { medFaqs, faqJsonLd, legalServiceJsonLd } from '@/lib/faq-data';

const URL = 'https://coberturaemsaude.com.br/medicamentos-alto-custo';

export const metadata: Metadata = {
  title: 'Medicamento de Alto Custo Negado? Direitos do Paciente',
  description:
    'Plano de saúde ou SUS negou medicamento de alto custo? Entenda os direitos do paciente, os critérios do STF (ADI 7265, Temas 6 e 1234) e os documentos necessários.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Medicamento de Alto Custo Negado? Direitos do Paciente',
    description: 'Plano de saúde ou SUS — os caminhos para buscar o acesso ao medicamento prescrito.',
    url: URL,
    type: 'website',
  },
};

export default function MedicamentosAltoCustoPage() {
  const schema = [
    legalServiceJsonLd(
      'Medicamentos de Alto Custo — Denis Carvalho Advocacia',
      URL,
      'Orientação jurídica sobre fornecimento de medicamentos de alto custo pelo plano de saúde e pelo SUS, à luz da ADI 7265 e dos Temas 6 e 1234 do STF.',
    ),
    faqJsonLd(medFaqs),
  ];
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <MedicamentosContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
