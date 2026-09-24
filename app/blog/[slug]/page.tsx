import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogCard from '@/components/BlogCard';
import { getPostBySlug, getPostSlugs, getRelatedPosts } from '@/lib/blog';

const SITE = 'https://www.coberturaemsaude.com.br';
const WHATSAPP =
  'https://wa.me/5562992565904?text=Ol%C3%A1%2C%20li%20um%20artigo%20no%20blog%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Artigo não encontrado' };

  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: `${post.title} | Denis Carvalho Advocacia`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover, width: 1400, height: 788, alt: post.coverAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export const revalidate = 3600;

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${SITE}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Denis Carvalho Advocacia',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo-dc.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${post.slug}` },
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-10 bg-gradient-hero text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gold-300 mb-4" aria-label="Trilha de navegação">
            <Link href="/" className="hover:underline">Início</Link>
            <span className="mx-2 text-white/40">›</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span className="mx-2 text-white/40">›</span>
            <span className="text-white/70">{post.category}</span>
          </nav>
          <span className="inline-block bg-gradient-to-r from-gold-600 to-gold-400 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-blue-100">
            <span>Por {post.author} · OAB/GO 53.904</span>
            <span>{post.dateLabel}</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={13} /> {post.readingTime} de leitura
            </span>
          </div>
        </div>
      </section>

      {/* COVER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-8">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-premium">
          <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
        </div>
        {post.credit && <p className="text-xs text-gray-400 mt-2 text-right">{post.credit}</p>}
      </div>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="article-content" dangerouslySetInnerHTML={{ __html: post.html }} />

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-hero text-white p-7 text-center">
          <h3 className="font-heading text-2xl font-bold mb-2">Ficou com dúvida sobre o seu caso?</h3>
          <p className="text-blue-100 mb-5 max-w-xl mx-auto">
            Cada situação tem particularidades. Converse com o escritório e entenda os caminhos possíveis para o seu caso — sem compromisso.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105"
          >
            Falar no WhatsApp <ArrowRight size={18} />
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 italic">
          Este conteúdo é informativo e não substitui a análise individual do seu caso por um advogado, em conformidade com o Código de Ética e Disciplina da OAB. Não constitui promessa de resultado.
        </p>

        <div className="mt-8">
          <Link href="/blog" className="inline-flex items-center gap-1 text-gold-600 font-semibold hover:gap-2 transition-all">
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-900 mb-8 text-center">
              Leia também
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
