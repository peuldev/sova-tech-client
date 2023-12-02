import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import tow from "../../assets/logo/tow.png";
import { AuthContext } from "../../Context/AuthProviders";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };
  const navLinks = (
    <>
      <li className="hover:text-custom_white">
        <NavLink to="/">Home</NavLink>
      </li>
      <div className="dropdown dropdown-end">
        <li tabIndex={0} role="button" className="hover:text-custom_white">
          <li>Category</li>
        </li>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <NavLink to="mobilephones">Mobile Phones</NavLink>
          </li>
          <li>
            <NavLink to="smartwatches">Smart Watches</NavLink>
          </li>
          <li>
            <NavLink to="smarttv">Smart TV</NavLink>
          </li>
          <li>
            <NavLink to="headphone">Head Phones</NavLink>
          </li>
        </ul>
      </div>

      <li className="hover:text-custom_white">
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
      <li className="hover:text-custom_white">
        <NavLink to="/shop">Shop</NavLink>
      </li>
      {/* <li className="hover:text-custom_white">
        <NavLink to="/blog">Blog</NavLink>
      </li> */}
      <li className="hover:text-custom_white">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="hover:text-custom_white">
        <NavLink to="/faqpage">Faq Page</NavLink>
      </li>
      <li className="hover:text-custom_white">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="hover:text-custom_white">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="hover:text-custom_white">
        <NavLink to="/Dashboard">Dashboard</NavLink>
      </li>
      <li className="hover:text-custom_white">
        <NavLink className="text-xl" to="/cart">
          <FaCartShopping />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-custom_yellow">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img src={tow} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div>
          <p className="mx-5">{user && <span>{user.email}</span>}</p>
        </div>

        {user ? (
          <p
            onClick={handleSignOut}
            className="bg-custom_blue rounded py-2 px-6 inline text-xl cursor-pointer "
          >
            Sign Out
          </p>
        ) : (
          <Link to="/login">
            <p className="cursor-pointer bg-custom_blue rounded py-2 px-6 inline text-xl ">
              Login
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
