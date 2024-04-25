'use client'

import * as React from "react"
import { useEffect } from 'react'



function ProjectsPage() {
  useEffect(() => {
    console.log("USE EFFECT CALLED");
    import("../../public/pageLoad.js").then(module => {
      const test = module.default;
      test();
    })
  }, []);
  return (
    <div className="mainContent projects">

      {/* Main Content */}
      <main>
        <h1>A small selection of our favourite projects for you to enjoy<span className="orange">.</span></h1>

        <div className="projectsGrid">

          <a className="project" href="https://www.chair8media.com/" target="_blank">
            <div className="imageWrapper">
              <div className="image" style={{
                backgroundImage: "url(" + "/images/c8.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} >
              </div>
            </div>
            <h3>Chair 8 Media</h3>
          </a>

          <a className="project" href="https://www.managemywebsite.com/" target="_blank">
            <div className="imageWrapper">
              <div className="image" style={{
                backgroundImage: "url(" + "/images/mmw.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} >
              </div>
            </div>
            <h3>Manage My Website</h3>
          </a>

          <a className="project" href="https://www.studio-ore.com/" target="_blank">
            <div className="imageWrapper">
              <div className="image" style={{
                backgroundImage: "url(" + "/images/studioore.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} >
              </div>
            </div>
            <h3>Studio Ore</h3>
          </a>

          <a className="project" href="https://contourboxes.co.uk/" target="_blank">
            <div className="imageWrapper">
              <div className="image" style={{
                backgroundImage: "url(" + "/images/contourboxes.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} >
              </div>
            </div>
            <h3>Contour Boxes</h3>
          </a>

          <a className="project" href="https://northlondonskateclub.com/" target="_blank">
            <div className="imageWrapper">
              <div className="image" style={{
                backgroundImage: "url(" + "/images/nlsc.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} >
              </div>
            </div>
            <h3>North London Skate Club</h3>
          </a>

          <a className="project" href="https://lukehope.co/" target="_blank">
            <div className="imageWrapper">
              <div className="image" style={{
                backgroundImage: "url(" + "/images/lukehope.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} >
              </div>
            </div>
            <h3>Luke Hope</h3>
          </a>

          <a className="project" href="https://wrightboxes.co.uk/" target="_blank">
            <div className="imageWrapper">
              <div className="image" style={{
                backgroundImage: "url(" + "/images/wrightboxes.co.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} >
              </div>
            </div>
            <h3>Wright Boxes</h3>
          </a>

        </div>
      </main>

    </div>
  );
}






export default ProjectsPage;


