import React from "react";
import Header from "../Header";
import SearchBlock from "../SearchBlock";
import "./styles.css";
export const Banner = () => {
  return (
    <div className="banner banner-container">
      <div className="header-container">
        <Header />

        <div className="search-block">
          <SearchBlock />
        </div>
      </div>
      <div className="banner-btn-text ">
        <div role="banner-text" className="heading">
          <span className="span">Not sure where to go?&nbsp;Perfect.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
