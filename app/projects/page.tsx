'use client'

import * as React from "react"
import {  useEffect } from 'react'



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
        <h1>Projects coming soon<span className="orange">...</span></h1>
      </main>
      
    </div>
  );
}






export default ProjectsPage;


