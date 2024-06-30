import React, { useEffect, useState } from 'react';

import logo from './veg-logo.svg';



import { ProductCard } from '../../../customer/Components/Product/ProductCard/ProductCard';

export function DetergentFabricCare({showall, activeSubTab, setActiveTab }) {
 
  const LightBatteriesData = [
    {
      productname: "Surf Excel Matic Liquid Detergent Top Load Pouch",
      productimg: 'https://cdn.dmart.in/images/products/FEB150001009xx29FEB24_5_P.jpg',
      productprice: "₹430",
      aplabazarprice: "₹375",
      offprice: "₹55",
      quantity: "2 Litres",
      logo: logo,
      catogery: "Detergent & Fabric Care",
      subCatogery: "Liquid Detergent"
    },
    {
      productname: "Ariel Matic Top Load Liquid Detergent Refill",
      productimg: 'https://cdn.dmart.in/images/products/APR150003266xx13APR23_5_P.jpg',
      productprice: "₹439",
      aplabazarprice: "₹375",
      offprice: "₹64",
      quantity: " 2 Litres",
      logo: logo,
      catogery: "Detergent & Fabric Care",
      subCatogery: "Liquid Detergent  "
    },{
      productname: "Surf Excel Easy Wash Detergent Powder",
      productimg: 'https://cdn.dmart.in/images/products/FEB150003734xx29FEB24_5_P.jpg',
      productprice: "₹770",
      aplabazarprice: "₹589",
      offprice: "181",
      quantity: "5 kgs",
      logo: logo,
      catogery: "Detergent & Fabric Care",
      subCatogery: "Detergent Powder"
    },
    {
      productname: "Tide Plus Detergent Powder - Jasmine & Rose : 2 kgs",
      productimg: 'https://cdn.dmart.in/images/products/JAN150000667xx30JAN24_5_P.jpg',
      productprice: "₹280",
      aplabazarprice: "₹249",
      offprice: "31",
      quantity: "5 kgs",
      logo: logo,
      catogery: "Detergent & Fabric Care",
      subCatogery: "Detergent Powder"
    },
    {
      productname: "Rin Detergent Bar",
      productimg: 'https://cdn.dmart.in/images/products/FEB150003297xx29FEB24_5_P.jpg',
      productprice: "₹150",
      aplabazarprice: "₹135",
      offprice: "15",
      quantity: "6x250 gms",
      logo: logo,
      catogery: "Detergent & Fabric Care",
      subCatogery: "Detergent Bar"
    },
    {
      productname: "Comfort After Wash Fabric Conditioner - Lily Fresh",
      productimg: 'https://cdn.dmart.in/images/products/JAN150000667xx30JAN24_5_P.jpg',
      productprice: "₹235",
      aplabazarprice: "₹195",
      offprice: "40",
      quantity: " 860 ml",
      logo: logo,
      catogery: "Detergent & Fabric Care",
      subCatogery: "Fabric Care"
    },
    
  ];


  return (
    <div className='flex flex-wrap w-full'>
      {
        LightBatteriesData.map((data, index) => {
         
          if (data.subCatogery === activeSubTab) {
            return (
              <ProductCard
                key={index}
                productname={data.productname}
                productimg={data.productimg}
                productprice={data.productprice}
                aplabazarprice={data.aplabazarprice}
                offprice={data.offprice}
                quantity={data.quantity}
                logo={data.logo}
              />
            )
          } else if(showall){
            return (
              <ProductCard
                key={index}
                productname={data.productname}
                productimg={data.productimg}
                productprice={data.productprice}
                aplabazarprice={data.aplabazarprice}
                offprice={data.offprice}
                quantity={data.quantity}
                logo={data.logo}
              />
            )
          }else {
            return null;
          }
        })
      }
    </div>
  );
}
