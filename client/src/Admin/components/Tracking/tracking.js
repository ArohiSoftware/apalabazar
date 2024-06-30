// src/Tracking.js

import React, { useState } from "react";
import "./Tracking.css";

const Tracking = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingDetails, setTrackingDetails] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate an API call to get tracking details
    const details = getTrackingDetails(trackingCode);
    if (details) {
      setTrackingDetails(details);
    } else {
      alert("Invalid tracking code. Please try again.");
    }
  };

  const getTrackingDetails = (code) => {
    // This is a mock function. Replace with actual API call.
    const trackingDatabase = {
      123456: {
        status: "In Transit",
        location: "Bangalore",
        deliveryDate: "2024-06-30",
      },
      789012: {
        status: "Delivered",
        location: "Mumbai",
        deliveryDate: "2024-06-25",
      },
    };
    return trackingDatabase[code] || null;
  };

  return (
    <div className="container">
      <h1> Flipkart Order Tracking </h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="trackingCode"> Enter Tracking Code: </label>{" "}
        <input
          type="text"
          id="trackingCode"
          value={trackingCode}
          onChange={(e) => setTrackingCode(e.target.value)}
          required
        />
        <button type="submit"> Track </button>{" "}
      </form>{" "}
      {trackingDetails && (
        <div id="trackingResult">
          <h2> Tracking Details </h2>{" "}
          <p>
            {" "}
            <strong> Status: </strong> {trackingDetails.status}
          </p>
          <p>
            {" "}
            <strong> Location: </strong> {trackingDetails.location}
          </p>
          <p>
            {" "}
            <strong> Expected Delivery: </strong> {trackingDetails.deliveryDate}
          </p>
        </div>
      )}{" "}
    </div>
  );
};

export default Tracking;
