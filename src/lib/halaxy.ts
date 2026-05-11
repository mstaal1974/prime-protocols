import { SITE } from '@/lib/constants'

// INTEGRATION: Replace placeholder URL via NEXT_PUBLIC_HALAXY_BOOKING_URL
// in env when Halaxy is configured. Strategy doc §9 / Open Item #8.
// AUDIT NOTE: Strategy doc also flags that Halaxy intake should include
// a compliance-reviewed disclaimer + informed consent framework. That is
// a Halaxy-platform-side concern — leave a marker here for the launch
// checklist:
// TODO[LAUNCH]: Confirm with regulatory lawyer that Halaxy intake flow
// includes the approved disclaimer + informed consent text before the
// first patient is booked.

export const HALAXY_CONFIG = {
  bookingUrl: SITE.halaxyUrl,
  isPlaceholder: SITE.halaxyUrl.includes('PLACEHOLDER') || SITE.halaxyUrl === '#book',
} as const

export type BookingContext = {
  treatmentArea?: string
  practitionerType?: 'patient' | 'doctor'
  source?: string
}

export function getHalaxyBookingUrl(_ctx?: BookingContext): string {
  // Extend with URL params once Halaxy URL structure is confirmed.
  return HALAXY_CONFIG.bookingUrl
}
