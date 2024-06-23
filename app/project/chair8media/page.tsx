
'use client'

import * as React from "react"
import {  useEffect } from 'react'
import HeroSection9 from "@/app/components/portfolioHero";
import ContentSection5 from "@/app/components/projectContent";
import TestimonialSection15 from "@/app/components/projectTestimonial";
import DesktopNav from '../../components/desktopNav';






function Project() {

  return (
    <div className="mainContent home">
      
      <div id="cursor"></div> 

      {/* Main Content */}
      <main>
      <DesktopNav></DesktopNav>
        <HeroSection9></HeroSection9>
        <ContentSection5></ContentSection5>
        <TestimonialSection15></TestimonialSection15>
      </main>
      
    </div>
  );
}






export default Project;


