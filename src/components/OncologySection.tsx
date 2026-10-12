'use client';

import { motion } from 'framer-motion';
import { Ribbon, ArrowRight, CheckCircle } from 'lucide-react';

const ACCENT = '#be5a7e';
const NAVY = '#0d1f35';

const destaques = [
  'Cobertura de quimioterapia, radioterapia e cirurgia',
  'Medicamentos de alto custo pelo plano ou pelo SUS',
  'Prazos de 30 e 60 dias para exames e tratamento',
  'Isenção e restituição de Imposto de Renda',
];

export default function OncologySection() {
  return (
    <section id="oncologia" className="py-16 md:py-20 relative overflow-hidden" style={{ background: '#fdf6f9' }}>
      <div
        className="absolute -top-10 -right-10 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-sm font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(190,90,126,0.12)', color: ACCENT }}
            >
              <Ribbon size={18} />
              Nova frente · Paciente Oncológico
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}
            >
              Diagnóstico de câncer?{' '}
              <span style={{ color: ACCENT }}>Você tem direitos em cada fase.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-7">
              Da suspeita ao tratamento e à reabilitação, a lei assegura cobertura, prazos,
              medicamentos e benefícios que muitos pacientes desconhecem. Reunimos tudo em uma
              página dedicada — clara e informativa.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {destaques.map((d) => (
                <div key={d} className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                  <span className="text-gray-600 text-sm leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
            <a
              href="/paciente-com-cancer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24' }}
            >
              Ver os direitos do paciente com câncer
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
            <Ribbon size={56} style={{ color: ACCENT }} className="mb-6" />
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}>
              Uma jornada com apoio jurídico
            </h3>
            <div className="space-y-4">
              {[
                ['Suspeita e diagnóstico', 'Exames e início do tratamento dentro dos prazos legais'],
                ['Tratamento', 'Cobertura de terapias e acesso a medicamentos de alto custo'],
                ['Reabilitação e depois', 'Reconstrução, isenções fiscais e proteção patrimonial'],
              ].map(([t, s], i) => (
                <div key={t} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                    style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24', fontFamily: 'Playfair Display, serif' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{s}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-8 leading-relaxed">
              Conteúdo informativo, conforme o Provimento OAB 205/2021. Sem promessa de resultado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
