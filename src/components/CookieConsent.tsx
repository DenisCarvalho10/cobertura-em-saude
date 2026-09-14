'use client';

import { useEffect, useState } from 'react';

/**
 * Banner de consentimento de cookies (LGPD) + LinkedIn Insight Tag.
 * O Insight Tag (rastreamento/retargeting do LinkedIn Ads) só é carregado
 * DEPOIS que o usuário aceita os cookies.
 */

const CONSENT_KEY = 'ces_cookie_consent';
const LINKEDIN_PARTNER_ID = '10882153';

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: { (a: unknown, b: unknown): void; q: unknown[][] };
  }
}

let liLoaded = false;
function loadLinkedInInsight() {
  if (liLoaded || typeof window === 'undefined') return;
  liLoaded = true;
  window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);
  if (!window.lintrk) {
    const fn = ((a: unknown, b: unknown) => {
      fn.q.push([a, b]);
    }) as { (a: unknown, b: unknown): void; q: unknown[][] };
    fn.q = [];
    window.lintrk = fn;
  }
  const s = document.getElementsByTagName('script')[0];
  const b = document.createElement('script');
  b.type = 'text/javascript';
  b.async = true;
  b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  s.parentNode?.insertBefore(b, s);
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem(CONSENT_KEY);
    } catch {
      /* localStorage indisponível */
    }
    if (consent === 'accepted') {
      loadLinkedInInsight();
    } else if (!consent) {
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  function decide(val: 'accepted' | 'rejected') {
    try {
      localStorage.setItem(CONSENT_KEY, val);
    } catch {
      /* ignore */
    }
    setShow(false);
    if (val === 'accepted') loadLinkedInInsight();
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-xl border border-white/10 bg-navy-900 p-4 text-sm text-white shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-white/85">
          Usamos cookies para melhorar sua experiência e analisar o tráfego do
          site. Ao aceitar, você concorda com nossa{' '}
          <a
            href="/privacidade"
            className="underline underline-offset-2 hover:text-gold-400"
          >
            Política de Privacidade
          </a>
          , conforme a LGPD.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide('rejected')}
            className="rounded-lg border border-white/25 px-4 py-2 font-medium text-white/90 transition hover:bg-white/10"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="rounded-lg bg-gold-500 px-4 py-2 font-semibold text-navy-900 transition hover:bg-gold-400"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
