import { Metadata } from 'next'
import AboutHero from '@/app/components/about/AboutHero'
import AboutStory from '@/app/components/about/AboutStory'
import AboutValues from '@/app/components/about/AboutValues'

export const metadata: Metadata = {
  title: 'About Vipin Garg | Financial Advisor & Educator',
  description: 'Learn more about Vipin Garg, a licensed financial advisor and educator committed to clarity, integrity, and long-term wealth preservation.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
    </main>
  )
}
