import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Blog from "../Pages/Blog/Blog";
import Faqpage from "../Pages/Faqpage/Faqpage";
import Login from "../Pages/login/login";
import Register from "../Pages/Register/Register";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Contact from "../Pages/Contact/Contact";
import MobilePhones from "../Pages/Home/MobilePhones";
import SmartWatches from "../Pages/Home/SmartWatches";
import SmartTv from "../Pages/Home/SmartTv";
import HeadPhones from "../Pages/Home/HeadPhones";

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
        path: "/Wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
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
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/mobilephones",
        element: <MobilePhones></MobilePhones>,
      },
      {
        path: "/smartwatches",
        element: <SmartWatches></SmartWatches>,
      },
      {
        path: "/smarttv",
        element: <SmartTv></SmartTv>,
      },
      {
        path: "/headphone",
        element: <HeadPhones></HeadPhones>,
      },
    ],
  },
]);
export default Routers;
