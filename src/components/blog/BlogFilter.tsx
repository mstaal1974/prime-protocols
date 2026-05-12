'use client'

import { BLOG_CATEGORIES } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface BlogFilterProps {
  onChange: (slug: string | null) => void
  activeSlug: string | null
}

export default function BlogFilter({ onChange, activeSlug }: BlogFilterProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max gap-2 border-b border-grey-200 pb-px">
        <button
          type="button"
          onClick={() => onChange(null)}
          className={cn(
            'border-b-2 px-4 py-3 text-sm font-medium transition-colors',
            activeSlug === null
              ? 'border-steel text-navy'
              : 'border-transparent text-grey-500 hover:text-navy'
          )}
        >
          All articles
        </button>
        {BLOG_CATEGORIES.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => onChange(c.slug)}
            className={cn(
              'border-b-2 whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors',
              activeSlug === c.slug
                ? 'border-steel text-navy'
                : 'border-transparent text-grey-500 hover:text-navy'
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  )
}
