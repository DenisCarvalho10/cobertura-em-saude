import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LGPD — Proteção de Dados | Denis Carvalho Advocacia',
  description: 'Informações sobre a Lei Geral de Proteção de Dados aplicada ao escritório Denis Carvalho Advocacia.',
};

export default function LGPDPage() {
  return (
    <main className="min-h-screen" style={{ background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            LGPD — Proteção de Dados
          </h1>
          <p className="text-white/60">Lei Geral de Proteção de Dados (Lei 13.709/18)</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none">
          <p className="text-gray-500 text-sm mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <h2>Compromisso com a LGPD</h2>
          <p>
            O escritório Denis Carvalho Advocacia está plenamente adequado às exigências da Lei Geral
            de Proteção de Dados Pessoais (Lei 13.709/18 — LGPD), garantindo que todos os dados
            coletados e tratados em nossa atuação sigam os princípios de legalidade, necessidade,
            finalidade e segurança.
          </p>

          <h2>Base Legal para o Tratamento</h2>
          <p>Tratamos dados pessoais com fundamento nas seguintes bases legais da LGPD:</p>
          <ul>
            <li><strong>Consentimento</strong> — para comunicações informativas e marketing jurídico</li>
            <li><strong>Execução de contrato</strong> — para prestação dos serviços advocatícios contratados</li>
            <li><strong>Cumprimento de obrigação legal</strong> — exigências do Estatuto da OAB e legislação processual</li>
            <li><strong>Legítimo interesse</strong> — para melhoria dos serviços e atendimento ao cliente</li>
          </ul>

          <h2>Dados Sensíveis em Saúde</h2>
          <p>
            Dados relacionados à saúde são considerados dados sensíveis pela LGPD (art. 11) e
            recebem proteção reforçada. No contexto da advocacia em saúde, esses dados são tratados:
          </p>
          <ul>
            <li>Exclusivamente para fins de prestação de serviço jurídico solicitado</li>
            <li>Com sigilo profissional absoluto, garantido pelo Estatuto da OAB</li>
            <li>Sem compartilhamento com terceiros, salvo necessidade processual com autorização</li>
          </ul>

          <h2>Encarregado de Dados (DPO)</h2>
          <p>
            O Encarregado de Dados do escritório Denis Carvalho Advocacia pode ser contatado pelo
            e-mail: <strong>deniscarvalhoadv@yahoo.com</strong>
          </p>

          <h2>Exercício de Direitos</h2>
          <p>Para exercer seus direitos previstos na LGPD (acesso, correção, eliminação, portabilidade etc.),
          entre em contato:</p>
          <ul>
            <li>WhatsApp: (62) 99258-6422</li>
            <li>E-mail: contato@deniscarvalhoadvocacia.com</li>
          </ul>
          <p>
            O prazo para resposta é de até 15 dias úteis, conforme art. 18 da LGPD.
          </p>

          <h2>Autoridade Nacional de Proteção de Dados (ANPD)</h2>
          <p>
            Caso considere que seu direito não foi devidamente atendido, você pode fazer uma
            reclamação junto à ANPD (Autoridade Nacional de Proteção de Dados) pelo site
            www.gov.br/anpd.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }}
          >
            ← Voltar ao site
          </Link>
        </div>
      </div>
    </main>
  );
}
