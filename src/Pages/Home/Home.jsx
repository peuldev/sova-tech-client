import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SmartWatch from "./SmartWatch";
const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <div>
        <Banner></Banner>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto py-20">
          {products.map((product) => (
            <SmartWatch key={product._id} product={product}></SmartWatch>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
