import React from "react";
import Agocharfeature from "../components/Agocharfeature";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Newsletter from "../Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", top: "75px" }}>
        <Slider />

        <Agocharfeature />
        <Features />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
