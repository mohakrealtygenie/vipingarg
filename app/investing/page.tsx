import { Metadata } from 'next'
import InvestingHero from '@/app/components/investing/InvestingHero'
import InvestingInfo from '@/app/components/investing/InvestingInfo'
import InvestingForm from '@/app/components/investing/InvestingForm'

export const metadata: Metadata = {
  title: 'Investing | Private Market Opportunities',
  description: 'Understand private market investing in Canada. Educational guidance on exempt markets, private equity, and real estate offerings.',
}

export default function InvestingPage() {
  return (
    <main>
      <InvestingHero />
      <InvestingInfo />
      <InvestingForm />
    </main>
  )
}
