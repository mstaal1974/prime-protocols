import BookingButton from '@/components/ui/BookingButton'
import Button from '@/components/ui/Button'

interface CTABannerProps {
  eyebrow?: string
  heading?: string
  body?: string
  location?: string
}

export default function CTABanner({
  eyebrow = 'Ready when you are',
  heading = "Get started with a doctor-led men's health assessment.",
  body = 'Comprehensive pathology, telehealth consultation, and a treatment plan that fits the clinical picture — not a sales script.',
  location = 'page-cta',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-section text-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.06] md:block">
        <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid slice" fill="none">
          <path
            d="M0 32 L10 32 L12 24 L15 38 L18 20 L22 32 L26 16 L30 24 L34 10 L40 16 L48 8"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="container-site relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-steel-light">
              {eyebrow}
            </p>
            <h2 className="font-display text-display-lg font-semibold leading-[1] tracking-tight">
              {heading}
            </h2>
            <p className="mt-5 max-w-xl text-grey-200">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <BookingButton size="lg" location={location} />
            <Button
              label="How it works"
              href="/how-it-works"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
