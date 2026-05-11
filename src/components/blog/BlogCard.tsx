import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { AUTHORS, type AuthorId, BLOG_CATEGORIES } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  title: string
  excerpt: string
  author: AuthorId
  category: string
  date: string
  slug: string
  readingMinutes?: number
}

export default function BlogCard({
  title,
  excerpt,
  author,
  category,
  date,
  slug,
  readingMinutes,
}: BlogCardProps) {
  const a = AUTHORS[author]
  const cat = BLOG_CATEGORIES.find((c) => c.slug === category)
  const isGuest = a?.type === 'guest'

  return (
    <article className="group flex flex-col">
      <Link
        href={`/blog/${slug}`}
        className="flex flex-1 flex-col rounded-md border border-grey-200 bg-white p-7 transition-all hover:border-steel hover:shadow-lift"
      >
        <div className="mb-4 flex items-center justify-between gap-3 text-xs">
          {cat && <Badge variant={isGuest ? 'navy' : 'steel'}>{cat.label}</Badge>}
          {readingMinutes && (
            <span className="text-grey-500">{readingMinutes} min read</span>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold leading-tight text-navy group-hover:text-steel-dark">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-grey-700">{excerpt}</p>
        <div className="mt-6 flex items-center gap-3 border-t border-grey-200 pt-4 text-xs">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-steel-50 font-display text-[11px] font-semibold text-steel-dark">
            {a?.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <div>
            <div className="font-medium text-navy">{a?.name}</div>
            <div className="text-grey-500">
              {isGuest ? 'Guest contributor' : a?.title}
              <span className="mx-1.5">·</span>
              {formatDate(date)}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
