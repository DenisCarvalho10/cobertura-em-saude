'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana S.',
    city: 'Goiânia — GO',
    avatar: 'MS',
    color: '#e74c3c',
    rating: 5,
    title: 'Cirurgia garantida em 3 dias',
    text: 'Meu plano negou uma cirurgia cardíaca urgente que eu precisava fazer. Entrei em contato com o escritório na segunda-feira e na quinta-feira já tinha a liminar em mãos. O plano foi obrigado a cobrir tudo. Não tenho palavras para agradecer.',
    tag: 'Cirurgia Cardíaca',
  },
  {
    name: 'Roberto & Família',
    city: 'Jatai — GO',
    avatar: 'RF',
    color: '#2980b9',
    rating: 5,
    title: 'Meu filho com autismo está em terapia ABA',
    text: 'Nosso filho de 5 anos tem autismo e o plano negava as sessões de ABA dizendo que ultrapassava o limite. Ficamos desesperados. O escritório conseguiu uma decisão judicial que obrigou o plano a custear todas as terapias prescritas pelo médico. Em menos de 15 dias tudo estava resolvido.',
    tag: 'Autismo / ABA',
  },
  {
    name: 'Claudia M.',
    city: 'Rio Verde — GO',
    avatar: 'CM',
    color: '#8e44ad',
    rating: 5,
    title: 'Canabidiol liberado pelo juiz',
    text: 'Minha filha sofre de epilepsia refratária e o neurólogo prescreveu canabidiol. O SUS e o plano negaram. Conseguimos uma liminar em menos de 48 horas. O tratamento transformou a vida dela — as crises caíram drasticamente. Atendimento humano, próximo e eficiente.',
    tag: 'Medicamento Alto Custo',
  },
  {
    name: 'José Antonio P.',
    city: 'Mineiros — GO',
    avatar: 'JP',
    color: '#27ae60',
    rating: 5,
    title: 'Internação em UTI garantida na urgência',
    text: 'Meu pai precisava de UTI e o plano negou a internação alegando carência. O escritório agiu rápido, conseguiu a liminar no mesmo dia. Foi uma situação de vida ou morte e o atendimento foi impecável — rápido, claro e sem burocracia. Recomendo de olhos fechados.',
    tag: 'Internação / UTI',
  },
  {
    name: 'Fernanda L.',
    city: 'Goiânia — GO',
    avatar: 'FL',
    color: '#d35400',
    rating: 5,
    title: 'Medicamento oncológico custeado',
    text: 'Sou paciente oncológica e o plano negou o imunobiológico prescrito pelo meu oncologista. Fui indicada para o escritório e em poucos dias já tínhamos decisão favorável. O profissionalismo e a empatia fazem toda a diferença quando você está doente e lutando.',
    tag: 'Oncologia',
  },
  {
    name: 'Ana Paula T.',
    city: 'Rio Verde — GO',
    avatar: 'AT',
    color: '#1abc9c',
    rating: 5,
    title: 'Home care conquistado para minha mãe',
    text: 'Minha mãe precisava de home care após um AVC e o plano negou alegando que não era necessário. O escritório entrou com a ação e em uma semana tínhamos a autorização. Minha mãe se recuperou muito bem em casa. Serviço jurídico de altíssima qualidade e atendimento humanizado.',
    tag: 'Home Care',
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-12 md:py-16"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
    >
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
            Histórias reais de pacientes
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
          >
            Pacientes que{' '}
            <span style={{ color: '#c9a227' }}>Conquistaram</span> Seu Direito
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Cada caso é único, mas o compromisso com o resultado é sempre o mesmo.
            Veja como ajudamos famílias em situações de urgência.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.city}</p>
                  </div>
                </div>
                <Quote size={20} style={{ color: t.color, opacity: 0.4 }} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#fbbf24" style={{ color: '#fbbf24' }} />
                ))}
              </div>

              {/* Tag */}
              <span
                className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit"
                style={{ background: `${t.color}15`, color: t.color }}
              >
                {t.tag}
              </span>

              {/* Title */}
              <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                &ldquo;{t.title}&rdquo;
              </h3>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{t.text}</p>

              {/* Bottom accent */}
              <div
                className="mt-5 h-0.5 w-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${t.color}40, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-400 text-xs mt-5">
          * Os nomes foram parcialmente omitidos para preservar a privacidade dos clientes. Os casos são verídicos.
        </p>
      </div>
    </section>
  );
}
