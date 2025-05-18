import React from 'react'
import Hero from './layout/Hero'
import Info from './layout/Info'
import NavBar from './components/NavBar'
import ShowcaseSection from './layout/ShowcaseSection'

const App: React.FC = () => {
  return (
    <>
      <div className="hero-bg">
        <NavBar />
        <Info />
        <Hero />
        <ShowcaseSection />
      </div>
    </>
  )
}

export default App