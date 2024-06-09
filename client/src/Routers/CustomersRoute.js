import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Category from '../Components/Category.js';

function CustomersRoute() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default CustomersRoute
