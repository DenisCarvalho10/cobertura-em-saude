'use client';

import { motion } from 'framer-motion';
import { Pill, ArrowRight, CheckCircle } from 'lucide-react';

const ACCENT = '#1abc9c';
const NAVY = '#0d1f35';

const destaques = [
  'Quimioterapia oral e tratamentos fora do rol',
  'Medicamentos de alto custo pelo SUS',
  'Doenças raras, imunobiológicos e off-label',
  'Critérios do STF (ADI 7265, Temas 6 e 1234)',
];

export default function MedicamentosSection() {
  return (
    <section id="medicamentos" className="py-16 md:py-20 relative overflow-hidden" style={{ background: '#f0fdfa' }}>
      <div className="absolute -top-10 -right-10 w-96 h-96 opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-sm font-semibold tracking-widest uppercase" style={{ background: 'rgba(26,188,156,0.12)', color: ACCENT }}>
              <Pill size={18} />
              Medicamentos de Alto Custo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
              Medicamento negado?{' '}
              <span style={{ color: ACCENT }}>Há caminhos para buscar o acesso.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-7">
              Pelo plano de saúde ou pelo SUS, a lei e os tribunais preveem como exigir o medicamento
              prescrito — e os critérios mudaram recentemente. Entenda tudo em uma página dedicada.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {destaques.map((d) => (
                <div key={d} className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                  <span className="text-gray-600 text-sm leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
            <a href="/medicamentos-alto-custo" className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24' }}>
              Ver os direitos sobre medicamentos
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Card visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
          >
            <Pill size={56} style={{ color: ACCENT }} className="mb-6" />
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}>
              Dois caminhos possíveis
            </h3>
            <div className="space-y-4">
              {[
                ['Plano de saúde', 'Internação, quimioterapia oral e, em casos excepcionais, tratamentos fora do rol'],
                ['SUS (União, Estado, Município)', 'Medicamentos incorporados e, excepcionalmente, os não incorporados'],
                ['O que decide', 'A instrução técnica do pedido — relatório, laudos e prova científica'],
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
        </div>
      </div>
    </section>
  );
}
