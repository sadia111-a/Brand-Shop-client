import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { image, brand_name } = brand || {};
  return (
    <Link>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg h-[400px] w-full" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {brand_name}
            </h5>
          </a>
        </div>
      </div>
    </Link>
  );
};
BrandCard.propTypes = {
  brand: PropTypes.object,
};
export default BrandCard;
