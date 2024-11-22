import React from "react";
import "../styles/NavBarStandardSearch.css";
import {
  FaSearch,
  FaBars,
  FaUserCircle,
  FaGlobe,
  FaFilter,
} from "react-icons/fa";

const NavBarStandardSearch = () => {
  const filters = [
    "Price",
    "Type of place",
    "Free cancellation",
    "Wifi",
    "Kitchen",
    "Air conditioning",
    "Washer",
    "Iron",
    "Dedicated workspace",
    "Free parking",
    "Dryer",
  ];

  return (
    <div className="navbar-standard-search-wrapper">
      {/* Navbar */}
      <nav className="navbar-standard-search">
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
            <div className="search-field">
              <span>Bordeaux</span>
            </div>
            <div className="divider" />
            <div className="search-field">
              <span>Feb 19–26</span>
            </div>
            <div className="divider" />
            <div className="search-field">
              <span>2 guests</span>
            </div>
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <span className="host-link">Become a Host</span>
          <FaGlobe className="icon globe-icon" />
          <FaBars className="icon bars-icon" />
          <FaUserCircle className="icon user-icon" />
        </div>
      </nav>

      {/* Filters Section */}
      <div className="filters-container">
        {filters.map((filter, index) => (
          <button key={index} className="filter-button">
            {filter}
          </button>
        ))}
        <button className="filter-button filter-icon">
          <FaFilter />
          Filters
        </button>
      </div>
    </div>
  );
};

export default NavBarStandardSearch;
