import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TreatmentHero from '@/components/treatment/TreatmentHero'
import ProseSection from '@/components/ui/ProseSection'
import CTABanner from '@/components/sections/CTABanner'
import Disclaimer from '@/components/compliance/Disclaimer'

export const metadata: Metadata = {
  title: 'Low T & Hormonal Health — Telehealth Assessment Australia',
  description:
    "Comprehensive hormone assessment and medically supervised T optimisation. Total and free T, LH, FSH, oestradiol — read in clinical context.",
  keywords: [
    'low T treatment Australia',
    'T specialist telehealth',
    "men's hormone testing Australia",
    'TRT Australia',
    'free T test',
  ],
  alternates: { canonical: '/treatments/T' },
}

export default function TPage() {
  return (
    <Layout>
      <TreatmentHero
        slug="Test"
        icon="hormone"
        badge="Medical assessment required"
        title="Low T &amp; Hormonal Health"
        subtitle="What &lsquo;low T&rsquo; actually feels like, what a proper hormone panel measures, and how T optimisation works in Australia under medical supervision."
      />

      <article className="bg-white py-16 md:py-24">
        <div className="container-site">
          <ProseSection>
            <h2>What low T actually feels like</h2>
            <p>
              Low T rarely arrives as a single dramatic symptom. More often it is a slow
              accumulation: persistent fatigue that does not improve with sleep, motivation that
              feels harder to summon, recovery times that have quietly doubled, mental cloudiness,
              flatter mood, reduced libido, body composition drifting in the wrong direction.
            </p>
            <p>
              Many men assume this pattern is just &ldquo;getting older.&rdquo; Sometimes it is.
              Often, it isn&apos;t. The only way to know is to measure.
            </p>

            <h2>Total vs free T — why the number matters</h2>
            <p>
              A standard GP test usually reports only <strong>total T</strong>. That
              number is genuinely useful, but it&apos;s incomplete. Most of the T in your
              blood is bound to a protein called sex-hormone binding globulin (SHBG) and is not
              biologically available. The fraction that is unbound — <strong>free T
              </strong> — is what actually reaches tissues.
            </p>
            <p>
              Men with &ldquo;normal&rdquo; total T can have low free T if
              SHBG is elevated. The reverse is also true. Reading total in isolation is one of the
              most common reasons men are told they are fine when they aren&apos;t.
            </p>

            <h2>What a comprehensive hormone panel includes</h2>
            <p>
              A proper men&apos;s hormone assessment looks beyond T itself. It typically
              includes:
            </p>
            <ul>
              <li>Total and free T, with SHBG calculated</li>
              <li>Luteinising hormone (LH) and follicle-stimulating hormone (FSH)</li>
              <li>Oestradiol (E2) — the hormonal marker most often missed</li>
              <li>Prolactin, DHEA-S, and cortisol where indicated</li>
              <li>Metabolic and inflammation markers that affect hormone function</li>
            </ul>
            <p>
              The panel is read together, not as isolated numbers. A high LH with low T
              tells a different story than a low LH with low T. The clinical picture is
              what matters.
            </p>

            <h2>TRT in Australia — what it involves</h2>
            <p>
              T replacement therapy (TRT) is a regulated medical treatment in Australia.
              It is appropriate for men with clinically confirmed low T and is prescribed
              only following a thorough clinical assessment by a registered medical practitioner.
              Ongoing monitoring is built into the protocol.
            </p>
            <p>
              TRT is not appropriate for every man with symptoms. There are clinical paths that
              address underlying drivers — insulin resistance, sleep, inflammation — and can restore
              hormonal function without exogenous T. We assess for both.
            </p>

            <h2>Path A vs Path B — two clinical approaches</h2>
            <p>
              <strong>Path A</strong> uses TRT, often alongside adjunct therapies, where the
              clinical picture indicates it&apos;s the right tool.
            </p>
            <p>
              <strong>Path B</strong> addresses the underlying drivers of hormonal decline before
              considering TRT. Sometimes both happen together. The decision is clinical, not
              ideological.
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
        location="T-cta"
      />
    </Layout>
  )
}
