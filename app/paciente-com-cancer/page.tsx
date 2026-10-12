import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import OncologiaContent from '@/components/OncologiaContent';

export const metadata: Metadata = {
  title: 'Direitos do Paciente com Câncer | Cobertura em Saúde',
  description:
    'Guia dos direitos do paciente oncológico em cada fase da jornada: cobertura no plano de saúde, medicamentos pelo SUS, isenção de Imposto de Renda, seguros e mais. Conteúdo informativo, em linguagem acessível.',
  alternates: { canonical: 'https://coberturaemsaude.com.br/paciente-com-cancer' },
  openGraph: {
    title: 'Direitos do Paciente com Câncer',
    description:
      'O que você pode exigir do plano, do SUS e além — em cada fase do tratamento. Guia informativo e e-book gratuito.',
    url: 'https://coberturaemsaude.com.br/paciente-com-cancer',
    type: 'website',
  },
};

export default function PacienteComCancerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <OncologiaContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
