import React from 'react'
import Hero from './components/HeroSection'
import Schedule from './components/Schedule'
import EventSection from './components/EventSection'
import Sponsor from './components/Sponsor'
import Clouds from './components/Clouds'
import Venue from './components/Venue'
import Footer from './components/Footer'
import About from './components/About'

function Layout() {
  return (
    <>
    <div>
      <Hero />
      <About s={''} animation={'will-change-auto section-2'} />
      <EventSection />
      <Schedule />
      {/* <Sponsor /> */}
      <Venue />
      <Footer />
    </div>
  </>
  )
}

export default Layout