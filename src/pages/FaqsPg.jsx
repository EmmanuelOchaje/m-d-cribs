import React from "react";
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import Accordian from "../components/Faqs/Accordian";
const FaqsPg = (props) => {
  return (
    <div className="">
      <Navbar />
      <h1 className="mt-6 text-center text-2xl md:text-4xl font-semibold">
        Frequently Asked Questions
      </h1>
      <Accordian />
      <Footer />
    </div>
  );
};

export default FaqsPg;
