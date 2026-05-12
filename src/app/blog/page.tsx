import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogIndexClient from '@/components/blog/BlogIndexClient'

export const metadata: Metadata = {
  title: "Blog — Evidence-based men's health writing",
  description:
    'Clinical writing on hormonal health, recovery, longevity, metabolic health, energy and peptide therapy. Written by our health science team, clinically reviewed before publication.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  return <BlogIndexClient posts={posts} />
}
