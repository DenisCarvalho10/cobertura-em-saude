'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home, Stethoscope, HeartPulse, Gavel, CheckCircle, AlertCircle,
  MessageCircle, ChevronDown, FileText, Users,
} from 'lucide-react';
import { SectionTitle, Contato } from './TeaContent';
import { homecareFaqs as faqs } from '@/lib/faq-data';

const ACCENT = '#2e8b63';
const NAVY = '#0d1f35';

const WHATSAPP =
  'https://wa.me/5562992565904?text=' +
  encodeURIComponent('Olá, vim pela página de home care e gostaria de uma orientação sobre uma negativa.');

const quando = [
  { icon: Stethoscope, t: 'Indicação do médico assistente', d: 'O home care é devido quando o médico que acompanha o caso o prescreve como necessário, com equipe, equipamentos e frequência definidos.' },
  { icon: Home, t: 'Substituição da internação', d: 'Quando o atendimento domiciliar substitui uma internação hospitalar que o plano teria de cobrir, a lógica é a continuidade do cuidado.' },
  { icon: HeartPulse, t: 'Continuidade do tratamento', d: 'Em quadros crônicos, pós-cirúrgicos ou de reabilitação, a interrupção do cuidado domiciliar expõe o paciente a riscos.' },
];

const cobre = [
  'Equipe técnica de saúde prescrita (enfermagem, fisioterapia, fonoaudiologia)',
  'Equipamentos necessários (cama hospitalar, oxigênio, bombas de infusão)',
  'Medicamentos e insumos de uso no atendimento domiciliar',
  'Visitas e acompanhamento conforme a prescrição médica',
];

const familia = [
  'Cuidador leigo (acompanhante) para a rotina diária, em regra',
  'Adaptações gerais da casa não ligadas ao tratamento',
  'Despesas pessoais do dia a dia do paciente',
];

const negativas = [
  '"Home care não está previsto no contrato."',
  '"Atendimento domiciliar não consta no rol da ANS."',
  '"O cuidado é responsabilidade da família."',
  'Redução unilateral das horas de enfermagem prescritas.',
  'Troca da equipe por outra sem a qualificação indicada.',
  'Descredenciamento ou corte do home care já em curso.',
];

const passos = [
  ['Análise do caso', 'A família envia o relatório médico, a prescrição e a negativa pelo WhatsApp.'],
  ['Verificação do contrato', 'Avaliamos o contrato, a cobertura e a relação do home care com a internação.'],
  ['Orientação documental', 'Indicamos o que o relatório médico deve conter: equipe, equipamentos, frequência e a justificativa clínica.'],
  ['Notificação ou pedido administrativo', 'Quando cabível, formalizamos o pedido à operadora e registramos reclamação na ANS.'],
  ['Medida judicial, quando necessária', 'Ação com pedido de tutela de urgência, especialmente quando o tratamento já estava em curso.'],
  ['Acompanhamento', 'Seguimos o caso para garantir a continuidade do cuidado ao longo do tempo.'],
];

const documentos = [
  'Relatório médico detalhado: necessidade do home care, equipe, equipamentos e frequência',
  'Prescrição do médico assistente',
  'Negativa da operadora por escrito, com protocolo',
  'Contrato e carteirinha do plano de saúde',
  'Exames e laudos que comprovem o quadro clínico',
  'Documentos do paciente e do responsável legal',
];

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-start justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown size={20} className="flex-shrink-0 mt-1 transition-transform" style={{ color: ACCENT, transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      {open && <p className="text-gray-600 text-sm leading-relaxed pb-5 -mt-1">{a}</p>}
    </div>
  );
}

