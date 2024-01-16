import React, { useEffect, useState } from "react";

const useDevice = () => {
  const [device, setDevice] = useState([]);
  useEffect(() => {
    fetch("https://brandshop-server-ivory.vercel.app/device")
      .then((data) => data.json())
      .then((data) => setDevice(data));
  }, []);
  return [device];
};

export default useDevice;
