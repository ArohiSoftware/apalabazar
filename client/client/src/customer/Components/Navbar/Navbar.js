import React, { useState } from "react";
import Register from "../Auth/Register";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/category");
  };
  const showCart = () => {
    navigate("/cart");
  };

  return (
    <div className="shadow-lg bg-white">
      {/* Top Navbar */}
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center  space-x-4">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_YhaXWp1A9kZxpeXYpCL0oj0764uVAWjdA&s"
            alt="Logo"
            className="h-10 w-40 object-cover rounded-md"
            crossOrigin="anonymous"
          />
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search absolute left-2"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="border-[1px]  bg-gray-100  rounded-md p-1.5 pl-8 w-[500px]"
            />
          </div>
        </div>
        <div className="flex items-center  space-x-4">
          <button onClick={() => showCart()} className="flex flex-row mx-5  mt-2">
            <svg
              className="w-8 h-8  text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              
            >
       
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
             
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
              ></path>
                
            </svg>
            <span className="text-Gray-500 ">Cart</span>
          </button>
         
      
          <button onClick={() => setShowModal(true)} className="flex items-center space-x-1 bg-blue-600 text-white p-2 rounded-md">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A8.966 8.966 0 0112 15c2.485 0 4.735.994 6.379 2.621M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>Sign In / Register</span>
          </button>
          <Register showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
      {/* Bottom Navbar */}
      <div className="bg-white border-t-[1px] border-gray-300 p-3 flex items-center space-x-4">
        <button onClick={handleNavigate} className="flex items-center mx-3  space-x-1 text-gray-700 font-bold">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <span>All Categories</span>
        </button>
        <a href="/grocery" className="text-gray-700 hover:text-black hover:font-semibold transition ease-in-out duration-1500">
          Grocery
        </a>
        <a href="#" className="text-gray-700 hover:text-black hover:font-semibold transition ease-in-out duration-1500">
          Value Packs
        </a>
        <a href="#" className="text-gray-700 hover:text-black hover:font-semibold transition ease-in-out duration-1500">
          Home Appliances
        </a>
        <a href="#" className="text-gray-700 hover:text-black hover:font-semibold transition ease-in-out duration-1500">
          Cleaners
        </a>
        <a href="#" className="text-gray-700 hover:text-black hover:font-semibold transition ease-in-out duration-1500">
          Detergent & Fabric Care
        </a>
      </div>
    </div>
  );
};

export default Navbar;
