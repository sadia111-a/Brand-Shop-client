import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
  // const [brand, setBrand] = useState({});
  // const params = useParams();
  // console.log(params);
  // const brands = useLoaderData();
  // console.log(brands);
  // console.log(_id);

  const [product, setProduct] = useState({});
  const { _id } = useParams({});
  // const brands = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data);
        // Ensure data is an object
        if (typeof data === "object") {
          setProduct(data);
        } else {
          // Handle the case where data is not an object (e.g., it's an array)
          console.error("Invalid data received from the server");
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [_id]);

  // useEffect(() => {
  //   const findBrand = brands?.find((brand) => brand._id == _id);
  //   setBrand(findBrand);
  // }, [_id, brands]);
  // console.log(brand);
  return (
    <div>
      <DetailsCard product={product}></DetailsCard>
    </div>
  );
};

export default Details;
