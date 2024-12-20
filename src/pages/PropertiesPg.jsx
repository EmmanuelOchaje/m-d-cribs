import React from "react";
import Navbar from "../components/reusables/Navbar";
import Card from "../components/reusables/Card";
import Footer from "../components/reusables/Footer";
import data from "../data/houses.json";

const PropertiesPg = (props) => {
  return (
    <div>
      <Navbar />
      <Card data={data} />
      <Footer />
    </div>
  );
};

export default PropertiesPg;
