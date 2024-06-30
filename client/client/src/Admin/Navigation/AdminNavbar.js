
import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const AdminNavbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="flex  ">
        <FaSearch className="text-gray-600 mr-5  mt-3" />
        <input
          type="text"
          placeholder="Search..."
          className=" shadow-md border-gray-300 rounded p-2 w-96"
        />
      </div>

      <div className="flex items-center">
        <FaUserCircle className="text-gray-600 mr-2" size={24} />
        <span className="text-gray-600">Admin Name</span>
      </div>
    </nav>
  );
};

export default AdminNavbar;
