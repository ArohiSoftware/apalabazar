import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/category');
  };

  return (
    <div className="shadow-lg ">
      {/* Top Navbar */}
      <div className="bg-white p-4 border-b-[2px] flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/100x40"
            alt="Logo"
            className="h-10"
            crossOrigin="anonymous"
          />
        </div>
        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder="Search for Biscuits"
            className="border-[2px] border-zinc-300 rounded-l-md shadow-md p-2 w-[600px] dark:bg-white dark:text-zinc-300"
          />
          <button className="bg-green-600 text-white p-2 rounded-r-lg font-sans">
            SEARCH
          </button>
        </div>
        <div className="flex items-center space-x-7">
          <div className="flex items-center space-x-1">
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
                d="M5.121 17.804A8.966 8.966 0 0112 15c2.485 0 4.735.994 6.379 2.621M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <button className="text-zinc-700 hover:text-blue-600 ">Sign In / Register</button>
          </div>
          <div className="flex items-center space-x-2">
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
            <span className="text-yellow-500">0</span>
            <span className="text-zinc-700">₹0</span>
          </div>
        </div>
      </div>
      {/* Bottom Navbar */}
      <div className="bg-white  border-b-[2px] flex items-center space-x-8">
        <div className=" border-r-[3px] p-2 pr-16">
          <button onClick={handleNavigate} className="flex items-center space-x-1 text-zinc-700">
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
        <a href="#" className="text-zinc-700">
          Ready To Cook
        </a>
        <a href="#" className="text-zinc-700">
          Value Packs
        </a>
        <a href="#" className="text-zinc-700">
          Home Appliances
        </a>
        <a href="#" className="text-zinc-700">
          Cleaners
        </a>
        <a href="#" className="text-zinc-700">
          Detergent &amp; Fabric Care
        </a>
      </div>
    </div>
  );
};

export default Navbar;
