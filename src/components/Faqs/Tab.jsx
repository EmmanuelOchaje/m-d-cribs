import React, { useState } from "react";

const Tab = ({ data }) => {
  const [selected, setSelected] = useState(null);

  function display(id) {
    setSelected((prevSelected) => (id === prevSelected ? null : id));
  }
  return (
    <div>
      {data && data.length > 1
        ? data.map((data) => (
            <div
              onClick={() => display(data.id)}
              key={data.id}
              className="border cursor-pointer p-2 rounded-xl w-[250px] sm:w-[500px] mx-auto m-2 duration-300"
            >
              <h2 className="text-[18px] flex justify-between md:text-xl font-normal">
                {data.question}{" "}
                <span className="text-xl">
                  {selected === data.id ? (
                    <i class="bx bx-chevron-up"></i>
                  ) : (
                    <i class="bx bx-chevron-down"></i>
                  )}
                </span>
              </h2>
              {selected === data.id && (
                <div className="mt-2">
                  <p className="text-gray-700">{data.answer}</p>
                </div>
              )}
              {/* <div>{selected === data.id ? <p>{data.answer}</p> : <p></p>}</div> */}
            </div>
          ))
        : null}
    </div>
  );
};

export default Tab;
