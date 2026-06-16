import { MessageCircle, HelpCircle } from 'lucide-react';

const WHATSAPP = 'https://wa.me/5562992586422?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20e%20gostaria%20de%20conversar%20com%20o%20escrit%C3%B3rio.';

const faqs = [
  {
    q: 'Quanto tempo costuma demorar um processo sobre negativa de cobertura?',
    a: 'O tempo de tramitação varia conforme a complexidade do caso, as provas envolvidas e o juízo competente. Em situações que exigem celeridade, a legislação prevê o pedido de tutela de urgência — instrumento pelo qual se busca uma análise mais rápida pelo Judiciário. Não é possível, contudo, prever ou assegurar prazos, pois a decisão depende sempre do exame do magistrado em cada caso concreto.',
  },
  {
    q: 'O que é a tutela de urgência (liminar)?',
    a: 'A tutela de urgência, prevista no art. 300 do Código de Processo Civil, é o instrumento pelo qual a parte pode requerer ao juiz uma decisão antecipada quando há urgência e elementos que evidenciem a probabilidade do direito. É frequentemente discutida em demandas de saúde, mas sua concessão depende sempre da análise individual do magistrado.',
  },
  {
    q: 'O plano de saúde pode negar tratamentos prescritos por médico?',
    a: 'Os planos de saúde possuem obrigações definidas pela Lei 9.656/98, pela regulamentação da ANS e pela jurisprudência dos tribunais. Em diversas situações, a recusa de cobertura de tratamento com indicação médica tem sido levada ao Judiciário. A avaliação sobre a regularidade ou eventual abusividade de uma negativa depende das circunstâncias específicas de cada caso.',
  },
  {
    q: 'O que diz a lei sobre o fornecimento de medicamentos pelo SUS?',
    a: 'O direito à saúde é assegurado pela Constituição Federal (art. 196). Medicamentos previstos no RENAME (Relação Nacional de Medicamentos Essenciais) ou em Protocolos Clínicos e Diretrizes Terapêuticas do Ministério da Saúde integram as políticas públicas de fornecimento. Há ampla discussão judicial sobre o fornecimento de medicamentos pelo poder público, inclusive fora dessas listas, observados os requisitos definidos pelos tribunais superiores.',
  },
  {
    q: 'O atendimento é realizado de forma online?',
    a: 'Sim. O atendimento pode ser realizado de forma online — por WhatsApp, e-mail ou videoconferência — atendendo pessoas de diferentes localidades do país, sem necessidade de deslocamento.',
  },
  {
    q: 'Quais documentos costumam ser necessários para avaliar um caso?',
    a: 'De modo geral: prescrição médica com indicação clínica, laudo ou relatório médico, a negativa formal da operadora ou do órgão público (quando houver), documentos do contrato do plano de saúde e documentos pessoais. A documentação necessária pode variar conforme as particularidades de cada caso.',
  },
  {
    q: 'O que pode caracterizar uma negativa abusiva de cobertura?',
    a: 'A jurisprudência tem examinado como potencialmente abusivas determinadas recusas, como a negativa de procedimento com indicação médica, a limitação de sessões de terapia sem fundamentação técnica ou a recusa baseada exclusivamente na ausência do procedimento em rol. Cada situação, porém, deve ser analisada individualmente à luz da legislação e dos precedentes aplicáveis.',
  },
  {
    q: 'O que diz a lei sobre o cancelamento do plano pela operadora?',
    a: 'O cancelamento unilateral de contratos de plano de saúde é tema regulamentado e bastante debatido nos tribunais, especialmente em contratos individuais e em situações que envolvem tratamento em curso. A regularidade do cancelamento depende da modalidade contratual e das circunstâncias concretas do caso.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-10 md:py-12" style={{ background: '#f8fafc' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle size={18} style={{ color: '#c9a227' }} />
            <span
              className="text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(201,162,39,0.1)', color: '#c9a227' }}
            >
              Dúvidas Frequentes
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
          >
            Informações sobre os{' '}
            <span style={{ color: '#c9a227' }}>Direitos do Paciente</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Conteúdo informativo sobre as dúvidas mais comuns relacionadas a negativas
            de cobertura em saúde e aos direitos previstos na legislação.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </div>

        {/* FAQ Items — <details> nativo: indexável e funcional sem JavaScript */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="faq-item border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-yellow-300/60 transition-colors duration-300"
              open={index === 0}
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200">
                <span className="font-semibold text-gray-900 text-base pr-2">{faq.q}</span>
                <svg
                  className="faq-chevron flex-shrink-0"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a227"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div
                className="faq-answer px-6 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-100"
                style={{ background: '#fffdf7' }}
              >
                <p className="pt-4">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center p-8 rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
        >
          <h3
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ainda tem dúvidas?
          </h3>
          <p className="text-white/70 mb-6">
            Entre em contato para obter informações e orientações sobre o seu caso.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-base"
          >
            <MessageCircle size={20} fill="white" />
            Tirar Dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
