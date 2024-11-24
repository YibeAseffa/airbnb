import React from "react";
import "../styles/ListingContents.css";
import AvatarImage from "../assets/avatar.png";
import bedroom from "../assets/bedroom.png";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

import {
  FaStar,
  FaRegFlag,
  FaHome,
  FaKey,
  FaCalendarAlt,
  FaBroom,
  FaLeaf,
  FaWifi,
  FaRegDotCircle,
  FaWind,
  FaEgg,
  FaBone,
  FaHotTub,
  FaCamera,
  FaBicycle,
  FaKeyboard,

} from "react-icons/fa"; // Use Font Awesome icons

const ListingContents = () => {
  // Static data for reviews
  const reviews = [
    {
      name: "Jose",
      date: "December 2021",
      comment: "Host was very attentive.",
      image: "/assets/reviewers/jose.jpg", // Replace with your local image path
    },
    {
      name: "Shayna",
      date: "December 2021",
      comment:
        "Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...",
      image: "/assets/reviewers/shayna.jpg",
    },
    {
      name: "Vladko",
      date: "November 2020",
      comment:
        "This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.",
      image: "/assets/reviewers/vladko.jpg",
    },
    {
      name: "Luke",
      date: "December 2021",
      comment: "Nice place to stay!",
      image: "/assets/reviewers/luke.jpg",
    },
    {
      name: "Josh",
      date: "November 2021",
      comment:
        "Well designed and fun space, neighborhood has lots of energy and amenities.",
      image: "/assets/reviewers/josh.jpg",
    },
    {
      name: "Jennifer",
      date: "January 2022",
      comment:
        "A centric place, near of a sub station and a supermarket with everything you need...",
      image: "/assets/reviewers/jennifer.jpg",
    },
  ];

  const ratings = [
    { title: "Cleanliness", value: 5.0 },
    { title: "Communication", value: 5.0 },
    { title: "Check-in", value: 5.0 },
    { title: "Accuracy", value: 5.0 },
    { title: "Location", value: 4.9 },
    { title: "Value", value: 4.7 },
  ];

  const startDate = new Date(2022, 1, 4); // February 4, 2022
  const endDate = new Date(2022, 1, 10); // February 10, 2022
  return (
    <div className="listing-contents-container">
      {/* Left Section */}
      <div className="listing-contents-left">
        <div className="header-container">
          {/* Left Side: Title and Details */}
          <div className="header-left">
            <h2 className="listing-title">
              Entire rental unit hosted by Ghazal
            </h2>
            <p className="listing-subtitle">
              2 guests · 1 bedroom · 1 bed · 1 bath
            </p>
          </div>

          {/* Right Side: Host Profile */}
          <div className="header-right">
            <img
              src={AvatarImage} // Replace with actual profile image path
              alt="Host Profile"
              className="host-profile-image"
            />
          </div>
        </div>

        {/* Detail Section */}
        <div className="details-section">
          <ul className="details-list">
            <li>
              <FaHome className="detail-icon" />
              <div>
                <h4>Entire home</h4>
                <p>You’ll have the apartment to yourself</p>
              </div>
            </li>
            <li>
              <FaBroom className="detail-icon" />
              <div>
                <h4>Enhanced Clean</h4>
                <p>
                  This Host committed to Airbnb’s 5-step enhanced cleaning
                  process. <a href="#">Show more</a>
                </p>
              </div>
            </li>
            <li>
              <FaKey className="detail-icon" />
              <div>
                <h4>Self check-in</h4>
                <p>Check yourself in with the keypad.</p>
              </div>
            </li>
            <li>
              <FaCalendarAlt className="detail-icon" />
              <div>
                <h4>Free cancellation before Feb 14</h4>
              </div>
            </li>
          </ul>
        </div>
        <hr className="section-divider" />
        {/* Description */}
        <p className="description">
          Come and stay in this superb duplex T2, in the heart of the historic
          center of Bordeaux. Spacious and bright, in a real Bordeaux building
          in exposed stone, you will enjoy all the charms of the city thanks to
          its ideal location. Close to many shops, bars, and restaurants, you
          can access the apartment by tram A and C and bus routes 27 and 44.
          <a href="#"> Show more</a>
        </p>
        <hr className="section-divider" />
        {/* Where You'll Sleep Section */}
        <div className="where-youll-sleep-section">
          <h2 className="section-title">Where you'll sleep</h2>
          <div className="sleeping-arrangement">
            <img
              src={bedroom} // Replace with actual image path
              alt="Bedroom"
              className="sleeping-image"
            />
            <div className="sleeping-details">
              <h4 className="bedroom-title">Bedroom</h4>
              <p className="bed-details">1 queen bed</p>
            </div>
          </div>
        </div>
        <hr className="section-divider" />
        {/* What this place offers Section */}
        <div className="what-place-offers">
          <h2 className="section-title">What this place offers</h2>
          <div className="amenities-grid">
            <div className="amenity-item">
              <FaLeaf className="amenity-icon" /> Garden view
            </div>
            <div className="amenity-item">
              <FaWifi className="amenity-icon" /> Wifi
            </div>
            <div className="amenity-item">
              <FaRegDotCircle className="amenity-icon" /> Free washer - in
              building
            </div>
            <div className="amenity-item">
              <FaWind className="amenity-icon" /> Central air conditioning
            </div>
            <div className="amenity-item">
              <FaEgg className="amenity-icon" /> Refrigerator
            </div>
            <div className="amenity-item">
              <FaEgg className="amenity-icon" /> Kitchen
            </div>
            <div className="amenity-item">
              <FaBone className="amenity-icon" /> Pets allowed
            </div>
            <div className="amenity-item">
              <FaHotTub className="amenity-icon" />
              Dryer
            </div>
            <div className="amenity-item">
              <FaCamera className="amenity-icon" />
              Security cameras on property
            </div>
            <div className="amenity-item">
              <FaBicycle className="amenity-icon" /> Bicycles
            </div>
          </div>
          <button className="show-all-amenities-btn">
            Show all 37 amenities
          </button>
        </div>
        <hr className="section-divider" />
        {/* Static Calendar Section */}
        <div className="calendar-section">
          <h2 className="section-title">7 nights in New York</h2>
          <p className="subtitle">Feb 19, 2022 - Feb 26, 2022</p>
          <div className="calendars-wrapper">
            {/* Left Calendar */}
            <Calendar
              value={[startDate, endDate]} // Preselected range for example
              className="calendar"
            />

            {/* Right Calendar */}
            <Calendar
              value={[startDate, endDate]} // Replicate the same dates for now
              className="calendar"
            />
          </div>
          <div className="calendar-footer">
            <FaKeyboard className="calendar-keyboard" />
            <p className="calendar-clear">Clear dates</p>
          </div>
        </div>
        <hr className="section-divider" />
      </div>

      {/* Pricing Card Section */}
      <div className="pricing-card-container">
        {/* Pricing Header */}
        <div className="pricing-header">
          <h2 className="price">
            $75 <span className="per-night">/ night</span>
          </h2>
          <div className="rating">
            <FaStar className="star-icon" />
            <span>5.0</span>
            <a href="#" className="reviews">
              · 7 reviews
            </a>
          </div>
        </div>

        {/* Reservation Form */}
        <form className="reservation-form">
          <div className="form-grid">
            <div className="form-row">
              <label>CHECK-IN</label>
              <input type="date" defaultValue="2022-02-19" />
            </div>
            <div className="form-row">
              <label>CHECKOUT</label>
              <input type="date" defaultValue="2022-02-26" />
            </div>
          </div>
          <div className="form-row">
            <label>GUESTS</label>
            <select>
              <option>2 guests</option>
            </select>
          </div>
          <button type="submit" className="reserve-button">
            Reserve
          </button>
          <p className="reservation-note">You won’t be charged yet</p>
        </form>

        {/* Pricing Breakdown */}
        <div className="pricing-details">
          <p>
            $79 × 7 nights <span>$555</span>
          </p>
          <p>
            Weekly discount <span>-$28</span>
          </p>
          <p>
            Cleaning fee <span>$62</span>
          </p>
          <p>
            Service fee <span>$83</span>
          </p>
          <p>
            Occupancy taxes and fees <span>$29</span>
          </p>
          <p className="total">
            Total <span>$701</span>
          </p>
        </div>

        {/* Footer Link */}
        <p className="report-link">
          <a href="#">
            {" "}
            <FaRegFlag className="report-icon" />
            Report this listing
          </a>
        </p>
      </div>
    </div>
  );
};

export default ListingContents;
