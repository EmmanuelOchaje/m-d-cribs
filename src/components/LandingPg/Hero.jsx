import Image from "../../assets/images/ldpg.jpg";

const Hero = () => {
  /* async function fetchHouses() {
    const req = await fetch("https://api.simplyrets.com/properties?limit=20");
    const data = await req.json();
    console.log(data);
  }
  fetchHouses(); */

  return (
    <div>
      <div className="p-6">
        <p className="float-right w-[150px] md:w-fit text-right md:text-[15px] text-[11px]">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">D-cribs</span>. All rights reserved.
        </p>
        <h1 className="text-2xl lg:text-4xl font-medium text-black w-[230px] lg:w-[400px]">
          Guiding Your Path into your new Home in the United Kingdom
        </h1>

        <p className="float-right text-[15px] md:text-xl my-10 text-gray-500 text-right w-[300px] lg:w-[600px]">
          With expert guidance and a deep understanding of London's Real estate
          landscape, we make your journey to a new home seamless and
          stress-free.
        </p>

        <div className="py-1">
          <img src={Image} alt="/" className=" rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
// https://api.simplyrets.com/simplyrets/
