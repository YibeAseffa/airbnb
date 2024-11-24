import React from "react";
import "../styles/ListingReviews.css";
import AvatarImage from "../assets/avatar.png"

const ListingReviews = () => {
  // Static data for reviews
  const reviews = [
    {
      name: "Jose",
      date: "December 2021",
      comment: "Host was very attentive.",
      image: AvatarImage, // Replace with your local image path
    },
    {
      name: "Shayna",
      date: "December 2021",
      comment:
        "Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...",
      image: AvatarImage,
    },
    {
      name: "Vladko",
      date: "November 2020",
      comment:
        "This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.",
      image: AvatarImage,
    },
    {
      name: "Luke",
      date: "December 2021",
      comment: "Nice place to stay!",
      image: AvatarImage,
    },
    {
      name: "Josh",
      date: "November 2021",
      comment:
        "Well designed and fun space, neighborhood has lots of energy and amenities.",
      image: AvatarImage,
    },
    {
      name: "Jennifer",
      date: "January 2022",
      comment:
        "A centric place, near of a sub station and a supermarket with everything you need...",
      image: AvatarImage,
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

    return (
      
    <div className="listing-reviews">
      <h2 className="review-header">
        <span className="review-star-icon">★</span>
        <span className="review-score">5.0</span>
        <span className="review-divider">·</span>
        <span className="review-count">7 reviews</span>
      </h2>

      {/* Ratings Section */}
      {/* First Column */}
      <div className="ratings-container">
        <div className="ratings-column">
          {ratings
            .slice(0, Math.ceil(ratings.length / 2))
            .map((rating, index) => (
              <div key={index} className="rating-item">
                <span className="rating-title">{rating.title}</span>
                <div className="rating-bar">
                  <div
                    className="rating-bar-fill"
                    style={{ width: `${rating.value * 20}%` }}
                  ></div>
                </div>
                <span className="rating-value">{rating.value.toFixed(1)}</span>
              </div>
            ))}
        </div>

        {/* Second Column */}
        <div className="ratings-column">
          {ratings.slice(Math.ceil(ratings.length / 2)).map((rating, index) => (
            <div key={index} className="rating-item">
              <span className="rating-title">{rating.title}</span>
              <div className="rating-bar">
                <div
                  className="rating-bar-fill"
                  style={{ width: `${rating.value * 20}%` }}
                ></div>
              </div>
              <span className="rating-value">{rating.value.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-container">
        {/* First Row */}
        <div className="reviews-row">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="review-item">
              <div className="comment-review-header">
                <img
                  className="reviewer-image"
                  src={review.image}
                  alt={`${review.name}'s avatar`}
                />
                <div className="reviewer-info">
                  <span className="review-name">{review.name}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <p className="review-comment">
                {review.comment}
                {review.showMore && (
                  <span className="show-more"> Show more ›</span>
                )}
              </p>
            </div>
          ))}
        </div>
        {/* Second Row */}
        <div className="reviews-row">
          {reviews.slice(3, 6).map((review, index) => (
            <div key={index} className="review-item">
              <div className="comment-review-header">
                <img
                  className="reviewer-image"
                  src={review.image}
                  alt={`${review.name}'s avatar`}
                />
                <div className="reviewer-info">
                  <span className="review-name">{review.name}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <p className="review-comment">
                {review.comment}
                {review.showMore && (
                  <span className="show-more"> Show more ›</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button className="show-all-reviews-btn">Show all 12 reviews</button>
    </div>
  );
};

export default ListingReviews;
