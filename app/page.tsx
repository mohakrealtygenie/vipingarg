import HeroSection from './components/HeroSection'
import AudienceSelector from './components/AudienceSelector'
import WhatIDo from './components/WhatIDo'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import ServicesOverview from './components/ServicesOverview'
import LeadCaptureForm from './components/LeadCaptureForm'
import TrustBar from './components/TrustBar'
import FinalCTA from './components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AudienceSelector />
        <WhatIDo />
        <WhyWorkWithMe />
        <ServicesOverview />
        <LeadCaptureForm />
        <TrustBar />
        <FinalCTA />
      </main>

    </>
  )
}