export default function HomecareContent() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4" style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 50%, #162d4a 100%)' }}>
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }} />
        <div className="max-w-5xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase" style={{ background: 'rgba(46,139,99,0.2)', color: '#a9e0c6' }}>
              <Home size={18} />
              Direito à Saúde · Home Care
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              O plano negou o home care?<br />
              <span style={{ color: '#fbbf24' }}>Conheça os direitos do paciente</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Quando o atendimento domiciliar é indicado pelo médico e substitui a internação, a negativa
              costuma ser questionável. Entenda o que a lei e os tribunais garantem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)', color: NAVY }}>
                <MessageCircle size={18} fill={NAVY} />
                Falar pelo WhatsApp
              </a>
              <a href="#faq-hc" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-7 py-3.5 rounded-full border border-white/30 transition-colors hover:bg-white/10">
                Tirar minhas dúvidas
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">Atendimento online em todo o Brasil · Atuação exclusiva em Direito Médico e da Saúde</p>
          </motion.div>
        </div>
      </section>

      {/* QUANDO É DEVIDO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle accent={ACCENT} title="Quando o home care é devido" sub="O atendimento domiciliar não é um favor: é a continuidade do tratamento, quando há indicação clínica." />
          <div className="grid md:grid-cols-3 gap-6">
            {quando.map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(46,139,99,0.1)', color: ACCENT }}><Icon size={24} /></div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>{t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE DIZ A JUSTIÇA */}
      <section className="py-16 px-4" style={{ background: '#f0faf5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-10 text-white" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}>
            <div className="flex items-center gap-3 mb-5">
              <Gavel size={26} style={{ color: '#fbbf24' }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#fbbf24' }}>O que entendem os tribunais</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Indicado pelo médico, o home care não pode ser simplesmente recusado
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              A <strong>Súmula 90 do TJSP</strong> firma que, havendo expressa indicação médica para a
              internação domiciliar (home care), não prevalece a negativa de cobertura. E a
              <strong> Súmula 302 do STJ</strong> considera abusiva a cláusula que limita o tempo de
              internação do segurado — raciocínio aplicado à continuidade do cuidado domiciliar.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Aos planos aplica-se o Código de Defesa do Consumidor (Súmula 608 do STJ): cláusulas que
              esvaziam a finalidade do contrato são consideradas abusivas.
            </p>
          </div>
        </div>
      </section>

      {/* COBRE x FAMÍLIA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle accent={ACCENT} title="O que o plano cobre e o que é da família" sub="Uma distinção que evita conflitos: o plano cobre o cuidado técnico; a rotina do dia a dia fica com a família." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24' }}><HeartPulse size={24} /></div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>Em regra, o plano cobre</h3>
              </div>
              <ul className="space-y-3">
                {cobre.map((i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} /><span className="text-gray-600 text-sm leading-relaxed">{i}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(46,139,99,0.1)', color: ACCENT }}><Users size={24} /></div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>Em regra, fica com a família</h3>
              </div>
              <ul className="space-y-3">
                {familia.map((i) => (
                  <li key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: ACCENT }} /><span className="text-gray-600 text-sm leading-relaxed">{i}</span></li>
                ))}
              </ul>
              <p className="text-gray-400 text-xs mt-5 leading-relaxed">A distinção depende da prescrição e do caso concreto; quando a presença técnica é necessária, ela é do plano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEGATIVAS */}
      <section className="py-16 px-4" style={{ background: '#f0faf5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-10 text-white" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={24} style={{ color: '#fbbf24' }} />
              <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}>Situações comuns de negativa</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {negativas.map((item) => (
                <div key={item} className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2" /><span className="text-white/80 text-sm leading-relaxed">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle accent={ACCENT} title="Como funciona o atendimento" sub="Do primeiro contato à continuidade do cuidado." />
          <div className="space-y-4">
            {passos.map(([t, d], i) => (
              <div key={t} className="flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24', fontFamily: 'Playfair Display, serif' }}>{i + 1}</div>
                <div><h3 className="font-bold text-gray-900 mb-1">{t}</h3><p className="text-gray-500 text-sm leading-relaxed">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="py-20 px-4" style={{ background: '#f8fafc' }}>
        <div className="max-w-4xl mx-auto">
          <SectionTitle accent={ACCENT} title="Documentos importantes" sub="O relatório médico detalhado é a peça central do pedido." />
          <div className="grid md:grid-cols-2 gap-4">
            {documentos.map((d) => (
              <div key={d} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <FileText size={18} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-gray-600 text-sm leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-hc" className="py-20 px-4" style={{ background: '#f0faf5' }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle accent={ACCENT} title="Perguntas frequentes" sub="" />
          <div className="bg-white rounded-2xl px-6 md:px-8 shadow-sm border border-gray-100">
            {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <Contato accent={ACCENT} whatsapp={WHATSAPP} links={[['/paciente-com-cancer', 'Paciente com câncer'], ['/reajuste-abusivo', 'Reajuste abusivo']]} />
    </div>
  );
}
