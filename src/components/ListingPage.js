import React from "react";
import { FaStar, FaRegHeart,  FaRegShareSquare } from "react-icons/fa";
import "../styles/ListingPage.css";
// Import images from the assets folder
import LivingRoomImage from "../assets/grid-images/living-room.png";
import DiningAreaImage from "../assets/grid-images/dining-area.png";
import KitchenImage from "../assets/grid-images/kitchen.png";
import DiningAreaImage2 from "../assets/grid-images/dining-area2.png";
import ViewImage from "../assets/grid-images/view.png";
import MapImage from "../assets/map.PNG";
import AvatarImage from "../assets/avatar.png";
import ListingContents from "./ListingContents";
import ListingReviews from "./ListingReviews ";
import ListingExploreFooter from "./ListingExploreFooter";
import AirbnbFooter from "./AirbnbFooter";

const ListingPage = () => {
    const images = [
      {
        id: 1,
        src: LivingRoomImage,
        alt: "Living room",
      },
      {
        id: 2,
        src: DiningAreaImage,
        alt: "Dining area",
      },
      {
        id: 3,
        src: KitchenImage,
        alt: "Kitchen",
      },
      {
        id: 4,
        src: DiningAreaImage2,
        alt: "Bedroom",
      },
      {
        id: 5,
        src: ViewImage,
        alt: "View from window",
      },
    ];

  const thingsToKnow = {
  houseRules: [
    { icon: "⏰", text: "Check-in: After 4:00 PM" },
    { icon: "⏰", text: "Checkout: 10:00 AM" },
    { icon: "🔑", text: "Self check-in with lockbox" },
    { icon: "👶", text: "Not suitable for infants (under 2 years)" },
    { icon: "🚭", text: "No smoking" },
    { icon: "🐾", text: "No pets" },
    { icon: "🎉", text: "No parties or events" },
  ],
  healthAndSafety: [
    {
      icon: "✨",
      text: "Committed to Airbnb’s enhanced cleaning process. Show more",
    },
    {
      icon: "👩‍⚕️",
      text: "Airbnb's social-distancing and other COVID-19-related guidelines apply",
    },
    { icon: "🛑", text: "Carbon monoxide alarm" },
    { icon: "🚨", text: "Smoke alarm" },
    {
      icon: "💵",
      text: "Security Deposit - if you damage the home, you may be charged up to $566",
    },
  ],
  cancellationPolicy: [
    { text: "Free cancellation before Feb 14" },
  ],
};

  return (
    <div className="listing-page-container">
      {/* Header Section */}
      <header className="listing-page-header">
        {/* Left Side: Title and Details */}
        <div className="header-left">
          <h1 className="listing-title">Bordeaux Getaway</h1>
          <div className="listing-details">
            <span className="rating">
              <FaStar className="star-icon" /> 5.0
            </span>
            <span className="reviews">· 7 reviews</span>
            <span className="superhost">· Superhost</span>
            <span className="location">
              · <a href="#">Bordeaux, France</a>
            </span>
          </div>
        </div>

        {/* Right Side: Share and Save */}
        <div className="header-right">
          <p className="action-text">
            <FaRegShareSquare className="action-icon" /> Share
          </p>
          <p className="action-text">
            <FaRegHeart className="action-icon" /> Save
          </p>
        </div>
      </header>
      {/* Image Grid Section */}
      <div className="image-grid-container">
        {/* Main Large Image */}
        <div className="main-image">
          <img src={images[0].src} alt={images[0].alt} />
        </div>

        {/* Smaller Grid Images */}
        <div className="small-images">
          {images.slice(1).map((image) => (
            <div key={image.id} className="small-image-wrapper">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        {/* Show All Photos Button */}
        <button className="show-all-photos-btn">Show all photos</button>
      </div>

      {/* Listing Contents */}
      <ListingContents />

      {/* Reviews Section */}
      <ListingReviews />

      <hr className="section-divider" />

      {/* Where You'll Be Section */}
      <div className="where-youll-be-section">
        {/* Section Title */}
        <h2 className="section-title">Where you'll be</h2>

        {/* Map Container */}
        <div className="map-container">
          <img src={MapImage} alt="Map of Bordeaux" className="map-image" />
        </div>

        {/* Location Description */}
        <div className="location-description">
          <h3>Bordeaux, Nouvelle-Aquitaine, France</h3>
          <p>
            Very dynamic and appreciated district by the people of Bordeaux
            thanks to rue St James and place Fernand Lafargue. Home to many
            historical monuments such as the Grosse Cloche, the Porte de
            Bourgogne and the Porte Cailhau, and cultural sites such as the
            Aquitaine Museum.
          </p>
          <span className="show-more">Show more ›</span>
        </div>
      </div>
      <hr className="section-divider" />
      <div className="hosted-by-section">
        {/* Host Information */}
        <div className="host-info">
          <img
            className="host-avatar"
            src={AvatarImage} // Replace with the host's profile image
            alt="Host Avatar"
          />
          <div>
            <h3 className="host-name">Hosted by Ghazal</h3>
            <p className="host-joined">Joined May 2021</p>
          </div>
        </div>

        {/* Host Badges */}
        <div className="host-badges">
          <span className="badge">
            <span className="icon">⭐</span> 12 Reviews
          </span>
          <span className="badge">
            <span className="icon">✔</span> Identity verified
          </span>
          <span className="badge">
            <span className="icon">🏆</span> Superhost
          </span>
        </div>

        {/* Host Description */}
        <div className="host-description">
          <p className="description-title">Ghazal is a Superhost.</p>
          <p className="host-description-body">
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </p>

          {/* Response Info */}
          <p className="host-response-rate">Response rate:100% </p>
          <p className="host-response-time">Response time: within an hour</p>
        </div>

        {/* Contact Button */}
        <button className="contact-host-btn">Contact Host</button>

        {/* Security Disclaimer */}
        <div className="security-disclaimer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 20.5C5 20.6326 4.94732 20.7598 4.85355 20.8536C4.75979 20.9473 4.63261 21 4.5 21H4V21.5C4 21.6326 3.94732 21.7598 3.85355 21.8536C3.75979 21.9473 3.63261 22 3.5 22C3.36739 22 3.24021 21.9473 3.14645 21.8536C3.05268 21.7598 3 21.6326 3 21.5V21H2.5C2.36739 21 2.24021 20.9473 2.14645 20.8536C2.05268 20.7598 2 20.6326 2 20.5C2 20.3674 2.05268 20.2402 2.14645 20.1464C2.24021 20.0527 2.36739 20 2.5 20H3V19.5C3 19.3674 3.05268 19.2402 3.14645 19.1464C3.24021 19.0527 3.36739 19 3.5 19C3.63261 19 3.75979 19.0527 3.85355 19.1464C3.94732 19.2402 4 19.3674 4 19.5V20H4.5C4.63261 20 4.75979 20.0527 4.85355 20.1464C4.94732 20.2402 5 20.3674 5 20.5ZM6.5 22C6.40111 22 6.30444 22.0293 6.22221 22.0843C6.13999 22.1392 6.0759 22.2173 6.03806 22.3087C6.00022 22.4 5.99031 22.5006 6.00961 22.5975C6.0289 22.6945 6.07652 22.7836 6.14645 22.8536C6.21637 22.9235 6.30546 22.9711 6.40245 22.9904C6.49945 23.0097 6.59998 22.9998 6.69134 22.9619C6.7827 22.9241 6.86079 22.86 6.91573 22.7778C6.97068 22.6956 7 22.5989 7 22.5C7 22.3674 6.94732 22.2402 6.85355 22.1464C6.75979 22.0527 6.63261 22 6.5 22ZM22.5 2H22V1.5C22 1.36739 21.9473 1.24021 21.8536 1.14645C21.7598 1.05268 21.6326 1 21.5 1C21.3674 1 21.2402 1.05268 21.1464 1.14645C21.0527 1.24021 21 1.36739 21 1.5V2H20.5C20.3674 2 20.2402 2.05268 20.1464 2.14645C20.0527 2.24021 20 2.36739 20 2.5C20 2.63261 20.0527 2.75979 20.1464 2.85355C20.2402 2.94732 20.3674 3 20.5 3H21V3.5C21 3.63261 21.0527 3.75979 21.1464 3.85355C21.2402 3.94732 21.3674 4 21.5 4C21.6326 4 21.7598 3.94732 21.8536 3.85355C21.9473 3.75979 22 3.63261 22 3.5V3H22.5C22.6326 3 22.7598 2.94732 22.8536 2.85355C22.9473 2.75979 23 2.63261 23 2.5C23 2.36739 22.9473 2.24021 22.8536 2.14645C22.7598 2.05268 22.6326 2 22.5 2ZM19.92 6.87C17.4088 6.46601 15.0643 5.35617 13.16 3.67C13.1083 3.6189 13.0426 3.58418 12.9713 3.57017C12.8999 3.55616 12.826 3.56348 12.7588 3.59122C12.6916 3.61895 12.6341 3.66588 12.5934 3.72613C12.5527 3.78639 12.5306 3.85729 12.53 3.93L12.61 20.15C12.6133 20.2131 12.6322 20.2744 12.6651 20.3283C12.698 20.3822 12.7438 20.4271 12.7984 20.4589C12.853 20.4906 12.9146 20.5083 12.9778 20.5102C13.0409 20.5122 13.1035 20.4983 13.16 20.47C15.6842 19.3961 17.7634 17.4886 19.0502 15.066C20.337 12.6435 20.7535 9.8527 20.23 7.16C20.2162 7.08386 20.1789 7.01396 20.1232 6.96015C20.0676 6.90633 19.9966 6.87131 19.92 6.86V6.87Z"
              fill="#FFB400"
            />
            <path
              d="M14.39 8.32C14.2615 7.9364 14.0156 7.60289 13.6873 7.3666C13.3589 7.13031 12.9645 7.00318 12.56 7.00318C12.1554 7.00318 11.7611 7.13031 11.4327 7.3666C11.1044 7.60289 10.8585 7.9364 10.73 8.32L8.30999 13.17C8.0324 13.6602 7.89408 14.2169 7.90999 14.78C7.94122 15.3613 8.18619 15.9105 8.59782 16.3222C9.00945 16.7338 9.5587 16.9788 10.14 17.01C11.0444 16.9449 11.8989 16.5706 12.56 15.95C13.2211 16.5706 14.0756 16.9449 14.98 17.01C15.5613 16.9788 16.1105 16.7338 16.5222 16.3222C16.9338 15.9105 17.1788 15.3613 17.21 14.78C17.2259 14.2169 17.0876 13.6602 16.81 13.17L14.39 8.32ZM11.67 12.7C11.67 12.65 11.68 11.47 12.56 11.47C13.44 11.47 13.44 12.65 13.44 12.7C13.3496 13.3883 13.0413 14.0296 12.56 14.53C12.0751 14.031 11.7631 13.3895 11.67 12.7ZM14.98 16.01C14.3408 15.9483 13.7398 15.6777 13.27 15.24C13.9321 14.5473 14.3439 13.6534 14.44 12.7C14.4677 12.436 14.4431 12.1692 14.3676 11.9147C14.2921 11.6602 14.1672 11.4231 14.0001 11.217C13.8329 11.0108 13.6267 10.8396 13.3934 10.7131C13.16 10.5867 12.904 10.5075 12.64 10.48L12.56 10.47C12.2945 10.4865 12.035 10.5553 11.7961 10.6724C11.5573 10.7895 11.344 10.9527 11.1684 11.1524C10.9928 11.3522 10.8584 11.5847 10.7728 11.8365C10.6873 12.0883 10.6524 12.3546 10.67 12.62L10.68 12.7C10.7753 13.6536 11.1872 14.5478 11.85 15.24C11.3802 15.6777 10.7792 15.9483 10.14 16.01C9.82358 15.981 9.52732 15.842 9.30263 15.6174C9.07795 15.3927 8.93903 15.0964 8.90999 14.78C8.89392 14.3736 8.99455 13.971 9.19999 13.62L11.62 8.77C11.95 8.12 12.17 8.01 12.56 8.01C12.95 8.01 13.17 8.12 13.5 8.77L15.92 13.62C16.1254 13.971 16.2261 14.3736 16.21 14.78C16.1809 15.0964 16.042 15.3927 15.8174 15.6174C15.5927 15.842 15.2964 15.981 14.98 16.01ZM21.99 5.66C21.9697 5.55649 21.9171 5.46206 21.8399 5.39021C21.7627 5.31837 21.6647 5.27279 21.56 5.26C18.1818 4.92552 15.0675 3.28586 12.88 0.689996C12.8313 0.636309 12.7718 0.59341 12.7055 0.564053C12.6392 0.534697 12.5675 0.519531 12.495 0.519531C12.4225 0.519531 12.3508 0.534697 12.2845 0.564053C12.2182 0.59341 12.1587 0.636309 12.11 0.689996C9.92243 3.28586 6.80817 4.92552 3.42999 5.26C3.32529 5.27279 3.22731 5.31837 3.15008 5.39021C3.07284 5.46206 3.02031 5.55649 2.99999 5.66C1.41999 13.85 4.54999 19.68 12.3 22.97C12.3617 22.9961 12.428 23.0096 12.495 23.0096C12.562 23.0096 12.6283 22.9961 12.69 22.97C20.44 19.68 23.56 13.86 21.99 5.66ZM12.5 21.96C5.39999 18.87 2.58999 13.71 3.92999 6.2C7.22181 5.78699 10.2595 4.21677 12.5 1.77C14.7405 4.21677 17.7782 5.78699 21.07 6.2C22.4 13.71 19.59 18.87 12.5 21.96Z"
              fill="#484848"
            />
          </svg>
          <p className="disclaimer-text">
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </p>
        </div>
      </div>

      {/* Things to know section */}
      <div className="things-to-know-section">
        <h2 className="section-title">Things to know</h2>

        {/* Content Grid */}
        <div className="things-to-know-grid">
          {/* House Rules */}
          <div className="things-column">
            <h3>House rules</h3>
            <ul className="things-list">
              {thingsToKnow.houseRules.map((item, index) => (
                <li key={index}>
                  <span>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Health & Safety */}
          <div className="things-column">
            <h3>Health & safety</h3>
            <ul className="things-list">
              {thingsToKnow.healthAndSafety.map((item, index) => (
                <li key={index}>
                  <span>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
            <span className="show-more">Show more ›</span>
          </div>

          {/* Cancellation Policy */}
          <div className="things-column">
            <h3>Cancellation policy</h3>
            <ul className="things-list">
              {thingsToKnow.cancellationPolicy.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
            <span className="show-more">Show more ›</span>
          </div>
        </div>
      </div>
      <ListingExploreFooter />
      <AirbnbFooter />
    </div>
  );
};

export default ListingPage;