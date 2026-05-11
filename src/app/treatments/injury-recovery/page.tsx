import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TreatmentHero from '@/components/treatment/TreatmentHero'
import ProseSection from '@/components/ui/ProseSection'
import CTABanner from '@/components/sections/CTABanner'
import Disclaimer from '@/components/compliance/Disclaimer'

export const metadata: Metadata = {
  title: 'Injury Recovery & Performance — Telehealth Australia',
  description:
    'Medically supervised recovery protocols for athletes, active men, and post-surgical patients. Evidence-led, mechanism-based assessment and treatment.',
  keywords: [
    'sports injury recovery telehealth',
    'soft tissue repair treatment Australia',
    'tendon injury recovery',
    'post-surgical recovery Australia',
    'telehealth sports medicine',
  ],
  alternates: { canonical: '/treatments/injury-recovery' },
}

export default function InjuryRecoveryPage() {
  return (
    <Layout>
      <TreatmentHero
        slug="injury-recovery"
        icon="recovery"
        badge="Medical assessment required"
        title="Injury Recovery &amp; Performance"
        subtitle="Medically supervised recovery for tendon, ligament, and soft-tissue injuries. For active men, athletes, and post-surgical patients who want their recovery driven by biology, not patience alone."
      />

      <article className="bg-white py-16 md:py-24">
        <div className="container-site">
          <ProseSection>
            <h2>Conditions we assess</h2>
            <p>
              Injury Recovery covers a defined clinical scope:
            </p>
            <ul>
              <li>Tendon injuries (Achilles, patellar, rotator cuff, elbow)</li>
              <li>Ligament damage and post-reconstruction recovery</li>
              <li>Muscle tears and soft-tissue injuries</li>
              <li>Post-surgical recovery — orthopaedic and general</li>
              <li>Chronic soft-tissue conditions in active men over 40</li>
            </ul>

            <h2>How tissue regeneration works</h2>
            <p>
              The body has well-characterised mechanisms for repairing soft tissue: inflammation,
              proliferation, remodelling. Each stage has cellular signals that orchestrate it —
              growth factors, cytokines, repair-cell migration. Clinical research is increasingly
              focused on how those signals can be supported precisely to shorten recovery and
              improve repair quality.
            </p>
            <p>
              The mechanism matters because it shapes treatment decisions. A recent tendon partial
              tear is biologically different from a six-month-old chronic tendinopathy. Both deserve
              treatment — different treatment.
            </p>

            <h2>Recovery timelines — what is realistic</h2>
            <p>
              Honest recovery timelines depend on tissue type, severity, age, and metabolic health.
              A medically supervised programme is realistic about all four. We don&apos;t promise
              dramatic acceleration — we work toward biology that&apos;s actually doing what it
              should.
            </p>

            <h2>Medically supervised vs standard rehabilitation</h2>
            <p>
              Standard rehabilitation focuses on physical loading and graduated return to activity —
              and it remains the foundation. Medically supervised recovery layers in the biological
              question: is the body able to repair effectively? Inflammation, hormonal status, and
              metabolic health all affect repair capacity. Where indicated, evidence-based adjunct
              therapies may be appropriate.
            </p>

            <h2>Who is a candidate</h2>
            <p>
              Men with a confirmed soft-tissue injury, a clinical diagnosis, and a recovery that
              is either not progressing or is progressing more slowly than expected. Assessment is
              the first step. Treatment, if clinically indicated, follows.
            </p>
          </ProseSection>

          <div className="mx-auto max-w-prose">
            <Disclaimer />
          </div>
        </div>
      </article>

      <CTABanner
        eyebrow="Next step"
        heading="Book a recovery assessment."
        body="A doctor-led look at what&rsquo;s actually driving the recovery — and what can change it."
        location="injury-recovery-cta"
      />
    </Layout>
  )
}
