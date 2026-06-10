'use client';

import { motion } from 'framer-motion';
import {
  Scissors, Pill, Brain, Home, BedDouble, TrendingUp,
  XCircle, AlertTriangle, Heart, Activity
} from 'lucide-react';

const problems = [
  {
    icon: Scissors,
    title: 'Negativa de Cirurgia',
    description: 'Plano recusou autorização? Atuamos para garantir o procedimento com urgência judicial.',
    color: '#e74c3c',
    bg: '#fdf2f2',
  },
  {
    icon: Pill,
    title: 'Medicamento de Alto Custo',
    description: 'Canabidiol, imunobiológicos, oncológicos. Conseguimos a liberação mesmo sem cobertura contratual.',
    color: '#8e44ad',
    bg: '#f5f0fb',
  },
  {
    icon: Brain,
    title: 'Tratamento para Autismo (TEA)',
    description: 'Negativa de ABA, fonoaudiologia, terapia ocupacional e acompanhante terapêutico? Lutamos pelo seu filho.',
    color: '#2980b9',
    bg: '#f0f7fc',
  },
  {
    icon: Home,
    title: 'Home Care Negado',
    description: 'Plano se recusa a cobrir atendimento domiciliar? Esse direito é garantido por lei.',
    color: '#27ae60',
    bg: '#f0faf4',
  },
  {
    icon: BedDouble,
    title: 'Internação Negada',
    description: 'Recusa de internação hospitalar ou em clínica especializada? Agimos imediatamente.',
    color: '#c0392b',
    bg: '#fdf2f1',
  },
  {
    icon: TrendingUp,
    title: 'Reajuste Abusivo',
    description: 'Aumento absurdo na mensalidade por mudança de faixa etária ou sinistralidade? Contestamos judicialmente.',
    color: '#d35400',
    bg: '#fdf6f0',
  },
  {
    icon: XCircle,
    title: 'Cancelamento de Plano',
    description: 'Plano cancelado de forma ilegal ou unilateral? Garantimos sua reintegração imediata.',
    color: '#7f8c8d',
    bg: '#f4f6f7',
  },
  {
    icon: AlertTriangle,
    title: 'SUS Nega Medicamento',
    description: 'Estado ou Município se recusa a fornecer medicamento prescrito? Acionamos a via judicial.',
    color: '#f39c12',
    bg: '#fef9f0',
  },
  {
    icon: Heart,
    title: 'UTI Negada',
    description: 'Recusa de vaga em UTI, CTI ou leito de alta complexidade? Agimos com urgência máxima.',
    color: '#c0392b',
    bg: '#fdf2f1',
  },
  {
    icon: Activity,
    title: 'Terapias ABA e Multidisciplinar',
    description: 'Negativa de número de sessões, profissional ou instituição terapêutica? Fazemos valer a lei do autismo.',
    color: '#1abc9c',
    bg: '#f0fbf9',
  },
];

export default function Problems() {
  return (
    <section id="problemas" className="py-20 md:py-28 bg-gray-50">
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
            Atuamos em todos esses casos
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
          >
            Plano Negou? <span style={{ color: '#c9a227' }}>Reconhecemos</span> Seu Caso
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Seja qual for a negativa, temos experiência para agir rapidamente.
            Conheça as situações mais comuns que resolvemos na justiça:
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 hover:border-opacity-50 cursor-default"
              style={{ '--hover-color': problem.color } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: problem.bg }}
              >
                <problem.icon size={24} style={{ color: problem.color }} />
              </div>
              <h3
                className="font-bold text-base mb-2 leading-snug"
                style={{ color: '#0d1f35', fontFamily: 'Playfair Display, serif' }}
              >
                {problem.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{problem.description}</p>

              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${problem.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Não encontrou seu caso? <strong className="text-gray-800">Fale conosco</strong> — atuamos em qualquer situação de negativa de saúde.
          </p>
          <a
            href="https://wa.me/5564999452151?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20an%C3%A1lise%20do%20meu%20caso."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
          >
            Consultar Gratuitamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
