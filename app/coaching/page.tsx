import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CoachingHero from '../components/coaching/CoachingHero'
import CoachingAudience from '../components/coaching/CoachingAudience'
import CoachingDifference from '../components/coaching/CoachingDifference'
import CoachingPrograms from '../components/coaching/CoachingPrograms'
import CoachingProcess from '../components/coaching/CoachingProcess'
import CoachingForm from '../components/coaching/CoachingForm'

export const metadata = {
  title: 'Finance Coaching | Vipin Garg',
  description: 'CFA, CSI, and University Finance coaching that builds confidence, not just exam scores.',
}

export default function CoachingPage() {
  return (
    <>
      <main>
        <CoachingHero />
        <CoachingAudience />
        <CoachingDifference />
        <CoachingPrograms />
        <CoachingProcess />
        <CoachingForm />
      </main>
    </>
  )
}