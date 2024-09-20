
'use client'

import * as React from "react"
import { useEffect } from 'react'
import HeroSection16 from "../components/heroTwo";
import FeatureSection16 from "../components/featuresOne";
import TestimonialSection15 from "../components/testimonial";
import DesktopNav from '../components/desktopNav';
import $ from 'jquery'; // Ensure jQuery is imported






function HomePage() {
  React.useEffect(() => {
    // Ensure the function runs on scroll and when the DOM is ready
    $(document).ready(function () {
      const handleScroll = () => {
        const scrollAmount = $(window).scrollTop() ?? 0;
        if (scrollAmount > 40) {
          $('body').attr('data-scroll', 'true');
        } else {
          $('body').attr('data-scroll', 'false');
        }
      };

      // Run the handler on page load (document ready) and scroll
      handleScroll();  // Run immediately when the page is ready
      $(window).on('scroll', handleScroll);

      // Cleanup event listeners when the component unmounts
      return () => {
        $(window).off('scroll', handleScroll);
      };
    });
  }, []);

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


