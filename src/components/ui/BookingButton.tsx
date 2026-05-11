'use client'

import Button from './Button'
import { HALAXY_CONFIG } from '@/lib/halaxy'

interface BookingButtonProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  withArrow?: boolean
  treatmentSlug?: string
  location?: string
  className?: string
}

export default function BookingButton({
  label = 'Book a Consultation',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  withArrow = true,
  treatmentSlug = 'general',
  location = 'unknown',
  className,
}: BookingButtonProps) {
  return (
    <Button
      label={label}
      href={HALAXY_CONFIG.bookingUrl}
      external
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      withArrow={withArrow}
      className={className}
      data-cta-type="booking"
      data-cta-location={location}
      data-cta-treatment={treatmentSlug}
    />
  )
}
