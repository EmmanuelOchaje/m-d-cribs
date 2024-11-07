import Image from "../../assets/images/ldpg.jpg";

const url =
  "https://us-real-estate.p.rapidapi.com/keywords-search-suggest?keyword_text=pool&limit=10";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ca7e9ecb83msha7e21fe174286c0p1d2808jsn619e91a30887",
    "x-rapidapi-host": "us-real-estate.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

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
        <p className="float-right md:text-xl text-[14px]">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">D-cribs</span>. All rights reserved.
        </p>
        <h1 className="text-2xl lg:text-4xl font-medium text-black w-[250px] lg:w-[400px]">
          Guiding Your Path into your new Home in the United Kingdom
        </h1>

        <p className="float-right text-[15px] md:text-xl mb-10 text-gray-500 text-right w-[300px] lg:w-[600px]">
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
