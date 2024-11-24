import React from "react";
import Navbar from "./Navbar"; // Already implemented Navbar component
import AirbnbSearch from "./AirbnbSearch"; // Already implemented Search component
import "../styles/Homepage.css";
import BigCardImage from "../assets/airbn-home-backgrd.PNG";
import Inspirations from "./Inspirations";
import AirbnbFooter from "./AirbnbFooter";



const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="section-1">
        {/* Navbar */}
        <Navbar />
        {/* Search Bar */}
        <AirbnbSearch />
        {/* Big Card Section */}

        <div className="frame-section">
          <div className="big-card">
            <img
              src={BigCardImage}
              alt="Modern House"
              className="big-card-image"
            />
            <div className="big-card-content">
              <h1>Not sure where to go? Perfect.</h1>
              <button className="big-card-button">I’m flexible</button>
            </div>
          </div>
        </div>
      </div>
      
        <Inspirations />
     
      <AirbnbFooter />
    </div>
  );
};

export default Homepage;
