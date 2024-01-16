import React, { useEffect, useState } from "react";
import ShowMonitor from "./ShowMonitor";
import useDevice from "../../../../Hooks/useDevice";

const Monitor = () => {
  const [device] = useDevice();
  const monitors = device.filter((item) => item.category === "monitor");
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="my-10 text-center text-4xl border-b border-b-[#DFCCFB] w-1/4 pb-2">
          Explore Monitor
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto pb-20">
        {monitors.map((monitor) => (
          <ShowMonitor monitor={monitor} key={monitor._id}></ShowMonitor>
        ))}
      </div>
    </div>
  );
};

export default Monitor;
