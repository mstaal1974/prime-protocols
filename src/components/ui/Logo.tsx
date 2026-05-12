import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  asLink?: boolean
}

const SIZE_HEIGHTS = {
  sm: 28,
  md: 40,
  lg: 56,
}

export default function Logo({ size = 'md', className, asLink = true }: LogoProps) {
  const height = SIZE_HEIGHTS[size]

  const img = (
    <Image
      src="/pp-logo.png"
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
