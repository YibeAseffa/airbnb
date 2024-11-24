import AirbnbListingNavBar from "./AirbnbListingNavBar";
import ListingPage from "./ListingPage";
import "../styles/Listing.css";

const Listing = () => {
  return (
    <div className="listing">
      <AirbnbListingNavBar />
      <ListingPage/>
    </div>
  );
};

export default Listing;
