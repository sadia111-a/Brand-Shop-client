import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const [brand, setBrand] = useState({});
  const { _id } = useParams();

  const allProduct = useLoaderData();
  // console.log(allProduct);
  // console.log(_id);

  useEffect(() => {
    const findBrand = allProduct?.find((brand) => brand._id == _id);
    setBrand(findBrand);
  }, [_id, allProduct]);
  // console.log(brand);
  return (
    <div>
      <Helmet>
        <title>Brand-Shop || Details</title>
      </Helmet>
      <DetailsCard brand={brand}></DetailsCard>
    </div>
  );
};

export default Details;
