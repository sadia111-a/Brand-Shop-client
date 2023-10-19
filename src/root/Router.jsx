import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../pages/Errorpage";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import BrandProduct from "../pages/BrandProduct";
import Details from "../components/Details";
import UpdatedProduct from "../components/UpdatedProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brandProduct",
        element: <BrandProduct></BrandProduct>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
      {
        path: "/update",
        element: <UpdatedProduct></UpdatedProduct>,
      },
    ],
  },
]);
export default router;
