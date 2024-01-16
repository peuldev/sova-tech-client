import React, { useEffect, useState } from "react";
import photo from "../../assets/images/image (13).webp";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  const [carts, setCart] = useState([]);
  const handleDelete = (id) => {
    const proceed = confirm("are you sure delete");
    fetch(`http://localhost:5000/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete suscessfuly");
          const remaining = carts.filter((cart) => cart._id !== id);
          setCart(remaining);
        }
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div className="flex justify-center">
      <div className="pb-10">
        <div className="flex justify-center">
          <h1 className="text-3xl text-center mt-5 border-b border-[#DFCCFB] w-1/3">
            Check Products
          </h1>
        </div>
        {carts.map((item) => (
          <div
            key={item._id}
            className="flex items-center border justify-between border-[#DFCCFB] rounded my-5"
          >
            <div className="flex items-center">
              <img className="w-28 mx-2" src={item.photo} alt="" />
              <div className="my-2">
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-[15px]">
                  Price: <span className="text-[#F90]">${item.price}</span>{" "}
                </p>
                <p className="text-[15px]">
                  Color: <span>{item.color}</span>{" "}
                </p>
                <p>
                  Brand : <span className=" text-[15px]">{item.brand}</span>{" "}
                </p>
              </div>
            </div>
            <div
              onClick={() => handleDelete(item._id)}
              className="mx-5 bg-[#EB57574D] p-2 rounded-full hover:bg-custom_blue cursor-pointer "
            >
              <RiDeleteBinLine className="text-2xl text-[#FF6868] hover:text-custom_white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
