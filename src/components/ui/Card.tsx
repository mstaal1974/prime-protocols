import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'navy' | 'bordered'
  className?: string
}

export default function Card({ children, variant = 'default', className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-md',
        variant === 'default' && 'bg-white shadow-soft',
        variant === 'navy' && 'bg-navy text-white',
        variant === 'bordered' && 'border border-grey-200 bg-white',
        className
      )}
    >
      {children}
    </div>
  )
}
