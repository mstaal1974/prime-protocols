import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import ProcessSteps from '@/components/sections/ProcessSteps'
import Accordion from '@/components/ui/Accordion'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'How It Works — Doctor-led Telehealth Process',
  description:
    'How the Prime Protocols telehealth process works: book, complete intake, pathology, consultation, treatment plan, ongoing review.',
  alternates: { canonical: '/how-it-works' },
}

const steps = [
  {
    number: '01',
    title: 'Book a consultation',
    description:
      'Choose a time that works through the secure online booking system. Initial consultations are 30–45 minutes and conducted via telehealth.',
  },
  {
    number: '02',
    title: 'Complete your intake',
    description:
      'A structured medical history and symptom intake — reviewed by your doctor in advance so the consultation can focus on what matters.',
  },
  {
    number: '03',
    title: 'Pathology arranged',
    description:
      // CONTENT_AGENT / OPEN ITEM: Strategy doc §9 + Open Items #14 —
      // confirm whether pathology is arranged through a Prime Protocols
      // provider or via patient self-referral. Placeholder below.
      'Comprehensive pathology is arranged at a time convenient for you, at a collection centre near you. (Pathology provider: TBC — strategy Open Items #14.)',
  },
  {
    number: '04',
    title: 'Doctor consultation',
    description:
      'A doctor-led telehealth consultation. Full assessment, results reviewed in context, and a clear conversation about clinical options.',
  },
  {
    number: '05',
    title: 'Treatment plan',
    description:
      'If treatment is clinically indicated, your doctor prepares a written plan covering protocol, monitoring, and review schedule.',
  },
  {
    number: '06',
    title: 'Ongoing review',
    description:
      'Treatment is reviewed at clinically appropriate intervals — typically every 3 months — to assess progress and adjust where indicated.',
  },
]

const faqs = [
  {
    question: 'Do you offer in-person consultations?',
    answer:
      'Prime Protocols is primarily a telehealth service, which means you can access specialist men&apos;s health care from anywhere in Australia. Edge cases where in-person assessment is recommended will be discussed individually.',
  },
  {
    question: 'How much does a consultation cost?',
    answer:
      'Pricing details are provided through the booking system at the point of booking. We don&apos;t publish pricing on the website because the appropriate consultation depends on the clinical question.',
  },
  {
    question: 'Is treatment covered by Medicare or private health insurance?',
    answer:
      'Coverage depends on the consultation type, the clinical indication, and your individual cover. Specifics are confirmed at the time of booking.',
  },
  {
    question: 'How long until I get results?',
    answer:
      'Pathology turnaround is typically 2–5 business days. Your follow-up consultation is scheduled once results are in so your doctor can review them with you in context.',
  },
  {
    question: 'Is peptide therapy legal in Australia?',
    answer:
      'Yes — within the regulatory framework. Specific peptides can be prescribed by a registered medical practitioner where there is a clinical indication. Working with a clinic that operates within the framework is the difference between legal medical care and something else.',
  },
  {
    question: 'Can I see my GP for this instead?',
    answer:
      'You absolutely can. Many GPs are skilled in some of the areas we work in. Our role is to provide a specialist clinical assessment in domains where general practice training is often limited — comprehensive hormone reading, peptide therapy, longevity medicine.',
  },
  {
    question: 'What happens after the treatment plan?',
    answer:
      'Your doctor schedules a follow-up to review progress — typically at the 3-month mark, with subsequent reviews as clinically indicated. Ongoing access to your clinical team is built into the plan.',
  },
]

export default function HowItWorksPage() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            The process
          </p>
          <h1 className="font-display text-display-lg font-semibold leading-tight text-navy max-w-3xl">
            Six steps. One doctor-led plan.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-700">
            We&apos;ve designed the process to be thorough, transparent, and respectful of your
            time. No upsells. No theatre. The medicine is the product.
          </p>
        </div>
      </section>

      <section className="bg-bone py-section">
        <div className="container-site">
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
                Common questions
              </p>
              <h2 className="font-display text-display-md font-semibold text-navy">
                Frequently asked.
              </h2>
              <p className="mt-4 text-grey-700">
                A short list of what most patients want to know before booking. Anything not
                answered here? Email{' '}
                <a
                  href="mailto:hello@primeprotocols.com.au"
                  className="underline underline-offset-4 decoration-steel text-navy"
                >
                  hello@primeprotocols.com.au
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTABanner location="how-it-works-cta" />
    </Layout>
  )
}
