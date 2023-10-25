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
        loader: () =>
          fetch(
            "https://brand-shop-server-er5zvqvvc-sadia-rahmans-projects.vercel.app/product"
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
        path: "/brandProduct/:brand_name",
        element: (
          <PrivateRoute>
            <BrandProduct></BrandProduct>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://brand-shop-server-er5zvqvvc-sadia-rahmans-projects.vercel.app/product"
          ),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            `https://brand-shop-server-er5zvqvvc-sadia-rahmans-projects.vercel.app/product`
          ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdatedProduct></UpdatedProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-er5zvqvvc-sadia-rahmans-projects.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
