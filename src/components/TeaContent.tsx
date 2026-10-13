'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Puzzle, Gavel, CheckCircle, HeartHandshake, ListChecks,
  MessageCircle, AlertCircle, ChevronDown, BookOpen,
} from 'lucide-react';
import { teaFaqs as faqs } from '@/lib/faq-data';

const ACCENT = '#2980b9';
const NAVY = '#0d1f35';

const WHATSAPP =
  'https://wa.me/5562992565904?text=' +
  encodeURIComponent('Olá, vim pela página de direitos da criança com TEA e gostaria de uma orientação.');

const terapias = [
  ['Terapia ABA e método prescrito', 'Cobertura do método indicado pelo médico assistente, sem limite de sessões.'],
  ['Psicologia', 'Cobertura obrigatória e ilimitada.'],
  ['Fonoaudiologia', 'Cobertura obrigatória e ilimitada.'],
  ['Terapia ocupacional', 'Inclusive integração sensorial quando prescrita — cobertura obrigatória e ilimitada.'],
  ['Fisioterapia', 'Cobertura obrigatória e ilimitada.'],
  ['Psicopedagogia', 'O STJ entende que pode entrar nas sessões de psicologia quando realizada em ambiente clínico.'],
  ['Musicoterapia', 'Reconhecida como de cobertura obrigatória pela 4ª Turma do STJ (out./2025).'],
  ['Terapia nutricional', 'A Lei 15.131/2025 incluiu diretrizes de terapia nutricional, relevante na seletividade alimentar.'],
];

const responsabilidade = [
  ['Terapias em clínica (ABA, fono, TO, psicologia, fisioterapia)', 'Plano de saúde', 'Lei 9.656/1998; RN ANS 539 e 541/2022; Tema 1.295 do STJ'],
  ['Acompanhante especializado em sala de aula', 'Escola ou rede de ensino', 'Lei 12.764/2012, art. 3º; LBI (Lei 13.146/2015), art. 28'],
  ['Acompanhamento terapêutico dentro da escola ou em casa', 'Em regra, não é coberto pelo plano', 'Jurisprudência do STJ'],
  ['Matrícula sem recusa e sem cobrança adicional', 'Escola pública ou particular', 'Lei 12.764/2012, art. 7º; LBI, art. 28'],
];

const outros = [
  'Carteira de Identificação da Pessoa com TEA (CIPTEA) — Lei 13.977/2020',
  'Atendimento prioritário em serviços públicos e privados',
  'Benefício de Prestação Continuada (BPC/LOAS) para baixa renda — Lei 8.742/1993',
  'Isenção de impostos na compra de veículo (o STJ dispensa que a pessoa com TEA conduza)',
  'Horário especial para pais servidores públicos (Lei 8.112/1990, estendido pelo STF)',
  'Atendimento pelo SUS: diagnóstico, terapias em CER e medicamentos',
];

const negativas = [
  'Limite de sessões por ano ou por mês',
  'Negativa do método ABA ou da carga horária prescrita',
  'Exigência de reavaliações frequentes para manter o tratamento',
  'Falta de profissional credenciado ou fila de espera prolongada',
  'Clínica credenciada distante da residência da família',
  'Negativa de reembolso quando não há rede disponível',
  'Descredenciamento da clínica onde a criança já estava em tratamento',
];

const passos = [
  ['Análise inicial do caso', 'A família envia o laudo, a prescrição e a negativa pelo WhatsApp.'],
  ['Verificação do contrato e da rede', 'Avaliamos o contrato, a rede credenciada e os prazos de atendimento.'],
  ['Orientação documental', 'Indicamos o que o relatório médico deve conter: método, carga horária, profissionais e justificativa.'],
  ['Notificação e reclamação', 'Quando cabível, formalizamos o pedido à operadora e registramos reclamação na ANS.'],
  ['Medida judicial, quando necessária', 'Ação com pedido de tutela de urgência, com base na Lei 12.764/2012, nas normas da ANS e no Tema 1.295.'],
  ['Acompanhamento contínuo', 'Seguimos o caso para garantir a continuidade das terapias ao longo do tempo.'],
];

