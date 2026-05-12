// Single source of truth for site-wide data.

export const SITE = {
  name: 'Prime Protocols',
  shortName: 'Prime Protocols',
  tagline: "Doctor-led men's health. Evidence-based. Telehealth Australia-wide.",
  description:
    "Doctor-led men's health telehealth clinic. Hormonal health, injury recovery, longevity medicine, metabolic health and energy. Available Australia-wide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primeprotocols.com.au',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@primeprotocols.com.au',
  halaxyUrl: process.env.NEXT_PUBLIC_HALAXY_BOOKING_URL ?? '#book',
  ghlWebhookUrl: process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL ?? '',
  abn: 'TBC',
  locale: 'en-AU',
} as const

export const NAV_LINKS = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Doctors', href: '/for-doctors' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const

export type TreatmentArea = {
  slug: string
  title: string
  shortTitle: string
  description: string
  badge: string
  icon: 'hormone' | 'recovery' | 'longevity' | 'metabolic' | 'energy' | 'peptide'
  held?: boolean
}

export const TREATMENT_AREAS: TreatmentArea[] = [
  {
    slug: 'hormonal-health',
    title: 'Hormonal Decline & Optimisation',
    shortTitle: 'Hormonal Health',
    description:
      'Comprehensive hormone assessment and medically supervised optimisation. Free and total hormones, SHBG, LH, FSH, oestradiol — read in clinical context.',
    icon: 'hormone',
    badge: 'Medical assessment required',
  },
  {
    slug: 'injury-recovery',
    title: 'Injury Recovery & Performance',
    shortTitle: 'Injury & Recovery',
    description:
      'Medically supervised recovery protocols for athletes, active men, and post-surgical patients. Mechanism-based, evidence-led.',
    icon: 'recovery',
    badge: 'Medical assessment required',
  },
  {
    slug: 'longevity',
    title: "Men's Longevity & Vitality",
    shortTitle: 'Longevity',
    description:
      'Evidence-based longevity medicine for health-conscious men over 40. What ageing actually is at the cellular level — and what can be done about it.',
    icon: 'longevity',
    badge: 'Medical assessment required',
  },
  {
    slug: 'weight-management',
    title: 'Weight Management & Metabolic Health',
    shortTitle: 'Weight & Metabolic',
    description:
      'Medically supervised weight management and metabolic health programmes. Beyond the scales — insulin resistance, inflammation, hormones.',
    icon: 'metabolic',
    badge: 'Medical assessment required',
  },
  {
    slug: 'energy-cognition',
    title: 'Energy & Cognitive Performance',
    shortTitle: 'Energy & Cognition',
    description:
      'Clinical assessment and treatment for medically significant fatigue and cognitive decline. Energy is a biology problem, not a motivation problem.',
    icon: 'energy',
    badge: 'Medical assessment required',
  },
  {
    slug: 'peptide-therapy',
    title: 'Peptide Therapy',
    shortTitle: 'Peptide Therapy',
    description:
      'Legal, prescription peptide therapy under specialist supervision. Outcome-based protocols, evidence-led, fully compliant with Australian regulation.',
    icon: 'peptide',
    badge: 'Specialist consultation required',
  },
]

export const HELD_TREATMENT_AREAS = [
  {
    slug: 'sexual-health',
    title: 'Sexual Health & Function',
    status: 'held' as const,
    reason: 'Pending TGA advertising regulatory review',
  },
]

export const BLOG_CATEGORIES = [
  { slug: 'hormonal-health', label: 'Hormonal Health', pillar: 1 },
  { slug: 'injury-recovery', label: 'Injury & Recovery', pillar: 2 },
  { slug: 'longevity', label: 'Longevity', pillar: 3 },
  { slug: 'weight-metabolic', label: 'Weight & Metabolic', pillar: 4 },
  { slug: 'energy-cognition', label: 'Energy & Cognition', pillar: 5 },
  { slug: 'patient-education', label: 'How It Works', pillar: 6 },
  { slug: 'for-doctors', label: 'For Doctors', pillar: 7 },
] as const

