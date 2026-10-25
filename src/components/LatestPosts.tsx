import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import type { PostMeta } from '@/lib/blog';

export default function LatestPosts({ posts }: { posts: PostMeta[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-600 font-semibold tracking-wide uppercase text-sm">
            Blog &amp; Notícias
          </span>
          <h2 className="section-title text-navy-900 mt-2">
            Direito à saúde, <span className="gold-text">descomplicado</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Conteúdos práticos para pacientes e familiares entenderem seus direitos diante do
            plano de saúde e do poder público.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <BlogCard key={post.slug} post={post} priority={i === 0} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            Ver todos os artigos <ArrowRight size={18} />
          </Link>
          <a
            href="https://saudelex.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px',
              borderRadius: 999, background: 'linear-gradient(135deg,#0a1628,#13233f)',
              border: '1px solid rgba(201,162,75,.45)', color: '#E3C77E', fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            ◈ Ver o Radar no SaúdeLex →
          </a>
        </div>
      </div>
    </section>
  );
}
