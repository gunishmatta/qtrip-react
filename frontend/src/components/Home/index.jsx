import React from "react";
import Header from "../Header";
import SearchBlock from "../SearchBlock";
import "./styles.css";
export const Home = () => {
  return (
    <div className="main-container">
      <div className="banner">
      <Header />
      <div className="search-block">
        <SearchBlock />
        </div>
        </div>
    </div>
  );
};

export default Home;
