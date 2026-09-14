import type { ReactNode } from 'react';

/**
 * Seção AdvX — mostra o sistema próprio do escritório (advx.tech) como
 * diferencial de confiança: cuida e monitora os processos do cliente.
 */

type Item = { title: string; text: string; icon: ReactNode };

const items: Item[] = [
  {
    title: 'Prazos monitorados',
    text: 'Acompanhamento dos andamentos e alertas automáticos de datas críticas.',
    icon: (
      <svg className="mt-0.5 h-[22px] w-[22px] flex-shrink-0 text-[#C9A24B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Transparência total',
    text: 'Você acompanha o andamento do seu caso em linguagem clara, sem juridiquês.',
    icon: (
      <svg className="mt-0.5 h-[22px] w-[22px] flex-shrink-0 text-[#C9A24B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Sempre disponível',
    text: 'Canais de atendimento monitorados para o seu contato nunca ficar sem resposta.',
    icon: (
      <svg className="mt-0.5 h-[22px] w-[22px] flex-shrink-0 text-[#C9A24B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Segurança e sigilo',
    text: 'Seus dados protegidos conforme a LGPD e o sigilo profissional.',
    icon: (
      <svg className="mt-0.5 h-[22px] w-[22px] flex-shrink-0 text-[#C9A24B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function AdvX() {
  return (
    <section
      id="advx"
      className="relative overflow-hidden py-20 text-white md:py-24"
      style={{ background: 'linear-gradient(160deg,#091d33,#060f1c)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(620px 320px at 24% 42%, rgba(201,162,75,.16), transparent 70%)' }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/advx-logo.png"
            alt="AdvX — sistema de acompanhamento e monitoramento de processos do escritório"
            className="w-[300px] max-w-full md:w-[430px]"
            style={{ mixBlendMode: 'lighten', filter: 'drop-shadow(0 14px 44px rgba(0,0,0,.55))' }}
          />
        </div>
        <div>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#E3C77E] before:h-[2px] before:w-8 before:bg-[#E3C77E] before:content-['']">
            Tecnologia a serviço do seu caso
          </span>
          <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
            Seu processo acompanhado de perto pelo <span className="text-[#E3C77E]">AdvX</span>
          </h2>
          <p className="mb-7 mt-3 max-w-xl leading-relaxed text-[#c7d3e1] md:text-lg">
            O escritório opera com o <strong>AdvX</strong>, um sistema próprio que organiza e monitora cada
            processo do início ao fim — para que nenhum prazo passe despercebido e você tenha total
            transparência e segurança sobre o andamento do seu caso.
          </p>
          <ul className="mb-8 grid gap-5 sm:grid-cols-2">
            {items.map((it) => (
              <li key={it.title} className="flex items-start gap-3">
                {it.icon}
                <div>
                  <strong className="block text-white">{it.title}</strong>
                  <span className="text-sm leading-snug text-[#9fb0c4]">{it.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="https://www.advx.tech/sobre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3 font-bold text-[#091d33] shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#E3C77E,#C9A24B 55%,#A9822F)' }}
          >
            Conheça o AdvX
          </a>
        </div>
      </div>
    </section>
  );
}
