import { Link } from "react-router-dom";

const DetailsCard = ({ brand }) => {
  const { _id, brand_name, name, type, price, rating, description, photo } =
    brand || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={photo} alt="brand_photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand:{brand_name}</h2>
          <h2 className="card-title">Name:{name}</h2>
          <div className="flex">
            <p>Type:{type}</p>
            <p>Price:{price}$</p>
            <p>Rating:{rating}</p>
          </div>
          <div className="card-actions ">
            <Link to="/myCart">
              <button className="btn btn-primary font-bold bg-cyan-500 border-0 text-white">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
