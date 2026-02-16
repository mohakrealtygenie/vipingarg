import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import TrustBar from './components/TrustBar'

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  )
}
