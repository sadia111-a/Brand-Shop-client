import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const MyCart = () => {
  const loadedProduct = useLoaderData();
  const [products, setProducts] = useState(loadedProduct);
  return (
    <div>
      <h2 className="text-2xl text-center"> My Cart </h2>
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
