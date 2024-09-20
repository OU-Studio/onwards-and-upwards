
'use client'

import * as React from "react"
import {  useEffect, useRef } from 'react'
import HeroSection13 from "../components/heroFive";
import ContactSection15 from "../components/contactForm";
import DesktopNav from '../components/desktopNav';






function Contact() {
  
  const hasListenerAttached = useRef(false); // Ensure the event is added only once

  if (typeof window !== 'undefined' && !hasListenerAttached.current) {
    hasListenerAttached.current = true; // Attach only once

    // Attach scroll event listener
    window.addEventListener('scroll', () => {
      const scrollAmount = window.scrollY || document.documentElement.scrollTop;
      document.body.setAttribute('scroll', scrollAmount.toString());
    });
  }

  return (
    <div className="mainContent home">
      
      <div id="cursor"></div> 

      {/* Main Content */}
      <main>
      <DesktopNav></DesktopNav>
        <ContactSection15></ContactSection15>
      </main>
    </div>
  );
}






export default Contact;


