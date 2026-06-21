'use client';

import { motion } from 'framer-motion';
import { Scale, Lock, Smile, ArrowUpRight } from 'lucide-react';

const sites = [
  {
    icon: Scale,
    name: 'Denis Carvalho Advocacia',
    description: 'Site institucional do escritório — atuação em Direito Médico e da Saúde.',
    url: 'https://www.deniscarvalhoadvocacia.com.br',
    label: 'www.deniscarvalhoadvocacia.com.br',
  },
  {
    icon: Lock,
    name: 'LGPD em Saúde',
    description: 'Proteção de dados pessoais na área da saúde e os direitos do titular.',
    url: 'https://www.lgpdesaude.com.br',
    label: 'www.lgpdesaude.com.br',
  },
  {
    icon: Smile,
    name: 'Advocacia Odontológica',
    description: 'Direito odontológico e defesa do paciente em tratamentos dentários.',
    url: 'https://www.advocaciaodontologica.com.br',
    label: 'www.advocaciaodontologica.com.br',
  },
];

export default function OutrosSites() {
  return (
    <section
      id="rede"
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060f1c 0%, #0d1f35 50%, #162d4a 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c9a227, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #1e3a5f, transparent)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(201,162,39,0.15)', color: '#fbbf24' }}
          >
            Nossa Rede
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Conheça nossos{' '}
            <span style={{ color: '#fbbf24' }}>outros sites</span>
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            O escritório atua em diferentes áreas. Acesse o site da área que você procura.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sites.map(({ icon: Icon, name, description, url, label }, index) => (
            <motion.a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col min-w-0 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,162,39,0.2), rgba(30,58,95,0.4))',
                    border: '1px solid rgba(201,162,39,0.3)',
                  }}
                >
                  <Icon size={22} style={{ color: '#fbbf24' }} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-white/40 transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                {description}
              </p>
              <span className="text-sm font-medium break-all" style={{ color: '#fbbf24' }}>
                {label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
