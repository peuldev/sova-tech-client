import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, title, price, stock, code, color, brand, photo, details } =
    product;
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const stock = form.stock.value;
    const code = form.code.value;
    const color = form.color.value;
    const brand = form.brand.value;
    const photo = form.photo.value;
    const details = form.details.value;

    const update = { title, price, stock, code, color, brand, photo, details };

    // sent date server
    fetch(`https://sova-tech.onrender.com/newproduct/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire({
            title: "success",
            text: "Product Update SuccessFuly",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div>
      <form className="card-body p-24 " onSubmit={handleUpdateProduct}>
        {/* form row  */}
        <div className="lg:flex md:flex mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              defaultValue={title}
              placeholder="Short Title"
              className="input input-bordered w-full"
              name="title"
            />
          </div>
          <div className="form-control w-full lg:ml:4 md:ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={price}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              name="price"
            />
          </div>
        </div>
        {/* form row  */}
        <div className="lg:flex md:flex mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <input
              type="text"
              defaultValue={stock}
              placeholder="Status"
              className="input input-bordered w-full"
              name="stock"
            />
          </div>
          <div className="form-control w-full lg:ml:4 md:ml-4">
            <label className="label">
              <span className="label-text">Product code</span>
            </label>
            <input
              type="number"
              defaultValue={code}
              placeholder="Code"
              className="input input-bordered w-full"
              name="code"
            />
          </div>
        </div>

        {/* row  */}
        <div className="lg:flex md:flex mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Color</span>
            </label>
            <input
              type="text"
              defaultValue={color}
              placeholder="Color"
              className="input input-bordered w-full"
              name="color"
            />
          </div>
          <div className="form-control w-full lg:ml:4 md:ml-4">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              defaultValue={brand}
              placeholder="Brand"
              className="input input-bordered w-full"
              name="brand"
            />
          </div>
        </div>
        {/* form row  */}

        {/* form photo url row  */}
        <div className="mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              name="photo"
            />
          </div>
        </div>
        <div className="mb-2">
          <textarea
            placeholder="Product Details"
            defaultValue={details}
            className="textarea textarea-bordered textarea-lg w-full"
            name="details"
          ></textarea>
        </div>
        <input
          className="btn bg-custom_yellow hover:bg-custom_blue"
          type="submit"
          value="Update Now"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
