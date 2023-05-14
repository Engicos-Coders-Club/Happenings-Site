// import React from 'react'
import Hero from "./components/HeroSection";
import Schedule from "./components/Schedule";
// import Sponsor from './components/Sponsor'
// import Clouds from './components/Clouds'
import Venue from "./components/Venue";
import Footer from "./components/Footer";
import About from "./components/About";
import EventCarouselSection from "./components/EventCarouselSection";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <Hero />
      <About s={""} animation={"section-2"} />
      {/* <EventSection /> */}
      <EventCarouselSection />
      <Schedule />
      {/* <Sponsor /> */}
      <Venue />
      <Footer />
    </div>
  );
}

export default Layout;
