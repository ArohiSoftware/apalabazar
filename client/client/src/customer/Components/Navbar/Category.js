import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white relative min-h-screen">
        <button
          onClick={() => handleNavigate("/")}
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
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/grocery/dals")}>Dals</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/pulses")}>Pulses</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/dry-fruits")}>Dry Fruits</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/dmart-grocery")}>DMart Grocery</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/cooking-oil")}>Cooking Oil</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/ghee-vanaspati")}>Ghee & Vanaspati</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/flours-grains")}>Flours & Grains</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/rice-products")}>Rice & Rice Products</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/masala-spices")}>Masala & Spices</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/grocery/salt-sugar-jaggery")}>Salt / Sugar / Jaggery</button>
              </li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/appliancescore-131022.svg"
              alt="Appliances"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">APPLIANCES</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/appliances/home-appliances")}>Home Appliances</button>
              </li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/specialscore-131022.svg"
              alt="Specials"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">SPECIALS</h2>
            <ul className="space-y-1">
              <li>
                <button onClick={() => handleNavigate("/specials/value-packs")}>Value Packs</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/specials/discover-more")}>Discover More</button>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/dairybeverages-131022.svg"
              alt="Dairy & Beverages"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">DAIRY & BEVERAGES</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/dairy-beverages/beverages")}>Beverages</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/dairy-beverages/dairy")}>Dairy</button>
              </li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/cosmetics-131022.svg"
              alt="Beauty & Cosmetics"
              className="mt-4 mb-2 w-12"
            />
            <h2 className="font-bold mb-2">BEAUTY & COSMETICS</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/beauty-cosmetics/skin")}>Skin</button>
              </li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/baby-kids-131022.svg"
              alt="Baby & Kids"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">BABY & KIDS</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/baby-kids/diapering")}>Diapering</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/baby-kids/baby-care")}>Baby Care</button>
              </li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/footwearcore-131022.svg"
              alt="Footwear"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">FOOTWEAR</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/footwear/shoe-care")}>Shoe Care</button>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/packaged-foods-131022.svg"
              alt="Packaged Food"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">PACKAGED FOOD</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/packaged-food/biscuits-cookies")}>Biscuits & Cookies</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/snacks-farsans")}>Snacks & Farsans</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/breakfast-cereals")}>Breakfast Cereals</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/chocolates-candies")}>Chocolates & Candies</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/ketchup-sauce")}>Ketchup & Sauce</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/jams-spreads")}>Jams & Spreads</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/pasta-noodles")}>Pasta & Noodles</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/ready-to-cook")}>Ready To Cook</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/sweets")}>Sweets</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/pickles")}>Pickles</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/health-food")}>Health Food</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/soups")}>Soups</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/mukhwas")}>Mukhwas</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/bakery")}>Bakery</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/frozen-foods")}>Frozen Foods</button>
              </li>
            </ul>


            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7saTcRDWo1nMyJUf5jg21Q-gpPzcjnEisg&s"
              alt="Packaged Food"
              className="mb-2 w-20"
            />
            <h2 className="font-bold mb-2">Toys</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/packaged-food/blocks")}>Building Sets and Blocks</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/educational-toys")}>Educational Toys</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/outdoor-toys")}>Outdoor Toys</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/packaged-food/chocolates-electronic")}>Electronic Toys</button>
              </li>
            
            </ul>
          </div>
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/fruits-vegetables-131022.svg"
              alt="Fruits & Vegetables"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">FRUITS & VEGETABLES</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/fruits-vegetables/frozen-vegetable")}>Frozen Vegetable</button>
              </li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/personal-care-141022.svg"
              alt="Personal Care"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">PERSONAL CARE</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/personal-care/skin-care")}>Skin Care</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/face-care")}>Face Care</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/hair-care")}>Hair Care</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/lip-care")}>Lip Care</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/oral-care")}>Oral Care</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/sanitary-napkins")}>Sanitary Napkins</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/deos-perfumes")}>Deos & Perfumes</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/shaving-needs")}>Shaving Needs</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/baby-care")}>Baby Care</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/diapering")}>Diapering</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/health-wellness")}>Health & Wellness</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/personal-care/personal-hygiene")}>Personal Hygiene</button>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://cdn.dmart.in/images/categories/home-kitchen-131022.svg"
              alt="Home & Kitchen"
              className="mb-2"
            />
            <h2 className="font-bold mb-2">HOME & KITCHEN</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/home-kitchen/detergent-fabric-care")}>Detergent & Fabric Care</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/home-kitchen/cleaners")}>Cleaners</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/home-kitchen/utensil-cleaners")}>Utensil Cleaners</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/home-kitchen/freshener-repellents")}>Freshener & Repellents</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/home-kitchen/disinfectants")}>Disinfectants</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/home-kitchen/tissue-paper-napkins")}>Tissue Paper & Napkins</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/home-kitchen/pooja-needs")}>Pooja Needs</button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/home-kitchen/home-utility")}>Home Utility</button>
              </li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/aesc-homeutilityandorganiser-081223.svg"
              alt="Home Utility & Organisers"
              className="mt-4 mb-2 w-12"
            />
            <h2 className="font-bold mb-2">HOME UTILITY & ORGANISERS</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/home-utility-organisers/cleaning-tools-kits")}>Cleaning / Tools / Kits</button>
              </li>
            </ul>
            <img
              src="https://cdn.dmart.in/images/categories/stationary-131022.svg"
              alt="School Supplies"
              className="mt-4 mb-2"
            />
            <h2 className="font-bold mb-2">SCHOOL SUPPLIES</h2>
            <ul className="space-y-1 mb-4 font-extralight">
              <li>
                <button onClick={() => handleNavigate("/school-supplies/stationery-sets")}>Stationery Sets</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
