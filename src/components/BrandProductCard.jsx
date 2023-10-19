import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandProductCard = ({ product }) => {
  const { brand_name, name, type, price, rating, description, photo } =
    product || {};
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
            <Link to="/details">
              <button className="btn btn-primary font-bold bg-cyan-500 border-0 text-white">
                Details
              </button>
            </Link>
            <Link to="/update">
              <button className="btn btn-primary font-bold bg-cyan-500 border-0 text-white">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
BrandProductCard.propTypes = {
  product: PropTypes.object,
};
export default BrandProductCard;
