'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WHATSAPP = 'https://wa.me/5562992586422?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20an%C3%A1lise%20do%20meu%20caso.';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-[230px]"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={11} />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-gray-800">Dr. Denis disponível</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              Plano negou seu tratamento? Fale agora — análise gratuita!
            </p>
            <div
              className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse"
        style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* WhatsApp SVG icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.495 2.033 7.808L0 32l8.385-2.001A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
            fill="white"
            fillOpacity="0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.001 2.667C8.637 2.667 2.668 8.636 2.668 16c0 2.894.897 5.58 2.43 7.793L3.46 28.235l4.66-1.624A13.261 13.261 0 0016 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.969-13.333-13.332-13.333z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.133 10.133c-.266-.6-.547-.612-.8-.622-.207-.008-.444-.008-.682-.008-.237 0-.622.089-.948.444-.326.356-1.244 1.215-1.244 2.963 0 1.748 1.274 3.437 1.452 3.674.178.237 2.459 3.941 6.074 5.363 3.002 1.185 3.615 1.948 4.267.948.652-1 .652-1.853.474-1.953-.178-.1-1.274-.648-1.452-.727-.178-.08-.356 0-.474.178-.296.415-.533.742-.8 1.038-.207.23-.533.282-.8.178-.89-.356-1.659-.83-2.311-1.452a9.108 9.108 0 01-1.6-2.074c-.118-.237 0-.415.089-.533.267-.326.533-.652.74-.948.118-.178.059-.415-.03-.593l-.955-2.296z"
            fill="#25d366"
          />
        </svg>
      </motion.a>
    </div>
  );
}
