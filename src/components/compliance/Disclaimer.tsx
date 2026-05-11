// Standard educational content disclaimer.
// Text reproduced verbatim from strategy doc §7.4 — DO NOT EDIT without
// regulatory lawyer review. This block is a launch blocker until legal
// sign-off (strategy doc Open Items #3).

import { cn } from '@/lib/utils'

interface DisclaimerProps {
  className?: string
}

export default function Disclaimer({ className }: DisclaimerProps) {
  return (
    <aside
      role="complementary"
      aria-label="Educational content disclaimer"
      className={cn(
        'mt-12 mb-8 rounded-r-sm border-l-4 border-teal bg-grey-100 px-6 py-5 text-sm leading-relaxed text-grey-700',
        className
      )}
    >
      <h3 className="mb-3 font-display text-base font-semibold text-navy">
        Educational Content Disclaimer
      </h3>
      <p className="mb-3">
        The information contained in this article is intended for general educational and
        informational purposes only. It does not constitute medical advice, clinical guidance, or a
        recommendation to pursue any particular treatment, medication, or health intervention.
      </p>
      <p className="mb-3">
        The content on this website is not a substitute for professional medical advice, diagnosis,
        or treatment. Always seek the advice of a qualified and registered healthcare practitioner
        regarding any medical condition or before commencing, changing, or discontinuing any
        treatment or medication.
      </p>
      <p className="mb-3">
        Prime Protocols is a licensed medical service operating within the Australian legal and
        regulatory framework. All prescriptions and treatment protocols are provided exclusively
        through qualified, registered medical practitioners following an individual clinical
        assessment. No information on this website should be interpreted as an offer to prescribe or
        supply any therapeutic good without a valid individual consultation.
      </p>
      <p className="mb-3">
        Therapeutic goods in Australia are regulated by the Therapeutic Goods Administration (TGA).
        The information in this article has not been evaluated or approved by the TGA as clinical
        advice. References to clinical research, studies, or scientific literature are provided for
        educational context only and do not imply endorsement of any specific treatment outcome for
        any individual.
      </p>
      <p className="font-medium text-navy">
        If you are experiencing a medical emergency, call 000 immediately.
      </p>
    </aside>
  )
}
