'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Quanto tempo demora para conseguir o tratamento na justiça?',
    a: 'Em casos urgentes com pedido de tutela de urgência (liminar), a decisão judicial pode sair em 24 a 72 horas após o protocolo da ação. Em situações de risco de vida imediato, é possível obter decisão no mesmo dia. O tempo varia de acordo com o juízo e a urgência demonstrada no processo.',
  },
  {
    q: 'Posso conseguir uma liminar para iniciar o tratamento imediatamente?',
    a: 'Sim. A tutela de urgência é a principal ferramenta utilizada nesses casos. Quando há urgência médica comprovada por documentação (laudo, receita, relatório médico) e negativa do plano, o juiz pode conceder a liminar antes mesmo da parte contrária ser ouvida, determinando imediatamente o custeio ou fornecimento do tratamento.',
  },
  {
    q: 'O plano de saúde pode negar tratamentos prescritos por médico?',
    a: 'Legalmente, não. Os planos de saúde são obrigados a cobrir todos os procedimentos listados no Rol de Procedimentos da ANS, bem como tratamentos prescritos por médico credenciado quando há indicação clínica. Negar tratamento médico com base em critérios puramente econômicos ou administrativos é ilegal e passível de ação judicial.',
  },
  {
    q: 'O SUS é obrigado a fornecer medicamentos e tratamentos?',
    a: 'Sim. O Estado brasileiro tem o dever constitucional de garantir o acesso à saúde. Quando um medicamento está previsto no RENAME (Relação Nacional de Medicamentos Essenciais) ou em Protocolos Clínicos e Diretrizes Terapêuticas (PCDT) do Ministério da Saúde, o SUS é obrigado a fornecê-lo. Mesmo fora dessa lista, o judiciário tem concedido ordens de fornecimento com base no direito constitucional à saúde.',
  },
  {
    q: 'O atendimento é online? Preciso sair de casa?',
    a: 'Não. O atendimento é 100% online e digital. Toda a comunicação, envio de documentos, acompanhamento do processo e orientações são feitos por WhatsApp, e-mail ou videoconferência. Atendemos pacientes de todo o Brasil sem necessidade de deslocamento — especialmente importante para quem está em tratamento ou em situação delicada de saúde.',
  },
  {
    q: 'Quais documentos preciso para iniciar o processo?',
    a: 'Em geral, os documentos básicos são: prescrição médica com CID e indicação clínica, laudo ou relatório médico detalhado, negativa formal do plano (por escrito ou comprovante de negativa), dados do contrato do plano de saúde e documentos pessoais (RG, CPF). Em casos de SUS, incluímos também comprovante de que o pedido foi feito e negado administrativamente. Analisamos o caso gratuitamente e orientamos exatamente o que você precisa.',
  },
  {
    q: 'Como funciona o pagamento dos honorários advocatícios?',
    a: 'Em muitos casos, trabalhamos com honorários condicionados ao êxito — ou seja, você só paga se ganharmos. Em outros, pode haver honorários iniciais acessíveis dependendo da complexidade. Em todos os casos, a análise inicial é gratuita e transparente. Entre em contato para que possamos avaliar seu caso específico e apresentar a proposta mais adequada.',
  },
  {
    q: 'Meu plano cancelou meu contrato. Posso reverter isso judicialmente?',
    a: 'Sim. O cancelamento unilateral de plano de saúde pelo operador é, em muitos casos, ilegal — especialmente se ocorrer durante tratamento em curso, se o beneficiário for idoso ou portador de doença crônica, ou se não houver motivação legal expressa. Nessas situações, é possível obter liminar para reintegração imediata ao plano e continuidade do tratamento.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-300/60 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 text-base pr-2">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
          style={{ color: '#c9a227' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="px-6 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-100"
              style={{ background: '#fffdf7' }}
            >
              <p className="pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16" style={{ background: '#f8fafc' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle size={18} style={{ color: '#c9a227' }} />
            <span
              className="text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(201,162,39,0.1)', color: '#c9a227' }}
            >
              Dúvidas Frequentes
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#0d1f35' }}
          >
            Perguntas que Todo{' '}
            <span style={{ color: '#c9a227' }}>Paciente Faz</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Respostas claras e diretas para as dúvidas mais comuns sobre
            a defesa judicial do seu direito à saúde.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a227, #fbbf24)' }} />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} q={faq.q} a={faq.a} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
        >
          <h3
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ainda tem dúvidas?
          </h3>
          <p className="text-white/70 mb-6">
            Fale diretamente com o Dr. Denis e tire todas as suas dúvidas gratuitamente.
          </p>
          <a
            href="https://wa.me/5562992586422?text=Ol%C3%A1%2C%20tenho%20algumas%20d%C3%BAvidas%20sobre%20meu%20caso%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-base"
          >
            <MessageCircle size={20} fill="white" />
            Tirar Dúvidas no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
