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

        {/* DIRECIONAMENTO SAÚDELEX — banner destacado no início da seção */}
        <a
          href="https://saudelex.com.br"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap',
            justifyContent: 'space-between', padding: '22px 26px', borderRadius: 16,
            textDecoration: 'none', background: 'linear-gradient(135deg,#0a1628,#13233f)',
            border: '1px solid rgba(201,162,75,.35)', marginBottom: 34,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 240, flex: '1 1 320px' }}>
            <span aria-hidden="true" style={{ flex: 'none', display: 'grid', placeItems: 'center', width: 46, height: 46, borderRadius: 12, background: 'rgba(201,162,75,.15)', color: '#E3C77E', fontSize: 20, fontWeight: 700 }}>◈</span>
            <div>
              <div className="font-heading" style={{ fontWeight: 800, color: '#fff', fontSize: 18 }}>SaúdeLex — Radar Jurídico da Saúde</div>
              <div style={{ color: '#c7d3e1', fontSize: 14, marginTop: 3, lineHeight: 1.45 }}>
                Este é o nosso blog de <strong style={{ color: '#E3C77E' }}>direito à saúde e planos de saúde</strong>. Para o panorama completo da saúde jurídica — Direito Médico, LGPD e Odontologia —, visite o portal que reúne tudo em um só lugar.
              </div>
            </div>
          </div>
          <span style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 999, background: 'linear-gradient(135deg,#C9A24B,#E3C77E)', color: '#0a1628', fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap' }}>Acessar o SaúdeLex →</span>
        </a>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <BlogCard key={post.slug} post={post} priority={i === 0} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            Ver todos os artigos <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
