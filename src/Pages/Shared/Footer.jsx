import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-custom_gray_text text-custom_gray_color">
      <footer className="footer py-10 md:py-10 lg:py-10 px-2 max-w-7xl mx-auto">
        <nav>
          <header className="footer-title">Branch -1</header>
          <p>Shop 248,249,250 #Level 2, Computer City Center</p>
          <p>
            Support:
            <span className="link link-hover"> sova@tech.com</span>
          </p>
          <p>
            Support:
            <span className="link link-hover"> 015xxxxxxxx</span>
            <span className="link link-hover"> 015xxxxxxxx</span>
          </p>

          <p>(Available : Sat - Thu, 10:00 AM to 5:00 PM)</p>
        </nav>
        <nav>
          <header className="footer-title">Branch -2</header>
          <p>Shop 1410 #Level 14, Computer City Center</p>
          <p>
            Support:
            <span className="link link-hover"> sova@tech.com</span>
          </p>
          <p>
            Support:
            <span className="link link-hover"> 015xxxxxxxx</span>
            <span className="link link-hover"> 015xxxxxxxx</span>
          </p>

          <p>(Available : Sat - Thu, 10:00 AM to 5:00 PM)</p>
        </nav>
        <nav>
          <header className="footer-title">Useful Links</header>
          <p className="link link-hover">
            <Link to="/about">About us</Link>
          </p>
          <a className="link link-hover">
            <Link to="/contact">Contact</Link>
          </a>
          <a className="link link-hover">
            <Link to="/shop">Shop</Link>
          </a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-custom_gray_color text-custom_gray border-t-2 p-4">
        <aside>
          <p> © Copy 2023. All Rights Reserved </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
