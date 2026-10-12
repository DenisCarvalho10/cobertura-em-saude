'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Ribbon, CheckCircle, Calendar, Stethoscope, Pill, HeartPulse,
  Landmark, Scale, ShieldCheck, FileText, MessageCircle, Download, BookOpen,
} from 'lucide-react';

const ACCENT = '#be5a7e'; // rosa sóbrio (laço de conscientização), usado com parcimônia
const NAVY = '#0d1f35';

const WHATSAPP =
  'https://wa.me/5562992565904?text=' +
  encodeURIComponent('Olá, vim pela página de direitos do paciente com câncer e gostaria de uma orientação.');

const EBOOK_FILE = '/ebook-direitos-paciente-cancer.pdf';

// ---------------------------------------------------------------- dados

const jornada = [
  {
    icon: Calendar,
    fase: 'Suspeita diagnóstica',
    texto: 'A investigação não pode esperar. No SUS, há prazo legal para a realização dos exames quando há suspeita de câncer; no plano, exames de estadiamento e testes genéticos têm cobertura.',
    marco: 'Lei 13.896/2019 — exames em até 30 dias (SUS)',
  },
  {
    icon: Stethoscope,
    fase: 'Diagnóstico confirmado',
    texto: 'Confirmado o diagnóstico, o tratamento tem prazo para começar. É também o momento de conhecer todos os direitos e, por exemplo, sacar o FGTS.',
    marco: 'Lei 12.732/2012 — início em até 60 dias (SUS)',
  },
  {
    icon: Pill,
    fase: 'Tratamento',
    texto: 'Quimioterapia (inclusive oral em casa), radioterapia, cirurgia, imunoterapia e terapias-alvo. Medicamentos fora do rol ou não incorporados ao SUS podem ser buscados, com a documentação certa.',
    marco: 'Lei 14.454/2022 e ADI 7265 · Temas 6 e 1234 (STF)',
  },
  {
    icon: HeartPulse,
    fase: 'Reabilitação',
    texto: 'Reconstrução mamária, próteses, fisioterapia e terapia nutricional. Quando a doença deixa sequela que caracteriza deficiência, surgem isenções — inclusive na compra de veículo.',
    marco: 'Leis 10.223/2001, 12.802/2013 e 13.770/2018',
  },
  {
    icon: ShieldCheck,
    fase: 'Sobrevivência e cronificação',
    texto: 'Direitos que seguem com você: isenção e restituição do Imposto de Renda sobre aposentadoria e pensão, manutenção do plano e proteção contra recusa indevida em seguros.',
    marco: 'Lei 7.713/1988 · Súmulas 598 e 627 (STJ)',
  },
  {
    icon: Scale,
    fase: 'Cuidados paliativos e planejamento',
    texto: 'Dignidade em todas as fases: home care, diretivas antecipadas de vontade, seguro de vida, previdência privada e organização patrimonial para a família.',
    marco: 'Resolução CFM 1.995/2012 · Lei 14.758/2023',
  },
];

const matriz = [
  {
    icon: ShieldCheck,
    titulo: 'No plano de saúde',
    itens: [
      'Cobertura de quimioterapia, radioterapia e cirurgia oncológica',
      'Quimioterapia oral de uso domiciliar',
      'Tratamento fora do rol da ANS, cumpridos os requisitos legais',
      'Respeito aos prazos máximos de atendimento',
      'Manutenção da cobertura em tratamento, mesmo após rescisão do plano',
      'Reconstrução mamária e simetrização',
      'Home care quando substitui a internação',
    ],
  },
  {
    icon: Stethoscope,
    titulo: 'No SUS',
    itens: [
      'Exames diagnósticos em até 30 dias na suspeita de câncer',
      'Início do tratamento em até 60 dias após o diagnóstico',
      'Medicamentos de alto custo e não incorporados, em casos excepcionais',
      'Tratamento Fora de Domicílio (TFD): transporte, ajuda de custo e acompanhante',
      'Programa de navegação da pessoa com câncer',
    ],
  },
  {
    icon: Landmark,
    titulo: 'Dinheiro e patrimônio',
    itens: [
      'Isenção e restituição de Imposto de Renda sobre aposentadoria e pensão',
      'Isenções na compra de veículo (quando há deficiência) e no IPVA',
      'Quitação do financiamento do imóvel pelo seguro habitacional',
      'Seguro de vida, prestamista e previdência privada',
      'Saque do FGTS e do PIS/PASEP',
      'Prioridade na tramitação de processos',
    ],
  },
  {
    icon: HeartPulse,
    titulo: 'Benefícios e cuidado',
    itens: [
      'Auxílio por incapacidade e aposentadoria, sem carência para neoplasia maligna',
      'Acréscimo de 25% na aposentadoria por incapacidade permanente',
      'Benefício de Prestação Continuada (BPC/LOAS), conforme a renda',
      'Proteção contra dispensa discriminatória no trabalho',
      'Diretivas antecipadas de vontade e cuidados paliativos',
    ],
  },
];

