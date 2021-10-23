import React from "react";
import "./styles.css";
export const SearchBlock = () => {
  return (
    <div className="search-block-container">
      <div className="search-location-container s-container">
        <label className="koumzdh">
          <div className="search-location-input-container">
            <div className="search-location-input-text search-text">
              Location
            </div>
            <input
              className="search-location-input search-input"
              autocomplete="off"
              autocorrect="off"
              placeholder="Where are you going?"
            />
          </div>
        </label>
      </div>

      <div className="search-checkin-container s-container">
        <label className="koumzdh">
          <div className="search-checkin-input-container">
            <div className="search-checkin-input-text search-text">Checkin</div>
            <input
              className="search-checkin-input search-input"
              autocomplete="off"
              autocorrect="off"
              placeholder="Where are you going?"
            />
          </div>
        </label>
      </div>

      <div className="search-checkout-container s-container">
        <label className="koumzdh">
          <div className="search-checkout-input-container">
            <div className="search-location-input-text search-text">
              Checkout
            </div>
            <input
              className="search-checkout-input search-input"
              autocomplete="off"
              placeholder="Where are you going?"
            />
          </div>
        </label>
      </div>

      <div className="search-guests-container s-container">
        <label className="koumzdh">
          <div className="search-guests-input-container">
            <div className="search-guests-input-text search-text">Guests</div>
            <input
              className="search-input"
              aria-autocomplete="both"
              placeholder="Check In?"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default SearchBlock;
