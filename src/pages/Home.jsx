import { useLoaderData } from "react-router-dom";
import Header from "../Navbar/Header";
import BeautyServices from "../components/BeautyServices";
import TodaysDeal from "../components/TodaysDeal";
import Brands from "../components/Brands";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <Header></Header>
      <Brands brands={brands}></Brands>
      <BeautyServices></BeautyServices>
      <TodaysDeal></TodaysDeal>
    </div>
  );
};

export default Home;
