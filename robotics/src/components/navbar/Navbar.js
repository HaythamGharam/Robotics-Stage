import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import {} from "./navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className={click ? "navbar-clicked navbar" : "navbar"}>
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="IIT Robotics Club" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Activities <i className="fas fa-caret-down hideit" />
            </Link>
            {dropdown && <Dropdown onClick={onMouseLeave} />}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

//   const [click, setClick] = useState(false)

//   const handleClick = () => setClick (!click)

//   return (
//     <nav className="bg-white border-gray-200 px-2 sm:px-4 rounded flex justify-center dark:bg-gray-900">
//       <div className={click ? "container absolute flex flex-wrap justify-between items-center mx-full h-20 md:bg-transparent bg-sky-400" : "container absolute flex flex-wrap justify-between items-center mx-auto h-20 md:bg-transparent"}>
//         <Link to="/Home" className="cursor-pointer flex logo p-1">
//           <img src={logo} alt="logo" />
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={click ? 'fas fa-times color-' : 'fas fa-bars'}></i>
//         </div>
//         <div className={ click ? 'w-full md:block md:w-auto' : 'hidden md:block md:w-auto'}>
//           <ul className="flex flex-col p-4 rounded-lg md:flex-row md:space-x-16 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-transparent bg-sky-400">
//             <li>
//               <Link
//                 to="/Home"
//                 className="block py-2 pr-4 pl-3 text-dark-700 rounded text-center h-auto w-auto hover:bg-sky-100 md:border-0 md:p-3 "
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/About"
//                 className="block py-2 pr-4 pl-3 text-dark-700 rounded text-center h-auto w-auto hover:bg-sky-100 md:border-0 md:p-3"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Activities"
//                 className="block py-2 pr-4 pl-3 text-dark-700 rounded text-center h-auto w-auto hover:bg-sky-100 md:border-0 md:p-3"
//               >
//                 Activities
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Contact"
//                 className="block py-2 pr-4 pl-3 text-dark-700 rounded text-center h-auto w-auto hover:bg-sky-100 md:border-0 md:p-3"
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
