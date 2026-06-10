'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, BookOpen, Scale, Shield, Heart, Lock } from 'lucide-react';
import Image from 'next/image';

const specialties = [
  { icon: Scale, label: 'Direito Médico' },
  { icon: Shield, label: 'Saúde Suplementar' },
  { icon: Lock, label: 'LGPD na Saúde' },
  { icon: Award, label: 'Responsabilidade Hospitalar' },
  { icon: Heart, label: 'Defesa do Paciente' },
  { icon: BookOpen, label: 'Direito Sanitário' },
];

const highlights = [
  'Especialista em negativas de plano de saúde e SUS',
  'Medidas urgentes com tutela de urgência e liminar',
  'Atendimento humanizado e acolhedor',
  'Atendimento 100% online — sem precisar sair de casa',
  'Atuação em todo o território nacional',
  'Defesa estratégica com foco no resultado',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative background */}
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-3xl"
              style={{ background: 'linear-gradient(135deg, #c9a227 0%, #0d1f35 100%)', opacity: 0.15 }}
            />

            {/* Gold frame accent */}
            <div
              className="absolute -top-3 -left-3 w-32 h-32 rounded-tl-3xl border-t-4 border-l-4"
              style={{ borderColor: '#c9a227' }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-32 h-32 rounded-br-3xl border-b-4 border-r-4"
              style={{ borderColor: '#c9a227' }}
            />

            {/* Photo container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]" style={{ background: 'linear-gradient(160deg, #1e3a5f 0%, #0d1f35 100%)' }}>
              <Image
                src="/denis-carvalho.jpg"
                alt="Dr. Denis Carvalho - Advogado Especialista em Direito Médico"
                fill
                className="object-cover object-top"
                priority
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              {/* Fallback when photo not yet added */}
              <div>
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-5xl font-bold"
                  style={{
                    background: 'rgba(201,162,39,0.15)',
                    border: '2px solid rgba(201,162,39,0.4)',
                    color: '#c9a227',
                    fontFamily: 'Playfair Display, serif',
                  }}
                >
                  DC
                </div>
                <p className="text-white/40 text-xs text-center px-6">
                  Adicione a foto em<br />/public/denis-carvalho.jpg
                </p>
              </div>
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(13,31,53,0.8) 0%, transparent 50%)',
                }}
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Dr. Denis Carvalho
                </h3>
                <p className="text-yellow-400 text-sm font-medium mt-1">
                  Advogado · OAB — Direito Médico e Saúde Suplementar
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-6 top-16 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
                >
                  <Shield size={18} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Especialista em</p>
                  <p className="text-sm font-bold text-gray-900">Direito Médico</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(201,162,39,0.1)', color: '#c9a227' }}
            >
              Quem vai defender você
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
            >
              Dr. Denis Carvalho
            </h2>

            <div className="w-16 h-1 mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Advogado com atuação estratégica em <strong className="text-gray-800">Direito Médico e da Saúde</strong>,
              dedicado à proteção integral do paciente e à garantia do acesso a tratamentos,
              medicamentos e procedimentos frequentemente negados por planos de saúde e pelo Estado.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Com abordagem humanizada e técnica refinada, o Dr. Denis Carvalho utiliza todas
              as medidas judiciais e extrajudiciais disponíveis — <strong className="text-gray-800">tutelas de urgência,
              liminares, notificações e ações específicas</strong> — para que cada paciente tenha
              acesso ao cuidado que necessita, com rapidez e eficiência.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#c9a227' }} />
                  <span className="text-gray-700 text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Specialties */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {specialties.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 shadow-sm border border-gray-100 hover:border-yellow-300 transition-colors duration-200"
                >
                  <Icon size={16} style={{ color: '#1e3a5f' }} />
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5564999452151?text=Ol%C3%A1%20Dr.%20Denis%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
            >
              <Scale size={18} />
              Falar com o Dr. Denis
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
