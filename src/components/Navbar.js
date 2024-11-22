import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaUserCircle } from "react-icons/fa";
import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Fixed Logo Section */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
            alt="Airbnb Logo"
            className="logo"
          />
        </Link>
      </div>

      {/* Pages Section */}
      <div className="navbar-pages">
        <Link to="/places-to-stay">Places to stay</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/online-experiences">Online Experiences</Link>
      </div>

      {/* Fixed Right Section */}
      <div className="navbar-right">
        <Link to="/host" className="host-link">
          Become a Host
        </Link>
        <FaGlobe className="icon globe-icon" />
        <FaUserCircle className="icon user-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
