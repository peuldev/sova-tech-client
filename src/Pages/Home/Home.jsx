import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HeadPhones from "./HeadPhones";
import Product from "./Product";
import SmartTv from "./SmartTv";
import SmartWatches from "./SmartWatches";
import MobilePhones from "./MobilePhones";
const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <div>
        <Banner></Banner>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto py-20">
          {products.map((product) => (
            <MobilePhones key={product._id} product={product}></MobilePhones>
          ))}
        </div>
        <SmartWatches></SmartWatches>
        <HeadPhones></HeadPhones>
        <Product></Product>
        <SmartTv></SmartTv>
      </div>
    </div>
  );
};

export default Home;
