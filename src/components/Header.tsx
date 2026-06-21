'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';

const WHATSAPP = 'https://wa.me/5562992586422?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20com%20o%20escrit%C3%B3rio.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Nossos Serviços', href: '#servicos' },
    { label: 'Sobre o Dr. Denis', href: '#sobre' },
    { label: 'Autismo', href: '#autismo' },
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: scrolled ? 'none' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'none' : 'blur(8px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.12)' : '0 1px 6px rgba(0, 0, 0, 0.06)',
        paddingTop: scrolled ? '0.5rem' : '0.75rem',
        paddingBottom: scrolled ? '0.5rem' : '0.75rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="relative w-44 h-11 md:w-52 md:h-12">
              <Image
                src="/logo.png"
                alt="Denis Carvalho Advocacia"
                fill
                className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#0d1f35]/85 hover:text-[#c9a227] transition-colors duration-200 text-sm font-semibold tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 text-sm shadow-lg"
            >
              <Phone size={15} fill="white" />
              <span>(62) 99258-6422</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#0d1f35] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t mt-2" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(0, 0, 0, 0.08)' }}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[#0d1f35]/85 hover:text-[#c9a227] py-2 text-base font-semibold border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-full mt-4 text-base"
            >
              <Phone size={16} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
