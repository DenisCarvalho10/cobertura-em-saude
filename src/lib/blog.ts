import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// ---------------------------------------------------------------------------
// Motor do blog — lê arquivos Markdown de content/blog/*.md
// Esta é a interface que a automação do ViviJus.IA vai alimentar:
// basta commitar um novo .md nessa pasta que o artigo entra no ar.
// ---------------------------------------------------------------------------

export const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;          // ISO: 2026-09-24
  dateLabel: string;     // 24 de setembro de 2026
  category: string;
  cover: string;         // /blog/arquivo.jpg
  coverAlt: string;
  author: string;
  readingTime: string;   // "6 min"
  featured: boolean;
  credit?: string;       // crédito da imagem (opcional)
}

export interface Post extends PostMeta {
  html: string;          // corpo já renderizado em HTML
  content: string;       // markdown cru
}

marked.setOptions({ gfm: true, breaks: false });

function formatDateBR(iso: string): string {
  // Evita problemas de fuso: interpreta como data local pura.
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, (m || 1) - 1, d || 1);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function estimateReadingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

function ensureDir(): boolean {
  try {
    return fs.existsSync(BLOG_DIR);
  } catch {
    return false;
  }
}

export function getPostSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

function readPost(slug: string): Post | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  if (data.draft === true) return null; // rascunhos não publicam

  const date: string = data.date || new Date().toISOString().slice(0, 10);
  const html = marked.parse(content) as string;

  return {
    slug,
    title: data.title || 'Sem título',
    description: data.description || '',
    date,
    dateLabel: formatDateBR(date),
    category: data.category || 'Notícias',
    cover: data.cover || '/og-image.jpg',
    coverAlt: data.coverAlt || data.title || 'Imagem do artigo',
    author: data.author || 'Dr. Denis Carvalho',
    readingTime: data.readingTime || estimateReadingTime(content),
    featured: data.featured === true,
    credit: data.credit || undefined,
    html,
    content,
  };
}

export function getPostBySlug(slug: string): Post | null {
  try {
    return readPost(slug);
  } catch {
    return null;
  }
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // mais recentes primeiro
}

export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map(({ html, content, ...meta }) => meta);
}

export function getRelatedPosts(slug: string, category: string, limit = 3): PostMeta[] {
  const all = getAllPostMeta().filter((p) => p.slug !== slug);
  const sameCat = all.filter((p) => p.category === category);
  const others = all.filter((p) => p.category !== category);
  return [...sameCat, ...others].slice(0, limit);
}
