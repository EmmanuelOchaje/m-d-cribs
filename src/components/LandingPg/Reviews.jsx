import React from "react";

import Slider from "./Slider";

const Reviews = () => {
  return (
    <div className="flex justify-center rvbg mx-10 h-[] rounded-xl text-white py-4 md:py-10">
      <div className="">
        <h2 className="text-center text-2xl md:text-4xl font-semibold">
          We let our Clients do the Talking
        </h2>
        <div className="md:w-[600px] w-[300px] h-[]">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
