import React from "react";
import { TbListDetails } from "react-icons/tb";

const ShowMobile = ({ mobile }) => {
  const { _id, title, photo, price } = mobile;
  return (
    <div className="border border-[#DFCCFB] rounded-t">
      <div className="flex justify-center">
        <img className="rounded-t-lg" src={photo} alt="" />
      </div>
      <div className="p-2 bg-[#F2FFE9]">
        <p className="text-xl">{title}</p>
        <p className="text-xl pb-2">
          $ <span className="font-semibold text-[#FF004D]"> {price}</span>{" "}
        </p>
        <div className="flex items-center">
          <p className="cursor-pointer border border-[#DFCCFB] hover:bg-[#DFCCFB] hover:text-custom_white rounded px-2">
            ADD TO CART
          </p>
          <p
            className="cursor-pointer px-2 rounded tooltip"
            data-tip="View Details"
          >
            <TbListDetails />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowMobile;