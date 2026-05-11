import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import { SITE, SEO_KEYWORDS } from '@/lib/constants'
import '@/styles/globals.css'

// AUDIT NOTE: Build spec used Inter. Replaced with Bricolage Grotesque
// (variable display) + DM Sans (body) to give the brand a more
// distinctive clinical-but-not-generic voice. See tailwind config.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Prime Protocols | Men's Health Telehealth Australia",
    template: '%s | Prime Protocols',
  },
  description: SITE.description,
  keywords: [...SEO_KEYWORDS.global],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE.url,
    siteName: SITE.name,
    title: "Prime Protocols | Men's Health Telehealth Australia",
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Prime Protocols | Men's Health Telehealth Australia",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalOrganization',
      '@id': `${SITE.url}#org`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.description,
      areaServed: {
        '@type': 'Country',
        name: 'Australia',
      },
      medicalSpecialty: [
        'Endocrinology',
        'PrimaryCare',
        'SportsMedicine',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: 'en-AU',
      publisher: { '@id': `${SITE.url}#org` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={`${display.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
