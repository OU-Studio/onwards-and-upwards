


import * as React from "react"
import HeroSection10t from "../components/herot"; 
import ContentSection6t from "../components/rentalCards2";
import DesktopNav from '../components/desktopNav';




function HomePage() {
  return (
    <div className="mainContent home">
      
      <div id="cursor"></div> 

      {/* Main Content */}
      <main>
      <DesktopNav></DesktopNav>
        <ContentSection6t></ContentSection6t>
      </main> 
      
    </div>
  );
}






export default HomePage;


