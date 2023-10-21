import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const MyCart = () => {
  const brands = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl">This is My Cart page:{brands.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10 ">
        {brands.map((brand) => (
          <Card key={brand._id} brand={brand}></Card>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
