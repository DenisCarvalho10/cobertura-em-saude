'use client';

import { MessageCircle, Phone, Mail, MapPin, Shield, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const WHATSAPP = 'https://wa.me/5562992586422?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20com%20o%20escrit%C3%B3rio.';

const quickLinks = [
  { label: 'Início', href: '#' },
  { label: 'Nossos Serviços', href: '#servicos' },
  { label: 'Sobre o Dr. Denis', href: '#sobre' },
  { label: 'Autismo / TEA', href: '#autismo' },
  { label: 'Medicamentos', href: '#medicamentos' },
  { label: 'Fundamentos Jurídicos', href: '#fundamentos' },
  { label: 'Perguntas Frequentes', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

const areas = [
  'Negativa de Cirurgia',
  'Tratamento para Autismo (TEA)',
  'Medicamentos de Alto Custo',
  'Internação e UTI Negada',
  'Home Care Negado',
  'SUS e Poder Público',
  'Reajuste Abusivo',
  'Cancelamento de Plano',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#060f1c' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Logo & Info */}
          <div className="lg:col-span-1">
            <div className="relative w-48 h-14 mb-5">
              <Image
                src="/logo.png"
                alt="Denis Carvalho Advocacia"
                fill
                className="object-contain object-left brightness-200"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Atuação em Direito Médico e Saúde Suplementar.
              Defesa do paciente em casos de negativa de cobertura de tratamentos,
              medicamentos e procedimentos.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <MessageCircle size={15} />
                <span>(62) 99258-6422</span>
              </a>
              <a
                href="tel:+5562992586422"
                className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm"
              >
                <Phone size={15} />
                <span>(62) 99258-6422</span>
              </a>
              <a
                href="mailto:contato@deniscarvalhoadvocacia.com.br"
                className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm"
              >
                <Mail size={15} />
                <span>contato@deniscarvalhoadvocacia.com.br</span>
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={15} />
                <span>Atendimento Online — Brasil Inteiro</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/coberturaemsaude"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @coberturaemsaude"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110"
                style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/denis-carvalho-dos-santos-vieira-0546294b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Denis Carvalho"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110"
                style={{ background: '#0A66C2' }}
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm uppercase tracking-widest"
              style={{ color: '#c9a227' }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-yellow-400 transition-colors text-sm flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-600/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Areas of Practice */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm uppercase tracking-widest"
              style={{ color: '#c9a227' }}
            >
              Áreas de Atuação
            </h4>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area} className="text-white/50 text-sm flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-yellow-600/50 flex-shrink-0 mt-1.5" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - LGPD & Legal */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm uppercase tracking-widest"
              style={{ color: '#c9a227' }}
            >
              Legal & Privacidade
            </h4>
            <div className="space-y-3 mb-6">
              <a href="/privacidade" className="flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm transition-colors">
                <ExternalLink size={13} />
                Política de Privacidade
              </a>
              <a href="/termos" className="flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm transition-colors">
                <ExternalLink size={13} />
                Termos de Uso
              </a>
              <a href="/lgpd" className="flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm transition-colors">
                <ExternalLink size={13} />
                LGPD — Proteção de Dados
              </a>
            </div>

            {/* LGPD badge */}
            <div
              className="rounded-xl p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield size={14} style={{ color: '#c9a227' }} />
                <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">LGPD Compliant</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Seus dados são protegidos de acordo com a Lei Geral de Proteção de Dados (Lei 13.709/18).
                Total sigilo e confidencialidade em todas as comunicações.
              </p>
            </div>

            {/* OAB notice */}
            <div className="mt-4">
              <p className="text-white/30 text-xs leading-relaxed">
                Este site tem caráter informativo e não constitui consulta jurídica.
                As informações divulgadas obedecem ao Código de Ética e Disciplina da OAB.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center md:text-left">
            © {year} Denis Carvalho Advocacia — Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs text-center">
            <a href="https://www.coberturaemsaude.com.br" className="hover:text-yellow-400 transition-colors">
              www.coberturaemsaude.com.br
            </a>
          </p>
          <div className="flex items-center gap-1 text-white/30 text-xs">
            <span>Desenvolvido com</span>
            <span className="text-red-400">♥</span>
            <span>para defender pacientes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
