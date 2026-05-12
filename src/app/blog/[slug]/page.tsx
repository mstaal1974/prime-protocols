import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Layout from '@/components/layout/Layout'
import AuthorBio from '@/components/blog/AuthorBio'
import Disclaimer from '@/components/compliance/Disclaimer'
import GuestDisclaimer from '@/components/compliance/GuestDisclaimer'
import BookingButton from '@/components/ui/BookingButton'
import ProseSection from '@/components/ui/ProseSection'
import Badge from '@/components/ui/Badge'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import { AUTHORS, BLOG_CATEGORIES, type AuthorId, SITE } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Article not found' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [AUTHORS[post.author as AuthorId]?.name ?? SITE.name],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const author = AUTHORS[post.author as AuthorId]
  const cat = BLOG_CATEGORIES.find((c) => c.slug === post.category)
  const isGuest = author?.type === 'guest'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: author?.name },
    ...(post.reviewedBy && {
      reviewedBy: {
        '@type': 'Person',
        name: AUTHORS[post.reviewedBy]?.name,
      },
    }),
    publisher: {
      '@type': 'MedicalOrganization',
      name: SITE.name,
      url: SITE.url,
    },
  }

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article>
        <header className="bg-white">
          <div className="container-site py-16 md:py-24">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs text-grey-500">
              <Link href="/" className="hover:text-navy">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-navy">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy">{post.title}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                {cat && <Badge variant={isGuest ? 'navy' : 'steel'}>{cat.label}</Badge>}
                <span className="text-xs text-grey-500">
                  {formatDate(post.date)} · {post.readingMinutes} min read
                </span>
              </div>
              <h1 className="font-display text-display-lg font-semibold leading-tight text-navy">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-grey-700">{post.excerpt}</p>
            </div>
          </div>
        </header>

        <section className="bg-white pb-12">
          <div className="container-site">
            <ProseSection>
              <MDXRemote source={post.content} />
            </ProseSection>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-site max-w-prose mx-auto">
            {isGuest ? <GuestDisclaimer /> : <Disclaimer />}
          </div>
        </section>

        <section className="bg-bone py-section">
          <div className="container-site max-w-3xl mx-auto">
            <AuthorBio authorId={post.author as AuthorId} reviewedById={post.reviewedBy} />
            <div className="mt-12 flex flex-col items-center text-center">
              <p className="text-sm text-grey-600">Ready for a doctor-led assessment?</p>
              <div className="mt-4">
                <BookingButton location={`blog-${params.slug}-cta`} />
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}
