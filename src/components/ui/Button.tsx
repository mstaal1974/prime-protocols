import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  external?: boolean
  fullWidth?: boolean
  withArrow?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  // Tracking attrs — strategy doc / build spec compliance
  'data-cta-type'?: string
  'data-cta-location'?: string
  'data-cta-treatment'?: string
}

const base =
  'inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-steel relative'

const variants: Record<Variant, string> = {
  primary:
    'bg-navy text-white hover:bg-navy-light active:bg-navy-dark shadow-sm hover:shadow-md',
  secondary:
    'bg-steel text-white hover:bg-steel-dark active:bg-steel-800',
  outline:
    'border border-navy text-navy hover:bg-navy hover:text-white',
  ghost:
    'text-navy hover:bg-grey-100',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded',
  md: 'h-11 px-6 text-[15px] rounded',
  lg: 'h-14 px-8 text-base rounded-md',
}

/**
 * Tiny arrow glyph — avoids pulling in an icon library for one mark.
 */
function ArrowGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className="ml-2 transition-transform group-hover:translate-x-0.5"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Button({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  fullWidth = false,
  withArrow = false,
  type = 'button',
  disabled = false,
  className,
  ...dataAttrs
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    withArrow && 'group',
    className
  )

  const content = (
    <>
      <span>{label}</span>
      {withArrow && <ArrowGlyph />}
    </>
  )

  if (href) {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    if (external || href.startsWith('http') || href.startsWith('#')) {
      return (
        <a href={href} className={classes} {...externalProps} {...dataAttrs}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...dataAttrs}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...dataAttrs}>
      {content}
    </button>
  )
}
