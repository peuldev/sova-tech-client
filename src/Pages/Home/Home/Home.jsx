import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import SmartWatch from "../../Watch/SmartWatch";
import { useState } from "react";
import Latest from "../Latest/Latest";
const Home = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (data) => {
    // console.log(data);
    setCart([...cart, data]);
  };
  return (
    <div>
      <Banner></Banner>
      <Latest></Latest>
    </div>
  );
};

export default Home;
