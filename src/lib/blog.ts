import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost, BlogFrontmatter } from '@/types/blog'
import { AUTHORS, type AuthorId } from '@/lib/constants'

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog')

function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`)
  const mdPath = path.join(POSTS_DIR, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null
  if (!filePath) return null

  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)
  const fm = data as BlogFrontmatter
  const authorRecord = AUTHORS[fm.author as AuthorId]

  return {
    slug,
    title: fm.title,
    excerpt: fm.excerpt,
    author: fm.author,
    category: fm.category,
    pillar: fm.pillar,
    date: fm.date,
    reviewedBy: fm.reviewed,
    readingMinutes: readingMinutes(content),
    content,
    isGuest: authorRecord?.type === 'guest',
  }
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === categorySlug)
}

export function getPostsByAuthorType(type: 'staff' | 'guest' | 'doctor'): BlogPost[] {
  return getAllPosts().filter((p) => {
    const a = AUTHORS[p.author as AuthorId]
    return a?.type === type
  })
}
