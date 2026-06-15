import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coberturaemsaude.com.br'),
  title: 'Denis Carvalho Advocacia | Plano de Saúde Negou? Garanta Seu Direito na Justiça',
  description:
    'Plano de saúde negou cirurgia, medicamento, terapia ou internação? Atuação urgente e estratégica para garantir sua cobertura judicial. Autismo, medicamentos de alto custo, SUS, UTI. Fale agora.',
  keywords: [
    'plano de saúde negou tratamento',
    'negativa plano de saúde',
    'ação judicial plano de saúde',
    'liminar plano de saúde',
    'tratamento autismo plano de saúde',
    'medicamento alto custo judicial',
    'advogado saúde',
    'direito médico',
    'negativa cirurgia plano',
    'ABA terapia plano de saúde',
    'SUS medicamento negado',
    'internação UTI negada',
    'Denis Carvalho Advocacia',
    'cobertura em saúde',
    'advogado plano de saúde',
  ],
  authors: [{ name: 'Denis Carvalho Advocacia' }],
  creator: 'Denis Carvalho Advocacia',
  publisher: 'Denis Carvalho Advocacia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.coberturaemsaude.com.br',
    siteName: 'Denis Carvalho Advocacia',
    title: 'Plano de Saúde Negou Seu Tratamento? Garanta Sua Cobertura na Justiça',
    description:
      'Advogado especialista em negativas de plano de saúde, autismo, medicamentos de alto custo e negativas do SUS. Atuação urgente em todo o Brasil.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Denis Carvalho Advocacia - Defesa do Paciente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano de Saúde Negou? Denis Carvalho Advocacia Garante Sua Cobertura',
    description: 'Atuação urgente contra negativas de plano de saúde, SUS e Estado. Autismo, medicamentos, cirurgias. Atendimento online. Fale agora.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.coberturaemsaude.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Denis Carvalho Advocacia',
              description: 'Advocacia especializada em Direito Médico e Saúde Suplementar. Defesa de pacientes contra negativas de plano de saúde e SUS.',
              url: 'https://www.coberturaemsaude.com.br',
              telephone: '+55-62-99258-6422',
              areaServed: 'BR',
              serviceType: ['Direito Médico', 'Saúde Suplementar', 'Defesa do Paciente'],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-62-99258-6422',
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
