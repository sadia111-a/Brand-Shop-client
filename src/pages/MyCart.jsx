import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const loadedProduct = useLoaderData();
  const [products, setProducts] = useState(loadedProduct);
  return (
    <div>
      <Helmet>
        <title>Brand-Shop || My Cart</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center"> My Cart </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10 ">
        {products.map((product) => (
          <Card
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
