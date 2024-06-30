import React from "react";
import OrderItem from "./OrderItem"; // Ensure the correct path to OrderItem component

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
    </div>
  );
};

export default Orders;
