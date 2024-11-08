import React from "react";
import Navbar from "../components/LandingPg/Navbar";
import Hero from "../components/LandingPg/Hero";
import Properties from "../components/LandingPg/Properties";
import Discover from "../components/LandingPg/Discover";

const LandingPg = (props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Discover />
      <Properties />
    </div>
  );
};

export default LandingPg;
