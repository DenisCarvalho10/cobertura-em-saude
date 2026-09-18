'use client';

import { useEffect, useState } from 'react';

/**
 * Banner de consentimento de cookies (LGPD) + LinkedIn Insight Tag.
 * O Insight Tag (rastreamento/retargeting do LinkedIn Ads) só é carregado
 * DEPOIS que o usuário aceita os cookies.
 */

const CONSENT_KEY = 'ces_cookie_consent';
const LINKEDIN_PARTNER_ID = '10882153';
const META_PIXEL_ID = '1637180061387534';

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: { (a: unknown, b: unknown): void; q: unknown[][] };
    gtag?: (...args: unknown[]) => void;
    fbq?: { (...args: unknown[]): void; callMethod?: (...a: unknown[]) => void; queue: unknown[][]; push?: unknown; loaded?: boolean; version?: string };
    _fbq?: unknown;
  }
}

// Libera o consentimento de anúncio/analytics do Google (Consent Mode v2).
function grantAdsConsent() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });
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

/**
 * Pixel da Meta — mesma trava do LinkedIn Insight Tag: só carrega DEPOIS do
 * aceite. Rastreador de terceiro na página antes disso é tratamento de dado sem
 * base legal (LGPD).
 *
 * Difere do Google DE PROPÓSITO: o gtag fica no layout com Consent Mode v2 e
 * consentimento negado por padrão (modela a conversão sem cookie). A Meta não
 * tem equivalente — ou o Pixel está na página, ou não está.
 */
let fbLoaded = false;
function loadMetaPixel() {
  if (fbLoaded || typeof window === 'undefined') return;
  fbLoaded = true;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  (function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable @typescript-eslint/no-explicit-any */
  try {
    window.fbq?.('init', META_PIXEL_ID);
    window.fbq?.('track', 'PageView');
  } catch {
    /* ignore */
  }
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
      loadMetaPixel();
      grantAdsConsent();
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
    if (val === 'accepted') {
      loadLinkedInInsight();
      loadMetaPixel();
      grantAdsConsent();
    }
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
