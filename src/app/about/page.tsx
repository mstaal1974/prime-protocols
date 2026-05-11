import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import CTABanner from '@/components/sections/CTABanner'
import ProseSection from '@/components/ui/ProseSection'
import { AUTHORS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About — Doctor-led men\u2019s health telehealth Australia',
  description:
    "Doctor-led men's health telehealth clinic. Meet the clinical team behind Prime Protocols and learn how we work.",
  alternates: { canonical: '/about' },
}

const elise = AUTHORS['elise-hartley']

export default function AboutPage() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            About Prime Protocols
          </p>
          <h1 className="font-display text-display-lg font-semibold leading-tight text-navy max-w-3xl">
            A clinic built on the medicine. Not the marketing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-700">
            Prime Protocols is a doctor-led men&apos;s health telehealth clinic operating across
            Australia. We provide evidence-based clinical assessment and treatment across six
            clinical areas — testosterone, recovery, longevity, metabolic health, energy, and
            specialist peptide therapy.
          </p>
        </div>
      </section>

      <section className="bg-bone py-section">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                t: 'Doctor-led',
                d: 'Every protocol is prescribed by a registered Australian medical practitioner following an individual clinical assessment. There are no exceptions.',
              },
              {
                t: 'Evidence-based',
                d: "We draw on current clinical research. We're clear about what the evidence shows and what it doesn't — and where uncertainty sits.",
              },
              {
                t: 'Regulatory-compliant',
                d: 'We operate strictly within the TGA framework and the Australian medical regulatory environment. No grey-market products, no offshore workarounds.',
              },
            ].map((p) => (
              <div key={p.t}>
                <h3 className="font-display text-xl font-semibold text-navy">{p.t}</h3>
                <p className="mt-3 text-grey-700 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr Kai profile — full placeholder per build spec + strategy Open Items #7 */}
      <section className="bg-white py-section">
        <div className="container-site">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            Clinical Director
          </p>
          <h2 className="font-display text-display-md font-semibold text-navy max-w-2xl">
            Dr Kai
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="aspect-square w-full max-w-xs bg-grey-100 flex items-center justify-center text-xs text-grey-500 border border-grey-200 rounded-md">
                {/* CONTENT_AGENT: Dr Kai headshot — pending dedicated session */}
                Headshot pending
              </div>
            </div>
            <div className="lg:col-span-8">
              {/* CONTENT_AGENT: Full Dr Kai profile — name, qualifications,
                  AHPRA number, professional biography, clinical philosophy.
                  Strategy doc Open Items #7 — dedicated session required.
                  This entire block is a placeholder. */}
              <div className="rounded-md border-l-4 border-steel bg-grey-50 px-6 py-5 text-sm leading-relaxed text-grey-700">
                <p className="mb-2 font-semibold text-navy">
                  Profile pending — dedicated session required
                </p>
                <p>
                  Dr Kai&apos;s full biography, qualifications, AHPRA registration number, clinical
                  philosophy, and headshot are pending a dedicated content session. This is a known
                  launch blocker (strategy doc Open Items #7).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elise Hartley — strategy §13 */}
      <section className="bg-bone py-section">
        <div className="container-site">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            Health Science Communications
          </p>
          <h2 className="font-display text-display-md font-semibold text-navy max-w-2xl">
            Elise Hartley
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="aspect-square w-full max-w-xs bg-grey-100 flex items-center justify-center text-xs text-grey-500 border border-grey-200 rounded-md">
                {/* CONTENT_AGENT: Generate Elise portrait per strategy §13.3 prompt */}
                Portrait pending
              </div>
            </div>
            <div className="lg:col-span-8">
              <ProseSection>
                <p>{elise.bio}</p>
                <p className="text-sm italic text-grey-500 border-t border-grey-200 pt-4 mt-4">
                  {'disclosure' in elise ? elise.disclosure : ''}
                </p>
              </ProseSection>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Get assessed"
        heading="Doctor-led care, on your timetable."
        body="Telehealth consultation, comprehensive pathology, treatment plan — all from your home."
        location="about-cta"
      />
    </Layout>
  )
}
