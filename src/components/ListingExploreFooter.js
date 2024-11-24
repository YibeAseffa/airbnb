import React from "react";
import "../styles/ListingExploreFooter.css";

const ListingExploreFooter = () => {
  return (
    <div className="explore-footer-section">
      {/* Explore Other Options */}
      <h2 className="explore-title">Explore other options in France</h2>
      <div className="columns">
        <div className="column">
          <span>Paris</span>
          <span>Lille</span>
          <span>Toulouse</span>
        </div>
        <div className="column">
          <span>Nice</span>
          <span>Aix-en-Provence</span>
          <span>Montpellier</span>
        </div>
        <div className="column">
          <span>Lyon</span>
          <span>Rouen</span>
          <span>Dijon</span>
        </div>
        <div className="column">
          <span>Marseille</span>
          <span>Amiens</span>
          <span>Grenoble</span>
        </div>
      </div>

      {/* Unique Stays */}
      <h3 className="unique-title">Unique stays on Airbnb</h3>
      <div className="columns">
        <div className="column">
          <span>Beach House Rentals</span>
          <span>Cabin Rentals</span>
        </div>
        <div className="column">
          <span>Camper Rentals</span>
          <span>Tiny House Rentals</span>
        </div>
        <div className="column">
          <span>Glamping Rentals</span>
          <span>Lakehouse Rentals</span>
        </div>
        <div className="column">
          <span>Treehouse Rentals</span>
          <span>Mountain Chalet Rentals</span>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-navigation">
        <span className="breadcrumb-item">Airbnb</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item">Europe</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item">France</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item">Bordeaux</span>
      </div>
    </div>
  );
};

export default ListingExploreFooter;
