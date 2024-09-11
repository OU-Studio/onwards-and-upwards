
'use client'

import * as React from "react"
import TestimonialSection14 from "../components/testimonialTwo";
import TeamSection4 from "../components/team";
import DesktopNav from '../components/desktopNav';






function HomePage() {

  return (
    <div className="mainContent home">
      
      <div id="cursor"></div> 

      {/* Main Content */}
      <main>
      <DesktopNav></DesktopNav>
        <TestimonialSection14></TestimonialSection14>
        <TeamSection4></TeamSection4>
      </main>
      
    </div>
  );
}






export default HomePage;


