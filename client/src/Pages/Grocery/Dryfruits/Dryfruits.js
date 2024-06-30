import React, { useEffect, useState } from "react";

import logo from "./veg-logo.svg";

import pumpkinseed from "../Dryfruits/green-pumpkin-seeds-img.webp";
import liondates from "../Dryfruits/lion-dates-img.webp";
import kismis from "../Dryfruits/organic-kismis-img.webp";
import pista from "../Dryfruits/pista-kernel-img.webp";
import raisinkishmish from "../Dryfruits/raisinskishmish-black-with-seeds-img.webp";
import sabja from "../Dryfruits/seeds-sabja-img.webp";
import walnutakhrot from "../Dryfruits/walnutakhrot-kernels-chile-img.webp";
import watermelonseed from "../Dryfruits/watermelontarbuj-seeds-img.webp";
import ProductCard from "../../../customer/Components/Products/Cards";

export function Dryfruits({ showall, activeSubTab, setActiveTab }) {
  const DryfruitsData = [
    {
  
      id: 1,
      name: "Green Pumpkin Seeds",
      image: pumpkinseed,
      mrp: "₹50",
      price: "₹49",
      discount: "1",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Chana Dal",
    },
    {
      id: 2,
      name: "Dates/Kharjura",
      image: liondates,
      mrp: "₹185",
      price: "₹180",
      discount: "5",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Dates",
    },
    {
      id: 3,
      name: "Organic kismis/Raisins",
      image: kismis,
      mrp: "₹599",
      price: "₹493",
      discount: "18",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Raisins",
    },
    {
      id:4,
      name: "Pista Magaj-Plain Kernel ",
      image: pista,
      mrp: "₹300",
      price: "₹226",
      discount: "25",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Pista",
    },
    {
      id:5,
      name: "Black Raisins",
      image: raisinkishmish,
      mrp: "₹120",
      price: "₹93",
      discount: "23",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Raisins",
    },
    {
      id:5,
      name: "Sabja",
      image: sabja,
      mrp: "₹180",
      price: "₹130",
      discount: "50",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Walnuts",
    },
    {
      id:6,
      name: "Walnut/Akhrot",
      image: walnutakhrot,
      mrp: "₹1000",
      price: "₹774",
      discount: "23",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Walnuts",
    },
    {
      id:7,
      name: "Watermelon Seeds/Kallangadi Bija",
      image: watermelonseed,
      mrp: "₹80",
      price: "₹53",
      discount: "34",
      weight: "1 L",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Walnuts",
    },
  ];

  return (

    <div className=" mt-[12.5vh] cookingoilcards border w-full flex flex-wrap gap-9 ">
      {DryfruitsData.map((data, index) => {
        if (data.subCatogery === activeSubTab) {
          return (
            <ProductCard key={index} product={data} />
          );
        } else if (showall) {
          return (
            <ProductCard key={index} product={data} />
          );
        } else {
          return (
           null
          )
        }
      })}
    </div>
  );
}
