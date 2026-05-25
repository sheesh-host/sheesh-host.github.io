import { useReveal } from './lib/useReveal'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { WhatItIs } from './sections/WhatItIs'
import { WhyGitNative } from './sections/WhyGitNative'
import { TryIt } from './sections/TryIt'
import { HowItWorks } from './sections/HowItWorks'
import { Roadmap } from './sections/Roadmap'

function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatItIs />
        <WhyGitNative />
        <TryIt />
        <HowItWorks />
        <Roadmap />
      </main>
      <Footer />
    </>
  )
}

export default App
