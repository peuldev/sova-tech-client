import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetails from "../Pages/Watch/ProductDetails";
import UpdateProduct from "../Pages/Watch/UpdateProduct";
import Monitor from "../Pages/Home/Latest/Monitor/Monitor";
import Mobile from "../Pages/Home/Latest/Mobile/Mobile";
import Keyboard from "../Pages/Home/Latest/Keyboard/Keyboard";
import Headphone from "../Pages/Home/Latest/Headphone/Headphone";
import Laptop from "../Pages/Home/Latest/Laptop/Laptop";
import Airpods from "../Pages/Home/Latest/Airpods/Airpods";
import Cart from "../Pages/Cart/Cart";
import Details from "../Pages/Home/Latest/Details/Details";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/monitor",
        element: <Monitor></Monitor>,
      },
      {
        path: "/mobile",
        element: <Mobile></Mobile>,
      },
      {
        path: "/keyboard",
        element: <Keyboard></Keyboard>,
      },
      {
        path: "/headphone",
        element: <Headphone></Headphone>,
      },
      {
        path: "/labtop",
        element: <Laptop></Laptop>,
      },
      {
        path: "/airpods",
        element: <Airpods></Airpods>,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brandshop-server-ivory.vercel.app/newproduct/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brandshop-server-ivory.vercel.app/device/${params.id}`
          ),
      },

      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brandshop-server-ivory.vercel.app/newproduct/${params.id}`
          ),
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop></Shop>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://brandshop-server-ivory.vercel.app/newproduct"),
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
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
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
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
