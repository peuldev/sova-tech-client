import headphone from "../../assets/images/hedphone.jpg";
import mobile from "../../assets/images/mobile.jpg";
import tv from "../../assets/images/tv.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="carousel w-full md:my-5 my-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={mobile} className="w-full rounded" />
        <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="flex items-center">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>

            <div className="lg:flex hidden ms-10">
              <div className="text-custom_black">
                <p className="lg:text-5xl md:text-2xl font-semibold">
                  All-in-one for <br /> family fun
                </p>
                <p className="text-xl py-5">Lovable. Drawable. Magical.</p>
                <Link to="/shop">
                  <p className="px-5 py-2 cursor-pointer bg-custom_black text-custom_white rounded inline hover:bg-custom_gray hover:text-custom_black">
                    Shop Now
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={tv} className="w-full rounded" />
        <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="flex items-center">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>

            <div className="lg:flex hidden ms-10">
              <div className="text-custom_black">
                <p className="lg:text-5xl md:text-2xl font-semibold">
                  Beauty in the details
                </p>
                <p className="text-xl py-5">Samsung NEO QLED 8K QN800C</p>
                <Link to="/shop">
                  <p className="px-5 py-2 cursor-pointer bg-custom_black text-custom_white rounded inline hover:bg-custom_gray hover:text-custom_black">
                    Shop Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={headphone} className="w-full" />
        <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="flex items-center">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>

            <div className="lg:flex hidden ms-10">
              <div className="text-custom_black">
                <p className="lg:text-5xl md:text-2xl font-semibold">
                  A magical connection <br /> To your devices
                </p>
                <p className="text-xl py-5">High Fidelity Audio</p>
                <Link to="/shop">
                  <p className="px-5 py-2 cursor-pointer bg-custom_black text-custom_white rounded inline hover:bg-custom_gray hover:text-custom_black">
                    Shop Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* Add  */}
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
