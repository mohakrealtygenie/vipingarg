import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AudienceSelector from './components/AudienceSelector'
import WhatIDo from './components/WhatIDo'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import ServicesOverview from './components/ServicesOverview'
import LeadCaptureForm from './components/LeadCaptureForm'
import TrustBar from './components/TrustBar'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}
