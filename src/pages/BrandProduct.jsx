import { useLoaderData, useParams } from "react-router-dom";
import BrandProductCard from "../components/BrandProductCard";
import { useEffect, useState } from "react";

const BrandProduct = () => {
  // const { brand_name } = useParams();
  // const { brand_name } = useLoaderData("");
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(`/product/${brand_name}`)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, [brand_name]);
  const products = useLoaderData();

  return (
    <div>
      <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/F7GPK8r/V-Label-for-Cosmetics-Personal-Care-and-Household-Products.png"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/zN8JtBp/Cosmetic-Franchise-Company-in-India.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/P6csvNs/make-up-1019x573.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* <div>
        <h2 className="text-2xl">Products from {brand_name}</h2>
        {products.length === 0 ? (
          <p>No products available for this brand.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {products?.map((product) => (
              <BrandProductCard
                key={product._id}
                product={product}
              ></BrandProductCard>
            ))}
          </div>
        )}
      </div> */}
      <div>
        <h2 className="text-2xl">Products from {products.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {products?.map((product) => (
            <BrandProductCard
              key={product._id}
              product={product}
            ></BrandProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