const marcos = [
  {
    tag: 'STF · 2025',
    titulo: 'Cobertura fora do rol da ANS (ADI 7265)',
    texto: 'O Supremo confirmou que o plano pode ser obrigado a cobrir tratamento fora do rol — mas fixou requisitos. Na prática, o relatório médico detalhado e a comprovação científica passaram a fazer toda a diferença no pedido.',
  },
  {
    tag: 'STF · 2024',
    titulo: 'Medicamentos pelo SUS (Temas 6 e 1234)',
    texto: 'Medicamentos registrados na Anvisa e ainda não incorporados ao SUS podem ser obtidos pela Justiça em situações excepcionais, com critérios. Definir corretamente contra quem e onde processar virou a primeira decisão do caso.',
  },
  {
    tag: 'Leis recentes',
    titulo: 'Política e Estatuto da Pessoa com Câncer',
    texto: 'A Lei 14.758/2023 criou a Política Nacional de Prevenção e Controle do Câncer e o programa de navegação do paciente; o Estatuto da Pessoa com Câncer (Lei 14.238/2021) reforça direitos. São a base que sustenta os pedidos.',
  },
];

// ---------------------------------------------------------------- componente

export default function OncologiaContent() {
  const [sent, setSent] = useState(false);

  const baixarEbook = (e: FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const nome = String(fd.get('nome') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const hp = String(fd.get('website') || '');

    try {
      const attrib =
        (window as unknown as { ADVX_ATTRIB?: Record<string, string> }).ADVX_ATTRIB || {};
      const dados: Record<string, unknown> = {
        nome, email, website: hp,
        area: 'saude-oncologia',
        origem: 'E-book: Direitos da Pessoa com Cancer (site cobertura)',
      };
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'landing_page', 'referrer', 'fbclid', 'gclid']
        .forEach((k) => { if (attrib[k]) dados[k] = attrib[k]; });
      if (!dados.landing_page) dados.landing_page = location.href.split('#')[0];
      fetch('https://www.vivjus.com.br/api/lead-site', {
        method: 'POST',
        headers: { 'content-type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(dados),
        keepalive: true,
        mode: 'cors',
      }).catch(() => {});
    } catch { /* não bloqueia a entrega */ }

    const a = document.createElement('a');
    a.href = EBOOK_FILE;
    a.download = 'Guia-Direitos-da-Pessoa-com-Cancer-Denis-Carvalho.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setSent(true);
  };

  return (
    <div className="bg-white">
      {/* ---------------- HERO ---------------- */}
      <section
        className="relative overflow-hidden pt-32 pb-20 px-4"
        style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 50%, #162d4a 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-[32rem] h-[32rem] opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }}
        />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(190,90,126,0.18)', color: '#f0c3d4' }}
            >
              <Ribbon size={18} />
              Direito à Saúde · Paciente Oncológico
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Direitos do Paciente<br />
              <span style={{ color: '#fbbf24' }}>com Câncer</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              O diagnóstico de câncer traz muitas perguntas — e a lei garante mais direitos do que
              se imagina, em cada fase da jornada. Esta página reúne, de forma clara, o que você
              pode exigir do plano de saúde, do SUS e além.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href="#jornada"
                className="inline-flex items-center justify-center gap-2 font-bold text-white px-7 py-3.5 rounded-full transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)', color: NAVY }}
              >
                Conhecer os direitos
              </a>
              <a
                href="#guia"
                className="inline-flex items-center justify-center gap-2 font-semibold text-white px-7 py-3.5 rounded-full border border-white/30 transition-colors hover:bg-white/10"
              >
                <BookOpen size={18} />
                Baixar o guia gratuito
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- INTRO SÓBRIA ---------------- */}
      <section className="py-16 px-4" style={{ background: '#f8fafc' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Entre tratamentos, exames e decisões, o paciente e a família raramente têm tempo de
            estudar a legislação. O papel da assessoria jurídica é <strong>traduzir os direitos em
            passos concretos</strong> e cuidar da parte burocrática — para que a energia fique onde
            importa: o cuidado com a saúde. O conteúdo abaixo é informativo e não substitui a
            análise do seu caso.
          </p>
        </div>
      </section>

      {/* ---------------- JORNADA ---------------- */}
      <section id="jornada" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
              A jornada do paciente, fase a fase
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Cada etapa tem direitos e prazos próprios. Saber o que cabe em cada momento ajuda a
              não perder oportunidades.
            </p>
            <div className="w-20 h-1 mx-auto mt-5 rounded-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, #fbbf24)` }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jornada.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.fase}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(190,90,126,0.1)', color: ACCENT }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase" style={{ color: ACCENT }}>
                      Fase {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
                    {f.fase}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{f.texto}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-xs font-semibold" style={{ color: '#9a7a1f' }}>{f.marco}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- MATRIZ DE DIREITOS ---------------- */}
      <section className="py-20 px-4" style={{ background: '#f0f4ff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
              Seus direitos, organizados
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Reunimos as principais garantias em quatro frentes. A aplicação a cada caso depende da
              situação concreta, mas conhecê-las é o primeiro passo.
            </p>
            <div className="w-20 h-1 mx-auto mt-5 rounded-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, #fbbf24)` }} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {matriz.map((grupo, i) => {
              const Icon = grupo.icon;
              return (
                <motion.div
                  key={grupo.titulo}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24' }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
                      {grupo.titulo}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {grupo.itens.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- MARCOS RECENTES ---------------- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
              O que mudou — e por que a prova importa
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Decisões recentes do STF elevaram o padrão de prova nas ações de cobertura e de
              medicamentos. A tese continua possível; o preparo técnico é que faz a diferença.
            </p>
            <div className="w-20 h-1 mx-auto mt-5 rounded-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, #fbbf24)` }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {marcos.map((m, i) => (
              <motion.div
                key={m.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-7 text-white"
                style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
              >
                <span
                  className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4"
                  style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24' }}
                >
                  {m.tag}
                </span>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {m.titulo}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{m.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- COMO A ASSESSORIA ATUA ---------------- */}
      <section className="py-20 px-4" style={{ background: '#f8fafc' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
              Como a assessoria atua
            </h2>
            <div className="w-20 h-1 mx-auto mt-5 rounded-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, #fbbf24)` }} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(190,90,126,0.1)', color: ACCENT }}>
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
                Orientar e preparar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Um diagnóstico jurídico da sua situação — quais direitos se aplicam, quais documentos
                reunir (relatório médico, laudo, negativa por escrito) e qual o melhor caminho. Muitas
                questões se resolvem na via administrativa, sem processo.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(190,90,126,0.1)', color: ACCENT }}>
                <Scale size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
                Atuar quando necessário
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Diante de negativa ou demora que coloque o tratamento em risco, cabe a atuação
                judicial, inclusive com pedido de urgência. Cada caso é analisado individualmente,
                com transparência sobre viabilidade e riscos — sem promessa de resultado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- E-BOOK ---------------- */}
      <section id="guia" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden grid md:grid-cols-2"
            style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
          >
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4" style={{ color: '#fbbf24' }}>
                <BookOpen size={20} />
                <span className="text-sm font-semibold tracking-widest uppercase">E-book gratuito</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Guia dos Direitos da Pessoa com Câncer
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-2">
                Um guia prático, organizado pela jornada do tratamento, com os direitos no plano,
                no SUS e nas áreas tributária e patrimonial — em linguagem acessível.
              </p>
              <p className="text-xs font-semibold mb-6" style={{ color: '#fbbf24' }}>PDF · 20 páginas</p>

              {!sent ? (
                <form onSubmit={baixarEbook} className="space-y-3">
                  <input
                    type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                  />
                  <input
                    type="text" name="nome" required placeholder="Seu nome"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none"
                  />
                  <input
                    type="email" name="email" required placeholder="Seu melhor e-mail"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-yellow-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl transition-transform hover:scale-[1.02]"
                    style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)', color: NAVY }}
                  >
                    <Download size={18} />
                    Quero o guia gratuito
                  </button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle size={40} className="mx-auto mb-3" style={{ color: '#4ade80' }} />
                  <p className="text-white font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Pronto!</p>
                  <p className="text-white/70 text-sm">
                    O download começou. Se não iniciar,{' '}
                    <a href={EBOOK_FILE} download className="underline" style={{ color: '#fbbf24' }}>clique aqui</a>.
                  </p>
                </div>
              )}
              <p className="text-white/40 text-xs mt-4">
                Envio imediato · sem custo · seus dados protegidos pela LGPD.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center p-12" style={{ background: 'rgba(190,90,126,0.12)' }}>
              <div className="text-center">
                <Ribbon size={72} style={{ color: ACCENT }} className="mx-auto mb-4" />
                <p className="text-white/50 text-sm max-w-xs">
                  Informação clara é a primeira defesa do paciente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTATO ---------------- */}
      <section id="contato-onco" className="py-20 px-4" style={{ background: '#f8fafc' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
            Precisa de orientação?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Se você ou alguém da família enfrenta uma negativa, demora ou dúvida sobre direitos no
            tratamento do câncer, fale com o escritório. O atendimento é sigiloso e sem compromisso.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            <MessageCircle size={20} fill="white" />
            Falar com o escritório
          </a>
          <p className="text-gray-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
            Conteúdo de caráter meramente informativo, em conformidade com o Código de Ética da OAB e
            o Provimento nº 205/2021. Não constitui consulta jurídica, oferta de serviços nem promessa
            de resultados. As referências legais têm finalidade educativa; cada caso é único e deve ser
            analisado individualmente.
          </p>
        </div>
      </section>
    </div>
  );
}
