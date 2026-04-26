import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Programs from './components/Programs'
import WaysToGive from './components/WaysToGive'
import DonationPanel from './components/DonationPanel'
import FeeTable from './components/FeeTable'
import Needs from './components/Needs'
import Footer from './components/Footer'
import { siteContent } from './content/siteContent'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Sponsorship', href: '#sponsorship' },
  { label: 'Donate', href: '#donate' },
]

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Header navLinks={navLinks} orgName={siteContent.orgName} />
      <main>
        <Hero content={siteContent.hero} location={siteContent.location} />
        <Stats stats={siteContent.stats} />
        <About paragraphs={siteContent.about} challenges={siteContent.challenges} />
        <Programs sponsorshipOptions={siteContent.sponsorshipOptions} />
        <WaysToGive giving={siteContent.giving} />
        <DonationPanel donation={siteContent.donation} />
        <FeeTable feeTable={siteContent.feeTable} />
        <Needs supportNeeds={siteContent.supportNeeds} />
      </main>
      <Footer orgName={siteContent.orgName} location={siteContent.location} />
    </div>
  )
}

export default App
