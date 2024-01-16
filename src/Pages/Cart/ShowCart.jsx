import { RiDeleteBinLine } from "react-icons/ri";
const ShowCart = () => {
  return (
    <div>
      <div className="flex items-center border justify-between border-[#DFCCFB] rounded my-5">
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
        <div className="mx-5 bg-[#EB57574D] p-2 rounded-full hover:bg-custom_blue cursor-pointer ">
          <RiDeleteBinLine className="text-2xl text-[#FF6868] hover:text-custom_white" />
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