const documentos = [
  'Laudo médico com o diagnóstico de TEA (CID)',
  'Prescrição detalhada: terapias, método (ex.: ABA), carga horária semanal e profissionais',
  'Relatório médico que explique a necessidade e a urgência do tratamento',
  'Negativa da operadora por escrito ou protocolos de atendimento',
  'Carteirinha e contrato do plano de saúde',
  'Comprovantes de pagamento, se a família estiver custeando as terapias',
  'Lista de clínicas credenciadas consultadas, se houver falta de profissional',
  'Documentos da criança e do responsável legal',
];

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown
          size={20}
          className="flex-shrink-0 mt-1 transition-transform"
          style={{ color: ACCENT, transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </button>
      {open && <p className="text-gray-600 text-sm leading-relaxed pb-5 -mt-1">{a}</p>}
    </div>
  );
}

export default function TeaContent() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4" style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1e3a5f 50%, #162d4a 100%)' }}>
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent)` }} />
        <div className="max-w-5xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase" style={{ background: 'rgba(41,128,185,0.18)', color: '#bcdcf2' }}>
              <Puzzle size={18} />
              Direito à Saúde · Criança com TEA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Plano limitou a terapia do autismo?<br />
              <span style={{ color: '#fbbf24' }}>Conheça os direitos da criança com TEA</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A legislação e a jurisprudência atual do STJ asseguram à criança com TEA o acesso ao
              tratamento multidisciplinar prescrito — sem limite de sessões. Entenda o que a lei garante.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #c9a227, #fbbf24)', color: NAVY }}>
                <MessageCircle size={18} fill={NAVY} />
                Falar pelo WhatsApp
              </a>
              <a href="#faq-tea" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-7 py-3.5 rounded-full border border-white/30 transition-colors hover:bg-white/10">
                Tirar minhas dúvidas
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">Atendimento online em todo o Brasil · Atuação exclusiva em Direito Médico e da Saúde</p>
          </motion.div>
        </div>
      </section>

      {/* STJ 2026 */}
      <section className="py-16 px-4" style={{ background: '#f0f7fc' }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-10 text-white" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}>
            <div className="flex items-center gap-3 mb-5">
              <Gavel size={26} style={{ color: '#fbbf24' }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#fbbf24' }}>Decisão do STJ · março de 2026</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              O plano não pode limitar o número de sessões
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              A Segunda Seção do STJ julgou o <strong>Tema Repetitivo 1.295</strong> e fixou que é
              abusiva a limitação do número de sessões de psicologia, fonoaudiologia, fisioterapia e
              terapia ocupacional prescritas a pacientes com TEA. O entendimento vale para todo o país
              e reforça o que a ANS já havia determinado em 2022 (RN 539 e RN 541).
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Havendo divergência sobre a quantidade de sessões, a operadora pode solicitar uma junta
              médica, conforme as regras da ANS. O que ela não pode é impor um teto genérico.
            </p>
          </div>
        </div>
      </section>

      {/* TERAPIAS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Terapias e cobertura pelo plano" sub="O que o plano de saúde deve cobrir quando prescrito pelo médico assistente." />
          <div className="grid md:grid-cols-2 gap-5">
            {terapias.map(([t, d]) => (
              <div key={t} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6 max-w-3xl">
            Medicamentos (risperidona, aripiprazol e outros) conforme prescrição. O canabidiol de uso
            domiciliar, em regra, deve ser buscado pelo SUS —{' '}
            <a href="/medicamentos-alto-custo" className="underline" style={{ color: ACCENT }}>veja a página de medicamentos de alto custo</a>.
            Equoterapia e hidroterapia têm decisões divergentes e dependem do caso concreto.
          </p>
        </div>
      </section>

      {/* RESPONSABILIDADE */}
      <section className="py-20 px-4" style={{ background: '#f0f4ff' }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="Plano de saúde ou escola: quem é responsável?" sub="Cada necessidade tem um responsável definido em lei." />
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: NAVY, color: '#fff' }}>
                  <th className="p-4 font-semibold">Necessidade</th>
                  <th className="p-4 font-semibold">Responsável</th>
                  <th className="p-4 font-semibold hidden md:table-cell">Fundamento</th>
                </tr>
              </thead>
              <tbody>
                {responsabilidade.map(([n, r, f], i) => (
                  <tr key={n} style={{ background: i % 2 ? '#f8fafc' : '#fff' }} className="border-t border-gray-100">
                    <td className="p-4 text-gray-700">{n}</td>
                    <td className="p-4 font-semibold" style={{ color: NAVY }}>{r}</td>
                    <td className="p-4 text-gray-400 text-xs hidden md:table-cell">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-5 leading-relaxed">
            A <strong>recusa de matrícula</strong> de estudante com TEA é punida com multa ao gestor
            escolar (Lei 12.764/2012, art. 7º), e escolas particulares não podem cobrar valores
            adicionais em razão da deficiência (LBI, art. 28, § 1º).
          </p>
        </div>
      </section>

      {/* OUTROS DIREITOS + NEGATIVAS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>
              Outros direitos da criança e da família
            </h2>
            <ul className="space-y-3">
              {outros.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <HeartHandshake size={18} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                  <span className="text-gray-600 text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-xs mt-5 leading-relaxed">
              Temas de previdência, tributário e servidor público são indicados de forma informativa;
              quando necessário, a orientação é feita em conjunto com profissionais dessas áreas.
            </p>
          </div>
          <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={24} style={{ color: '#fbbf24' }} />
              <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#fbbf24' }}>Situações comuns de negativa</h3>
            </div>
            <div className="space-y-3">
              {negativas.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2" />
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-4" style={{ background: '#f8fafc' }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="Como funciona o atendimento" sub="Um caminho claro, do primeiro contato ao acompanhamento contínuo." />
          <div className="space-y-4">
            {passos.map(([t, d], i) => (
              <div key={t} className="flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)', color: '#fbbf24', fontFamily: 'Playfair Display, serif' }}>{i + 1}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Documentos importantes" sub="Reunir a documentação certa dá força ao pedido." />
          <div className="grid md:grid-cols-2 gap-4">
            {documentos.map((d) => (
              <div key={d} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <ListChecks size={18} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-gray-600 text-sm leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-tea" className="py-20 px-4" style={{ background: '#f0f7fc' }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Perguntas frequentes" sub="" />
          <div className="bg-white rounded-2xl px-6 md:px-8 shadow-sm border border-gray-100">
            {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <Contato accent={ACCENT} whatsapp={WHATSAPP} links={[['/paciente-com-cancer', 'Paciente com câncer'], ['/medicamentos-alto-custo', 'Medicamentos de alto custo']]} />
    </div>
  );
}

export function SectionTitle({ title, sub, accent = '#2980b9' }: { title: string; sub: string; accent?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>{title}</h2>
      {sub && <p className="text-gray-500 max-w-2xl mx-auto">{sub}</p>}
      <div className="w-20 h-1 mx-auto mt-5 rounded-full" style={{ background: `linear-gradient(90deg, ${accent}, #fbbf24)` }} />
    </div>
  );
}

export function Contato({ accent, whatsapp, links }: { accent: string; whatsapp: string; links: [string, string][] }) {
  return (
    <section id="contato-sub" className="py-20 px-4" style={{ background: '#f8fafc' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: NAVY }}>Precisa de orientação?</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Envie os documentos do caso pelo WhatsApp para uma análise inicial. O atendimento é sigiloso e
          sem compromisso.
        </p>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105">
          <MessageCircle size={20} fill="white" />
          Falar com o escritório
        </a>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm" style={{ color: accent }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} className="inline-flex items-center gap-1.5 hover:underline"><BookOpen size={15} /> {label}</a>
          ))}
        </div>
        <p className="text-gray-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
          Conteúdo de caráter exclusivamente informativo, em conformidade com o Provimento nº 205/2021 do
          Conselho Federal da OAB. Não constitui consulta jurídica nem promessa de resultado. Cada caso
          exige análise individual da documentação e das circunstâncias concretas.
        </p>
      </div>
    </section>
  );
}
