import { Link } from "react-router-dom";
import logo from "../../assets/images/product.jpg";
const Product = () => {
  return (
    <div
      className="p-20 rounded lg:my-20 md:my-10 my-5"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${logo})`,
      }}
    >
      <div>
        <p>
          Sale Offer <span className="text-custom_red">-20% Off</span> This Week
        </p>
        <h3 className="lg:text-3xl font-medium">
          Featured Product <br />
          Apple Accessories 2018
        </h3>
        <p className=" text-xl lg:my-5 my-2">
          Starting at{" "}
          <span className="text-custom_red font-bold text-2xl">$1209.00</span>
        </p>

        <Link to="/shop">
          <p className="px-5 py-2 cursor-pointer bg-custom_yellow text-custom_white rounded inline hover:bg-custom_gray_color">
            Shopping Now{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Product;
