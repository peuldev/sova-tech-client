import React from "react";
import useDevice from "../../../../Hooks/useDevice";
import ShowLaptop from "./ShowLaptop";

const Laptop = () => {
  const [laptop] = useDevice();
  const labtops = laptop.filter((item) => item.category === "labtop");
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="my-10 text-center text-4xl border-b border-b-[#DFCCFB] w-1/4 pb-2">
          Explore Labtop
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto pb-20">
        {labtops.map((labtop) => (
          <ShowLaptop labtop={labtop} key={labtop._id}></ShowLaptop>
        ))}
      </div>
    </div>
  );
};

export default Laptop;
