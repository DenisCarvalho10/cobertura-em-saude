'use client';

import { motion } from 'framer-motion';
import { Puzzle, ArrowRight, CheckCircle } from 'lucide-react';

const ACCENT = '#2980b9';
const NAVY = '#0d1f35';

const destaques = [
  'Terapias sem limite de sessões (STJ, Tema 1.295)',
  'ABA, fono, terapia ocupacional e psicologia',
  'Reembolso quando não há profissional na rede',
  'Direitos na escola e atendimento prioritário',
];

export default function TeaSection() {
  return (
    <section id="autismo" className="py-16 md:py-20 relative overflow-hidden" style={{ background: '#f0f7fc' }}>
      <div className="absolute -top-10 -left-10 w-96 h-96 opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Card visual (à esquerda, alternando com a seção de câncer) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
          >
            <Puzzle size={56} style={{ color: ACCENT }} className="mb-6" />
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}>
              O que mudou em 2026
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-5">
              O STJ fixou, no Tema Repetitivo 1.295, que é <strong>abusiva a limitação do número de
              sessões</strong> de terapia prescritas à criança com TEA. O entendimento vale para todo o país.
            </p>
            <div className="space-y-3">
              {['Cobertura do método prescrito (ABA e outros)', 'Reembolso integral quando falta rede', 'Atendimento no município de residência'].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#4ade80' }} />
                  <span className="text-white/80 text-sm leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-8 leading-relaxed">Conteúdo informativo, conforme o Provimento OAB 205/2021. Sem promessa de resultado.</p>
          </motion.div>

          {/* Texto (à direita) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-sm font-semibold tracking-widest uppercase" style={{ background: 'rgba(41,128,185,0.12)', color: ACCENT }}>
              <Puzzle size={18} />
              Defesa das Crianças com TEA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
              Plano limitou a terapia do autismo?{' '}
              <span style={{ color: ACCENT }}>A lei garante o tratamento.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-7">
              A legislação e a jurisprudência atual do STJ asseguram à criança com TEA o acesso ao
              tratamento multidisciplinar prescrito — sem limite de sessões. Reunimos tudo em uma página
              dedicada.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {destaques.map((d) => (
                <div key={d} className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                  <span className="text-gray-600 text-sm leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
            <a href="/autismo-tea" className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24' }}>
              Ver os direitos da criança com TEA
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
