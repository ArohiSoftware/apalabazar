import React from "react";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaTags,
  FaShoppingCart,
  FaUser,
  FaCog,
} from "react-icons/fa";

const sidebarClasses = "w-64 bg-white border-r border-gray-200 shadow-lg";
const linkClasses =
  "flex items-center p-4 mt-2 text-gray-600 hover:bg-gray-100 hover:text-green-500 rounded-lg transition-colors duration-200";
const activeLinkClasses =
  "flex items-center p-4 text-green-500 bg-gray-100 rounded-lg font-bold shadow-sm";

const AdminSidebar = () => {
  return (
    <div className="flex h-screen">
      <div className={sidebarClasses}>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-green-500"> Admin </h1>{" "}
        </div>{" "}
        <nav className="mt-8">
          <a href="#" className={activeLinkClasses}>
            <FaTachometerAlt className="mr-3" />
            <span> Dashboard </span>{" "}
          </a>{" "}
          <a href="#" className={linkClasses}>
            <FaBoxOpen className="mr-3" />
            <span> Products </span>{" "}
          </a>{" "}
          <a href="#" className={linkClasses}>
            <FaTags className="mr-3" />
            <span> Category </span>{" "}
          </a>{" "}
          <a href="#" className={linkClasses}>
            <FaShoppingCart className="mr-3" />
            <span> Orders </span>{" "}
          </a>{" "}
          <a href="#" className={linkClasses}>
            <FaUser className="mr-3" />
            <span> Customer </span>{" "}
          </a>{" "}
          <a href="#" className={linkClasses}>
            <FaCog className="mr-3" />
            <span> Settings </span>{" "}
          </a>{" "}
        </nav>{" "}
      </div>{" "}
    </div>
  );
};

export default AdminSidebar;
