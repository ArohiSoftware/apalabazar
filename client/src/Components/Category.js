import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white relative min-h-screen">
        <button
          onClick={handleNavigate}
          className="absolute top-4 right-4 text-lg font-bold bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/grocery-131022.svg"
              alt="Grocery"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">GROCERY</h2>
            <ul className="space-y-1 mb-2">
              <li>Dals</li>
              <li>Pulses</li>
              <li>Dry Fruits</li>
              <li>DMart Grocery</li>
              <li>Cooking Oil</li>
              <li>Ghee & Vanaspati</li>
              <li>Flours & Grains</li>
              <li>Rice & Rice Products</li>
              <li>Masala & Spices</li>
              <li>Salt / Sugar / Jaggery</li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/appliancescore-131022.svg"
              alt="Appliances"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">APPLIANCES</h2>
            <ul className="space-y-1">
              <li>Home Appliances</li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/specialscore-131022.svg"
              alt="Specials"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">SPECIALS</h2>
            <ul className="space-y-1">
              <li>Value Packs</li>
              <li>Discover More</li>
            </ul>
          </div>
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/dairybeverages-131022.svg"
              alt="Dairy & Beverages"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">DAIRY & BEVERAGES</h2>
            <ul className="space-y-1">
              <li>Beverages</li>
              <li>Dairy</li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/cosmetics-131022.svg"
              alt="Beauty & Cosmetics"
              className="mt-4 mb-2 w-12"
            />
            <h2 className="font-bold mb-2">BEAUTY & COSMETICS</h2>
            <ul className="space-y-1">
              <li>Skin</li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/baby-kids-131022.svg"
              alt="Baby & Kids"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">BABY & KIDS</h2>
            <ul className="space-y-1">
              <li>Diapering</li>
              <li>Baby Care</li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/footwearcore-131022.svg"
              alt="Footwear"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">FOOTWEAR</h2>
            <ul className="space-y-1">
              <li>Shoe Care</li>
            </ul>
          </div>
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/packaged-foods-131022.svg"
              alt="Packaged Food"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">PACKAGED FOOD</h2>
            <ul className="space-y-1">
              <li>Biscuits & Cookies</li>
              <li>Snacks & Farsans</li>
              <li>Breakfast Cereals</li>
              <li>Chocolates & Candies</li>
              <li>Ketchup & Sauce</li>
              <li>Jams & Spreads</li>
              <li>Pasta & Noodles</li>
              <li>Ready To Cook</li>
              <li>Sweets</li>
              <li>Pickles</li>
              <li>Health Food</li>
              <li>Soups</li>
              <li>Mukhwas</li>
              <li>Bakery</li>
              <li>Frozen Foods</li>
            </ul>
          </div>
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/fruits-vegetables-131022.svg"
              alt="Fruits & Vegetables"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">FRUITS & VEGETABLES</h2>
            <ul className="space-y-1">
              <li>Frozen Vegetable</li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/personal-care-141022.svg"
              alt="Personal Care"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">PERSONAL CARE</h2>
            <ul className="space-y-1">
              <li>Skin Care</li>
              <li>Face Care</li>
              <li>Hair Care</li>
              <li>Lip Care</li>
              <li>Oral Care</li>
              <li>Sanitary Napkins</li>
              <li>Deos & Perfumes</li>
              <li>Shaving Needs</li>
              <li>Baby Care</li>
              <li>Diapering</li>
              <li>Health & Wellness</li>
              <li>Personal Hygiene</li>
            </ul>
          </div>
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/home-kitchen-131022.svg"
              alt="Home & Kitchen"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">HOME & KITCHEN</h2>
            <ul className="space-y-1">
              <li>Detergent & Fabric Care</li>
              <li>Cleaners</li>
              <li>Utensil Cleaners</li>
              <li>Freshener & Repellents</li>
              <li>Disinfectants</li>
              <li>Tissue Paper & Napkins</li>
              <li>Pooja Needs</li>
              <li>Home Utility</li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/aesc-homeutilityandorganiser-081223.svg"
              alt="Home Utility & Organisers"
              className="mt-4 mb-2 w-12"
            />
            <h2 className="font-bold mb-2">HOME UTILITY & ORGANISERS</h2>
            <ul className="space-y-1">
              <li>Cleaning / Tools / Kits</li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/stationary-131022.svg"
              alt="School Supplies"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">SCHOOL SUPPLIES</h2>
            <ul className="space-y-1">
              <li>Stationery Sets</li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Category;
