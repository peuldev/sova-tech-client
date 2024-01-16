import React, { useEffect, useState } from "react";

const useDevice = () => {
  const [device, setDevice] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/device")
      .then((data) => data.json())
      .then((data) => setDevice(data));
  }, []);
  return [device];
};

export default useDevice;
