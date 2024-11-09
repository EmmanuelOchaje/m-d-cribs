import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="not-found text-center">
        <h1 className="text-2xl">404</h1>
        <h2 className="text-2xl">Page Not Found</h2>
        <p className="text-2xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          className="bg-black text-white text-[18px] mt-4 rounded-xl p-2"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
