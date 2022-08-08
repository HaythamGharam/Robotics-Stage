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
            <h4>Site Map</h4> <br />
            <ul>
              <Link to="/" className="site-nav">
                <i className="fas fa-home"></i>
                &nbsp;Home
              </Link>
              <br />
              <Link to="/" className="site-nav ">
                <i className="fas fa-laptop-code"></i>
                Workshops
              </Link>
              <br />
              <Link to="/" className="site-nav ">
              <i className="fas fa-calendar"></i>
                &nbsp;Events
              </Link>
              <br />
              <Link to="/about" className="site-nav">
                <i className="fas fa-info-circle"></i>
                &nbsp;About Us
              </Link>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col contact">
            <h4>Contact</h4> <br />
            <ul>
              <li className="pl-1">
                <i className="fas fa-map-pin"></i>
                <span className="pl-3">
                  Mharza Road 1.5km Sfax, Tunisia.
                </span>
              </li>
              <br />
              <li>
                <i className="fas fa-phone"></i>
                <span className="pl-2">+216 52 019 004</span>
              </li>
              <br />
              <li>
                <i className="fas fa-at"></i>{" "}
                <span className="pl-2">club.robotique.iit@gmail.com</span>
              </li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col socials">
            <h4>Socials</h4> <br />
            <ul>
              <a href="https://www.facebook.com/IITRoboticsCLUB/" target="_blank">
                <i className="fab fa-facebook-square"></i>
                <span className="pl-2">Facebook</span>
              </a>
              <br />
              <br />
              <a href="https://www.instagram.com/IITRoboticsCLUB/" target="_blank">
                <i className="fab fa-instagram"></i>
                <span className="pl-2">Instagram</span>
              </a>
              
            </ul>
          </div>
        </div>
        <div className="row2">
          <p className="copyright">
            IIT Robotics CLUB &copy;, All Right Reserved - by Haytham Gharam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
