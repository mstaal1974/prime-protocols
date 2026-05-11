'use client'

import { useMemo, useState } from 'react'
import Layout from '@/components/layout/Layout'
import BlogCard from '@/components/blog/BlogCard'
import BlogFilter from '@/components/blog/BlogFilter'
import Disclaimer from '@/components/compliance/Disclaimer'
import { AUTHORS, type AuthorId } from '@/lib/constants'
import type { BlogPost } from '@/types/blog'

interface BlogIndexClientProps {
  posts: BlogPost[]
}

export default function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const staffPosts = useMemo(
    () => posts.filter((p) => AUTHORS[p.author as AuthorId]?.type !== 'guest'),
    [posts]
  )
  const guestPosts = useMemo(
    () => posts.filter((p) => AUTHORS[p.author as AuthorId]?.type === 'guest'),
    [posts]
  )

  const filtered = useMemo(() => {
    if (!activeCategory) return staffPosts
    return staffPosts.filter((p) => p.category === activeCategory)
  }, [staffPosts, activeCategory])

  return (
    <Layout>
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            The Prime Protocols blog
          </p>
          <h1 className="font-display text-display-lg font-semibold leading-tight text-navy max-w-3xl">
            Clinical writing on men&apos;s health. Without the hype.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-700">
            Evidence-based articles on testosterone, recovery, longevity, metabolic health, energy
            and cognition. Written by our health science team and clinically reviewed before
            publication.
          </p>
        </div>
      </section>

      <section className="bg-bone py-section">
        <div className="container-site">
          <BlogFilter onChange={setActiveCategory} activeSlug={activeCategory} />
          {filtered.length === 0 ? (
            <div className="mt-12 rounded-md border border-dashed border-grey-300 bg-white p-12 text-center text-sm text-grey-600">
              No articles in this category yet. New articles are published weekly.
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  author={p.author}
                  category={p.category}
                  date={p.date}
                  readingMinutes={p.readingMinutes}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {guestPosts.length > 0 && (
        <section className="bg-white py-section">
          <div className="container-site">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
                Guest contributors
              </p>
              <h2 className="font-display text-display-md font-semibold text-navy">
                Peer voices on the same road.
              </h2>
              <p className="mt-3 text-grey-700">
                Articles from men inside the target demographic — written from personal experience,
                not from the clinic chair. Guest contributor articles carry their own disclaimer
                and represent the author&apos;s views alone.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {guestPosts.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  author={p.author}
                  category={p.category}
                  date={p.date}
                  readingMinutes={p.readingMinutes}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-bone py-12">
        <div className="container-site max-w-prose">
          <Disclaimer />
        </div>
      </section>
    </Layout>
  )
}
