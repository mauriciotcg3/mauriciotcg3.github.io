import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { BenefitsSection } from './components/BenefitsSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { StatsSection } from './components/StatsSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
