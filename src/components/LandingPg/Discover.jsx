import React from "react";
import crib2 from "../../assets/images/crib3.jpg";

const Discover = () => {
  return (
    <div className="md:flex justify-between lg:px-[12.5%] px-[5%] my-6">
      <div className="fle items-cente">
        <div>
          <h1 className="lg:text-5xl text-center md:text-left w-[300px] md:w-[400px] m-auto md:m-0 md:text-3xl text-2xl md:mt-32 font-normal">
            Experience Elevated Living with{" "}
            <span className="font-bold">D-cribs.</span>
          </h1>
          <p className="lg:w-[500px] text-center md:text-left m-auto md:m-0 w-[320px] md:text-xl text-[17px] text-gray-600 my-10">
            luxirious spaces, refined design, personalized services, and modern
            amenities for a sophisticated, upscale lifestyle.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center relative">
        <h2 className="font-bold absolute text-2xl ml-[-250px] my-2 text-black">
          D-cribs
        </h2>
        <img
          src={crib2}
          className="w-[400px] h-[500px] m-auto rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Discover;
