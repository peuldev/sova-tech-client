import headphone from "../../assets/images/hedphone.jpg";
import mobile from "../../assets/images/mobile.jpg";
import tv from "../../assets/images/tv.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="carousel w-full md:my-5 my-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={mobile} className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className='flex items-center'>
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className='ms-10'>
              <h1 className='text-4xl'>Test</h1>
              <h1 className='text-4xl'>Test</h1>
              <h1 className='text-4xl'>Test</h1>
            </div>
          </div>

          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={tv} className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <div className="lg:flex hidden lg:mr-52 space-y-5">{/* Add */}</div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={headphone} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
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
