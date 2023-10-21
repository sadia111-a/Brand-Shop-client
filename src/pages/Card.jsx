import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ product, setProducts, products }) => {
  const { _id, brand_name, name, type, price, rating, description, photo } =
    product || {};
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = products.filter((pod) => pod._id !== _id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100  shadow-xl">
        <figure>
          <img className="h-[200px]" src={photo} alt="Movie" />
        </figure>
        <div className="flex w-3/4  justify-between ">
          <div>
            <h2 className="card-title">Name:{name}</h2>
            <h2 className="card-title">BrandName:{brand_name}</h2>
            <p>{type}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{description}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn btn-active">View</button>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn w-full bg-slate-400">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
