import React from "react";
import "../styles/Inspirations.css";

// Import city card images
import NashvilleImage from "../assets/inspiration-images/Nashville.png";
import SouthHavenImage from "../assets/inspiration-images/Bufallo.png";
import StantonImage from "../assets/inspiration-images/Stanton.png";
import NewBuffaloImage from "../assets/inspiration-images/Bufallo.png";
//import gift car images
import GiftCardImage from "../assets/inspiration-images/giftcard.png";
const Inspirations = () => {
  const cityData = [
    { name: "Nashville", distance: "53 miles away", image: NashvilleImage },
    { name: "South Haven", distance: "168 miles away", image: SouthHavenImage },
    { name: "Stanton", distance: "192 miles away", image: StantonImage },
    { name: "New Buffalo", distance: "130 miles away", image: NewBuffaloImage },
    ];
     const tabs = [
       "Destinations for arts & culture",
       "Destinations for outdoor adventure",
       "Mountain cabins",
       "Beach destinations",
       "Popular destinations",
       "Unique Stays",
     ];
    const destinations = [
      { city: "Phoenix", region: "Arizona" },
      { city: "Hot Springs", region: "Arkansas" },
      { city: "Los Angeles", region: "California" },
      { city: "San Diego", region: "California" },
      { city: "San Francisco", region: "California" },
      { city: "Barcelona", region: "Catalonia" },
      { city: "Prague", region: "Czechia" },
      { city: "Washington", region: "District of Columbia" },
      { city: "Keswick", region: "England" },
      { city: "London", region: "England" },
      { city: "Scarborough", region: "England" },
    ];


  return (
    <div className="section-2">
      <div className="inspirations-container">
        <h2 className="inspirations-title">Inspiration for your next trip</h2>
        <div className="inspirations-grid">
          {cityData.map((city, index) => (
            <div key={index} className="city-card">
              <img src={city.image} alt={city.name} className="city-image" />
              <div className="city-info">
                <h3 className="city-name">{city.name}</h3>
                <p className="city-distance">{city.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Experiences Section */}
      <div className="experiences-container">
        <p className="experiences-title">Discover Airbnb Experiences</p>
        <div className="experiences-grid">
          {/* Experience 1 */}
          <div className="experience-card-1">
            <div className="experience-text">
              <p>Things to do on your trip</p>
              <button className="experience-button">Experiences</button>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="experience-card-2">
            <div className="experience-text">
              <p>Things to do on your trip</p>
              <button className="experience-button">Experiences</button>
            </div>
          </div>
        </div>
      </div>
      {/* Gift card section */}
      <div className="gift-card-section">
        <div className="gift-card-text">
          <p>Shop Airbnb gift cards</p>
          <button className="learn-more-button">Learn more</button>
        </div>
        <div className="gift-card-images">
          <img
            src={GiftCardImage}
            alt="Gift Card 1"
            className="gift-card-image"
          />
        </div>
      </div>

      {/* questions about hosting section  */}
      <div className="question-section">
        <div className="question-text">
          <p className="ask-text"> Questions about hosting?</p>
          <button className="ask-button">Ask a Superhost</button>
        </div>
      </div>
      {/* Prefooter-section */}
      <div className="pre-footer-section">
        <div className="prefooter-header">
          <h3 className="prefooter-title"> Inspiration for future getaways</h3>
          {/* Tabs Section */}

          <div className="pre-footer-tabs">
            <ul className="tabs-list">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`tab-item ${index === 0 ? "active" : ""}`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pre-footer-grid">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-item">
              <h4>{destination.city}</h4>
              <p>{destination.region}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspirations;
