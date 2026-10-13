'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Pill, CheckCircle, ShieldCheck, Building2, MessageCircle,
  AlertCircle, ChevronDown, ClipboardList,
} from 'lucide-react';
import { SectionTitle, Contato } from './TeaContent';
import { medFaqs as faqs } from '@/lib/faq-data';

const ACCENT = '#1abc9c';
const NAVY = '#0d1f35';

const WHATSAPP =
  'https://wa.me/5562992565904?text=' +
  encodeURIComponent('Olá, vim pela página de medicamentos de alto custo e gostaria de uma orientação.');

const quemPrecisa = [
  ['Pacientes oncológicos', 'Imunoterapia, terapia-alvo ou quimioterapia oral.', '/paciente-com-cancer'],
  ['Pessoas com doenças raras', 'Medicamentos órfãos (doença de Fabry, Gaucher, atrofia muscular espinhal — AME).', ''],
  ['Doenças autoimunes e inflamatórias', 'Imunobiológicos (adalimumabe, secuquinumabe, dupilumabe, tocilizumabe).', ''],
  ['Epilepsia refratária, TEA ou dor crônica', 'Prescrição de canabidiol — a via mais viável para uso domiciliar costuma ser o SUS.', '/autismo-tea'],
  ['Prescrição de medicamento importado', 'Ou de uso fora da bula (off-label).', ''],
  ['Pacientes do SUS', 'Que não encontram o medicamento na farmácia de alto custo ou tiveram o pedido negado.', ''],
];

const plano = [
  'Medicamentos usados em internação, quimioterapia e procedimentos cobertos devem ser fornecidos pela operadora.',
  'Quimioterapia oral (antineoplásicos domiciliares) tem cobertura obrigatória prevista em lei (Lei 14.307/2022).',
  'Medicamento fora do Rol pode ser exigido em situações excepcionais — a ADI 7265 (STF, 2025) fixou cinco critérios.',
  'Uso off-label é discutido caso a caso, conforme as evidências para aquela indicação.',
  'Medicamentos de uso domiciliar que não sejam antineoplásicos, em regra, não têm cobertura obrigatória.',
  'Medicamentos sem registro na Anvisa, em regra, não podem ser exigidos do plano.',
];

const sus = [
  'Medicamentos já incorporados (RENAME ou protocolos — PCDT) devem ser fornecidos a quem se enquadra no protocolo.',
  'Registrados na Anvisa mas não incorporados podem ser concedidos judicialmente em caráter excepcional (Temas 6 e 1234, Súmulas Vinculantes 60 e 61).',
  'Sem registro na Anvisa, só em hipóteses muito restritas (demora irrazoável da Anvisa ou importação autorizada — Temas 500 e 1161).',
  'A responsabilidade é dividida entre União, Estado e Município conforme o componente da assistência farmacêutica.',
];

const criteriosPlano = [
  'Prescrição por médico ou dentista assistente habilitado.',
  'Ausência de negativa expressa da ANS e de análise pendente sobre a inclusão no Rol.',
  'Inexistência de alternativa terapêutica adequada já prevista no Rol.',
  'Comprovação de eficácia e segurança com base em evidências científicas de alto nível.',
  'Registro do medicamento na Anvisa.',
];

const criteriosSus = [
  'Pedido administrativo prévio, com negativa formal do poder público.',
  'Ilegalidade ou demora na análise do medicamento pela Conitec.',
  'Inexistência de substituto no SUS, descrito um a um (dose e tempo de uso).',
  'Eficácia comprovada por estudos de alto nível (ensaios randomizados, revisões ou meta-análises).',
  'Imprescindibilidade clínica, demonstrada em laudo médico detalhado.',
  'Incapacidade financeira do paciente para custear o tratamento.',
];

const negativas = [
  '"Medicamento não consta no Rol da ANS."',
  '"Uso off-label / tratamento experimental."',
  '"Medicamento de uso domiciliar não coberto."',
  '"Medicamento não padronizado no SUS."',
  '"Paciente não se enquadra no protocolo clínico (PCDT)."',
  'Demora sem resposta da operadora ou da Secretaria de Saúde.',
  'Falta do medicamento na farmácia de alto custo.',
  'Interrupção do fornecimento de tratamento que já estava em curso.',
];

const passos = [
  ['Análise inicial do caso', 'Você envia a prescrição, os laudos e a negativa (se houver) pelo WhatsApp.'],
  ['Enquadramento jurídico', 'Verificamos se o caminho é o plano ou o SUS e qual ente público ou operadora é responsável.'],
  ['Orientação documental', 'Indicamos ao paciente e ao médico quais informações o relatório precisa conter para atender aos critérios do STF.'],
  ['Pedido administrativo ou notificação', 'Quando necessário, formalizamos o pedido à operadora, à ANS ou à Secretaria de Saúde.'],
  ['Medida judicial, quando cabível', 'Ação com pedido de tutela de urgência, acompanhada de toda a fundamentação técnica.'],
  ['Acompanhamento', 'Seguimos o caso até o cumprimento da decisão, inclusive em caso de interrupção do fornecimento.'],
];

