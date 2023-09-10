import React from "react";
import AboutComnonent2 from "../components/AboutComnonent2";
import AboutComponent1 from "../components/AboutComponent1";
// import AboutComponent3 from '../components/AboutComponent3'
import AboutComponent4 from "../components/AboutComponent4";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../Newsletter";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", top: "75px" }}>
        <AboutComponent1 />
        <AboutComnonent2 />
        <AboutComponent4 />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default About;
