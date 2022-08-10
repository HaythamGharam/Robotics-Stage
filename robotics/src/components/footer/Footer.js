import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="nav-map">
            <h1 className="font-bold footer-title">Site Map</h1> <br />
            <ul>
              <Link to="/" className="site-nav">
                <i className="fas fa-home"></i>
                <span className="font-semibold pl-3">Home</span>
              </Link>
              <br />
              <Link to="/" className="site-nav ">
                <i className="fas fa-laptop-code"></i>
                <span className="font-semibold pl-2">Workshops</span>
              </Link>
              <br />
              <Link to="/" className="site-nav ">
              <i className="fas fa-calendar"></i>
                <span className="font-semibold pl-3">Events</span>
              </Link>
              <br />
              <Link to="/about" className="site-nav">
                <i className="fas fa-info-circle"></i>
                <span className="font-semibold pl-3">About Us</span>
              </Link>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col contact">
            <h1 className="font-bold footer-title">Contact</h1> <br />
            <ul>
              <li className="pl-1">
                <i className="fas fa-map-pin"></i>
                <span className="pl-4 font-semibold">
                  Mharza Road 1.5km Sfax, Tunisia.
                </span>
              </li>
              <br />
              <li>
                <i className="fas fa-phone"></i>
                <span className="pl-2 font-semibold">+216 52 019 004</span>
              </li>
              <br />
              <li>
                <i className="fas fa-at"></i>{" "}
                <span className="pl-2 font-semibold">club.robotique.iit@gmail.com</span>
              </li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col socials">
            <h1 className="font-bold footer-title">Socials</h1 > <br />
            <ul>
              <a href="https://www.facebook.com/IITRoboticsCLUB/" target="_blank">
                <i className="fab fa-facebook-square"></i>
                <span className="pl-2 font-semibold">Facebook</span>
              </a>
              <br />
              <br />
              <a href="https://www.instagram.com/IITRoboticsCLUB/" target="_blank">
                <i className="fab fa-instagram"></i>
                <span className="pl-2 font-semibold">Instagram</span>
              </a>
              
            </ul>
          </div>
        </div>
        <div className="row2">
          <p className="copyright font-bold">
            IIT Robotics CLUB &copy;, All Right Reserved - by Haytham Gharam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
