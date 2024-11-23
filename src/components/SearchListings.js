import React from "react";
import "../styles/SearchListings.css";
import { FaRegHeart } from "react-icons/fa";
//Import static images from local storage
import map from "../assets/map.PNG";
import list1image from "../assets/list1.PNG";
import list2image from "../assets/list2.PNG";
import list3image from "../assets/list3.PNG";
const SearchListings = () => {
  //Example of search result listings can be fetched using api
  const listings = [
    {
      id: 1,
      title: "Bordeaux Getaway",
      description:
        "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      price: "$325 / night",
      rating: "5.0",
      reviews: "318",
      image: list1image, // can use own image here
    },
    {
      id: 2,
      title: "Charming Waterfront Condo",
      description:
        "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      price: "$200 / night",
      rating: "5.0",
      reviews: "318",
      image: list2image, // can use own image here
    },
    {
      id: 3,
      title: "Historic City Center Home",
      description:
        "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      price: "$250 / night",
      rating: "4.8",
      reviews: "198",
      image: list3image, // can use own image here
    },
  ];
  return (
    <div className="search-listings-container">
      <div className="listings-section">
        <h2>200+ stays in Bordeaux</h2>
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img
              src={listing.image}
              alt={listing.title}
              className="listing-image"
            />
            <div className="listing-info">
              <div className="listing-header">
                <p className="subtitle">
                  Entire home in Brodeux
                  <FaRegHeart className="heart-icon" />
                </p>
              </div>
              <h3 className="listing-title">{listing.title}</h3>

              <p className="description">{listing.description}</p>
              <div className="listing-footer">
                <span className="rating">
                  ⭐ {listing.rating} ({listing.reviews} reviews)
                </span>
                <span className="price">{listing.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="map-section">
        <img
          src={map} //map image from local storage, use api Here
          alt="Map Placeholder"
          className="map-image"
        />
      </div>
    </div>
  );
};

export default SearchListings;
