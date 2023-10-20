import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedProduct = () => {
  const product = useLoaderData();
  const { _id, brand_name, name, type, price, rating, description, photo } =
    product || {};
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand_name = form.brand_name.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const updateProduct = {
      brand_name,
      name,
      type,
      price,
      rating,
      description,
      photo,
    };
    console.log(updateProduct);
    // send data to the server
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl text-center font-extrabold mb-8">
        Update Product:{name}
      </h2>

      <form onSubmit={handleUpdateProduct}>
        {/* form brand_name and Name row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={brand_name}
                placeholder="Brand Name"
                name="brand_name"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="name"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form type and price row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Type"
                name="type"
                defaultValue={type}
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="price$"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form rating and description row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="rating"
                name="rating"
                defaultValue={rating}
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={description}
                placeholder="Details"
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                defaultValue={photo}
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Product"
          className="btn btn-block bg-cyan-500"
        />
      </form>
    </div>
  );
};

export default UpdatedProduct;
