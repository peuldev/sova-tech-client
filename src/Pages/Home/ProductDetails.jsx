import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useLoaderData();
  const { title, price, stock, code, color, brand, photo, details } = products;
  console.log(products);
  const { id } = useParams();
  return (
    <div className="mb-20">
      <h1 className="text-center text-custom_blue text-4xl py-5 underline">
        BASIC INFORMATION
      </h1>
      <div className="lg:flex md:flex">
        <img className="rounded" src={photo} alt="" />
        <div className="lg:ml-10 ml-2 mt-5 space-y-5">
          <h1 className="lg:text-3xl text-xl">{title}</h1>
          <p className="lg:text-2xl text-xl">Stock Status: {stock}</p>
          <p className="lg:text-2xl text-xl">Product code: {code}</p>
          <p className="lg:text-2xl text-xl">Brand: {brand}</p>
          <p className="lg:text-2xl text-xl">Color: {color}</p>
          <p className="lg:text-2xl text-xl">Price: {price} $</p>
        </div>
      </div>
    </div>
  );
};
{
  /* <p>Description: {details}</p> */
}
export default ProductDetails;
