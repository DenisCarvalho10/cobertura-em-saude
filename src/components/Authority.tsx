'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Award, Heart } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    value: 100,
    suffix: '%',
    label: 'Online',
    description: 'Atendimento digital completo, sem burocracia presencial',
  },
  {
    icon: Zap,
    value: 48,
    suffix: 'h',
    label: 'Atuação Rápida',
    description: 'Medidas urgentes protocoladas em até 48 horas',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Especializado',
    description: 'Exclusivamente em Direito Médico e Saúde Suplementar',
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Humanizado',
    description: 'Atendimento acolhedor e próximo para o momento mais difícil',
  },
];

function CounterNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <span>{count}</span>
      <span>{suffix}</span>
    </div>
  );
}

const features = [
  'Análise gratuita do seu caso',
  'Honorários apenas com êxito (em casos selecionados)',
  'Comunicação direta com o advogado',
  'Relatórios do andamento do processo',
  'Suporte em WhatsApp',
  'Atendimento em todo o Brasil',
  'Urgência disponível 24h',
  'LGPD — total sigilo e proteção de dados',
];

export default function Authority() {
  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060f1c 0%, #0d1f35 50%, #162d4a 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c9a227, transparent)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
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
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(201,162,39,0.15)', color: '#fbbf24' }}
          >
            Por que nos escolher
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Defesa{' '}
            <span style={{ color: '#fbbf24' }}>Especializada</span>{' '}
            que Faz a Diferença
          </h2>
          <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">
            Confiança, rapidez e resultado — o que você precisa quando a saúde está em jogo.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,162,39,0.2), rgba(30,58,95,0.4))',
                  border: '1px solid rgba(201,162,39,0.3)',
                }}
              >
                <stat.icon size={28} style={{ color: '#fbbf24' }} />
              </div>
              <div
                className="text-5xl font-bold mb-1"
                style={{
                  color: '#fbbf24',
                  fontFamily: 'Playfair Display, serif',
                }}
              >
                <CounterNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white font-semibold text-base mb-1">{stat.label}</p>
              <p className="text-white/50 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3
            className="text-2xl font-bold text-white text-center mb-10"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            O que você recebe ao nos contratar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: '#c9a227' }}
                />
                <span className="text-white/80 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
