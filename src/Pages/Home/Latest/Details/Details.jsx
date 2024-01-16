import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const monitor = useLoaderData();
  const { title, price, stock, code, color, brand, photo, details } = monitor;
  return (
    <div className="mb-20">
      <h1 className="text-center text-custom_blue lg:text-4xl md:text-2xl text-xl py-5 underline">
        BASIC INFORMATION
      </h1>
      <div className="lg:flex md:flex ">
        <img className="rounded  lg:w-1/4 lg:h-1/4" src={photo} alt="" />
        <div className="lg:ml-20 ml-2 mt-5 space-y-1 lg:py-5">
          <h1 className="text-custom_blue lg:text-3xl text-xl">{title}</h1>
          <p className="lg:text-xl text-xl">
            Stock Status: <span className="text-custom_red">{stock}</span>
          </p>
          <p className="lg:text-xl text-xl">Product code: {code}</p>
          <p className="lg:text-xl text-xl">Brand: {brand}</p>
          <p className="lg:text-xl text-xl">Color: {color}</p>
          <p className="lg:text-xl text-xl font-semibold text-[#FF0000]">
            $ {price}
          </p>
        </div>
      </div>
      <div className="border-t border-[#DFCCFB] px-2 py-2">
        <h1 className="lg:text-2xl font-semibold lg:py-4">Description</h1>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Details;
