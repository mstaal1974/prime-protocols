import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { AUTHORS, type AuthorId } from './constants'
import type { BlogFrontmatter, BlogPost } from '@/types/blog'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

function readingMinutesFor(text: string): number {
  // ~220 wpm, average word length 5 chars
  return Math.max(1, Math.round(text.length / 5 / 220))
}

function buildPost(slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw)
  const fm = data as BlogFrontmatter
  const author = AUTHORS[fm.author]
  return {
    slug,
    title: fm.title,
    excerpt: fm.excerpt,
    author: fm.author,
    category: fm.category,
    pillar: fm.pillar,
    date: fm.date,
    reviewedBy: fm.reviewed,
    readingMinutes: readingMinutesFor(content),
    content,
    isGuest: author?.type === 'guest',
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8')
      return buildPost(slug, raw)
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf8')
  return buildPost(slug, raw)
}

export function getPostsByCategory(posts: BlogPost[], categorySlug: string): BlogPost[] {
  return posts.filter((p) => p.category === categorySlug)
}

export function getPostsByAuthorType(
  posts: BlogPost[],
  type: 'staff' | 'doctor' | 'guest' | 'non-guest'
): BlogPost[] {
  if (type === 'non-guest') return posts.filter((p) => !p.isGuest)
  return posts.filter((p) => {
    const author = AUTHORS[p.author as AuthorId]
    return author?.type === type
  })
}
