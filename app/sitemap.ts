import type { MetadataRoute } from 'next';
import { getAllPostMeta } from '@/lib/blog';

const SITE = 'https://www.coberturaemsaude.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostMeta();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE}/lgpd`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE}/privacidade`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/termos`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
