import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'steel' | 'navy' | 'teal' | 'muted'
  size?: 'sm' | 'md'
  className?: string
}

const variants = {
  steel: 'bg-steel-50 text-steel-dark border-steel-200',
  navy: 'bg-navy text-white border-navy',
  teal: 'bg-teal/10 text-teal-dark border-teal/20',
  muted: 'bg-grey-100 text-grey-700 border-grey-200',
}

export default function Badge({ children, variant = 'steel', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium uppercase tracking-wider',
        size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
