import type { AuthorId } from '@/lib/constants'

export type BlogFrontmatter = {
  title: string
  author: AuthorId
  category: string
  pillar: number
  date: string
  excerpt: string
  reviewed?: AuthorId
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  author: AuthorId
  category: string
  pillar: number
  date: string
  reviewedBy?: AuthorId
  readingMinutes: number
  content: string
  isGuest: boolean
}
