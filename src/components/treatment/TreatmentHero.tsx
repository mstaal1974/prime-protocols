import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import TreatmentIcon from '@/components/ui/TreatmentIcon'
import BookingButton from '@/components/ui/BookingButton'
import type { IconName } from '@/types/treatment'

interface TreatmentHeroProps {
  title: string
  subtitle: string
  badge?: string
  icon: IconName
  slug: string
}

export default function TreatmentHero({
  title,
  subtitle,
  badge,
  icon,
  slug,
}: TreatmentHeroProps) {
  return (
    <section className="bg-white">
      <div className="container-site py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-grey-500">
          <Link href="/" className="hover:text-navy">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/treatments" className="hover:text-navy">
            Treatments
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">{title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded border border-steel/30 bg-steel-50 text-steel-dark">
                <TreatmentIcon name={icon} size={28} />
              </div>
              {badge && <Badge variant="steel">{badge}</Badge>}
            </div>
            <h1 className="font-display text-display-lg font-semibold leading-tight text-navy">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-grey-700">{subtitle}</p>
            <div className="mt-8">
              <BookingButton location={`treatment-${slug}-hero`} treatmentSlug={slug} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
