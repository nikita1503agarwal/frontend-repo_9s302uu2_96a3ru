import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import CoreFeatures from './components/CoreFeatures'
import Trailer from './components/Trailer'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'
import Schools from './components/Schools'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import JoinCTA from './components/JoinCTA'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <CoreFeatures />
        <Trailer />
        <Gallery />
        <HowItWorks />
        <Schools />
        <Pricing />
        <FAQ />
        <JoinCTA />
      </main>
    </div>
  )
}

export default App
