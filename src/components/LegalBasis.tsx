import { Scale, BookOpen, Landmark, FileText, ShieldCheck, Gavel } from 'lucide-react';

const foundations = [
  {
    icon: Scale,
    title: 'Lei dos Planos de Saúde',
    reference: 'Lei nº 9.656/1998',
    description:
      'Estabelece as regras gerais aplicáveis aos planos e seguros privados de assistência à saúde, incluindo as coberturas mínimas obrigatórias e os direitos dos beneficiários.',
    color: '#1e3a5f',
  },
  {
    icon: FileText,
    title: 'Rol de Procedimentos da ANS',
    reference: 'Lei nº 14.454/2022',
    description:
      'Trata da natureza do rol de procedimentos da ANS e dos critérios para cobertura de tratamentos prescritos por médico, tema amplamente debatido pelos tribunais.',
    color: '#2980b9',
  },
  {
    icon: ShieldCheck,
    title: 'Direitos da Pessoa com TEA',
    reference: 'Leis nº 12.764/2012 e 14.254/2021',
    description:
      'Instituem a Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista e dispõem sobre o acompanhamento integral ao desenvolvimento.',
    color: '#27ae60',
  },
  {
    icon: Landmark,
    title: 'Direito à Saúde na Constituição',
    reference: 'CF/88, art. 196',
    description:
      'A Constituição Federal estabelece a saúde como direito de todos e dever do Estado, fundamento das discussões sobre fornecimento de medicamentos e tratamentos pelo poder público.',
    color: '#8e44ad',
  },
  {
    icon: Gavel,
    title: 'Jurisprudência dos Tribunais',
    reference: 'STJ e Tribunais Estaduais',
    description:
      'Os tribunais superiores possuem entendimentos consolidados sobre diversos temas de saúde suplementar, como as Súmulas 608 e 609 do STJ, aplicáveis conforme cada caso.',
    color: '#c0392b',
  },
  {
    icon: BookOpen,
    title: 'Código de Defesa do Consumidor',
    reference: 'Lei nº 8.078/1990',
    description:
      'Aplica-se às relações entre beneficiários e operadoras de planos de saúde, sendo relevante na análise de cláusulas e práticas potencialmente abusivas.',
    color: '#d35400',
  },
];

export default function LegalBasis() {
  return (
    <section id="fundamentos" className="py-10 md:py-12" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(201,162,39,0.1)', color: '#c9a227' }}
          >
            Conteúdo Informativo
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
          >
            Fundamentos{' '}
            <span style={{ color: '#c9a227' }}>Jurídicos</span> da Defesa do Paciente
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            A atuação em casos de negativa de cobertura apoia-se na legislação vigente e na
            jurisprudência dos tribunais. Conheça as principais normas que tratam dos direitos
            do paciente na saúde suplementar e pública.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundations.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-400 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full text-right"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.reference}
                </span>
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: '#0d1f35', fontFamily: 'Playfair Display, serif' }}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 text-xs mt-10 max-w-3xl mx-auto leading-relaxed">
          As informações acima têm caráter exclusivamente educativo e não constituem consulta
          ou parecer jurídico. A aplicação de cada norma depende da análise das particularidades
          do caso concreto.
        </p>
      </div>
    </section>
  );
}
