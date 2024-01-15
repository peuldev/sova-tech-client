import Banner from "../Banner/Banner";
import DeliveryAbout from "../DeliveryAbout/DeliveryAbout";
import Latest from "../Latest/Latest/Latest";
import UpdateAirpod from "../UpdateAirpod/UpdateAirpod";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Latest></Latest>
      <UpdateAirpod></UpdateAirpod>
      <DeliveryAbout></DeliveryAbout>
    </div>
  );
};

export default Home;
