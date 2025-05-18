import React from 'react'
import Hero from './layout/Hero'
import PC from './layout/Info'
import ShowcaseSection from './layout/ShowcaseSection'

const App: React.FC = () => {
  return (
    <>
      <div className="hero-bg">
        <PC />
        <Hero />
        <ShowcaseSection />
      </div>
    </>
  )
}

export default App