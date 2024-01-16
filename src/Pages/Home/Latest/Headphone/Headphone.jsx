import React from "react";
import useDevice from "../../../../Hooks/useDevice";
import ShowHeadphone from "./ShowHeadphone";

const Headphone = () => {
  const [headphone] = useDevice();
  const headphones = headphone.filter((item) => item.category === "headphone");
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="my-10 text-center text-4xl border-b border-b-[#DFCCFB] w-1/4 pb-2">
          Explore Headphone
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto pb-20">
        {headphones.map((headphone) => (
          <ShowHeadphone
            headphone={headphone}
            key={headphone._id}
          ></ShowHeadphone>
        ))}
      </div>
    </div>
  );
};

export default Headphone;
