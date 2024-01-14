import mobile from "../../assets/images/mobile.jpg";
import wacth from "../../assets/images//wacth.jpg";
import tv from "../../assets/images/tv.jpg";
import headphone from "../../assets/images/headphone.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="carousel w-full md:my-5 my-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={mobile} className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <div className="lg:flex hidden lg:ml-52 space-y-5">
            <div className="text-[#ECF4D6]">
              <h3 className="lg:text-2xl md:text-2xl font-medium">
                Sale Offer <span className="text-[#190482]">-10% Off</span> This
                Week
              </h3>
              <p className="lg:text-4xl md:text-2xl">Iphone | 15-pro</p>
              <p className="text-xl mb-5">
                Starting at{" "}
                <span className="text-2xl text-[#190482] font-semibold">
                  $824.00
                </span>
              </p>
              <Link to="/shop">
                <p className="px-5 py-2 cursor-pointer bg-custom_yellow text-custom_white rounded inline hover:bg-custom_gray_color">
                  Shop Now
                </p>
              </Link>
            </div>
          </div>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={wacth} className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <div className="lg:flex hidden lg:mr-52 space-y-5">
            <div className="text-[#ECF4D6]">
              <h3 className="lg:text-2xl md:text-2xl font-medium">
                Sale Offer <span className="text-[#190482]">-10% Off</span> This
                Week
              </h3>
              <p className="lg:text-4xl md:text-2xl">
                Kieslect KS 2 | Smart Watch
              </p>
              <p className="text-xl mb-5">
                Starting at{" "}
                <span className="text-2xl text-[#190482] font-semibold">
                  $424.00
                </span>
              </p>
              <Link to="/shop">
                <p className="px-5 py-2 cursor-pointer bg-custom_yellow text-custom_white rounded inline hover:bg-custom_gray_color">
                  Shop Now
                </p>
              </Link>
            </div>
          </div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={tv} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <div className="lg:flex hidden lg:ml-52 space-y-5">
            <div className="text-[#ECF4D6]">
              <h3 className="lg:text-2xl md:text-2xl font-medium">
                Sale Offer <span className="text-[#190482]">-10% Off</span> This
                Week
              </h3>
              <p className="lg:text-4xl md:text-2xl">
                Sony Bravia 4K | Ultra HD
              </p>
              <p className="text-xl mb-5">
                Starting at{" "}
                <span className="text-2xl text-[#190482] font-semibold">
                  $124.00
                </span>
              </p>
              <Link to="/shop">
                <p className="px-5 py-2 cursor-pointer bg-custom_yellow text-custom_white rounded inline hover:bg-custom_gray_color">
                  Shop Now
                </p>
              </Link>
            </div>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={headphone} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <div className="lg:flex hidden lg:mr-52 space-y-5">
            <div className="text-[#ECF4D6]">
              <h3 className="lg:text-2xl md:text-2xl font-medium">
                Sale Offer <span className="text-[#190482]">-10% Off</span> This
                Week
              </h3>
              <p className="lg:text-4xl md:text-2xl">
                A4 Tech Hs19 | Stereo Headset
              </p>
              <p className="text-xl mb-5">
                Starting at{" "}
                <span className="text-2xl text-[#190482] font-semibold">
                  $124.00
                </span>
              </p>
              <Link to="/shop">
                <p className="px-5 py-2 cursor-pointer bg-custom_yellow text-custom_white rounded inline hover:bg-custom_gray_color">
                  Shop Now
                </p>
              </Link>
            </div>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
