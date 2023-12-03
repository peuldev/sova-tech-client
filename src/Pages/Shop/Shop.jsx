import { useLoaderData } from "react-router-dom";
import ShowShop from "./ShowShop";

const Shop = () => {
  const products = useLoaderData();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto py-20">
      {products.map((product) => (
        <ShowShop key={product._id} product={product}></ShowShop>
      ))}
    </div>
  );
};

export default Shop;
