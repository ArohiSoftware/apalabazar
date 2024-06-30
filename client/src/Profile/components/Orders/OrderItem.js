import React from "react";
import { useNavigate } from "react-router-dom";

const sharedClasses = {
  button: "bg-blue-500 text-white p-2 rounded-lg flex items-center",
  input: "flex-grow p-2 border rounded-lg",
  card: "bg-white p-4 rounded-lg border",
  image: "w-20 h-20 object-cover rounded-lg mr-4",
  text: "text-lg md:text-xl font-semibold",
  info: "text-zinc-600",
  status: "text-sm",
};

const OrderItem = ({
  imageSrc,
  title,
  price,
  color,
  status,
  message,
  trackingSteps,
}) => {
  const navigate = useNavigate();

  const handleTrackOrder = () => {
    navigate("/orderTracking", {
      state: { order: { title, status, trackingSteps } },
    });
  };

  return (
    <div className={sharedClasses.card}>
      <div className="flex flex-col sm:flex-row items-center">
        <img src={imageSrc} alt={title} className={sharedClasses.image} />{" "}
        <div className="flex-grow mt-4 sm:mt-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h3 className={sharedClasses.text}> {title} </h3>{" "}
            <span className={sharedClasses.text}> ₹{price} </span>{" "}
          </div>{" "}
          <p className={sharedClasses.info}> Color: {color} </p>{" "}
          {status && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
              <span className={`${status.color} ${sharedClasses.status}`}>
                {" "}
                {status.text}{" "}
              </span>{" "}
              {message && (
                <span className={`${sharedClasses.info} mt-2 sm:mt-0 sm:ml-2`}>
                  {" "}
                  {message}{" "}
                </span>
              )}{" "}
            </div>
          )}{" "}
          <p className="bg-green-200 p-2 rounded">
            Refund Completed(Refund ID: 12102993153382082601)• The money was
            sent to your Bank Account ending with ** ** 036 on Dec 15, 2023. For
            any questions, please contact your bank with reference number
            334822116751.{" "}
          </p>{" "}
          <button
            className={`${sharedClasses.button} mt-2`}
            onClick={handleTrackOrder}
          >
            Track Order{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default OrderItem;
