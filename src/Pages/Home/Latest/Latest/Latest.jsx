import mobile from "../../../../assets/home/mobile.jpg";
import labtop from "../../../../assets/home/electronic-device.jpg";
import keybrod from "../../../../assets/home/gaming-mechanical.jpg";
import headphone from "../../../../assets/home/levitating-music.jpg";
import monitor from "../../../../assets/home/ultra-wide-monitor.jpg";
import airpods from "../../../../assets/home/tech-device.jpg";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div>
      <h1 className="font-bold lg:text-4xl md:text-2xl text-xl lg:py-10 md:py-5 py-2 text-center">
        Shop all latest offers and innovations
      </h1>
      {/* image 1  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-5">
        <Link to="/monitor">
          <div className="relative group">
            <img
              className="rounded-lg transition-transform group-hover:scale-110 duration-300"
              src={monitor}
              alt=""
            />
            <p className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 text-custom_white text-4xl font-bold cursor-pointer uppercase">
              Monitor 4k
            </p>
            <p className="py-3 uppercase font-Rubik text-center">Monitor</p>
          </div>
        </Link>

        {/* image 2  */}
        <Link to="/mobile">
          <div className="relative group">
            <img
              className="rounded-lg transition-transform group-hover:scale-110 duration-300"
              src={mobile}
              alt=""
            />
            <p className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 text-custom_white text-4xl font-bold cursor-pointer uppercase">
              mobile
            </p>
            <p className="py-3 uppercase font-Rubik text-center">Mobile</p>
          </div>
        </Link>

        {/* image 3  */}
        <Link to="/keyboard">
          <div className="relative group">
            <img
              className="rounded-lg transition-transform group-hover:scale-110 duration-300"
              src={keybrod}
              alt=""
            />
            <p className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 text-custom_white text-4xl font-bold cursor-pointer uppercase">
              keyboard
            </p>
            <p className="py-3 uppercase font-Rubik text-center">Keyboard</p>
          </div>
        </Link>

        {/* image 4  */}
        <Link to="/headphone">
          <div className="relative group">
            <img
              className="rounded-lg transition-transform group-hover:scale-110 duration-300"
              src={headphone}
              alt=""
            />
            <p className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 text-custom_white text-4xl font-bold cursor-pointer uppercase">
              headphone
            </p>
            <p className="py-3 uppercase font-Rubik text-center">headphone</p>
          </div>
        </Link>

        {/* image 5  */}
        <Link to="/labtop">
          <div className="relative group">
            <img
              className="rounded-lg transition-transform group-hover:scale-110 duration-300"
              src={labtop}
              alt=""
            />
            <p className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 text-custom_white text-4xl font-bold cursor-pointer uppercase">
              laptop
            </p>
            <p className="py-3 uppercase font-Rubik text-center">Labtop</p>
          </div>
        </Link>

        {/* image 6  */}
        <Link to="/airpods">
          <div className="relative group">
            <img
              className="rounded-lg transition-transform group-hover:scale-110 duration-300"
              src={airpods}
              alt=""
            />
            <p className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 text-custom_white text-4xl font-bold cursor-pointer uppercase">
              airpods
            </p>
            <p className="py-3 uppercase font-Rubik text-center">airpods</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Latest;
