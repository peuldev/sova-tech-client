import React from "react";
import useDevice from "../../../../Hooks/useDevice";
import ShowMobile from "./ShowMobile";

const Mobile = () => {
  const [mobiles] = useDevice();
  const mobile = mobiles.filter((item) => item.category === "mobile");

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="my-10 text-center text-4xl border-b border-b-[#DFCCFB] w-1/4 pb-2">
          Explore Mobile
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto pb-20">
        {mobile.map((mobile) => (
          <ShowMobile mobile={mobile} key={mobile._id}></ShowMobile>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
