import Link from 'next/link'
import TreatmentIcon from '@/components/ui/TreatmentIcon'
import Badge from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import type { IconName } from '@/types/treatment'

interface TreatmentCardProps {
  title: string
  description: string
  slug: string
  icon: IconName
  badge: string
  held?: boolean
}

export default function TreatmentCard({
  title,
  description,
  slug,
  icon,
  badge,
  held = false,
}: TreatmentCardProps) {
  const inner = (
    <>
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded border border-steel/30 bg-steel-50 text-steel-dark">
          <TreatmentIcon name={icon} size={24} />
        </div>
        {held ? (
          <Badge variant="muted">Coming Soon</Badge>
        ) : (
          <Badge variant="steel">{badge}</Badge>
        )}
      </div>
      <h3 className="font-display text-xl font-semibold leading-tight text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-grey-700">{description}</p>
      {!held && (
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-steel-dark group-hover:gap-3 transition-all">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      )}
      {held && (
        <p className="mt-5 text-xs text-grey-500">
          Held pending regulatory review.
        </p>
      )}
    </>
  )

  if (held) {
    return (
      <div
        aria-disabled
        className={cn(
          'group relative flex flex-col rounded-md border border-grey-200 bg-grey-50 p-6 opacity-70'
        )}
      >
        {inner}
      </div>
    )
  }

  return (
    <Link
      href={`/treatments/${slug}`}
      className="group relative flex flex-col rounded-md border border-grey-200 bg-white p-6 transition-all hover:border-steel hover:shadow-lift"
    >
      {inner}
    </Link>
  )
}
