import React from "react";
import Banner from "../Banner";
import CardSection from "../CardSection";

import "./styles.css";
export const Home = () => {
  return (
    <div className="main-container">
      <Banner />
      <CardSection />
    </div>
  );
};

export default Home;