const documentos = [
  'Prescrição médica atualizada, com princípio ativo, dose e duração do tratamento',
  'Relatório detalhado: diagnóstico (CID), histórico, tratamentos já usados e por que não funcionaram, urgência e riscos',
  'Exames e laudos que comprovem o diagnóstico',
  'Negativa da operadora ou do SUS, por escrito (protocolo, e-mail ou carta)',
  'Carteirinha e contrato do plano de saúde (se for o caso)',
  'Cartão do SUS e comprovante de residência (se for o caso)',
  'Orçamento do medicamento',
  'Comprovantes de renda (exigidos nas ações contra o SUS)',
  'Estudos científicos indicados pelo médico, quando houver',
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

export default function MedicamentosContent() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4" style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 50%, #162d4a 100%)' }}>
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }} />
        <div className="max-w-5xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase" style={{ background: 'rgba(26,188,156,0.18)', color: '#a9ece0' }}>
              <Pill size={18} />
              Direito à Saúde · Medicamentos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Medicamento de alto custo negado?<br />
              <span style={{ color: '#fbbf24' }}>Conheça os direitos do paciente</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Plano de saúde ou poder público negou o medicamento prescrito? A lei e os tribunais preveem
              caminhos para buscar o acesso — e os critérios mudaram recentemente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)', color: NAVY }}>
                <MessageCircle size={18} fill={NAVY} />
                Falar pelo WhatsApp
              </a>
              <a href="#faq-med" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-7 py-3.5 rounded-full border border-white/30 transition-colors hover:bg-white/10">
                Tirar minhas dúvidas
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">Atendimento online em todo o Brasil · Atuação exclusiva em Direito Médico e da Saúde</p>
          </motion.div>
        </div>
      </section>

      {/* QUEM PODE PRECISAR */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle accent={ACCENT} title="Quem pode precisar desta orientação" sub="Situações em que o medicamento prescrito costuma ser negado." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quemPrecisa.map(([t, d, href]) => (
              <div key={t} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(26,188,156,0.1)', color: ACCENT }}>
                  <Pill size={22} />
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>{t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d}</p>
                {href && <a href={href} className="inline-block mt-3 text-sm font-semibold hover:underline" style={{ color: ACCENT }}>Saiba mais →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOIS CAMINHOS */}
      <section className="py-20 px-4" style={{ background: '#f0fdfa' }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle accent={ACCENT} title="Dois caminhos: plano de saúde ou SUS" sub="O direito ao medicamento segue regras diferentes conforme quem deve fornecê-lo." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24' }}><ShieldCheck size={24} /></div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>Pelo plano de saúde</h3>
              </div>
              <ul className="space-y-3">
                {plano.map((i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} /><span className="text-gray-600 text-sm leading-relaxed">{i}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24' }}><Building2 size={24} /></div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>Pelo SUS (União, Estado ou Município)</h3>
              </div>
              <ul className="space-y-3">
                {sus.map((i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} /><span className="text-gray-600 text-sm leading-relaxed">{i}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CRITÉRIOS DO STF */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle accent={ACCENT} title="O que mudou: os critérios atuais do STF" sub="Entre 2024 e 2025, o STF detalhou os requisitos. A instrução técnica do pedido tornou-se decisiva." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}>
              <span className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24' }}>Plano · ADI 7265 (2025)</span>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Cobertura fora do Rol — 5 critérios cumulativos</h3>
              <ol className="space-y-2.5">
                {criteriosPlano.map((c, i) => (
                  <li key={c} className="flex gap-3 text-sm text-white/80"><span className="font-bold" style={{ color: '#fbbf24' }}>{i + 1}.</span><span>{c}</span></li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}>
              <span className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24' }}>SUS · Temas 6 e 1234 (2024)</span>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Medicamento não incorporado — 6 requisitos</h3>
              <ol className="space-y-2.5">
                {criteriosSus.map((c, i) => (
                  <li key={c} className="flex gap-3 text-sm text-white/80"><span className="font-bold" style={{ color: '#fbbf24' }}>{i + 1}.</span><span>{c}</span></li>
                ))}
              </ol>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6 max-w-3xl mx-auto text-center">
            O custo anual do medicamento também define <strong>quem responde</strong> (União ou Estado) e
            <strong> onde a ação tramita</strong>. Por isso, o enquadramento correto é uma das primeiras etapas.
          </p>
        </div>
      </section>

      {/* NEGATIVAS */}
      <section className="py-20 px-4" style={{ background: '#f0fdfa' }}>
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
          <SectionTitle accent={ACCENT} title="Como funciona o atendimento" sub="Do primeiro contato ao cumprimento da decisão." />
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
          <SectionTitle accent={ACCENT} title="Documentos importantes" sub="Peça a negativa sempre por escrito — é um direito do beneficiário." />
          <div className="grid md:grid-cols-2 gap-4">
            {documentos.map((d) => (
              <div key={d} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <ClipboardList size={18} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-gray-600 text-sm leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-med" className="py-20 px-4" style={{ background: '#f0fdfa' }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle accent={ACCENT} title="Perguntas frequentes" sub="" />
          <div className="bg-white rounded-2xl px-6 md:px-8 shadow-sm border border-gray-100">
            {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <Contato accent={ACCENT} whatsapp={WHATSAPP} links={[['/paciente-com-cancer', 'Paciente com câncer'], ['/autismo-tea', 'Criança com TEA']]} />
    </div>
  );
}
