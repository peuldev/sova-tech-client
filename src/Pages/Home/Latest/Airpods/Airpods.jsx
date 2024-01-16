import React from "react";
import useDevice from "../../../../Hooks/useDevice";
import ShowAirpods from "./ShowAirpods";

const Airpods = () => {
  const [airpod] = useDevice();
  const airpods = airpod.filter((item) => item.category === "airpods");
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="my-10 text-center text-4xl border-b border-b-[#DFCCFB] w-1/4 pb-2">
          Explore Airpods
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto pb-20">
        {airpods.map((airpod) => (
          <ShowAirpods airpod={airpod}></ShowAirpods>
        ))}
      </div>
    </div>
  );
};

export default Airpods;
