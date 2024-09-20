'use client'; // This ensures it's a client component

import * as React from "react";
import HeroSection10 from "./components/hero";
import ContentSection6 from "./components/rentalCards";
import PricingSection7 from "./components/pricing";
import FeatureSection6 from "./components/featuredSix";
import DesktopNav from './components/desktopNav';
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
        <DesktopNav />
        <HeroSection10 />
        <ContentSection6 />
        <PricingSection7 />
        <FeatureSection6 />
      </main>
    </div>
  );
}

export default HomePage;
