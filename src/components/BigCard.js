import React from "react";
import "../styles/BigCard.css";

const BigCard = () => {
  return (
    <div className="big-card">
      <div className="big-card-overlay">
        <h1 className="big-card-title">Not sure where to go? Perfect.</h1>
        <button className="big-card-button">I'm flexible</button>
      </div>
    </div>
  );
};

export default BigCard;
