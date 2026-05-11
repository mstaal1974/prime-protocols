import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TreatmentHero from '@/components/treatment/TreatmentHero'
import ProseSection from '@/components/ui/ProseSection'
import CTABanner from '@/components/sections/CTABanner'
import Disclaimer from '@/components/compliance/Disclaimer'

export const metadata: Metadata = {
  title: "Men's Longevity & Vitality — Doctor-led Telehealth Australia",
  description:
    'Evidence-based longevity medicine for health-conscious men over 40. Comprehensive assessment of the biological drivers of decline — and what can be done about them.',
  keywords: [
    "men's longevity clinic Australia",
    'healthy ageing men Australia',
    'vitality after 50',
    'mitochondrial health men',
    'longevity assessment',
  ],
  alternates: { canonical: '/treatments/longevity' },
}

export default function LongevityPage() {
  return (
    <Layout>
      <TreatmentHero
        slug="longevity"
        icon="longevity"
        badge="Medical assessment required"
        title="Men&rsquo;s Longevity &amp; Vitality"
        subtitle="Evidence-based longevity medicine for men 40+ who want to understand what ageing actually is at the cellular level — and what realistically changes the trajectory."
      />

      <article className="bg-white py-16 md:py-24">
        <div className="container-site">
          <ProseSection>
            <h2>Why men decline faster than they should</h2>
            <p>
              The biology of male ageing is not a single process. Hormonal output declines.
              Mitochondrial efficiency drops. Insulin sensitivity drifts. Chronic low-grade
              inflammation creeps in. Sleep architecture changes. None of these is destiny — each is
              measurable and, often, modifiable.
            </p>

            <h2>What a longevity assessment involves</h2>
            <p>
              A comprehensive panel that looks at the systems most strongly associated with
              healthspan: hormonal status, metabolic health, inflammation markers, lipid biology,
              and where appropriate, indicators of mitochondrial and cellular function. The
              consultation is about interpreting the data — and identifying the few things that are
              most likely to move the needle for you.
            </p>

            <h2>Lifestyle plus medicine — how they work together</h2>
            <p>
              The foundation is always lifestyle: sleep, strength training, nutrition, alcohol,
              stress. Medicine layers in where biology has drifted far enough that lifestyle
              alone can&apos;t restore it. Both are necessary. Either one alone is partial.
            </p>

            <h2>Mitochondrial function in men</h2>
            <p>
              Mitochondria are the cellular structures that produce most of the ATP your body
              uses. Their function declines with age — but the rate of decline varies enormously.
              Mitochondrial health is influenced by sleep, exercise, certain nutrients, and the
              metabolic environment they operate in. It is not a single test, but it can be
              assessed indirectly through markers we already know how to read.
            </p>

            <h2>The three root causes most doctors miss</h2>
            <ul>
              <li>
                <strong>Insulin resistance</strong> — drifting metabolic flexibility, often present
                long before fasting glucose rises.
              </li>
              <li>
                <strong>Chronic low-grade inflammation</strong> — detectable on standard markers but
                rarely investigated in healthy-looking men.
              </li>
              <li>
                <strong>Mitochondrial dysfunction</strong> — reduced cellular energy output, often
                presenting as &ldquo;just tired.&rdquo;
              </li>
            </ul>
            <p>
              These are not exotic. They are well-described in the clinical literature. They are
              underexamined in routine practice because standard panels weren&apos;t designed to
              find them.
            </p>
          </ProseSection>

          <div className="mx-auto max-w-prose">
            <Disclaimer />
          </div>
        </div>
      </article>

      <CTABanner
        eyebrow="Next step"
        heading="Book a longevity assessment."
        body="A clinical look at what&rsquo;s actually driving your trajectory — and what realistically changes it."
        location="longevity-cta"
      />
    </Layout>
  )
}
