import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TreatmentHero from '@/components/treatment/TreatmentHero'
import ProseSection from '@/components/ui/ProseSection'
import CTABanner from '@/components/sections/CTABanner'
import Disclaimer from '@/components/compliance/Disclaimer'

export const metadata: Metadata = {
  title: 'Energy & Cognitive Performance — Telehealth Assessment Australia',
  description:
    'Clinical assessment and treatment for medically significant fatigue and cognitive decline. Energy is a biology problem, not a motivation problem.',
  keywords: [
    'energy after 50 men',
    'cognitive performance clinic',
    "fatigue men's health Australia",
    'mitochondrial energy assessment',
  ],
  alternates: { canonical: '/treatments/energy-cognition' },
}

export default function EnergyCognitionPage() {
  return (
    <Layout>
      <TreatmentHero
        slug="energy-cognition"
        icon="energy"
        badge="Medical assessment required"
        title="Energy &amp; Cognitive Performance"
        subtitle="Persistent fatigue and cognitive decline are biological — not motivational. A clinical assessment looks at the actual drivers and treats the ones that respond to treatment."
      />

      <article className="bg-white py-16 md:py-24">
        <div className="container-site">
          <ProseSection>
            <h2>Energy is a biology problem, not a motivation problem</h2>
            <p>
              Persistent fatigue does not respond to discipline. It responds to addressing what is
              actually producing it. When energy is low for months on end, the cause is somewhere
              in the system — hormones, sleep, mitochondria, inflammation, blood sugar, thyroid,
              iron, vitamin status, or some combination.
            </p>

            <h2>What causes medically significant fatigue</h2>
            <ul>
              <li>Hormonal imbalance — low testosterone, thyroid dysfunction, cortisol patterns</li>
              <li>Disrupted sleep architecture — including undiagnosed sleep apnoea</li>
              <li>Insulin resistance and metabolic drift</li>
              <li>Chronic low-grade inflammation</li>
              <li>Iron deficiency or B12/folate insufficiency</li>
              <li>Reduced mitochondrial function</li>
            </ul>
            <p>
              The list isn&apos;t exotic. Most of it is measurable. The question is whether anyone
              has measured it.
            </p>

            <h2>Cellular energy production</h2>
            <p>
              Cells produce most of their energy in mitochondria, through oxidative phosphorylation.
              Mitochondrial efficiency varies dramatically between individuals and declines with
              age, sleep deprivation, chronic stress, and certain metabolic conditions. Supporting
              mitochondrial function is an active area of clinical research.
            </p>

            <h2>NAD+ — what the research says</h2>
            <p>
              NAD+ (nicotinamide adenine dinucleotide) is a coenzyme central to energy production.
              NAD+ levels decline with age and clinical research is exploring whether restoring
              them affects energy and other ageing-related measures. The evidence is interesting,
              evolving, and worth understanding accurately — neither dismissed nor oversold.
            </p>

            <h2>Cognitive performance as a medical question</h2>
            <p>
              Brain fog, slower recall, reduced focus — these are commonly dismissed. They
              shouldn&apos;t be. They respond to the same biological inputs as physical energy:
              sleep, hormones, blood sugar, inflammation, micronutrient status. A clinical
              assessment looks at all of them.
            </p>

            <h2>Sleep, mitochondria, daily performance</h2>
            <p>
              Sleep is the single highest-leverage input on energy, cognition, and recovery. Poor
              sleep is not always obvious. We assess for it directly — and treat the things that
              can be treated.
            </p>
          </ProseSection>

          <div className="mx-auto max-w-prose">
            <Disclaimer />
          </div>
        </div>
      </article>

      <CTABanner
        eyebrow="Next step"
        heading="Book an energy assessment."
        body="A clinical look at why energy is low — and the levers that actually move it."
        location="energy-cognition-cta"
      />
    </Layout>
  )
}
