import { cn } from '@/lib/utils'

interface ProseSectionProps {
  children: React.ReactNode
  className?: string
}

export default function ProseSection({ children, className }: ProseSectionProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-prose space-y-5 text-[17px] leading-[1.7] text-grey-800',
        '[&_h2]:font-display [&_h2]:text-display-sm [&_h2]:font-semibold [&_h2]:text-navy [&_h2]:mt-12 [&_h2]:mb-4',
        '[&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-8 [&_h3]:mb-3',
        '[&_p]:leading-[1.7]',
        '[&_strong]:font-semibold [&_strong]:text-navy',
        '[&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-steel [&_a]:text-navy hover:[&_a]:decoration-2',
        '[&_ul]:list-none [&_ul]:space-y-2 [&_ul]:pl-0',
        '[&_ul_li]:relative [&_ul_li]:pl-6',
        "[&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-3 [&_ul_li]:before:h-px [&_ul_li]:before:w-3 [&_ul_li]:before:bg-steel-dark",
        '[&_blockquote]:border-l-2 [&_blockquote]:border-steel [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-grey-700',
        className
      )}
    >
      {children}
    </div>
  )
}
