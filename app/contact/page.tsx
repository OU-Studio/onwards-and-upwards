
'use client'

import * as React from "react"
import {  useEffect } from 'react'
import HeroSection13 from "../components/heroFive";
import ContactSection15 from "../components/contactForm";
import DesktopNav from '../components/desktopNav';






function Contact() {

  return (
    <div className="mainContent home">
      
      <div id="cursor"></div> 

      {/* Main Content */}
      <main>
      <DesktopNav></DesktopNav>
        <HeroSection13></HeroSection13>
        <ContactSection15></ContactSection15>
      </main>
      
    </div>
  );
}






export default Contact;


