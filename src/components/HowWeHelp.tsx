'use client';

import { motion } from 'framer-motion';
import { Zap, Scale, Bell, Building2, Users, Shield, Clock } from 'lucide-react';

const steps = [
  {
    icon: Zap,
    number: '01',
    title: 'Tutela de Urgência (Liminar)',
    description:
      'Quando presentes os requisitos legais, é possível requerer a tutela de urgência (art. 300 do CPC), pela qual se pleiteia uma decisão antecipada antes do julgamento final do processo.',
    highlight: 'Pedido de urgência',
  },
  {
    icon: Scale,
    number: '02',
    title: 'Ação Judicial com Fundamentação Técnica',
    description:
      'A ação é ajuizada com fundamento na legislação vigente e na jurisprudência aplicável ao caso, observadas as suas particularidades.',
    highlight: 'Fundamentação técnica',
  },
  {
    icon: Bell,
    number: '03',
    title: 'Notificação Formal à Operadora',
    description:
      'Antes ou em conjunto com o processo judicial, é possível notificar formalmente a operadora de saúde, registrando oficialmente a recusa de cobertura.',
    highlight: 'Via extrajudicial',
  },
  {
    icon: Building2,
    number: '04',
    title: 'Atuação contra o Poder Público',
    description:
      'Quando o SUS ou ente público nega medicamento, procedimento ou tratamento, é possível demandar judicialmente o Estado, o Município ou a União quanto ao fornecimento.',
    highlight: 'SUS e poder público',
  },
  {
    icon: Users,
    number: '05',
    title: 'Atuação junto ao Ministério Público',
    description:
      'Em situações de violação de direitos, é possível acionar o Ministério Público e outros órgãos de controle em defesa do direito à saúde.',
    highlight: 'Apoio institucional',
  },
  {
    icon: Shield,
    number: '06',
    title: 'Acompanhamento do Caso',
    description:
      'Em cada etapa, o paciente é acompanhado tecnicamente — recursos, embargos e cumprimento de decisões — em busca da efetivação do direito reconhecido.',
    highlight: 'Acompanhamento integral',
  },
];

export default function HowWeHelp() {
  return (
    <section id="servicos" className="py-20 md:py-28" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(201,162,39,0.1)', color: '#c9a227' }}
          >
            Nossa Atuação
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
          >
            Como é a{' '}
            <span style={{ color: '#c9a227' }}>Atuação no Seu Caso</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Conheça as medidas judiciais e extrajudiciais previstas em lei que podem ser
            adotadas, conforme as particularidades de cada caso de negativa de cobertura.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className="h-full rounded-2xl p-8 border border-gray-100 hover:border-yellow-300/50 transition-all duration-400 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(160deg, #ffffff 0%, #f8fafc 100%)',
                }}
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
                  >
                    <step.icon size={24} className="text-yellow-400" />
                  </div>
                  <span
                    className="text-5xl font-bold opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ color: '#c9a227', fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#0d1f35', fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Highlight tag */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(201,162,39,0.1)', color: '#b8912a' }}
                >
                  <Clock size={11} />
                  {step.highlight}
                </div>

                {/* Bottom border animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl p-10 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Conheça as medidas{' '}
              <span style={{ color: '#fbbf24' }}>previstas em lei</span>
            </h3>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Informe-se sobre os direitos do paciente e sobre as medidas judiciais e
              extrajudiciais cabíveis em casos de negativa de cobertura em saúde.
            </p>
            <a
              href="https://wa.me/5562992586422?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20negativa%20de%20plano%20de%20sa%C3%BAde."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 shadow-2xl text-lg"
              style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)' }}
            >
              Falar com o Escritório
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
