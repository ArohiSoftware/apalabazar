import React, { useState, useEffect } from "react";
import Register from "../Auth/Register";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { setUser, clearUser } from '../../../Redux/User/userSlice';
import { useSelector, useDispatch } from "react-redux";
import { FaUser, FaHeart, FaBox, FaSignOutAlt } from "react-icons/fa"; // Importing React Icons

const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser=null, isAuthenticated } = useSelector((state) => state.user)|| {};
  

  const handleNavigate = () => {
    navigate("/category");
  };

  const handleSearch = () => {
    navigate("/searchpage");
  };

  const showCart = () => {
    navigate("/cart");
  };


  const handleProfileClick = () => {
    if (localStorage.getItem('role') === "ADMIN") {
      navigate('/admin');
    } else {
      navigate('/myprofile/profile');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    dispatch(clearUser());
    navigate('/');
  };

  const handleMouseEnter = (event) => {
    const { top, left, height } = event.currentTarget.getBoundingClientRect();
    setDropdownPosition({ top: top + height, left });
    setHoverDropdown(true);
  };

  const handleMouseLeave = () => {
    setHoverDropdown(false);
  };

  return (
    <div className="shadow-lg overflow-hidden relative">
      {/* Top Navbar */}
      <div className="bg-white p-4 border-b-[2px] flex items-center justify-between">
        <a href="/" className="flex items-center space-x-4">
          <img
            src="./apala bazar.png"
            alt="Logo"
            className="h-10"
            crossOrigin="anonymous"
          />
        </a>
        <HomeDeliveryStatus />
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for Biscuits"
            className="border-[2px] border-zinc-300 rounded-l-md shadow-md p-2 w-[400px] dark:bg-white dark:text-zinc-300"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 border-[2px] border-blue-500 text-white p-2 rounded-r-lg font-sans"
          >
            SEARCH
          </button>
        </div>
        <div className="flex space-x-12">
          <div className="relative">
            <div
              className="flex items-center space-x-2 rounded-md p-2 border-[1px] bg-blue-500 hover:bg-blue-600"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                className="w-6 h-6 text-zinc-700 border-zinc-700 border-[2px] bg-white rounded-xl"
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
              {localStorage.getItem('authToken') ? (
                <button
                  onClick={handleProfileClick}
                  className="text-white font-medium flex items-center"
                >
                  Profile
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="text-white font-medium"
                >
                  Sign In / Register
                </button>
              )}
              <Register showModal={showModal} setShowModal={setShowModal} />
            </div>
            {hoverDropdown && (
                <div
                  className="fixed bg-white shadow-lg  space-y-2  w-fit border-[1px] border-gray-200 rounded-md z-[1000]"
                  style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
                >
                  <button
                    onClick={() => navigate('/myprofile')}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <FaUser className="mr-2" />
                    My Profile
                  </button>
                  <button
                    onClick={() => navigate('/wishlist')}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <FaHeart className="mr-2" />
                    Wishlist
                  </button>
                  <button
                    onClick={() => navigate('/orders')}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <FaBox className="mr-2" />
                    Orders
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={showCart}>
              <svg
                className="w-6 h-6 text-zinc-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18l-1.68 9.39a2 2 0 01-1.98 1.61H6.66a2 2 0 01-1.98-1.61L3 3zm0 0l1.68 9.39a2 2 001.98 1.61h10.68a2 2 001.98-1.61L21 3M5 21h14"
                ></path>
              </svg>
            </button>
            {/* <sup className="text-orange-500 text-base m-0">{item}</sup> */}
            {/* <sub className="text-zinc-700">₹0</sub> */}
          </div>
        </div>
      </div>
      {/* Bottom Navbar */}
      <div className="bg-white/70 backdrop-blur-lg border-b-[2px] flex flex-wrap gap-2 items-center space-x-8">
        <div className="border-r-[3px] p-2 pr-16">
          <button
            onClick={handleNavigate}
            className="flex items-center space-x-1 text-zinc-700"
          >
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
        </div>
        <a href="/grocery" className="text-zinc-700 font-bold">
          Grocery
        </a>
        <a href="/valuepack" className="text-zinc-700 font-bold">
          Value Packs
        </a>
        <a href="/appliances" className="text-zinc-700 font-bold">
          Home Appliances
        </a>
        <a
          href="/cleaner"
          onClick={() => props.setActiveTab("Cleaners")}
          className="text-zinc-700 font-bold"
        >
          Cleaners
        </a>
        <a
          href="/detergent"
          onClick={() => props.setActiveTab("Detergent & Fabric Care")}
          className="text-zinc-700 font-bold"
        >
          Detergent & Fabric Care
        </a>
      </div>
    </div>
  );
};

function HomeDeliveryStatus() {
  return (
    <div className="text-xs bg-gray-100 mx-3 p-2 rounded-lg">
      <div className="flex gap-2 text-gray-600">
        <span>Earliest</span>
        <span className="text-blue-500">Home Delivery</span>
        <span>available</span>
      </div>
    </div>
  );
}

export default Navbar;
