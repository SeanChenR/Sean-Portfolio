import React from 'react'
import Hero from './layout/Hero'
import Info from './layout/Info'
import NavBar from './components/NavBar'
import ShowcaseSection from './layout/ShowcaseSection'
import LogoSection from './layout/LogoSection'
import FeatureCards from './layout/FeatureCards'
import ExperienceSection from './layout/ExperienceSection'
import TechStack from './layout/TechStack'

const App: React.FC = () => {
  return (
    <>
      <div className="hero-bg">
        <NavBar />
        <Info />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
      </div>
    </>
  )
}

export default App