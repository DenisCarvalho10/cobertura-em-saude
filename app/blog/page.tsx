import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogCard from '@/components/BlogCard';
import { getAllPostMeta } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Direito à Saúde e Planos de Saúde | Denis Carvalho Advocacia',
  description:
    'Artigos sobre direito à saúde: negativa de plano de saúde, cobertura de cirurgias e medicamentos, terapias para o TEA, Rol da ANS e os direitos do paciente. Conteúdo informativo.',
  alternates: { canonical: 'https://www.coberturaemsaude.com.br/blog' },
  openGraph: {
    type: 'website',
    url: 'https://www.coberturaemsaude.com.br/blog',
    title: 'Blog — Direito à Saúde | Denis Carvalho Advocacia',
    description:
      'Conteúdos práticos sobre os direitos do paciente diante de negativas de plano de saúde e do poder público.',
    images: [{ url: '/og-image.jpg?v=3', width: 1200, height: 630 }],
  },
};

export const revalidate = 3600; // revalida de hora em hora (novos posts entram sem novo build)

export default function BlogIndex() {
  const posts = getAllPostMeta();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gold-300 mb-3" aria-label="Trilha de navegação">
            <a href="/" className="hover:underline">Início</a>
            <span className="mx-2 text-white/40">›</span>
            <span className="text-white/70">Blog</span>
          </nav>
          <span className="text-gold-400 font-semibold tracking-wide uppercase text-sm">
            Blog &amp; Notícias
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">
            Direito à saúde, descomplicado
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Conteúdos práticos para pacientes e familiares entenderem seus direitos diante do
            plano de saúde e do poder público — sempre com base em informação, não em promessas.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">Em breve, novos artigos por aqui.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} priority={i < 2} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
