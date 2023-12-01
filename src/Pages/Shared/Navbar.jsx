import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import tow from "../../assets/logo/tow.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:text-custom_white">
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li className="hover:text-custom_white">
        <NavLink to="/category">Category</NavLink>
      </li> */}
      <div className="dropdown dropdown-end">
        {/* <div tabIndex={0} role="button">
          Dropdown
        </div> */}
        <li tabIndex={0} role="button" className="hover:text-custom_white">
          <li>Category</li>
        </li>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <a>Mobile Phones</a>
          </li>
          <li>
            <a>Smart Watches</a>
          </li>
          <li>
            <a>Smart TVs</a>
          </li>
          <li>
            <a>Head Phones</a>
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
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
