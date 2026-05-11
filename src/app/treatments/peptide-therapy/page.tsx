import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TreatmentHero from '@/components/treatment/TreatmentHero'
import ProseSection from '@/components/ui/ProseSection'
import CTABanner from '@/components/sections/CTABanner'
import Disclaimer from '@/components/compliance/Disclaimer'
import TGANotice from '@/components/compliance/TGANotice'

// COMPLIANCE: Outcome and mechanism-based copy ONLY. No specific peptide
// names anywhere in this page. Strategy doc §7.2 + Open Items #1.
// Brand and category names that are explicitly prohibited here:
//   BPC-157, TB-500, CJC-1295, Ipamorelin, GHK-Cu, Sermorelin,
//   Tesamorelin, AOD-9604.
// If a future content edit references any of these, halt and refer to
// the QA agent's Section A audit checklist.

export const metadata: Metadata = {
  title: 'Peptide Therapy — Specialist Telehealth Australia',
  description:
    'Legal, prescription peptide therapy under specialist supervision in Australia. Outcome-based protocols, evidence-led, fully TGA compliant.',
  keywords: [
    'peptide therapy Australia',
    'peptide doctor Australia',
    'legal peptide prescription Australia',
    'specialist peptide clinic',
  ],
  alternates: { canonical: '/treatments/peptide-therapy' },
}

export default function PeptideTherapyPage() {
  return (
    <Layout>
      <TreatmentHero
        slug="peptide-therapy"
        icon="peptide"
        badge="Specialist consultation required"
        title="Peptide Therapy"
        subtitle="Specialist-prescribed peptide therapy under Australian regulatory framework. Outcome-led, evidence-based, and individually assessed."
      />

      <section className="bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-prose -mt-4 mb-12">
            <TGANotice />
          </div>
        </div>
      </section>

      <article className="bg-white pb-16 md:pb-24">
        <div className="container-site">
          <ProseSection>
            <h2>What peptide therapy is — by outcome</h2>
            <p>
              Peptides are short chains of amino acids that occur naturally in the body and play
              specific signalling roles — including in repair, recovery, hormonal regulation, and
              metabolic processes. Therapeutically, specific peptides can be prescribed by
              registered medical practitioners where there is a clinical indication and where the
              regulatory framework allows.
            </p>
            <p>
              Because of TGA advertising restrictions, this page does not name specific peptides or
              describe specific products. The clinical conversation about whether a particular
              peptide is appropriate for you takes place inside the consultation, where an
              individual assessment can be made.
            </p>

            <h2>How the prescription process works in Australia</h2>
            <p>
              Peptide prescribing in Australia is regulated. It involves an individual clinical
              assessment by a medical practitioner, a determination of clinical appropriateness,
              and prescription through a legitimate compounding pharmacy. There is no over-the-
              counter pathway. There is no shortcut. Anyone selling injectable peptides directly to
              consumers in Australia is operating outside the legal framework.
            </p>

            <h2>Specialist peptide doctor vs GP</h2>
            <p>
              Most GPs have limited training in peptide therapy because it sits outside standard
              medical curricula. A specialist peptide doctor has dedicated experience with the
              indications, dosing patterns, monitoring requirements, and the clinical research base
              — and is able to assess whether peptide therapy is appropriate, and which class of
              peptide is appropriate, for a given clinical question.
            </p>

            <h2>Is peptide therapy legal in Australia?</h2>
            <p>
              Yes — within the regulatory framework. Specific peptides can be prescribed by a
              registered medical practitioner where there is a clinical indication and where the
              substance is permitted for the proposed use. The framework is detailed and the rules
              change over time. Working with a clinic that operates within them is the difference
              between legal medical care and something else.
            </p>

            <h2>What to expect from a Prime Protocols assessment</h2>
            <p>
              A telehealth consultation with a doctor experienced in peptide therapy. A thorough
              assessment of your clinical picture and your goals. Comprehensive pathology where
              appropriate. A clear conversation about whether peptide therapy is appropriate for
              you — and if so, what protocol is clinically indicated and how it will be supervised.
            </p>
          </ProseSection>

          <div className="mx-auto max-w-prose">
            <Disclaimer />
          </div>
        </div>
      </article>

      <CTABanner
        eyebrow="Next step"
        heading="Book a peptide therapy consultation."
        body="A specialist assessment — and a clear answer on what is appropriate for your clinical picture."
        location="peptide-therapy-cta"
      />
    </Layout>
  )
}
