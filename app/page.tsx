import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ProductCatalog } from '@/components/product-catalog'
import { WhyVitaPep } from '@/components/why-vitapep'
import { PeptideScience } from '@/components/peptide-science'
import { PurityControl } from '@/components/purity-control'
import { Facilities } from '@/components/facilities'
import { Faq } from '@/components/faq'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ProductCatalog />
        <WhyVitaPep />
        <PeptideScience />
        <PurityControl />
        <Facilities />
        <Faq />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  )
}
