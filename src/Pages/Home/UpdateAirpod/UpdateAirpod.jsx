import airpods from "../../../assets/home/update_airpods.jpg";
import { FaAngleRight } from "react-icons/fa6";

const UpdateAirpod = () => {
  return (
    <div className="flex justify-center bg-[#f2f2f2] lg:my-20 rounded">
      <div className="lg:flex items-center">
        <div>
          <img src={airpods} alt="" />
        </div>
        <div className="font-poppins lg:ms-40 md:ms-20 space-y-5">
          <h1 className="text-5xl font-semibold">
            Use AR to see <br />
            AirPods Max.
          </h1>
          <p className="text-[#86868b] text-xl">
            Open this page using Safari on <br /> your iPhone or iPad.
          </p>
          <div className="flex items-center">
            <p>
              <span className="cursor-pointer text-custom_blue hover:border-b inline">
                Buy AirPods Max
              </span>
            </p>
            <FaAngleRight className="text-custom_blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAirpod;
