
'use client'

import * as React from "react"
import { useEffect } from 'react'
import HeroSection16 from "../components/heroTwo";
import FeatureSection16 from "../components/featuresOne";
import TestimonialSection15 from "../components/testimonial";
import DesktopNav from '../components/desktopNav';






function HomePage() {

  return (
    <div className="mainContent home">

      <div id="cursor"></div>

      {/* Main Content */}
      <main>
        <DesktopNav></DesktopNav>
        <HeroSection16></HeroSection16>
        <FeatureSection16></FeatureSection16>
        <TestimonialSection15></TestimonialSection15>
      </main>

    </div>
  );
}






export default HomePage;


