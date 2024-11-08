import data from "../../data/houses.json";

const Card = (props) => {
  return (
    <div className="flex flex-wrap justify-center mx-12">
      {data.images.map((item, idx) => (
        <div className="rounded-xl m-2" key={idx}>
          <img
            src={item.src}
            alt="/"
            className="rounded-xl m-auto w-[200px] md:w-[400px]"
          />
          <p className="text-center font-semibold">
            Description: <span className="font-normal">{item.description}</span>
          </p>
          <div className="flex justify-center my-4">
            <button className="bg-black hover:bg-gray-900 duration-300 text-white font-normal rounded-xl p-2 ">
              Add To Checklist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
