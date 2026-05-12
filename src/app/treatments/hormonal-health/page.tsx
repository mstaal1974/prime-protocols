import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TreatmentHero from '@/components/treatment/TreatmentHero'
import ProseSection from '@/components/ui/ProseSection'
import CTABanner from '@/components/sections/CTABanner'
import Disclaimer from '@/components/compliance/Disclaimer'

// COMPLIANCE: No specific Schedule 4 substance names in promotional copy.
// AHPRA "Guidelines for advertising a regulated health service" + TGA
// Advertising Code prohibit direct-to-consumer advertising of S4 medicines.
// Page is framed around the clinical condition (hormonal decline) and the
// service category (assessment + optimisation), not the active substance.
// Verify with regulatory lawyer before launch — strategy doc Open Items #1.

export const metadata: Metadata = {
  title: 'Hormonal Decline & Optimisation — Telehealth Assessment Australia',
  description:
    "Comprehensive hormone assessment and medically supervised optimisation for men. Free vs total hormones, SHBG, LH, FSH, oestradiol — read in clinical context.",
  keywords: [
    "men's hormone testing Australia",
    'hormonal decline men',
    "men's hormone clinic Australia",
    'hormone optimisation Australia',
    'androgen deficiency assessment',
    'comprehensive hormone panel men',
  ],
  alternates: { canonical: '/treatments/hormonal-health' },
}

export default function HormonalHealthPage() {
  return (
    <Layout>
      <TreatmentHero
        slug="hormonal-health"
        icon="hormone"
        badge="Medical assessment required"
        title="Hormonal Decline &amp; Optimisation"
        subtitle="What hormonal decline actually feels like, what a proper hormone panel measures, and how medically supervised hormonal optimisation works in Australia."
      />

      <article className="bg-white py-16 md:py-24">
        <div className="container-site">
          <ProseSection>
            <h2>What hormonal decline actually feels like</h2>
            <p>
              Hormonal decline in men rarely arrives as a single dramatic symptom. More often it is
              a slow accumulation: persistent fatigue that does not improve with sleep, motivation
              that feels harder to summon, recovery times that have quietly doubled, mental
              cloudiness, flatter mood, reduced libido, body composition drifting in the wrong
              direction.
            </p>
            <p>
              Many men assume this pattern is just &ldquo;getting older.&rdquo; Sometimes it is.
              Often, it isn&apos;t. The only way to know is to measure.
            </p>

            <h2>Free vs total hormones — why the numbers matter</h2>
            <p>
              A standard GP test usually reports only total hormone levels. That number is
              genuinely useful, but it&apos;s incomplete. Most of the active hormones in your blood
              are bound to a protein called sex-hormone binding globulin (SHBG) and are not
              biologically available. The fraction that is unbound — the{' '}
              <strong>free hormone level</strong> — is what actually reaches tissues.
            </p>
            <p>
              Men with &ldquo;normal&rdquo; total hormone levels can have low free hormone levels
              if SHBG is elevated. The reverse is also true. Reading total in isolation is one of
              the most common reasons men are told they are fine when they aren&apos;t.
            </p>

            <h2>What a comprehensive hormone panel includes</h2>
            <p>
              A proper men&apos;s hormone assessment looks at the full picture, not one or two
              numbers. It typically includes:
            </p>
            <ul>
              <li>Total and free hormone levels, with SHBG calculated</li>
              <li>Luteinising hormone (LH) and follicle-stimulating hormone (FSH)</li>
              <li>Oestradiol (E2) — the hormonal marker most often missed</li>
              <li>Prolactin, DHEA-S, and cortisol where indicated</li>
              <li>Thyroid markers (TSH, free T4)</li>
              <li>Metabolic and inflammation markers that affect hormone function</li>
            </ul>
            <p>
              The panel is read together, not as isolated numbers. A picture with elevated LH and
              low primary hormones tells a different story than one with low LH and low primary
              hormones. The clinical picture is what matters.
            </p>

            <h2>Hormone replacement in Australia — what it involves</h2>
            <p>
              Hormone replacement therapy is a regulated medical treatment in Australia. It is
              appropriate for men with a clinically confirmed deficiency and is prescribed only
              following a thorough clinical assessment by a registered medical practitioner.
              Ongoing monitoring is built into the protocol.
            </p>
            <p>
              Replacement is not appropriate for every man with symptoms. There are clinical paths
              that address underlying drivers — insulin resistance, sleep, inflammation — and can
              restore hormonal function without exogenous treatment. We assess for both.
            </p>

            <h2>Path A vs Path B — two clinical approaches</h2>
            <p>
              <strong>Path A</strong> uses hormone replacement, often alongside adjunct therapies,
              where the clinical picture indicates it&apos;s the right tool.
            </p>
            <p>
              <strong>Path B</strong> addresses the underlying drivers of hormonal decline before
              considering replacement. Sometimes both happen together. The decision is clinical,
              not ideological.
            </p>

            <h2>What to expect from a Prime Protocols assessment</h2>
            <p>
              A telehealth consultation with a doctor experienced in men&apos;s hormonal health.
              Comprehensive pathology arranged at a convenient time. A follow-up consultation to
              walk through the results in context and to discuss treatment options if treatment is
              clinically indicated. Ongoing monitoring built into the plan.
            </p>
          </ProseSection>

          <div className="mx-auto max-w-prose">
            <Disclaimer />
          </div>
        </div>
      </article>

      <CTABanner
        eyebrow="Next step"
        heading="Book a doctor-led hormone assessment."
        body="Comprehensive pathology, telehealth consultation, treatment plan if clinically indicated."
        location="hormonal-health-cta"
      />
    </Layout>
  )
}
