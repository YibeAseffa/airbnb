import React from "react";
import { FaSearch, FaBars, FaUserCircle, FaGlobe } from "react-icons/fa";
import "../styles/AirbnbListingNavBar.css";


const AirbnbListingNavBar = () => {
  return (
    <nav className="airbnb-listing-navbar">
      {/* Left Section: Logo */}
      <div className="navbar-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="Airbnb Logo"
          className="navbar-logo"
        />
      </div>

      {/* Center Section: Search Bar */}
      <div className="navbar-center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Start your search"
            className="search-input"
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <span className="host-link">Become a Host</span>
        <FaGlobe className="icon globe-icon" />
        <div className="profile-dropdown">
          <FaBars className="icon bars-icon" />
          <FaUserCircle className="icon user-icon" />
        </div>
      </div>
    </nav>
  );
};

export default AirbnbListingNavBar;
