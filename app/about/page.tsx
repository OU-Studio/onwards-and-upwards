'use client'

import Link from "next/link.js";
import * as React from "react"
import { useEffect } from 'react' 



function AboutPage() {
  useEffect(() => {
    console.log("USE EFFECT CALLED");
    import("../../public/pageLoad.js").then(module => {
      const test = module.default;
      test();
    })
  }, []);
  return (
    <div className="mainContent about">

      {/* Main Content */}
      <main>
        <div className="row rowOne">
          <h3>Onwards and Upwards is a group of passionate creatives, dedicated to making inspiring, innovative and memorable websites.</h3>
          <div className="imageWrapper">
            <div className="image" style={{
              backgroundImage: "url(" + "/images/c8.jpg" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }} >
            </div>
          </div>
        </div>
        <div className="row rowTwo">
          <div className="imageWrapper">
            <div className="image" style={{
              backgroundImage: "url(" + "/images/mmw.jpg" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }} >
            </div>
          </div>
          <h3>With a team of specialists in everything from website design to user experience to marketing, we can offer unique insights into your online presence.</h3>
        </div>
        <div className="row rowThree">
          <h3>Every project is treated the same and is given the care and attention it deserves. We want to support our clients so they can enjoy building their business.</h3>
          <div className="imageWrapper">
            <div className="image" style={{
              backgroundImage: "url(" + "/images/studioore.jpg" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }} >
            </div>
          </div>
        </div>
        <h2>Let’s make your website stand out<span className="orange">!</span></h2>
        <div className="buttonRow">
          <div className="button">
            <Link href="/contact">Get in touch</Link>
          </div>
          <div className="button">
            <Link href="/projects">See our work</Link>
          </div>
        </div>
      </main>

    </div>
  );
}






export default AboutPage;