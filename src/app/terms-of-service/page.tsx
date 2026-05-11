import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'

// COMPLIANCE: Placeholder — solicitor-drafted Terms of Service required
// before launch. Strategy doc Open Items #2. Launch blocker.
// TODO[LAUNCH]: Replace this entire page with solicitor-drafted terms.

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Prime Protocols terms of service.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: false, follow: true },
}

export default function TermsOfServicePage() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="container-site py-20 max-w-prose mx-auto">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            Terms of Service
          </p>
          <h1 className="font-display text-display-md font-semibold text-navy">
            Terms of Service
          </h1>

          <div className="mt-8 rounded-md border-l-4 border-teal bg-grey-100 px-6 py-5 text-sm leading-relaxed text-grey-700">
            <p className="mb-2 font-semibold text-navy">
              Placeholder — pending solicitor review
            </p>
            <p>
              This page is a placeholder. The final Terms of Service must be drafted or reviewed by
              a qualified Australian solicitor before the website goes live.
            </p>
          </div>

          <div className="mt-10 space-y-5 text-grey-700 leading-relaxed">
            <p>
              These Terms of Service govern your use of the Prime Protocols website and services.
              By accessing this website or our services, you agree to be bound by these terms.
            </p>
            <p>
              Prime Protocols is a doctor-led Australian telehealth medical service. All treatments
              are prescribed by registered medical practitioners following an individual clinical
              assessment.
            </p>
            <p>
              The content on this website is general and educational only. It is not medical advice
              and is not a substitute for an individual consultation with a qualified medical
              practitioner.
            </p>
            <p>
              For questions about these terms, please contact us at{' '}
              <a
                href="mailto:hello@primeprotocols.com.au"
                className="underline underline-offset-4 decoration-steel text-navy"
              >
                hello@primeprotocols.com.au
              </a>
              .
            </p>
            <p className="text-sm italic text-grey-500">
              Full terms to be inserted following solicitor review.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
