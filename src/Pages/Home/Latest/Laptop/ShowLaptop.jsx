import React from "react";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowLaptop = ({ labtop }) => {
  const handleAddToCart = (carts) => {
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Sova Tech",
            text: "Product Add Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const { _id, title, photo, price } = labtop;
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
          <p
            onClick={() => handleAddToCart(labtop)}
            className="cursor-pointer border border-[#DFCCFB] hover:bg-[#DFCCFB] hover:text-custom_white rounded px-2"
          >
            ADD TO CART
          </p>
          <Link to={`/details/${_id}`}>
            <p
              className="cursor-pointer px-2 rounded tooltip"
              data-tip="View Details"
            >
              <TbListDetails />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowLaptop;
