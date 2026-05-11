import Link from 'next/link'
import BookingButton from '@/components/ui/BookingButton'

// Strategy §11 — "Two clear patient pathways on the homepage — Patients
// and Doctors — given equal visual weight and clearly differentiated."

export default function DualPathway() {
  return (
    <section className="bg-bone py-section">
      <div className="container-site">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
              Two clear paths
            </p>
            <h2 className="font-display text-display-md font-semibold text-navy">
              Whether you&apos;re a patient or a practitioner.
            </h2>
          </div>
          <p className="max-w-md text-sm text-grey-700 md:text-base">
            Prime Protocols delivers care directly to patients and provides clinical protocol
            partnerships to registered practitioners across Australia.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Patients */}
          <article className="group relative flex flex-col overflow-hidden rounded-md border border-grey-200 bg-white p-8 transition-shadow hover:shadow-lift md:p-10">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-steel-dark">
              <span className="inline-block h-px w-6 bg-steel-dark" />
              For patients
            </div>
            <h3 className="font-display text-display-sm font-semibold text-navy">
              Get assessed by a doctor who actually understands men&apos;s health.
            </h3>
            <p className="mt-4 flex-1 text-grey-700">
              Comprehensive telehealth assessment, in-depth pathology, and a treatment plan tailored
              to your clinical picture. No supplement upsells. No theatre. Just medicine.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-grey-700">
              {[
                'Comprehensive hormone, metabolic, and inflammation panels',
                'Doctor-led consultations — Australia-wide telehealth',
                'Treatment options across six clinical areas',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-steel-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookingButton location="home-dualpath" />
              <Link
                href="/how-it-works"
                className="inline-flex h-11 items-center px-3 text-sm font-medium text-navy underline underline-offset-4 decoration-steel hover:decoration-2"
              >
                How it works
              </Link>
            </div>
          </article>

          {/* Doctors */}
          <article className="group relative flex flex-col overflow-hidden rounded-md bg-navy p-8 text-white md:p-10">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-steel-light">
              <span className="inline-block h-px w-6 bg-steel-light" />
              For doctors
            </div>
            <h3 className="font-display text-display-sm font-semibold">
              Licensed clinical peptide protocols for your patients.
            </h3>
            <p className="mt-4 flex-1 text-grey-200">
              A written-protocol model designed for GPs, sports medicine, and integrative
              practitioners. Comprehensive documentation, formal sign-off, and clinical support.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-grey-200">
              {[
                'Licensed protocols across six clinical areas',
                'Documented sign-off and compliance framework',
                'Peer-to-peer clinical support',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-steel-light" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/for-doctors"
                className="inline-flex h-11 items-center bg-white px-6 text-sm font-medium text-navy transition-colors hover:bg-bone"
              >
                For practitioners →
              </Link>
              <Link
                href="/for-doctors#enquiry"
                className="inline-flex h-11 items-center px-3 text-sm font-medium text-white underline underline-offset-4 decoration-steel-light hover:decoration-2"
              >
                Submit enquiry
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
