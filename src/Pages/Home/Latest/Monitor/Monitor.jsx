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
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto py-20">
      {monitors.map((monitor) => (
        <ShowMonitor monitor={monitor}></ShowMonitor>
      ))}
    </div>
  );
};

export default Monitor;
