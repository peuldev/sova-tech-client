import React, { useEffect, useState } from "react";

const Monitor = () => {
  const [monitor, setMonitor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/device")
      .then((res) => res.json())
      .then((data) => {
        const monitors = data.filter((item) => item.category === "monitor");
        setMonitor(monitors);
      });
  }, []);
  console.log(monitor);
  return <div>Monitor</div>;
};

export default Monitor;
