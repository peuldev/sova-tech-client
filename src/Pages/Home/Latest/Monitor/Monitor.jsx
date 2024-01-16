import React, { useEffect, useState } from "react";
import ShowMonitor from "./ShowMonitor";

const Monitor = () => {
  const [monitors, setMonitors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/device")
      .then((res) => res.json())
      .then((data) => {
        const monitors = data.filter((item) => item.category === "monitor");
        setMonitors(monitors);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="my-10 text-center text-4xl border-b border-b-[#DFCCFB] w-1/4 pb-2">
          Explore Monitor
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto pb-20">
        {monitors.map((monitor) => (
          <ShowMonitor monitor={monitor}></ShowMonitor>
        ))}
      </div>
    </div>
  );
};

export default Monitor;
