'use client'

import * as React from "react"
import {  useEffect } from 'react'



function ProjectsPage() {
  useEffect(() => {
    console.log("USE EFFECT CALLED");
    import("../../public/mainScript.js").then(module => {
      const test = module.default;
      test();
    })
  }, []);
  return (
    <div className="mainContent">

      {/* Main Content */}
      <main>
        <h1>projects page</h1>
      </main>
      
    </div>
  );
}






export default ProjectsPage;


