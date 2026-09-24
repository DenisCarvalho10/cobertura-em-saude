import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { PostMeta } from '@/lib/blog';

export default function BlogCard({ post, priority = false }: { post: PostMeta; priority?: boolean }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold-400 hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-gold-600 to-gold-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
          <span>{post.dateLabel}</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {post.readingTime}
          </span>
        </div>

        <h3 className="font-heading text-lg md:text-xl font-bold text-navy-900 leading-snug mb-2 group-hover:text-gold-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed flex-1">{post.description}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-gold-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all"
        >
          Ler artigo <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
