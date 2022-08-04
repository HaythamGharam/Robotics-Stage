import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import {} from "./navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 rounded flex justify-center">
      <div className="container absolute flex flex-wrap justify-between items-center mx-auto h-20">
        <Link to="/Home" className="cursor-pointer flex logo p-1">
          <img src={logo} alt="logo" />
        </Link>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-16 md:mt-0 md:text-xl md:font-medium md:border-0 ">
            <li>
              <Link
                to="/Home"
                className="block text-dark-700 rounded h-auto w-auto hover:bg-pink-400 md:border-0 md:hover:text-slate-100 md:p-3"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block text-dark-700 rounded h-auto w-auto hover:bg-pink-400 md:border-0 md:hover:text-slate-100 md:p-3"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Activities"
                className="block text-dark-700 rounded h-auto w-auto hover:bg-pink-400 md:border-0 md:hover:text-slate-100 md:p-3"
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="block text-dark-700 rounded h-auto w-auto hover:bg-pink-400 md:border-0 md:hover:text-slate-100 md:p-3"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
