import banner1 from "../../assets/images/banner1-1.avif";
import banner2 from "../../assets/images/banner1-2.avif";
import banner3 from "../../assets/images/banner3.jpg";
const DiscountProduct = () => {
  return (
    <div className="my-10 mx-2 ">
      <h1 className="my-5 text-4xl">DiscountProducts</h1>
      <div className="lg:flex md:flex justify-between">
        <div className="border my-2">
          <img src={banner1} alt="" />
        </div>
        <div className="border my-2 md:mx-2">
          <img className="" src={banner3} alt="" />
        </div>
        <div className="border my-2 ">
          <img src={banner2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
