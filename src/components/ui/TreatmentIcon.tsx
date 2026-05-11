import { IconName } from '@/types/treatment'

interface TreatmentIconProps {
  name: IconName
  size?: number
  className?: string
}

const stroke = 1.4

/**
 * Custom-drawn line icons — avoids generic-medical-stock look.
 * Each icon is a metaphor for the underlying clinical concept:
 *  - hormone   = waveform / molecule
 *  - recovery  = healing arc / fracture closing
 *  - longevity = ascending line over horizon
 *  - metabolic = combustion / cycle
 *  - energy    = filament / spark
 *  - peptide   = chain / linked rings
 */
export default function TreatmentIcon({ name, size = 32, className }: TreatmentIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'square' as const,
    strokeLinejoin: 'miter' as const,
    'aria-hidden': true,
    className,
  }
  switch (name) {
    case 'hormone':
      return (
        <svg {...common}>
          <path d="M2 16 C 6 16, 6 8, 10 8 S 14 24, 18 24 S 22 8, 26 8 S 30 16, 30 16" />
          <circle cx="10" cy="8" r="1.5" />
          <circle cx="22" cy="8" r="1.5" />
        </svg>
      )
    case 'recovery':
      return (
        <svg {...common}>
          <path d="M6 22 Q 16 6 26 22" />
          <path d="M10 22 L14 18" />
          <path d="M22 22 L18 18" />
          <circle cx="16" cy="12" r="1" />
        </svg>
      )
    case 'longevity':
      return (
        <svg {...common}>
          <path d="M3 24 L11 18 L17 21 L29 8" />
          <path d="M24 8 L29 8 L29 13" />
          <line x1="3" y1="28" x2="29" y2="28" />
        </svg>
      )
    case 'metabolic':
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="10" />
          <path d="M16 6 L19 11 L16 16 L13 11 Z" />
          <path d="M16 26 L13 21 L16 16 L19 21 Z" />
        </svg>
      )
    case 'energy':
      return (
        <svg {...common}>
          <path d="M17 3 L7 18 L14 18 L13 29 L23 14 L16 14 L17 3 Z" />
        </svg>
      )
    case 'peptide':
      return (
        <svg {...common}>
          <circle cx="8" cy="10" r="3" />
          <circle cx="16" cy="16" r="3" />
          <circle cx="24" cy="22" r="3" />
          <path d="M10.5 12 L13.5 14" />
          <path d="M18.5 18 L21.5 20" />
        </svg>
      )
  }
}