// EEAT (strategy §7.5) + Elise persona disclosure (strategy §13.5).
export const AUTHORS = {
  'elise-hartley': {
    id: 'elise-hartley',
    name: 'Elise Hartley',
    title: 'Health Science Researcher & Communications Lead',
    credentials: 'MSc Biomedical Sciences (Peptide Biology), BHSc',
    type: 'staff' as const,
    bio: "Elise leads health science communication at Prime Protocols. A Melbourne-based researcher with a Master's in Biomedical Sciences focused on peptide biology and cellular repair, she spent several years in clinical research before moving into health science communication. Elise translates clinical research into clear, evidence-based content. She is not a medical practitioner — all clinical content is reviewed and approved by Dr Kai before publication.",
    disclosure:
      'Elise Hartley is the communications persona of Prime Protocols. All clinical content is reviewed and approved by our medical team prior to publication.',
    headshot: '/images/authors/elise-hartley.jpg',
  },
  'adam-burgess': {
    id: 'adam-burgess',
    name: 'Adam Burgess',
    title: 'Guest Contributor',
    credentials: 'Path B — addressing underlying drivers before hormone replacement',
    type: 'guest' as const,
    bio: 'Adam Burgess has a physics degree he has never used, a police career he occasionally misses, and 30 years of ICT consulting experience that has taken him to more countries and data centres than he can accurately count. Now in his early 50s, he is considerably more interested in how the human body works than how networks do — and writes honestly about both at adamburgess.me.',
    website: 'https://adamburgess.me',
    headshot: '/images/authors/adam-burgess.jpg',
  },
  'michael-staal': {
    id: 'michael-staal',
    name: 'Michael Staal',
    title: 'Guest Contributor',
    credentials: 'Path A — hormone replacement with adjunct therapies',
    type: 'guest' as const,
    bio: 'Bio pending — full strategy session required. See strategy doc §8.3.',
    headshot: '/images/authors/michael-staal.jpg',
  },
  'dr-kai': {
    id: 'dr-kai',
    name: 'Dr Kai',
    title: 'Clinical Director — placeholder',
    credentials: 'AHPRA registration TBC — dedicated profile session required',
    type: 'doctor' as const,
    bio: 'Full clinical profile pending. See strategy doc Open Items #7.',
    headshot: '/images/authors/dr-kai.jpg',
  },
} as const

export type AuthorId = keyof typeof AUTHORS

export const SEO_KEYWORDS = {
  global: [
    "men's health clinic telehealth Australia",
    "men's hormone testing Australia",
    "men's hormone clinic Australia",
    'hormonal decline men Australia',
    'hormone optimisation Australia',
    'androgen deficiency assessment',
    'peptide therapy Australia',
    'peptide doctor Australia',
    'legal peptide prescription Australia',
    'sports injury recovery telehealth',
    "men's longevity clinic Australia",
    'healthy ageing men Australia',
    'vitality after 50',
    'metabolic health doctor',
    'energy after 50 men',
    'cognitive performance clinic',
    "fatigue men's health Australia",
    'peptide protocol licensing',
    'clinical peptide protocol Australia',
  ],
} as const

export const PILLAR_TO_TREATMENT_HUB: Record<string, string | null> = {
  'hormonal-health': '/treatments/hormonal-health',
  'injury-recovery': '/treatments/injury-recovery',
  longevity: '/treatments/longevity',
  'weight-metabolic': '/treatments/weight-management',
  'energy-cognition': '/treatments/energy-cognition',
  'patient-education': '/how-it-works',
  'for-doctors': '/for-doctors',
}

export const FOOTER_DISCLAIMER =
  'Prime Protocols is a doctor-led Australian telehealth medical service. All treatments are prescribed exclusively by registered medical practitioners following individual clinical assessment. The information on this website is general and educational only — it is not medical advice. Always seek the advice of a qualified, registered healthcare practitioner regarding any medical condition or treatment decision. Therapeutic goods in Australia are regulated by the Therapeutic Goods Administration (TGA). In a medical emergency, call 000.'
