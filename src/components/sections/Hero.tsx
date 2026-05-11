import BookingButton from '@/components/ui/BookingButton'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Background mark — large signal/waveform watermark */}
      <div className="pointer-events-none absolute -right-32 top-1/2 hidden -translate-y-1/2 opacity-[0.08] lg:block">
        <svg width="720" height="720" viewBox="0 0 48 48" fill="none">
          <path
            d="M3 34 L9 34 L11 26 L14 30 L17 22 L21 26 L24 18 L28 22 L31 14 L36 18 L40 10"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          <path
            d="M5 30 L10 30 L12 22 L15 36 L18 18 L22 30 L26 14 L30 22 L34 8"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container-site relative py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-steel-light">
            <span className="inline-block h-px w-8 bg-steel-light" />
            Doctor-led · Telehealth · Australia-wide
          </div>
          <h1 className="font-display text-display-xl font-semibold leading-[0.95] tracking-tight">
            <span className="block">Doctor-led men&apos;s</span>
            <span className="block">health.</span>
            <span className="block text-steel-light">Evidence-based.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-grey-200">
            Testosterone, recovery, longevity, metabolic health, energy and cognition. Telehealth
            consultations and clinically supervised protocols — available Australia-wide.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BookingButton size="lg" location="home-hero" />
            <Button
              label="See how it works"
              href="/how-it-works"
              variant="outline"
              size="lg"
              withArrow
              className="border-white text-white hover:bg-white hover:text-navy"
            />
          </div>
        </div>
      </div>

      {/* Editorial trust strip */}
      <div className="relative border-t border-navy-light/60">
        <div className="container-site grid grid-cols-2 divide-x divide-navy-light/60 md:grid-cols-4">
          {[
            ['Registered', 'Medical practitioners'],
            ['TGA', 'Compliant prescribing'],
            ['Australia-wide', 'Telehealth access'],
            ['Evidence-based', 'Clinical protocols'],
          ].map(([k, v]) => (
            <div key={k as string} className="px-4 py-5 first:pl-0 md:px-6 md:py-6">
              <div className="font-display text-sm font-semibold text-steel-light">{k}</div>
              <div className="text-xs text-grey-300">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
