import BrandCard from "./BrandCard";
import PropTypes from "prop-types";
const Brands = ({ brands }) => {
  return (
    <div className="min-h-[60vh] mt-10">
      <div>
        <h2 className="text-4xl text-center font-bold mb-4">All Our Brands</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {brands?.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};
Brands.propTypes = {
  brands: PropTypes.array,
};
export default Brands;
