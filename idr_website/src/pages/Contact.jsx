import React from "react";
import ContactUs from "../components/ContactUs";
// import AboutComnonent2 from '../components/AboutComnonent2'
// import AboutComponent1 from '../components/AboutComponent1'
// import AboutComponent3 from '../components/AboutComponent3'

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Header from '../components/Header',

import Newsletter from "../Newsletter";

function Contact() {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", top: "75px" }}>
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
