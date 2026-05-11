import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TreatmentGrid from '@/components/sections/TreatmentGrid'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Treatments — Six clinical areas',
  description:
    "Six clinical areas where men's medicine actually moves the needle. Doctor-led assessment and treatment across testosterone, recovery, longevity, metabolic, energy, and peptide therapy.",
  alternates: { canonical: '/treatments' },
}

export default function TreatmentsHubPage() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            Treatments
          </p>
          <h1 className="font-display text-display-lg font-semibold leading-tight text-navy max-w-3xl">
            Six clinical areas. One clear standard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-700">
            Every treatment area starts with the same thing: a thorough clinical assessment, the
            right pathology, and a doctor who reads the results in context. Treatment decisions
            follow from the picture — not the other way around.
          </p>
        </div>
      </section>
      <TreatmentGrid heading={false} />
      <CTABanner location="treatments-hub-cta" />
    </Layout>
  )
}
