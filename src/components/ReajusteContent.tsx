'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, Calendar, Users, Gavel, AlertCircle,
  MessageCircle, ChevronDown, FileText,
} from 'lucide-react';
import { SectionTitle, Contato } from './TeaContent';
import { reajusteFaqs as faqs } from '@/lib/faq-data';

const ACCENT = '#b5652e';
const NAVY = '#0d1f35';

const WHATSAPP =
  'https://wa.me/5562992565904?text=' +
  encodeURIComponent('Olá, vim pela página de reajuste abusivo do plano de saúde e gostaria de uma orientação.');

const tipos = [
  { icon: Calendar, t: 'Reajuste anual', d: 'Aplicado uma vez por ano. Nos planos individuais e familiares, há um teto máximo autorizado pela ANS; nos coletivos, é negociado e precisa ser justificado.' },
  { icon: TrendingUp, t: 'Reajuste por faixa etária', d: 'Incide quando o beneficiário muda de faixa de idade. As faixas seguem a regulamentação da ANS — e a partir dos 60 anos não pode haver reajuste por idade.' },
  { icon: Users, t: 'Reajuste por sinistralidade', d: 'Exclusivo dos planos coletivos, baseado no uso (custo) do grupo. Precisa ser transparente e demonstrado com a memória de cálculo.' },
];

const abusivo = [
  'Reajuste por faixa etária com percentual desarrazoado, sem base atuarial que o justifique.',
  'Cobrança de valor diferenciado em razão da idade a partir dos 60 anos.',
  'Reajuste por sinistralidade sem transparência, sem a memória de cálculo que a operadora é obrigada a fornecer.',
  'Reajuste anual, em plano individual, acima do teto autorizado pela ANS.',
  'Aumentos sucessivos e surpreendentes que oneram excessivamente o beneficiário.',
  'Migração forçada de contrato como forma de contornar os limites de reajuste.',
];

const passos = [
  ['Análise do contrato e do histórico', 'Você envia o contrato, os boletos e o comunicado do reajuste pelo WhatsApp.'],
  ['Verificação do tipo e do cálculo', 'Identificamos o tipo de reajuste e conferimos se ele respeita as normas e o contrato.'],
  ['Pedido da memória de cálculo', 'Quando for coletivo, exigimos da operadora a demonstração do reajuste.'],
  ['Via administrativa ou ANS', 'Quando cabível, buscamos a revisão diretamente com a operadora ou pela ANS.'],
  ['Medida judicial, quando necessária', 'Ação para revisar o reajuste e, se for o caso, restituir o que foi pago a mais.'],
  ['Acompanhamento', 'Seguimos o caso até a solução, com transparência sobre cada etapa.'],
];

const documentos = [
  'Contrato do plano de saúde',
  'Boletos e faturas com o histórico de valores',
  'Carta ou comunicado do reajuste aplicado',
  'Memória de cálculo do reajuste (nos planos coletivos)',
  'Comprovantes de pagamento',
  'Documento de identidade (para comprovar a idade, quando for o caso)',
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

export default function ReajusteContent() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4" style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 50%, #162d4a 100%)' }}>
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }} />
        <div className="max-w-5xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase" style={{ background: 'rgba(181,101,46,0.2)', color: '#edc3a0' }}>
              <TrendingUp size={18} />
              Direito à Saúde · Reajuste de Planos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Reajuste abusivo do plano?<br />
              <span style={{ color: '#fbbf24' }}>Saiba o que pode ser contestado</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Aumentos por faixa etária, por sinistralidade ou acima do teto da ANS nem sempre são
              legítimos. Entenda os tipos de reajuste e quando a revisão é possível.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)', color: NAVY }}>
                <MessageCircle size={18} fill={NAVY} />
                Falar pelo WhatsApp
              </a>
              <a href="#faq-reaj" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-7 py-3.5 rounded-full border border-white/30 transition-colors hover:bg-white/10">
                Tirar minhas dúvidas
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">Atendimento online em todo o Brasil · Atuação exclusiva em Direito Médico e da Saúde</p>
          </motion.div>
        </div>
      </section>

      {/* TIPOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle accent={ACCENT} title="Os tipos de reajuste" sub="Cada um segue regras próprias — e é aí que mora a diferença entre o legítimo e o abusivo." />
          <div className="grid md:grid-cols-3 gap-6">
            {tipos.map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(181,101,46,0.1)', color: ACCENT }}><Icon size={24} /></div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>{t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE DIZ A JUSTIÇA */}
      <section className="py-16 px-4" style={{ background: '#fdf5ef' }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-10 text-white" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}>
            <div className="flex items-center gap-3 mb-5">
              <Gavel size={26} style={{ color: '#fbbf24' }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#fbbf24' }}>O que dizem a lei e os tribunais</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              O reajuste por idade tem limites claros
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              O <strong>Estatuto do Idoso</strong> (Lei 10.741/2003, art. 15, § 3º) veda a cobrança de
              valores diferenciados em razão da idade. E o <strong>STJ</strong>, no Tema Repetitivo 952,
              fixou que o reajuste por faixa etária só é válido quando há previsão contratual, são
              observadas as normas da ANS e não se aplicam percentuais desarrazoados que onerem
              excessivamente o consumidor ou discriminem o idoso.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Aos planos de saúde aplica-se o Código de Defesa do Consumidor (Súmula 608 do STJ), que
              veda as cláusulas abusivas.
            </p>
          </div>
        </div>
      </section>

      {/* QUANDO É ABUSIVO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-10 text-white" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={24} style={{ color: '#fbbf24' }} />
              <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}>Quando o reajuste pode ser abusivo</h3>
            </div>
            <div className="space-y-3">
              {abusivo.map((item) => (
                <div key={item} className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2" /><span className="text-white/80 text-sm leading-relaxed">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-4" style={{ background: '#f8fafc' }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle accent={ACCENT} title="Como funciona o atendimento" sub="Do primeiro contato à revisão do reajuste." />
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle accent={ACCENT} title="Documentos importantes" sub="Reunir o histórico de valores é o que sustenta a revisão." />
          <div className="grid md:grid-cols-2 gap-4">
            {documentos.map((d) => (
              <div key={d} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <FileText size={18} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-gray-600 text-sm leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-6 max-w-3xl">
            A Lei 9.656/1998 e a regulamentação da ANS garantem ao beneficiário o direito de receber a
            justificativa do reajuste, inclusive a memória de cálculo nos planos coletivos.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-reaj" className="py-20 px-4" style={{ background: '#fdf5ef' }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle accent={ACCENT} title="Perguntas frequentes" sub="" />
          <div className="bg-white rounded-2xl px-6 md:px-8 shadow-sm border border-gray-100">
            {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <Contato accent={ACCENT} whatsapp={WHATSAPP} links={[['/paciente-com-cancer', 'Paciente com câncer'], ['/home-care', 'Home care negado']]} />
    </div>
  );
}
