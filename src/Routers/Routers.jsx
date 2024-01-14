import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Faqpage from "../Pages/Faqpage/Faqpage";
import Register from "../Pages/Register/Register";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetails from "../Pages/Watch/ProductDetails";
import UpdateProduct from "../Pages/Watch/UpdateProduct";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/newproduct"),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/newproduct/${params.id}`),
      },

      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/newproduct/${params.id}`),
      },
      {
        path: "/Wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("http://localhost:5000/newproduct"),
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/faqpage",
        element: <Faqpage></Faqpage>,
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
        path: "/Dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default Routers;
