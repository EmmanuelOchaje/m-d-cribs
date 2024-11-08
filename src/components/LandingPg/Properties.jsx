import { NavLink } from "react-router-dom";
import crib from "../../assets/images/crib.jpg";
import crib1 from "../../assets/images/housesBan.jpg";

const Properties = () => {
  return (
    <div className="">
      <h2 className="md:text-4xl text-2xl my-4 font-semibold text-center">
        Check our Our Latest Houses
      </h2>
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="m-2">
          <img
            src={crib}
            alt=""
            className="w-[250px] md:w-[400px] h-[200px] md:h-[300px] rounded-xl"
          />
        </div>
        <div className="m-2">
          <img
            src={crib1}
            alt=""
            className="w-[250px] md:w-[400px] h-[200px] md:h-[300px] rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-center my-6">
        <NavLink to="/properties">
          <button className="bg-black rounded-xl text-white p-2 w-24  ">
            See more
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Properties;
