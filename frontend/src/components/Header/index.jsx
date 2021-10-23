import React from "react";
import { ReactComponent as SearchBarIcon } from "../../assets/searchicon.svg";
import "./styles.css";
export const Header = () => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <h1>Qtrip</h1>
      </div>
      <button className="search-bar-button">
        <div className="search-bar-content">
          <div className="search-bar-label">Start your search</div>
          <div className="search-icon">
            <SearchBarIcon />
          </div>
        </div>
      </button>
      <div className="right-container">
        <h3>Reservations</h3>
      </div>
    </nav>
  );
};

export default Header;
