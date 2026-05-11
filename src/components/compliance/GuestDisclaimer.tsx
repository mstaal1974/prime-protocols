// Guest contributor article disclaimer.
// Text reproduced verbatim from strategy doc §8.5 — DO NOT EDIT without
// regulatory lawyer review. Launch blocker — strategy doc Open Items #4.

import { cn } from '@/lib/utils'

interface GuestDisclaimerProps {
  className?: string
}

export default function GuestDisclaimer({ className }: GuestDisclaimerProps) {
  return (
    <aside
      role="complementary"
      aria-label="About this guest contributor article"
      className={cn(
        'mt-12 mb-8 rounded-r-sm border-l-4 border-teal bg-grey-100 px-6 py-5 text-sm leading-relaxed text-grey-700',
        className
      )}
    >
      <h3 className="mb-3 font-display text-base font-semibold text-navy">About This Article</h3>
      <p className="mb-3">
        This article has been written by a guest contributor. The views, opinions, and personal
        experiences expressed are those of the author alone and do not represent the clinical
        position, medical opinion, or views of Prime Protocols or any medical practitioner
        associated with Prime Protocols.
      </p>
      <p className="mb-3">
        This article is written from personal experience and is intended for general interest only.
        It is not medical advice, clinical guidance, or a recommendation to pursue any particular
        treatment, medication, supplement, or lifestyle change.
      </p>
      <p>
        All health decisions should be made in consultation with a qualified and registered
        healthcare professional. If you have a medical condition or health concern, please seek
        professional medical advice before acting on anything you read here.
      </p>
    </aside>
  )
}
