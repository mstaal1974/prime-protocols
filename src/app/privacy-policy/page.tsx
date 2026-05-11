import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'

// COMPLIANCE: Placeholder — solicitor-drafted Privacy Policy required
// before launch. Strategy doc Open Items #2. Launch blocker.
// TODO[LAUNCH]: Replace this entire page with solicitor-drafted policy.

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Prime Protocols privacy policy.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="container-site py-20 max-w-prose mx-auto">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
            Privacy Policy
          </p>
          <h1 className="font-display text-display-md font-semibold text-navy">
            Privacy Policy
          </h1>

          <div className="mt-8 rounded-md border-l-4 border-teal bg-grey-100 px-6 py-5 text-sm leading-relaxed text-grey-700">
            <p className="mb-2 font-semibold text-navy">
              Placeholder — pending solicitor review
            </p>
            <p>
              This page is a placeholder. The final Privacy Policy must be drafted or reviewed by a
              qualified Australian solicitor before the website goes live, in accordance with the
              Privacy Act 1988 (Cth) and the Australian Privacy Principles.
            </p>
          </div>

          <div className="mt-10 space-y-5 text-grey-700 leading-relaxed">
            <p>
              Prime Protocols is committed to protecting the privacy of personal information
              collected through this website and through our telehealth services. This Privacy
              Policy explains how we collect, use, store, and disclose personal information.
            </p>
            <p>
              Information we may collect includes name, contact details, date of birth, medical
              history, AHPRA details (for practitioners), and other information you provide through
              our forms and booking system.
            </p>
            <p>
              We use this information to provide our services, to communicate with you, to comply
              with our legal obligations, and to improve our services.
            </p>
            <p>
              For questions about how your information is handled, please contact us at{' '}
              <a
                href="mailto:hello@primeprotocols.com.au"
                className="underline underline-offset-4 decoration-steel text-navy"
              >
                hello@primeprotocols.com.au
              </a>
              .
            </p>
            <p className="text-sm italic text-grey-500">
              Full policy to be inserted following solicitor review.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
