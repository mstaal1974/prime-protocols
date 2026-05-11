import Header from './Header'
import Footer from './Footer'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className={cn('flex-1', className)}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
