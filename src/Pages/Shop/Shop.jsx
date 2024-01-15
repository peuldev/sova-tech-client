import { useLoaderData } from "react-router-dom";
import ShowShop from "./ShowShop";

const Shop = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="text-4xl py-5 text-center">
        <h1>Specials Products </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto pb-20">
        {products.map((product) => (
          <ShowShop key={product._id} product={product}></ShowShop>
        ))}
      </div>
    </div>
  );
};

export default Shop;
