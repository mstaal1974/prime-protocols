import { HALAXY_CONFIG } from '@/lib/halaxy'

// INTEGRATION: Replace placeholder with live Halaxy embed once
// the platform is configured. Strategy doc Open Items #8.

export default function HalaxyEmbed() {
  if (HALAXY_CONFIG.isPlaceholder) {
    return (
      <div className="rounded-md border border-dashed border-grey-300 bg-grey-50 p-8 text-center text-sm text-grey-600">
        <p className="font-semibold text-navy">Booking system pending</p>
        <p className="mt-2">
          The Halaxy booking system will be embedded here once configured. In the meantime, please
          email{' '}
          <a
            href="mailto:hello@primeprotocols.com.au"
            className="underline underline-offset-4 decoration-steel text-navy"
          >
            hello@primeprotocols.com.au
          </a>{' '}
          to enquire.
        </p>
      </div>
    )
  }

  return (
    <div className="halaxy-embed">
      <iframe
        src={HALAXY_CONFIG.bookingUrl}
        title="Book a consultation"
        className="h-[720px] w-full rounded-md border border-grey-200"
        loading="lazy"
      />
      <p className="mt-3 text-center text-xs text-grey-500">
        Booking system not loading?{' '}
        <a
          href={HALAXY_CONFIG.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-steel text-navy"
        >
          Open in a new window.
        </a>
      </p>
    </div>
  )
}
