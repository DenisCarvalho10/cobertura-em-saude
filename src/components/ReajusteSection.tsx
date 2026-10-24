'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const ACCENT = '#b5652e';
const NAVY = '#0d1f35';

const destaques = [
  'Reajuste por faixa etária desarrazoado',
  'Sem reajuste por idade após os 60 anos',
  'Sinistralidade sem memória de cálculo',
  'Anual acima do teto da ANS (individuais)',
];

export default function ReajusteSection() {
  return (
    <section id="reajuste" className="py-16 md:py-20 relative overflow-hidden" style={{ background: '#fdf5ef' }}>
      <div className="absolute -top-10 -left-10 w-96 h-96 opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Card visual (à esquerda) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
          >
            <TrendingUp size={56} style={{ color: ACCENT }} className="mb-6" />
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}>
              Três tipos, três regras
            </h3>
            <div className="space-y-4">
              {[
                ['Reajuste anual', 'Teto da ANS nos planos individuais; justificado nos coletivos'],
                ['Por faixa etária', 'Segue as faixas da ANS — e não incide a partir dos 60 anos'],
                ['Por sinistralidade', 'Só em coletivos, com memória de cálculo transparente'],
              ].map(([t, s], i) => (
                <div key={t} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24', fontFamily: 'Playfair Display, serif' }}>{i + 1}</div>
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{s}</p>
                  </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-sm font-semibold tracking-widest uppercase" style={{ background: 'rgba(181,101,46,0.12)', color: ACCENT }}>
              <TrendingUp size={18} />
              Reajuste de Planos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
              Reajuste abusivo?{' '}
              <span style={{ color: ACCENT }}>Nem todo aumento é legítimo.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-7">
              Aumentos por faixa etária, por sinistralidade ou acima do teto da ANS têm regras — e,
              quando são abusivos, podem ser revistos, com direito à restituição. Entenda em uma página
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
            <a href="/reajuste-abusivo" className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24' }}>
              Ver quando o reajuste é abusivo
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
