import React, { useEffect, useState } from 'react';

import logo from './veg-logo.svg';



import { ProductCard }  from "../../customer/Components/Product/ProductCard/ProductCard";

export function DiscoverMore({showall, activeSubTab, setActiveTab }) {
 
  const LightBatteriesData = [
     {
      productname: "Kiwi Express Shine Sponge - Black",
      productimg: 'https://cdn.dmart.in/images/products/NOV150000912xx16NOV23_5_P.jpg',
      productprice: "₹92",
      aplabazarprice: "₹75",
      offprice: "17",
      quantity: " 5 ml",
      logo: logo,
      catogery: "Discover More",
    },
    {
      productname: "Mirabelle Berries Fairness Facial No.1 K-Mask ",
      productimg: 'https://cdn.dmart.in/images/products/JUN140001393xx8JUN22_5_P.jpg',
      productprice: "₹99",
      aplabazarprice: "₹49.5",
      offprice: "49.5",
      quantity: "25 ml",
      logo: logo,
      catogery: "Discover More",
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
