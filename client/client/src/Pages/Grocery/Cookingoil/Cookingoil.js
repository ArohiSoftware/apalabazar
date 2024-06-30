import React from "react";
import ProductCard from "../../../customer/Components/Products/Cards";
import "./Cookingoil.css";

import logo from "./veg-logo.svg";

import borgescanolaoil from "../Cookingoil/borges-canola-oil-img.webp";
import groundnutoil from "../Cookingoil/groundnut-oil-img.webp";
import lightoliveoil from "../Cookingoil/light-olive-oil-img.webp";
import nakshatraoil from "../Cookingoil/nakshatra-pooja-oil-img.webp";
import vegetableoil from "../Cookingoil/refined-vegetable-oil-img.webp";
import sesameoil from "../Cookingoil/sesame-oil-img.webp";
import soyabeanoil from "../Cookingoil/soyabean-flaxseeds-oil-img.webp";
import sundropoil from "../Cookingoil/sundrop-lite-cooking-oil-img.webp";
import sunfloweroil from "../Cookingoil/sunflower-cooking-oil-img.webp";
import coconutoil from "../Cookingoil/unrefined-cold-pressed-virgin-coconut-oil-img.webp";

export function Cookingoil() {
  const CookingOilData = [
    {
      id: 1,
      name: "Canola Oil",
      image: borgescanolaoil,
      mrp: "₹620",
      price: "₹359",
      discount: "42",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 2,
      name: "Groundnut Oil-Argemone Oil Free",
      image: groundnutoil,
      mrp: "₹700",
      price: "₹685",
      discount: "15",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 3,
      name: "Light Olive Oil-Frying & Grilling",
      image: lightoliveoil,
      mrp: "₹920",
      price: "₹563",
      discount: "39",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 4,
      name: "Nakshatra Pooja oil",
      image: nakshatraoil,
      mrp: "₹105",
      price: "₹86",
      discount: "18",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 5,
      name: "Refined Vegetable Oil",
      image: vegetableoil,
      mrp: "₹180",
      price: "₹130",
      discount: "50",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 6,
      name: "Sesame Oil",
      image: sesameoil,
      mrp: "₹625",
      price: "₹625",
      discount:"19",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 7,
      name: "Total Balance Oil & Soyabean Oil",
      image: soyabeanoil,
      mrp: "₹160",
      price: "₹139",
      discount: "13",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 8,
      name: "Sundrop Lite-Cooking Oil",
      image: sundropoil,
      mrp: "₹190",
      price: "₹185",
      discount: "5",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 9,
      name: " Sunflower Cooking Oil",
      image: sunfloweroil,
      mrp: "₹450",
      price: "₹324",
      discount: "28",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },

    {
      id: 10,
      name: " Unrefined  Coconut Oil-Naturally",
      image: coconutoil,
      mrp: "₹699",
      price: "₹524",
      discount: "25",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
  ];
  return (
    <>
      <div className=" mt-[12.5vh] cookingoilcards border w-full flex flex-wrap gap-9 ">
      {CookingOilData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
   
      </div>
    </>
  );
}
