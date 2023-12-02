import Banner from "./Banner";
import HeadPhones from "./HeadPhones";
import MobilePhones from "./MobilePhones";
import Product from "./Product";
import SmartTv from "./SmartTv";
import SmartWatches from "./SmartWatches";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MobilePhones></MobilePhones>
      <SmartWatches></SmartWatches>
      <HeadPhones></HeadPhones>
      <Product></Product>
      <SmartTv></SmartTv>
    </div>
  );
};

export default Home;
