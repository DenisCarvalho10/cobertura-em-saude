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
    description: 'Atendimento digital, sem necessidade de deslocamento',
  },
  {
    icon: Zap,
    value: 24,
    suffix: 'h',
    label: 'Canais Abertos',
    description: 'Mensagens recebidas a qualquer hora por WhatsApp e e-mail',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Direito Médico',
    description: 'Atuação dedicada ao Direito Médico e da Saúde',
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Humanizado',
    description: 'Atendimento acolhedor e próximo em um momento delicado',
  },
];

function CounterNumber({ target, suffix }: { target: number; suffix: string }) {
  // Inicia com o valor final: assim, sem JavaScript, o número correto já aparece (em vez de "0").
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          setCount(0);
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
  'Atendimento personalizado e individualizado',
  'Transparência e clareza em todas as etapas',
  'Comunicação direta com o advogado',
  'Acompanhamento do andamento do processo',
  'Contato por WhatsApp e e-mail',
  'Atendimento em todo o Brasil',
  'Atuação em Direito Médico e da Saúde',
  'LGPD — total sigilo e proteção de dados',
];

export default function Authority() {
  return (
    <section
      className="py-10 md:py-12 relative overflow-hidden"
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
          className="text-center mb-8"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(201,162,39,0.15)', color: '#fbbf24' }}
          >
            Nosso Compromisso
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Atuação{' '}
            <span style={{ color: '#fbbf24' }}>Especializada</span>{' '}
            em Direito Médico
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Atuação técnica e atendimento próximo em questões de Direito Médico e da Saúde.
          </p>
          <div className="w-20 h-1 mx-auto mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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
            className="text-2xl font-bold text-white text-center mb-5"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Como é o nosso atendimento
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
