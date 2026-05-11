import TreatmentCard from '@/components/treatment/TreatmentCard'
import { TREATMENT_AREAS, HELD_TREATMENT_AREAS } from '@/lib/constants'

export default function TreatmentGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-bone py-section">
      <div className="container-site">
        {heading && (
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
              Six clinical areas
            </p>
            <h2 className="font-display text-display-md font-semibold text-navy">
              Where men&apos;s medicine actually moves the needle.
            </h2>
            <p className="mt-4 max-w-xl text-grey-700">
              Every treatment area is assessed individually. Every protocol is prescribed by a
              registered medical practitioner following an individual clinical assessment.
            </p>
          </div>
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENT_AREAS.map((t) => (
            <TreatmentCard
              key={t.slug}
              title={t.title}
              description={t.description}
              slug={t.slug}
              icon={t.icon}
              badge={t.badge}
            />
          ))}
          {/* Held: Sexual Health & Function — strategy §9 + build spec */}
          {HELD_TREATMENT_AREAS.map((h) => (
            <TreatmentCard
              key={h.slug}
              title={h.title}
              description="Currently held pending regulatory review. We&rsquo;ll share more when this area is ready."
              slug={h.slug}
              icon="hormone"
              badge="Held"
              held
            />
          ))}
        </div>
      </div>
    </section>
  )
}
