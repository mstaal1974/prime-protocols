import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TreatmentHero from '@/components/treatment/TreatmentHero'
import ProseSection from '@/components/ui/ProseSection'
import CTABanner from '@/components/sections/CTABanner'
import Disclaimer from '@/components/compliance/Disclaimer'

// COMPLIANCE: No brand drug names in promotional copy.
// Educational framing only — confirm with regulatory lawyer before adding
// any references to Semaglutide/Wegovy/Ozempic/Tirzepatide/Mounjaro in
// service copy. See strategy doc §7.2 note + Open Items #1.

export const metadata: Metadata = {
  title: 'Weight Management & Metabolic Health — Telehealth Australia',
  description:
    'Medically supervised weight management and metabolic health programmes. Beyond the scales — insulin resistance, inflammation, hormones.',
  keywords: [
    'metabolic health doctor',
    'weight management Australia telehealth',
    'GLP-1 treatment online Australia',
    'insulin resistance men',
  ],
  alternates: { canonical: '/treatments/weight-management' },
}

export default function WeightManagementPage() {
  return (
    <Layout>
      <TreatmentHero
        slug="weight-management"
        icon="metabolic"
        badge="Medical assessment required"
        title="Weight Management &amp; Metabolic Health"
        subtitle="Medically supervised weight management for men whose metabolism has drifted. Beyond the scales: insulin resistance, inflammation, hormones, and the biology under them."
      />

      <article className="bg-white py-16 md:py-24">
        <div className="container-site">
          <ProseSection>
            <h2>Medically supervised vs commercial programmes</h2>
            <p>
              A commercial weight loss programme is built around a structured calorie deficit and
              behaviour change. For some people it works well — and for many men over 40, it
              doesn&apos;t, because the underlying biology has changed and the deficit alone
              isn&apos;t enough. A medically supervised programme starts with the question:{' '}
              <em>why isn&apos;t this working?</em>
            </p>

            <h2>How GLP-1 medications work (mechanism)</h2>
            <p>
              GLP-1 is a hormone your gut releases after eating. It signals satiety, slows gastric
              emptying, and modulates insulin response. GLP-1 receptor agonist medications mimic
              that signal — extending it and amplifying it. The result, in eligible patients, is
              reduced appetite, improved insulin sensitivity, and weight loss that&apos;s less
              about willpower and more about biology.
            </p>
            <p>
              These medications are prescription-only in Australia and require a clinical
              assessment. They are not for everyone and they are not a stand-alone solution. They
              are a tool, used with appropriate medical supervision, alongside the foundational
              work.
            </p>

            <h2>Who is a candidate in Australia</h2>
            <p>
              Eligibility for any prescription weight management therapy is determined by clinical
              criteria — BMI, comorbidities, medical history, and individual risk factors —
              assessed by a registered medical practitioner.
            </p>

            <h2>Metabolic markers men should test</h2>
            <ul>
              <li>Fasting glucose <em>and</em> fasting insulin (HOMA-IR)</li>
              <li>HbA1c</li>
              <li>Comprehensive lipid panel including ApoB</li>
              <li>hs-CRP (inflammation marker)</li>
              <li>Liver function (ALT, GGT)</li>
              <li>Hormonal markers — testosterone, SHBG, thyroid</li>
            </ul>
            <p>
              These tell a much fuller story than weight or BMI alone. Two men at the same weight
              can have completely different metabolic pictures.
            </p>

            <h2>Insulin resistance — the overlooked driver</h2>
            <p>
              Insulin resistance is widespread in men over 40 and is rarely measured directly in
              routine practice. It is one of the strongest drivers of weight gain that won&apos;t
              shift, energy crashes, and a hormonal picture that&apos;s harder to fix. Measuring it
              is straightforward. Addressing it changes more than weight alone.
            </p>
          </ProseSection>

          <div className="mx-auto max-w-prose">
            <Disclaimer />
          </div>
        </div>
      </article>

      <CTABanner
        eyebrow="Next step"
        heading="Book a metabolic assessment."
        body="A doctor-led look at what your metabolism is actually doing — and the levers that work."
        location="weight-management-cta"
      />
    </Layout>
  )
}
