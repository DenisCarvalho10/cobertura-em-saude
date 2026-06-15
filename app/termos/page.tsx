import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Denis Carvalho Advocacia',
  description: 'Termos de uso do site Denis Carvalho Advocacia.',
};

export default function TermosPage() {
  return (
    <main className="min-h-screen" style={{ background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #0d1f35, #1e3a5f)' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Termos de Uso
          </h1>
          <p className="text-white/60">Denis Carvalho Advocacia</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none">
          <p className="text-gray-500 text-sm mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <h2>1. Natureza do Site</h2>
          <p>
            Este site tem caráter estritamente informativo e não constitui consulta jurídica.
            As informações aqui disponibilizadas são de cunho educativo sobre direitos em saúde e
            não substituem a análise individualizada de cada caso por um profissional habilitado.
          </p>

          <h2>2. Vedação à Publicidade</h2>
          <p>
            Em conformidade com o Código de Ética e Disciplina da OAB e o Provimento 205/2021,
            este site não realiza captação de clientela de forma vedada, mas apenas divulga
            informações sobre a atuação do escritório e meios de contato para análise de casos.
          </p>

          <h2>3. Resultado e Êxito</h2>
          <p>
            A advocacia não garante resultados em processos judiciais. Cada caso possui particularidades
            próprias que influenciam os resultados. As informações sobre êxito em outros casos são
            meramente ilustrativas e não garantem o mesmo resultado em casos semelhantes.
          </p>

          <h2>4. Comunicação</h2>
          <p>
            O contato realizado via WhatsApp, e-mail ou formulários deste site não estabelece
            automaticamente relação cliente-advogado. A relação profissional é formalizada mediante
            assinatura de contrato de honorários.
          </p>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo deste site — textos, logotipos, imagens e design — é de propriedade
            exclusiva do escritório Denis Carvalho Advocacia, protegido por lei de direitos autorais.
          </p>

          <h2>6. Contato</h2>
          <ul>
            <li>WhatsApp: (64) 99945-2151</li>
            <li>E-mail: deniscarvalhoadv@yahoo.com</li>
            <li>Site: www.coberturaemsaude.com.br</li>
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
