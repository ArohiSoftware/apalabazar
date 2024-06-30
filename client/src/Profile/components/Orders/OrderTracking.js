import React from "react";
import { useLocation } from "react-router-dom";
import "./OrderTracking.css"; // Adjust the path as needed

const OrderTracking = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return <p> No order details available </p>;
  }

  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4"> Tracking Details </h2>{" "}
        <p className="text-lg"> Order: {order.title} </p>{" "}
        <p className="text-lg"> Status: {order.status.text} </p>{" "}
        <p className="text-lg"> Expected Delivery: Dec 20, 2023 </p>{" "}
        <ul className="timeline">
          {" "}
          {order.trackingSteps.map((step, index) => (
            <li
              key={index}
              className={`timeline-item ${step.completed ? "completed" : ""}`}
            >
              <span className="text-lg font-semibold"> {step.status} </span>{" "}
              <span className="text-sm text-gray-600"> {step.date} </span>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default OrderTracking;
