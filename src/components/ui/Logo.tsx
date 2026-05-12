import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light'
  className?: string
  asLink?: boolean
}

const SIZE_HEIGHTS = {
  sm: 28,
  md: 40,
  lg: 56,
}

export default function Logo({
  size = 'md',
  variant = 'dark',
  className,
  asLink = true,
}: LogoProps) {
  const height = SIZE_HEIGHTS[size]
  // Single PNG for now. To support a light-on-dark variant later, drop
  // pp-logo-light.png into /public and use the commented line below.
  const src = '/pp-logo.png'
  // const src = variant === 'light' ? '/pp-logo-light.png' : '/pp-logo.png'

  const img = (
    <Image
      src={src}
      alt="Prime Protocols"
      width={500}
      height={height}
      priority
      sizes={`${height * 4}px`}
      style={{ width: 'auto', height: `${height}px` }}
      className={cn('block object-contain', className)}
    />
  )

  if (!asLink) return img

  return (
    <Link href="/" aria-label="Prime Protocols home" className="inline-flex items-center">
      {img}
    </Link>
  )
}
