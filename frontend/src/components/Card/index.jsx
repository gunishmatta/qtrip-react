import React from "react";
import "./styles.css";
const CardSmall = () => {
  return (
    <div class="card-container">
      <div class="card-image"></div>
      <div class="card-heading">
        <h4>Card Heading</h4>
      </div>
      <div class="card-body">
        <span>Card Body</span>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <>
      <CardSmall />
    </>
  );
};

export default Card;
