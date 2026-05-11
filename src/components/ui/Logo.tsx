import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light'
  asLink?: boolean
  className?: string
}

const sizeMap = {
  sm: { mark: 28, gap: 'gap-2', text: 'text-base' },
  md: { mark: 36, gap: 'gap-2.5', text: 'text-lg' },
  lg: { mark: 48, gap: 'gap-3', text: 'text-2xl' },
}

/**
 * Reproduces the "Signal" logo mark in SVG.
 * Layered ECG-trace + ascending bars + upward arrow.
 * AUDIT NOTE: build spec called for teal mark; logo image uses
 * navy + steel blue. SVG below uses those colours.
 */
function LogoMark({ size, variant }: { size: number; variant: 'dark' | 'light' }) {
  const dark = variant === 'dark' ? '#162347' : '#FFFFFF'
  const light = variant === 'dark' ? '#4A7CA8' : '#6B9BC7'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      {/* lighter back layer — ascending bars + ECG */}
      <path
        d="M3 34 L9 34 L11 26 L14 30 L17 22 L21 26 L24 18 L28 22 L31 14 L36 18 L40 10"
        stroke={light}
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <path d="M40 10 L43 13 L40 13 Z M40 10 L40 13 L37 13 Z" fill={light} />
      {/* front layer — sharper ECG / arrow */}
      <path
        d="M5 30 L10 30 L12 22 L15 36 L18 18 L22 30 L26 14 L30 22 L34 8"
        stroke={dark}
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <path d="M34 8 L37 11 L34 11 Z M34 8 L34 11 L31 11 Z" fill={dark} />
    </svg>
  )
}

function LogoContent({ size, variant }: { size: NonNullable<LogoProps['size']>; variant: NonNullable<LogoProps['variant']> }) {
  const s = sizeMap[size]
  const textColor = variant === 'dark' ? 'text-navy' : 'text-white'
  return (
    <div className={cn('flex items-center', s.gap)}>
      <LogoMark size={s.mark} variant={variant} />
      <div className="flex flex-col leading-none">
        <span className={cn('font-display font-bold tracking-tight uppercase', s.text, textColor)}>
          Prime
        </span>
        <span
          className={cn(
            'font-display font-medium uppercase tracking-[0.15em]',
            variant === 'dark' ? 'text-steel-dark' : 'text-steel-light',
            size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-xs' : 'text-sm'
          )}
        >
          Protocols
        </span>
      </div>
    </div>
  )
}

export default function Logo({
  size = 'md',
  variant = 'dark',
  asLink = true,
  className,
}: LogoProps) {
  if (asLink) {
    return (
      <Link
        href="/"
        aria-label="Prime Protocols — Home"
        className={cn('inline-flex items-center transition-opacity hover:opacity-80', className)}
      >
        <LogoContent size={size} variant={variant} />
      </Link>
    )
  }
  return (
    <div className={cn('inline-flex items-center', className)}>
      <LogoContent size={size} variant={variant} />
    </div>
  )
}
