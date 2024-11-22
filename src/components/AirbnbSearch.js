import React from "react";
import "../styles/AirbnbSearch.css";
import { FaSearch } from "react-icons/fa";

const AirbnbSearch = () => {
  return (
    <div className="airbnb-search">
      <div className="search-section">
        <div className="search-field">
          <label>Location</label>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="search-field">
          <label>Check in</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="search-field">
          <label>Check out</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="search-field">
          <label>Guests</label>
          <input type="text" placeholder="Add guests" />
        </div>
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default AirbnbSearch;
