import { Metadata } from 'next'
import MortgagesHero from '@/app/components/mortgages/MortgagesHero'
import MortgagesContent from '@/app/components/mortgages/MortgagesContent'
import MortgagesForm from '@/app/components/mortgages/MortgagesForm'

export const metadata: Metadata = {
  title: 'Mortgage Solutions | Vipin Garg',
  description: 'Mortgage solutions built on financial insight, not just rates. Purchase, refinance, and investment property strategies.',
}

export default function MortgagesPage() {
  return (
    <main>
      <MortgagesHero />
      <MortgagesContent />
      <MortgagesForm />
    </main>
  )
}
