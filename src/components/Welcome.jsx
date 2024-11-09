import React from "react";
import Nav from "../components/reusables/Nav";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="bg-wl h-screen">
      <Nav />
      <div className="flex justify-center items-center h-[80vh]">
        <div className="">
          <h2 className="text-white font-medium text-[35px] text-center">
            Hi There,
          </h2>
          <h2 className="text-white font-medium text-[35px] text-center">
            Welcome back.
          </h2>
          <div className="flex my-3 justify-center items-center">
            <Link to="/login">
              <button className="bg-white text-black text-[18px] font-medium border rounded-lg px-2 py-1">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
