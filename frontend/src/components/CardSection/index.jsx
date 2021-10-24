import React, { useEffect } from "react";
import Heading from "../TypoGraphy/Heading";
import Card from "../Card";
import "./styles.css";
const CardSection = () => {
  const fetchCities = () => {
    const url = "https://qtrip-backend-gm.herokuapp.com/cities";
    fetch(url).then((city) => {
      console.log(city);
    });
  };
  useEffect(() => {
    fetchCities();
  });

  return (
    <div className="card-section-container">
      <Heading type="h1" content="Explore nearby" />
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardSection;
