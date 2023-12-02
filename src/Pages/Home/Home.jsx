import Banner from "./Banner";
import HeadPhones from "./HeadPhones";
import MobilePhones from "./MobilePhones";
import SmartTv from "./SmartTv";
import SmartWatches from "./SmartWatches";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MobilePhones></MobilePhones>
      <SmartWatches></SmartWatches>
      <HeadPhones></HeadPhones>
      <SmartTv></SmartTv>
    </div>
  );
};

export default Home;
