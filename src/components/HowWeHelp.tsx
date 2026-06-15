'use client';

import { motion } from 'framer-motion';
import { Zap, Scale, Bell, Building2, Users, Shield, Clock } from 'lucide-react';

const steps = [
  {
    icon: Zap,
    number: '01',
    title: 'Tutela de Urgência (Liminar)',
    description:
      'Ingressamos com pedido de tutela de urgência para que o juiz determine o custeio do tratamento de forma imediata, antes mesmo do julgamento final. Em casos graves, a decisão pode sair em horas.',
    highlight: 'Decisão em 24-48h',
  },
  {
    icon: Scale,
    number: '02',
    title: 'Ação Judicial Estratégica',
    description:
      'Ajuizamos a ação com fundamento sólido em jurisprudência consolidada e legislação vigente, maximizando as chances de êxito total no processo.',
    highlight: 'Alta taxa de sucesso',
  },
  {
    icon: Bell,
    number: '03',
    title: 'Notificação Formal ao Plano',
    description:
      'Antes ou concomitantemente ao processo judicial, notificamos formalmente a operadora de saúde, criando um registro oficial da recusa e pressionando por solução rápida.',
    highlight: 'Pressão extrajudicial',
  },
  {
    icon: Building2,
    number: '04',
    title: 'Ação contra Estado e Município',
    description:
      'Quando o SUS ou ente público nega medicamento, procedimento ou tratamento, ingressamos diretamente contra o Estado, Município ou União para garantir o fornecimento.',
    highlight: 'SUS e poder público',
  },
  {
    icon: Users,
    number: '05',
    title: 'Atuação com Ministério Público',
    description:
      'Em casos de violação sistemática de direitos, acionamos o Ministério Público e outros órgãos de controle para ampliar a pressão e obter resultados mais rápidos.',
    highlight: 'Força institucional',
  },
  {
    icon: Shield,
    number: '06',
    title: 'Defesa Estratégica do Paciente',
    description:
      'Em cada etapa, defendemos o paciente de forma completa — recursos, embargos, cumprimento de sentença — até que o direito seja integralmente garantido na prática.',
    highlight: 'Acompanhamento total',
  },
];

export default function HowWeHelp() {
  return (
    <section id="servicos" className="py-12 md:py-16" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
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
            Como Garantimos{' '}
            <span style={{ color: '#c9a227' }}>Seu Tratamento</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Utilizamos todas as ferramentas jurídicas disponíveis para que você tenha acesso
            ao tratamento que precisa — com urgência, estratégia e comprometimento total.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          className="mt-10 rounded-3xl p-8 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Cada dia de atraso pode custar{' '}
              <span style={{ color: '#fbbf24' }}>mais do que você imagina</span>
            </h3>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Não espere sua situação piorar para agir. Uma análise gratuita pode mudar tudo —
              e pode ser o primeiro passo para garantir o tratamento que você ou seu familiar
              precisa urgentemente.
            </p>
            <a
              href="https://wa.me/5562992586422?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20urgente%20com%20negativa%20de%20plano%20de%20sa%C3%BAde."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 shadow-2xl text-lg"
              style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)' }}
            >
              Quero Garantir Meu Tratamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
