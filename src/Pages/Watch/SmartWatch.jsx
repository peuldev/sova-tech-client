import { TbListDetails } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";

const SmartWatch = ({ product }) => {
  // console.log(product.title);
  const { _id, title, photo, price } = product;

  return (
    <div className="border-2 rounded border-custom_gray">
      <img className="rounded-t-lg" src={photo} alt="" />
      <div className="bg-custom_gray p-2 ">
        <p className="text-xl">{title}</p>
        <p className="text-xl">
          $ <span className="font-semibold text-custom_red"> {price}</span>{" "}
        </p>
        <div className="flex items-center pb-5 ">
          <p
            className="  bg-custom_gray cursor-pointer rounded hover:bg-custom_yellow hover:text-custom_white px-2 py-2 tooltip"
            data-tip="Add to Cart"
          >
            ADD TO CART
          </p>
          <Link to={`/product/${_id}`}>
            <p
              className=" cursor-pointer hover:bg-custom_yellow   hover:text-custom_white px-2 py-2 rounded tooltip"
              data-tip="View Details"
            >
              <TbListDetails />
            </p>
          </Link>
          <Link to={`/updateproduct/${_id}`}>
            <p
              className="cursor-pointer hover:bg-custom_yellow  hover:text-custom_white px-2 py-2 rounded tooltip"
              data-tip="Update"
            >
              <RxUpdate />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmartWatch;