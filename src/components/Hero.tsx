'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, Shield, Clock, MapPin, Star, CheckCircle } from 'lucide-react';

const WHATSAPP = 'https://wa.me/5564999452151?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20an%C3%A1lise%20do%20meu%20caso.';

const badges = [
  { icon: Shield, text: 'Direito Médico' },
  { icon: Clock, text: 'Atendimento Online' },
  { icon: MapPin, text: 'Atuação Nacional' },
  { icon: Star, text: 'Sigilo Profissional' },
];

const trustItems = [
  'Atendimento 100% online',
  'Atuação em todo o Brasil',
  'Direito Médico e da Saúde',
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #060f1c 0%, #0d1f35 40%, #1e3a5f 70%, #162d4a 100%)',
      }}
    >
      {/* Decorative particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'rgba(201, 162, 39, 0.4)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c9a227, transparent)' }}
        />
        <div
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #1e3a5f, transparent)' }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-6"
            >
              <Shield size={14} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">
                Defesa Especializada do Paciente
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Plano de Saúde{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #c9a227, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Negou
              </span>{' '}
              Seu Tratamento?{' '}
              <span className="block mt-2">
                Conheça os{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #c9a227, #fbbf24)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Direitos do Paciente
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/75 text-lg md:text-xl leading-relaxed mb-8"
            >
              Atuação em casos de negativa de cobertura —{' '}
              <strong className="text-white">medicamentos, cirurgias, terapias, internações
              e tratamentos para o TEA</strong> — e em procedimentos negados por planos de
              saúde ou pelo poder público.
            </motion.p>

            {/* Trust items */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg shadow-2xl whatsapp-pulse"
              >
                <MessageCircle size={22} fill="white" />
                Falar pelo WhatsApp
              </a>
              <a
                href="#contato"
                className="flex items-center justify-center gap-2 border-2 border-yellow-400/60 text-yellow-400 hover:bg-yellow-400/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
              >
                Tirar Minhas Dúvidas
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:border-yellow-400/40 transition-colors duration-300"
                >
                  <Icon size={20} className="text-yellow-400" />
                  <span className="text-white/80 text-xs font-medium leading-tight">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Hero image with decorative frame */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-xl"
                style={{ background: 'linear-gradient(135deg, #c9a227, #1e3a5f)' }}
              />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                {/* Decorative illustration - hospital/health themed */}
                <div
                  className="w-full h-full flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(160deg, #1e3a5f 0%, #0d1f35 60%, #060f1c 100%)',
                  }}
                >
                  {/* Medical cross icon */}
                  <div className="relative flex flex-col items-center gap-6 text-center px-8">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-32 h-32 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(201,162,39,0.2), rgba(30,58,95,0.4))',
                        border: '2px solid rgba(201,162,39,0.4)',
                      }}
                    >
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <rect x="20" y="8" width="24" height="48" rx="4" fill="rgba(201,162,39,0.8)" />
                        <rect x="8" y="20" width="48" height="24" rx="4" fill="rgba(201,162,39,0.8)" />
                      </svg>
                    </motion.div>

                    <div>
                      <p
                        className="text-3xl font-bold mb-2"
                        style={{
                          fontFamily: 'Playfair Display, serif',
                          background: 'linear-gradient(135deg, #c9a227, #fbbf24)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        Direitos do paciente
                      </p>
                      <p className="text-white/60 text-base">na saúde suplementar e pública</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 w-full">
                      {[
                        '✓ Cirurgias e internações',
                        '✓ Tratamentos para autismo',
                        '✓ Medicamentos de alto custo',
                        '✓ Terapias e home care',
                        '✓ SUS e Estado',
                      ].map((item) => (
                        <div
                          key={item}
                          className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/80 text-sm text-left"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Faixa de atuação (tom sóbrio) */}
                    <div
                      className="flex items-center gap-2 rounded-full px-4 py-2"
                      style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.35)' }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: '#fbbf24' }} />
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#fbbf24' }}>
                        Atuação em Direito Médico e da Saúde
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,162,39,0.15)' }}>
                <Shield size={22} style={{ color: '#c9a227' }} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Direito do Paciente</p>
                <p className="text-gray-500 text-xs">Informação e orientação</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 cursor-pointer"
        onClick={() => document.getElementById('problemas')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
