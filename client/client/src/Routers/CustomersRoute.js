import React, { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Grocery from "../Pages/Grocery/Grocery"
import Cart from '../customer/Components/Cart/Cart.js';
import Category from "../customer/Components/Navbar/Category.js";
import Dairy from '../Pages/Dairy/Dairy';
import ProductDetails from '../customer/Components/Product/ProductDetails/ProductDetails.js';
import Register from '../customer/Components/Auth/Login';
import Profile from '../Profile/components/Profilemain/Profile.js';
import HomeAppliances from '../Pages/HomeAppliances/HomeAppliances.js';
import  DetergentFabricCare  from '../Pages/HomeKitchen/HomeKitchen.js';
import ValuePack from '../Pages/Specials/Specials.js';
import Checkoutpage from '../Profile/components/Orders/Checkoutpage.js';
import Checkout from '../Profile/components/Orders/Checkoutpage.js';
import SearchDashboard from '../customer/Components/SerchPage/Searchpage.js';



function CustomersRoute() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/grocery" element={<Grocery />}></Route>
      <Route path="/appliances" element={<HomeAppliances />}></Route>
      <Route path="/cleaner" element={<DetergentFabricCare />}></Route>
      <Route path="/detergent" element={<DetergentFabricCare />}></Route>
      <Route path="/valuepack" element={<ValuePack />}></Route>
      <Route path="/category" element={<Category />} />
      <Route path="/dairy" element={<Dairy />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path="/searchpage" element={<SearchDashboard/>}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/myprofile" element={<Profile/>}></Route>


      </Routes>
    </div>
  )
}

export default CustomersRoute
