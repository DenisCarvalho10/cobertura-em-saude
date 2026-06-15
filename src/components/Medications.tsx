'use client';

import { motion } from 'framer-motion';
import { Pill, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

const medications = [
  {
    name: 'Canabidiol (CBD)',
    description: 'Prescrito para epilepsia refratária, TEA e dor crônica. O fornecimento por planos e pelo SUS é tema frequentemente discutido no Judiciário.',
    badge: 'Discussão frequente',
    color: '#27ae60',
  },
  {
    name: 'Medicamentos Importados',
    description: 'Onco-hematológicos, imunomoduladores e antifibróticos importados, de custo elevado, são objeto recorrente de demandas judiciais.',
    badge: 'Tema na jurisprudência',
    color: '#8e44ad',
  },
  {
    name: 'Doenças Raras',
    description: 'Medicamentos órfãos para doenças raras (Fabry, Gaucher, SMA, AME etc.) são frequentemente discutidos em demandas contra planos e contra o poder público.',
    badge: 'Doenças raras',
    color: '#c0392b',
  },
  {
    name: 'Oncológicos de Alto Custo',
    description: 'Imunoterapia, terapia-alvo e quimioterapia oral. Discute-se judicialmente a cobertura de tratamentos prescritos pelo oncologista.',
    badge: 'Cobertura em debate',
    color: '#d35400',
  },
  {
    name: 'Imunobiológicos',
    description: 'Adalimumabe, Secuquinumabe, Dupilumabe, Tocilizumabe — biológicos de alto custo para artrite, psoríase, lúpus e doenças inflamatórias.',
    badge: 'Saúde suplementar',
    color: '#2980b9',
  },
  {
    name: 'SUS e Poder Público',
    description: 'Quando o SUS nega medicamento previsto no RENAME ou em PCDT, é possível demandar Estado, Município e União quanto ao fornecimento.',
    badge: 'Poder público',
    color: '#1abc9c',
  },
];

export default function Medications() {
  return (
    <section
      id="medicamentos"
      className="py-20 md:py-28"
      style={{ background: '#fff' }}
    >
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
            <Pill size={18} style={{ color: '#8e44ad' }} />
            <span
              className="text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(142,68,173,0.1)', color: '#8e44ad' }}
            >
              Medicamentos de Alto Custo
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
          >
            Negativa de{' '}
            <span style={{ color: '#8e44ad' }}>Medicamento</span> de Alto Custo?
            <span className="block">Entenda os Direitos do Paciente.</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            O fornecimento de medicamentos de alto custo é tema amplamente discutido no
            Judiciário, tanto na saúde suplementar quanto na saúde pública.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #8e44ad, #c39bd3)' }} />
        </motion.div>

        {/* Medication cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {medications.map((med, index) => (
            <motion.div
              key={med.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-400 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${med.color}15` }}
                >
                  <Pill size={24} style={{ color: med.color }} />
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${med.color}15`, color: med.color }}
                >
                  {med.badge}
                </span>
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: '#0d1f35', fontFamily: 'Playfair Display, serif' }}
              >
                {med.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{med.description}</p>
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${med.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-10 text-white"
          style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 100%)' }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle size={22} style={{ color: '#fbbf24' }} />
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}
                >
                  Como funciona na prática
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'Você envia a negativa e a prescrição médica' },
                  { step: '2', text: 'O caso é analisado e a estratégia adequada é definida' },
                  { step: '3', text: 'É ajuizada a ação, com eventual pedido de tutela de urgência' },
                  { step: '4', text: 'O pedido é submetido à análise do magistrado' },
                  { step: '5', text: 'Havendo decisão favorável, busca-se o seu cumprimento' },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{ background: 'rgba(201,162,39,0.2)', color: '#fbbf24', border: '1px solid rgba(201,162,39,0.4)' }}
                    >
                      {step}
                    </div>
                    <span className="text-white/80 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <CheckCircle size={22} className="mb-3" style={{ color: '#27ae60' }} />
                <p className="text-white font-semibold mb-2">Tema recorrente na jurisprudência</p>
                <p className="text-white/60 text-sm">
                  Os tribunais brasileiros analisam com frequência demandas sobre medicamentos
                  de alto custo. O resultado de cada caso, contudo, depende da prescrição médica,
                  da documentação apresentada e das circunstâncias específicas.
                </p>
              </div>
              <a
                href="https://wa.me/5562992586422?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20cobertura%20de%20medicamento%20de%20alto%20custo."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 font-bold py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.02] text-base"
                style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)', color: '#0d1f35' }}
              >
                <Zap size={18} />
                <span style={{ color: '#0d1f35' }}>Tirar Dúvidas sobre Cobertura</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
