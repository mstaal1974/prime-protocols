'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import BookingButton from '@/components/ui/BookingButton'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden border-t border-grey-200 bg-bone"
        >
          <nav aria-label="Mobile" className="container-site py-6">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-grey-200 last:border-b-0">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-4 font-display text-lg text-navy hover:text-steel-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <BookingButton fullWidth location="mobile-nav" />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
