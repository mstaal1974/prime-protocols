// TGA regulatory compliance banner.
// Used on /treatments/peptide-therapy and any other page where TGA
// advertising restrictions need to be made visible.

import { cn } from '@/lib/utils'

interface TGANoticeProps {
  message?: string
  className?: string
}

const DEFAULT_MESSAGE =
  "Peptide therapy in Australia is regulated by the Therapeutic Goods Administration (TGA). Any specific peptide can only be prescribed for you following an individual clinical assessment by a qualified, registered medical practitioner. This page is general educational information — not advice, and not a list of products available to be ordered."

export default function TGANotice({ message = DEFAULT_MESSAGE, className }: TGANoticeProps) {
  return (
    <div
      role="region"
      aria-label="TGA regulatory notice"
      className={cn(
        'rounded-r-sm border-l-[6px] border-teal bg-teal/5 px-6 py-5 text-sm leading-relaxed text-navy',
        className
      )}
    >
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-dark">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-dark" />
        Regulatory notice
      </div>
      <p>{message}</p>
    </div>
  )
}
