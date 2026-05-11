import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import DoctorEnquiryForm from '@/components/forms/DoctorEnquiryForm'

export const metadata: Metadata = {
  title: 'For Doctors — Licensed Clinical Peptide Protocols',
  description:
    'Licensed clinical protocols for registered Australian practitioners. Peer-to-peer clinical support, formal sign-off, comprehensive documentation.',
  keywords: [
    'peptide protocol licensing',
    'clinical peptide protocol Australia',
    'peptide prescribing',
    'GP peptide referral',
  ],
  alternates: { canonical: '/for-doctors' },
}

export default function ForDoctorsPage() {
  return (
    <Layout>
      <section className="bg-navy text-white">
        <div className="container-site py-20 md:py-28">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-light">
            For practitioners
          </p>
          <h1 className="font-display text-display-lg font-semibold leading-tight max-w-3xl">
            Licensed clinical protocols for your patients.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-200">
            Prime Protocols partners with registered Australian medical practitioners through a
            written-protocol model. Comprehensive clinical documentation, formal sign-off, and
            peer-to-peer support.
          </p>
        </div>
      </section>

      <section className="bg-bone py-section">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-display-md font-semibold text-navy">
                The protocol model
              </h2>
              <p className="mt-5 text-grey-700 leading-relaxed">
                Each clinical protocol is a written, evidence-referenced document covering
                indications, contraindications, dosing, monitoring, and red-flag scenarios. The
                downstream practitioner reviews the protocol, formally signs off that it has been
                read and understood, and agrees not to modify it without explicit consultation.
              </p>
              <p className="mt-4 text-grey-700 leading-relaxed">
                The model exists so that practitioners with the right scope of practice can
                prescribe with the clinical backing of a documented, defensible protocol — and so
                Prime Protocols can support the standard at a system level.
              </p>
            </div>
            <div className="rounded-md border border-grey-200 bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-navy">What you receive</h3>
              <ul className="mt-4 space-y-3 text-sm text-grey-700">
                {[
                  'Written clinical protocols across six clinical areas',
                  'Indications, contraindications, dosing, monitoring',
                  'Formal sign-off and compliance documentation',
                  'Ongoing clinical updates as the evidence base evolves',
                  'Peer-to-peer clinical support',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-steel-dark"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                t: 'Who it is for',
                d: 'GPs, sports medicine, and integrative practitioners who want to broaden their clinical scope into men&rsquo;s health with documented backing.',
              },
              {
                t: 'What it is not',
                d: 'A franchise model. A supplement reseller arrangement. Anything that requires the practitioner to do less clinical work, not more.',
              },
              {
                t: 'How it works',
                d: 'Enquiry &rarr; introductory call &rarr; protocol review &rarr; formal agreement &rarr; clinical onboarding &rarr; ongoing support.',
              },
            ].map((p) => (
              <div key={p.t}>
                <h3 className="font-display text-xl font-semibold text-navy">{p.t}</h3>
                <p
                  className="mt-3 text-grey-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.d }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="bg-bone py-section">
        <div className="container-site">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
              Practitioner enquiry
            </p>
            <h2 className="font-display text-display-md font-semibold text-navy">
              Submit a practitioner enquiry.
            </h2>
            <p className="mt-3 mb-10 text-grey-700">
              For AHPRA-registered Australian practitioners only. A member of our clinical team will
              respond within 2 business days.
            </p>
            <DoctorEnquiryForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}
