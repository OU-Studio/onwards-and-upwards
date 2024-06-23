
'use client'

import * as React from "react"
import {  useEffect } from 'react'
import HeroSection10 from "./components/hero";
import ContentSection6 from "./components/rentalCards";
import PricingSection7 from "./components/pricing";
import StatsSection3 from "./components/stats";
import FeatureSection6 from "./components/featuredSix";
import DesktopNav from './components/desktopNav';






function HomePage() {
  return (
    <div className="mainContent home">
      
      <div id="cursor"></div> 

      {/* Main Content */}
      <main>
      <DesktopNav></DesktopNav>
        <HeroSection10></HeroSection10>
        <ContentSection6></ContentSection6>
        <PricingSection7></PricingSection7>
        <StatsSection3></StatsSection3>
        <FeatureSection6></FeatureSection6>
      </main>
      
    </div>
  );
}






export default HomePage;


