import { useLoaderData } from "react-router-dom";
import Header from "../Navbar/Header";
import BeautyServices from "../components/BeautyServices";
import TodaysDeal from "../components/TodaysDeal";
import Brands from "../components/Brands";
import DarkMode from "../components/DarkMode";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div className="dark:bg-grey-900">
      <Header></Header>
      <Brands brands={brands}></Brands>
      <BeautyServices></BeautyServices>
      <TodaysDeal></TodaysDeal>
    </div>
  );
};

export default Home;
