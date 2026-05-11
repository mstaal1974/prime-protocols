import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { SITE, TREATMENT_AREAS, FOOTER_DISCLAIMER } from '@/lib/constants'

const colPatients = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Book a Consultation', href: SITE.halaxyUrl, external: true },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

const colDoctors = [
  { label: 'For Doctors', href: '/for-doctors' },
  { label: 'Practitioner Enquiry', href: '/for-doctors#enquiry' },
]

const colCompany = [
  { label: 'About', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Contact', href: `mailto:${SITE.email}`, external: true },
]

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  if (external || href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="text-grey-300 transition-colors hover:text-white"
      >
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className="text-grey-300 transition-colors hover:text-white">
      {label}
    </Link>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-dark text-grey-200">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="md" variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-grey-300">
              {SITE.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                Treatments
              </h4>
              <ul className="space-y-3 text-sm">
                {TREATMENT_AREAS.map((t) => (
                  <li key={t.slug}>
                    <FooterLink href={`/treatments/${t.slug}`} label={t.shortTitle} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                Patients
              </h4>
              <ul className="space-y-3 text-sm">
                {colPatients.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} label={l.label} external={l.external} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                Doctors
              </h4>
              <ul className="space-y-3 text-sm">
                {colDoctors.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} label={l.label} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                {colCompany.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} label={l.label} external={l.external} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-navy-light/60 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-grey-400">{FOOTER_DISCLAIMER}</p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-grey-400 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. ABN {SITE.abn}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
