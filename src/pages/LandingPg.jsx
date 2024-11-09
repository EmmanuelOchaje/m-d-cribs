import React from "react";
import Navbar from "../components/reusables/Navbar";
import Hero from "../components/LandingPg/Hero";
import Properties from "../components/LandingPg/Properties";
import Discover from "../components/LandingPg/Discover";
import Reviews from "../components/LandingPg/Reviews";
import Footer from "../components/reusables/Footer";

const LandingPg = (props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Discover />
      <Properties />
      <Reviews />
      <Footer />
    </div>
  );
};

export default LandingPg;
