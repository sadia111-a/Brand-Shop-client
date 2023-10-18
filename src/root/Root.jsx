import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Header from "../Navbar/Header";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins">
      <Navbar></Navbar>
      {/* <Header></Header> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
