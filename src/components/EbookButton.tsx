'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, Download, CheckCircle, MessageCircle } from 'lucide-react';

const EBOOK_FILE = '/ebook-plano-de-saude-negou.pdf';
const WHATSAPP =
  'https://wa.me/5562992586422?text=Ol%C3%A1%2C%20baixei%20o%20e-book%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20minha%20negativa.';

export default function EbookButton() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const a = document.createElement('a');
    a.href = EBOOK_FILE;
    a.download = 'Ebook-Plano-de-Saude-Negou-Denis-Carvalho.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setSent(true);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-2">
      {/* Card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-[290px]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={12} />
            </button>

            {!sent ? (
              <>
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen size={18} style={{ color: '#c9a227' }} />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: '#c9a227' }}
                  >
                    E-book gratuito
                  </span>
                </div>
                <h3
                  className="text-lg font-bold leading-snug mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
                >
                  Plano de saúde negou? Saiba o que fazer
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  Guia prático com seus direitos e o passo a passo em cada situação.
                  Baixe agora, é grátis.
                </p>
                <form onSubmit={handleSubmit} className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full text-sm px-3 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail"
                    className="w-full text-sm px-3 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 font-bold text-white py-2.5 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
                    style={{ background: 'linear-gradient(135deg, #c9a227, #d4af37)' }}
                  >
                    <Download size={16} />
                    Quero o e-book grátis
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-2">
                <CheckCircle size={34} className="mx-auto mb-2" style={{ color: '#16a34a' }} />
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
                >
                  Pronto!
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  Seu e-book está sendo baixado. Se o download não começar,{' '}
                  <a href={EBOOK_FILE} download className="underline" style={{ color: '#c9a227' }}>
                    clique aqui
                  </a>
                  .
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white py-2 px-4 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
                >
                  <MessageCircle size={15} />
                  Tirar uma dúvida
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Baixar e-book grátis"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full shadow-2xl text-white font-bold text-sm"
        style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', border: '1px solid rgba(201,162,39,0.5)' }}
      >
        <BookOpen size={18} style={{ color: '#fbbf24' }} />
        E-book grátis
      </motion.button>
    </div>
  );
}
