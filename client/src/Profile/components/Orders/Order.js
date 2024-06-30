<<<<<<< HEAD
import React from "react";
import OrderItem from "./OrderItem"; // Ensure the correct path to OrderItem component
=======

import React from "react";
const sharedClasses = {
  button: "bg-blue-500 text-white p-2 rounded-lg flex items-center",
  input: "flex-grow p-2 border rounded-lg",
  card: "bg-white p-4 rounded-lg border",
  image: "w-20 h-20 object-cover rounded-lg mr-4",
  text: "text-lg md:text-xl font-semibold",
  info: "text-zinc-600",
  status: "text-sm",
};

export const OrderItem = ({ imageSrc, title, price, color, status, message }) => {
  return (
    <div className={sharedClasses.card}>
      <div className="flex flex-col sm:flex-row items-center">
        <img src={imageSrc} alt={title} className={sharedClasses.image} />
        <div className="flex-grow mt-4 sm:mt-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h3 className={sharedClasses.text}>{title}</h3>
            <span className={sharedClasses.text}>₹{price}</span>
          </div>
          <p className={sharedClasses.info}>Color: {color}</p>
          {status && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2">
              <span className={`${status.color} ${sharedClasses.status}`}>
                {status.text}
              </span>
              {message && (
                <span className={`${sharedClasses.info} mt-2 sm:mt-0 sm:ml-2`}>
                  {message}
                </span>
              )}
            </div>
          )}

          <p className=" bg-green-200 p-2 rounded">
            Refund Completed (Refund ID: 12102993153382082601) • The money was
            sent to your Bank Account ending with ********036 on Dec 15, 2023.
            For any questions, please contact your bank with reference number
            334822116751.
          </p>
        </div>
      </div>
    </div>
  );
};
>>>>>>> 9a91febc2b63b1ca810ab34af7bda8b8eac19e0a

const Orders = () => {
  // Dummy data for demonstration
  const orders = [
    {
      id: 1,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrloZ_lHhAsVRnPjAyVxigmOm_187ehKOaog&s0",
      title: "Casual Shoes For Men Sneakers loafers Wh...",
      price: "261",
      color: "White Size: 8",
      status: {
        color: "text-yellow-500",
        text: "● Refund Completed",
      },
      message:
        "You returned this order because the quality was not as expected.",
      trackingSteps: [
        { status: "Order Confirmed", date: "Dec 1, 2023", completed: true },
        { status: "Shipped", date: "Dec 3, 2023", completed: true },
        { status: "Out for Delivery", date: "Dec 5, 2023", completed: true },
        { status: "Delivered", date: "Dec 5, 2023", completed: true },
        { status: "Return", date: "Dec 10, 2023", completed: true },
        { status: "Refund", date: "Dec 15, 2023", completed: true },
      ],
    },
    {
      id: 2,
      imageSrc:
        "https://temptindia.com/cdn/shop/files/SpiritRed1.png?v=1705564680&width=1496",
      title: "B 11 Behind the Neck Super Bass Bluetoot...",
      price: "149",
      color: "Red",
      status: {
        color: "text-red-500",
        text: "● Cancelled on Jun 28, 2023",
      },
      trackingSteps: [
        { status: "Order Confirmed", date: "Jun 25, 2023", completed: true },
        { status: "Cancelled", date: "Jun 28, 2023", completed: true },
      ],
    },
    {
      id: 3,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdFkW0O3t1TZhHCuQew5RjEs3zAO_FbthBw&s",
      title: "B11- Bluetooth red Wireless In Ear Earph...",
      price: "151",
      color: "Maroon",
      status: {
        color: "text-red-500",
        text: "● Cancelled on Jun 11, 2023",
      },
      trackingSteps: [
        { status: "Order Confirmed", date: "Jun 7, 2023", completed: true },
        { status: "Cancelled", date: "Jun 11, 2023", completed: true },
      ],
    },
  ];

  return (
    <div className="p-4">
      <div className="mx-auto bg-white p-4 rounded-lg shadow h-[80vh] overflow-scroll sidebar">
        <div className="flex gap-3 lg:flex-row items-center mb-4 w-[100%]">
          <input
            type="text"
            placeholder="Search your orders here"
            className="flex-grow p-2 border rounded-lg mt-4 sm:mt-0 sm:ml-4 p-2 border rounded-xl w-[70%]"
          />
          <button className="bg-blue-500 text-white p-2 rounded-lg flex items-center mt-4 sm:mt-0 p-2 sm:ml-4 w-fit">
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32A8 8 0 1114.32 12.9l4.387 4.387a1 1 0 01-1.414 1.414L12.9 14.32zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
            Search{" "}
          </button>{" "}
        </div>{" "}
        <div className="space-y-4">
<<<<<<< HEAD
          {" "}
          {orders.map((order) => (
            <OrderItem
              key={order.id}
              imageSrc={order.imageSrc}
              title={order.title}
              price={order.price}
              color={order.color}
              status={order.status}
              message={order.message}
              trackingSteps={order.trackingSteps}
            />
          ))}{" "}
        </div>{" "}
      </div>{" "}
=======
          <OrderItem
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrloZ_lHhAsVRnPjAyVxigmOm_187ehKOaog&s0"
            title="Casual Shoes For Men Sneakers loafers Wh..."
            price="261"
            color="White Size: 8"
            status={{ color: "text-yellow-500", text: "● Refund Completed" }}
            message="You returned this order because the quality was not as expected."
          />
          <OrderItem
            imageSrc="https://temptindia.com/cdn/shop/files/SpiritRed1.png?v=1705564680&width=1496"
            title="B 11 Behind the Neck Super Bass Bluetoot..."
            price="149"
            color="Red"
            status={{
              color: "text-red-500",
              text: "● Cancelled on Jun 28, 2023",
            }}
          />
          <OrderItem
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdFkW0O3t1TZhHCuQew5RjEs3zAO_FbthBw&s"
            title="B11- Bluetooth red Wireless In Ear Earph..."
            price="151"
            color="Maroon"
            status={{
              color: "text-red-500",
              text: "● Cancelled on Jun 11, 2023",
            }}
          />
        </div>

      </div>
>>>>>>> 9a91febc2b63b1ca810ab34af7bda8b8eac19e0a
    </div>
  );
};
 

export default Orders;
