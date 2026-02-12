import { Metadata } from 'next'
import ContactHero from '@/app/components/contact/ContactHero'
import ContactDetails from '@/app/components/contact/ContactDetails'
import ContactForm from '@/app/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Vipin Garg | Coaching, Investing, Mortgages',
  description: 'Get in touch with Vipin Garg for financial coaching, investment opportunities, or mortgage solutions.',
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
    </main>
  )
}
