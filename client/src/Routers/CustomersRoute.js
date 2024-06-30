import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Grocery from "../Pages/Grocery/Grocery";
import Cart from "../customer/Components/Cart/Cart.js";
import Category from "../customer/Components/Navbar/Category.js";
import SearchFilter from "../customer/Components/SideFilter/SideFilter.jsx";
import Dairy from "../Pages/Dairy/Dairy";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails.js";
import Register from "../customer/Components/Auth/Login";
import Checkout from "../customer/Components/Checkout/CheckoutPage.js";
import Profile from "../Profile/components/Profilemain/Profile.js";
import HomeAppliances from "../Pages/HomeAppliances/HomeAppliances.js";
import DetergentFabricCare from "../Pages/HomeKitchen/HomeKitchen.js";
import ValuePack from "../Pages/Specials/Specials.js";
import Orders from "../Profile/components/Orders/Order.js";
import OrderTracking from "../Profile/components/Orders/OrderTracking.js";

function CustomerRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/grocery" element={<Grocery />} />{" "}
        <Route path="/appliances" element={<HomeAppliances />} />{" "}
        <Route path="/cleaner" element={<DetergentFabricCare />} />{" "}
        <Route path="/detergent" element={<DetergentFabricCare />} />{" "}
        <Route path="/valuepack" element={<ValuePack />} />{" "}
        <Route path="/category" element={<Category />} />{" "}
        <Route path="/dairy" element={<Dairy />} />{" "}
        <Route path="/cart" element={<Cart />} />{" "}
        <Route path="/product/:id" element={<ProductDetails />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/checkout" element={<Checkout />} />{" "}
        <Route path="/myprofile" element={<Profile />} />{" "}
        <Route path="/searchFilter" element={<SearchFilter />} />{" "}
        <Route path="/orders" element={<Orders />} />{" "}
        <Route path="/orderTracking" element={<OrderTracking />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default CustomerRoute;
