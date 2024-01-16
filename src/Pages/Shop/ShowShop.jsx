import { Link } from "react-router-dom";
const ShowShop = ({ product }) => {
  const { _id, title, photo, price } = product;
  return (
    <div className="border border-[#DFCCFB] rounded-t">
      <img className="rounded-t-lg" src={photo} alt="" />
      <div className="p-2 bg-[#F2FFE9]">
        <p className="text-xl">{title}</p>
        <p className="text-xl pb-2">
          $ <span className="font-semibold text-[#FF004D]"> {price}</span>{" "}
        </p>
        <div className="flex items-center">
          <Link to={`/product/${_id}`}>
            <p
              className="cursor-pointer px-2 rounded tooltip border hover:bg-custom_blue hover:text-custom_white"
              data-tip="View Details"
            >
              Details
            </p>
          </Link>
          <Link to={`/updateproduct/${_id}`}>
            <p
              className="cursor-pointer px-2 rounded tooltip border ms-2"
              data-tip="Update Here"
            >
              Update
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowShop;
