import { useLoaderData } from "react-router-dom";
import BrandProductCard from "../components/BrandProductCard";

const BrandProduct = () => {
  const products = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl">
        This is brands product page:{products.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {products?.map((product) => (
          <BrandProductCard
            key={product._id}
            product={product}
          ></BrandProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
