'use client';

import { motion } from 'framer-motion';
import { Heart, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';

const WHATSAPP = 'https://wa.me/5562992586422?text=Ol%C3%A1%2C%20meu%20filho%20tem%20autismo%20e%20o%20plano%20negou%20o%20tratamento.%20Preciso%20de%20ajuda%20urgente.';

const rights = [
  {
    title: 'Terapia ABA',
    description: 'O plano é obrigado por lei a cobrir a terapia ABA em quantidade suficiente, sem limitação de sessões baseada no diagnóstico.',
  },
  {
    title: 'Tratamento Multidisciplinar',
    description: 'Fonoaudiologia, terapia ocupacional, psicologia, psicopedagogia — cobertura integral garantida pela Lei 14.254/21.',
  },
  {
    title: 'Acompanhante Terapêutico (AT)',
    description: 'Direito ao acompanhante no ambiente escolar e social, essencial para o desenvolvimento da criança com TEA.',
  },
  {
    title: 'Medicamentos e Suplementação',
    description: 'Canabidiol, Risperidona, Aripiprazol e demais medicamentos prescritos devem ser cobertos ou fornecidos pelo SUS.',
  },
  {
    title: 'Home Care e Suporte Domiciliar',
    description: 'Atendimento especializado no domicílio para crianças que necessitam de cuidado contínuo — o plano não pode recusar.',
  },
  {
    title: 'Cobertura Integral',
    description: 'A negativa de qualquer tratamento prescrito por médico especialista ao paciente com TEA é ilegal e passível de liminar.',
  },
];

const urgencies = [
  'Plano limitou o número de sessões de ABA',
  'Negou a terapia por falta de CID específico',
  'Recusou o acompanhante terapêutico',
  'Não cobre o profissional indicado',
  'Demora na autorização que prejudica o tratamento',
  'SUS não fornece o medicamento necessário',
];

export default function AutismSection() {
  return (
    <section id="autismo" className="py-20 md:py-28 relative overflow-hidden" style={{ background: '#f0f7fc' }}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2980b9, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart size={20} style={{ color: '#2980b9' }} fill="#2980b9" />
            <span
              className="text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(41,128,185,0.1)', color: '#2980b9' }}
            >
              Defesa das Crianças com TEA
            </span>
            <Heart size={20} style={{ color: '#2980b9' }} fill="#2980b9" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
          >
            Seu Filho com Autismo{' '}
            <span style={{ color: '#2980b9' }}>Merece</span>{' '}
            Todo o Tratamento
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Sabemos o quanto é doloroso ver seu filho precisar de tratamento e o plano negar.
            Lutamos pelos direitos das crianças com TEA com todo o empenho e dedicação que
            esse momento exige.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #2980b9, #5dade2)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left - Rights */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
            >
              O que a lei garante para seu filho:
            </motion.h3>
            <div className="space-y-4">
              {rights.map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-blue-50 hover:border-blue-200 transition-colors duration-300 hover:shadow-md"
                >
                  <CheckCircle size={22} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{right.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{right.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Urgency + CTA */}
          <div className="space-y-8">
            {/* Urgency panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle size={24} style={{ color: '#fbbf24' }} />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}
                >
                  Situações que exigem ação imediata:
                </h3>
              </div>
              <div className="space-y-3 mb-8">
                {urgencies.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2" />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-base"
              >
                <MessageCircle size={20} fill="white" />
                Quero Defender Meu Filho Agora
              </a>
            </motion.div>

            {/* Empathy text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-blue-50"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(41,128,185,0.1)' }}
              >
                <Heart size={24} style={{ color: '#2980b9' }} />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
              >
                Entendemos o que você está passando
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Cada família que passa por uma negativa de tratamento para um filho com TEA
                enfrenta uma situação de enorme pressão emocional e incerteza. Nosso trabalho
                é transformar esse sofrimento em ação legal eficaz — para que o tempo de tratamento
                não seja perdido.
              </p>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p
                  className="font-semibold text-sm"
                  style={{ color: '#2980b9' }}
                >
                  "A Lei 12.764/12 e a Lei 14.254/21 garantem cobertura integral
                  do plano para crianças com TEA. A negativa é ilegal."
                </p>
                <p className="text-gray-400 text-xs mt-1">— Dr. Denis Carvalho</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
