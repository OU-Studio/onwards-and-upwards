'use client'

import * as React from "react"
import {  useEffect } from 'react'



function ContactPage() {
  useEffect(() => {
    console.log("USE EFFECT CALLED");
    import("../../public/mainScript.js").then(module => {
      const test = module.default;
      test();
    })
  }, []);
  return (
    <div className="mainContent contact">

      {/* Main Content */}
      <main>
        <h2>We make getting in touch with us super simple.</h2>
        <h2>Email us at <a href="mailto:info@ou.studio" target="_blank">info@ou.studio</a></h2>
        <h2>Call or Text us on <a href="tel:+447404367639" target="_blank">07404 367639</a></h2>
        <h2>Start a WhatsApp chat <a href="https://wa.me/message/XGX5CTAIJOLML1" target="_blank">now</a></h2>
      </main>
      
    </div>
  );
}






export default ContactPage;


