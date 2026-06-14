'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, AlertCircle, Clock } from 'lucide-react';

const WHATSAPP = 'https://wa.me/5564999452151?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20urgente.%20O%20plano%20negou%20meu%20tratamento%20e%20quero%20garantir%20minha%20cobertura.';

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #060f1c 0%, #0d1f35 40%, #1e3a5f 70%, #0d1f35 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c9a227, transparent)' }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-5"
          style={{ border: '1px solid #c9a227' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-5"
          style={{ border: '1px solid #c9a227' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full"
          style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2.5 h-2.5 bg-red-400 rounded-full"
          />
          <AlertCircle size={14} className="text-red-400" />
          <span className="text-red-300 font-semibold text-sm tracking-wider uppercase">
            Situação de Urgência Médica? Atendemos Agora
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          A Saúde Não{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #c9a227, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Pode Esperar.
          </span>
        </motion.h2>

        {/* Emotional text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/75 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Cada dia de atraso pode comprometer um tratamento, uma recuperação, uma vida.
          <strong className="text-white"> Fale agora com um advogado especializado</strong> e
          saiba quais medidas podem ser tomadas <strong className="text-yellow-400">imediatamente</strong> para
          garantir sua cobertura.
        </motion.p>

        {/* Time indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          {[
            { icon: Clock, text: 'Resposta em minutos' },
            { icon: MessageCircle, text: 'Análise gratuita do caso' },
            { icon: Phone, text: 'Sem burocracia' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/70 text-base">
              <Icon size={16} style={{ color: '#fbbf24' }} />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 font-black text-xl md:text-2xl px-10 py-5 rounded-2xl text-white transition-all duration-300 hover:scale-105 shadow-2xl whatsapp-pulse w-full sm:w-auto justify-center"
            style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
          >
            <MessageCircle size={28} fill="white" className="group-hover:animate-bounce" />
            QUERO MINHA COBERTURA AGORA
          </a>
        </motion.div>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-white/40 text-sm"
        >
          Atendimento online · Todo o Brasil · Análise gratuita · Sem compromisso
        </motion.p>

        {/* Phone */}
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          href="tel:+5562992586422"
          className="inline-flex items-center gap-2 mt-4 text-white/50 hover:text-yellow-400 transition-colors duration-200 text-base"
        >
          <Phone size={16} />
          (62) 99258-6422
        </motion.a>
      </div>
    </section>
  );
}
