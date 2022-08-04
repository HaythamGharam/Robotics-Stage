import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import {} from "./navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 rounded">
      <div className="container absolute flex flex-wrap justify-between items-center mx-auto h-20">
        <a href="/Home" className="cursor-pointer flex logo p-1 md:m-auto">
          <img src={logo} alt="logo" />
        </a>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-16 md:mt-0 md:text-xl md:font-medium md:border-0 ">
            <li>
              <a
                href="/Home"
                className="block py-2 pr-4 pl-3 text-dark-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="block py-2 pr-4 pl-3 text-dark-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Activities"
                className="block py-2 pr-4 pl-3 text-dark-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Activities
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="block py-2 pr-4 pl-3 text-dark-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
