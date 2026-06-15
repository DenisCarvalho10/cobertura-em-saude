import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Denis Carvalho Advocacia',
  description: 'Política de privacidade e proteção de dados do escritório Denis Carvalho Advocacia.',
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen" style={{ background: '#f8fafc' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Política de Privacidade
          </h1>
          <p className="text-white/60">Denis Carvalho Advocacia — LGPD Compliant</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none">
          <p className="text-gray-500 text-sm mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <h2>1. Introdução</h2>
          <p>
            O escritório Denis Carvalho Advocacia, inscrito na OAB, com atuação em Direito Médico e Saúde
            Suplementar, compromete-se a proteger a privacidade e os dados pessoais de todos os usuários
            que acessam este site e/ou utilizam nossos serviços, em conformidade com a Lei Geral de
            Proteção de Dados (Lei 13.709/18 — LGPD).
          </p>

          <h2>2. Dados Coletados</h2>
          <p>Coletamos apenas os dados necessários para a prestação dos nossos serviços:</p>
          <ul>
            <li>Nome completo</li>
            <li>Número de telefone/WhatsApp</li>
            <li>Endereço de e-mail</li>
            <li>Dados relacionados ao caso jurídico (fornecidos voluntariamente)</li>
            <li>Dados de navegação (cookies técnicos e de análise)</li>
          </ul>

          <h2>3. Finalidade do Tratamento</h2>
          <p>Os dados coletados são utilizados exclusivamente para:</p>
          <ul>
            <li>Análise e orientação jurídica inicial</li>
            <li>Comunicação sobre o andamento de processos</li>
            <li>Envio de informações relevantes sobre direitos em saúde</li>
            <li>Cumprimento de obrigações legais</li>
          </ul>

          <h2>4. Sigilo Profissional</h2>
          <p>
            Todas as informações compartilhadas com este escritório estão protegidas pelo sigilo
            profissional do advogado, garantido pelo Estatuto da OAB (Lei 8.906/94), além das
            proteções previstas na LGPD.
          </p>

          <h2>5. Compartilhamento de Dados</h2>
          <p>
            Não compartilhamos seus dados pessoais com terceiros, exceto quando estritamente necessário
            para a prestação do serviço contratado (ex.: tribunais, órgãos públicos) ou mediante
            autorização expressa do titular.
          </p>

          <h2>6. Seus Direitos (LGPD)</h2>
          <p>Como titular de dados, você tem direito a:</p>
          <ul>
            <li>Confirmação da existência de tratamento</li>
            <li>Acesso aos dados</li>
            <li>Correção de dados incompletos ou incorretos</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
            <li>Portabilidade dos dados</li>
            <li>Eliminação dos dados tratados com consentimento</li>
            <li>Revogação do consentimento a qualquer momento</li>
          </ul>

          <h2>7. Contato</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato:
          </p>
          <ul>
            <li>WhatsApp: (62) 99258-6422</li>
            <li>E-mail: contato@deniscarvalhoadvocacia.com</li>
          </ul>
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
