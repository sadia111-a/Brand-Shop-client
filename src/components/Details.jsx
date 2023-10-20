import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const [brand, setBrand] = useState({});
  const { _id } = useParams();
  const brands = useLoaderData();
  console.log(brands);
  console.log(_id);
  useEffect(() => {
    const findBrand = brands?.find((brand) => brand._id == _id);
    setBrand(findBrand);
  }, [_id, brands]);
  return (
    <div>
      <DetailsCard brand={brand}></DetailsCard>
    </div>
  );
};

export default Details;
