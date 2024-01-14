import mobile from "../../../assets/home/mobile.jpg";
import electronic from "../../../assets/home/electronic-device.jpg";
import keybrod from "../../../assets/home/gaming-mechanical.jpg";
import headphone from "../../../assets/home/levitating-music.jpg";
import monitor from "../../../assets/home/ultra-wide-monitor.jpg";
import device from "../../../assets/home/tech-device.jpg";

const Latest = () => {
  return (
    <div>
      <h1 className="font-bold lg:text-4xl md:text-2xl text-xl lg:py-10 md:py-5 py-2 text-center">
        Shop all latest offers and innovations
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-5">
        <img className="rounded-lg" src={monitor} alt="" />
        <img className="rounded-lg" src={mobile} alt="" />
        <img className="rounded-lg" src={keybrod} alt="" />
        <img className="rounded-lg" src={headphone} alt="" />
        <img className="rounded-lg" src={electronic} alt="" />
        <img className="rounded-lg" src={device} alt="" />
      </div>
    </div>
  );
};

export default Latest;
