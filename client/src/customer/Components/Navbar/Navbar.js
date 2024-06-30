import React, { useState } from "react";
import Register from "../Auth/Register";
import { HiUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props, setActiveTab) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const handleNavigate = () => {
    navigate("/category");
  };
  const showCart = () => {
    navigate("/cart");
  };
  const handleProfile = () => {
    navigate("/Myprofile/profile");
  };

  const onSearchHandle = () => {
    navigate("/dairy");
  };
  return (
    <div className="shadow-lg overflow-hidden">
      {" "}
      {/* Top Navbar */}{" "}
      <div className="bg-white p-4 border-b-[2px] flex items-center justify-between">
        <a href="/" className="flex items-center space-x-4">
          <img
            src="https://placehold.co/100x40"
            alt="Logo"
            className="h-10"
            crossOrigin="anonymous"
          />
        </a>{" "}
        <HomeDeliveryStatus />
        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder="Search for Biscuits"
            className="border-[2px] border-zinc-300 rounded-l-md shadow-md p-2 w-[400px] dark:bg-white dark:text-zinc-300"
          />
          <button
            className="bg-green-600 text-white p-2 rounded-r-lg font-sans"
            onClick={() => onSearchHandle()}
          >
            SEARCH{" "}
          </button>{" "}
        </div>{" "}
        <div className="flex">
          <div className="flex items-center space-x-2">
            <button onClick={() => showCart()}>
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
                ></path>{" "}
              </svg>{" "}
            </button>{" "}
            {/* <sup className="text-orange-500 text-base m-0">{item}</sup> */}{" "}
            {/* <sub className="text-zinc-700">₹0</sub> */}{" "}
          </div>{" "}
          {user ? (
            <div>
              <HiUserCircle
                className=" text-3xl text-blue-600 "
                onClick={handleProfile}
              />{" "}
            </div>
          ) : (
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
                  ></path>{" "}
                </svg>{" "}
                <button
                  onClick={() => setShowModal(true)}
                  className="text-zinc-700 hover:text-blue-600"
                >
                  Sign In / Register{" "}
                </button>{" "}
                <Register showModal={showModal} setShowModal={setShowModal} />{" "}
              </div>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
      {/* Bottom Navbar */}{" "}
      <div className="bg-white/70 backdrop-blur-lg border-b-[2px] flex flex-wrap gap-2  items-center space-x-8">
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
              ></path>{" "}
            </svg>{" "}
            <span> All Categories </span>{" "}
          </button>{" "}
        </div>{" "}
        <a href="/grocery" className="text-zinc-700 font-bold">
          Grocery{" "}
        </a>{" "}
        <a href="/valuepack" className="text-zinc-700 font-bold">
          Value Packs{" "}
        </a>{" "}
        <a href="/appliances" className="text-zinc-700 font-bold">
          Home Appliances{" "}
        </a>{" "}
        <a
          href="/cleaner"
          onClick={() => props.setActiveTab("Cleaners")}
          className="text-zinc-700 font-bold"
        >
          Cleaners{" "}
        </a>{" "}
        <a
          href="/detergent"
          onClick={() => props.setActiveTab("Detergent & Fabric Care")}
          className="text-zinc-700 font-bold"
        >
          Detergent & Fabric Care{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
};

function HomeDeliveryStatus() {
  return (
    <div className="text-xs bg-gray-100 mx-3 p-2 rounded-lg ">
      <div className="flex gap-2 text-gray-600">
        <span> Earliest </span>{" "}
        <span className="text-green-500"> Home Delivery </span>{" "}
        <span> available </span>{" "}
      </div>{" "}
    </div>
  );
}

export default Navbar;
