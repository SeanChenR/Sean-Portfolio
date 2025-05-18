import React from 'react'
import Hero from './layout/Hero'
import PC from './layout/Info'

const App: React.FC = () => {
  return (
    <>
      <div className="hero-bg">
        <PC />
        <Hero />
      </div>
    </>
  )
}

export default App