import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import DualPathway from '@/components/sections/DualPathway'
import TreatmentGrid from '@/components/sections/TreatmentGrid'
import TrustPillars from '@/components/sections/TrustPillars'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <DualPathway />
      <TreatmentGrid />
      <TrustPillars />
      <Testimonials />
      <CTABanner location="home-footer-cta" />
    </Layout>
  )
}
