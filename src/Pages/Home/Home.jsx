import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SmartWatch from "../Watch/SmartWatch";
import { useState } from "react";
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
      <div>
        <Banner></Banner>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto py-20">
          {products.map((product) => (
            <SmartWatch
              key={product._id}
              product={product}
              addToCart={addToCart}
            ></SmartWatch>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
