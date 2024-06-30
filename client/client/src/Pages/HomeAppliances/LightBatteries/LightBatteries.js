import React, { useEffect, useState } from 'react';

import logo from './veg-logo.svg';



import { ProductCard } from '../../../customer/Components/Product/ProductCard/ProductCard';

export function LightBatteries({showall, activeSubTab, setActiveTab }) {
 
  const LightBatteriesData = [
    {
      productname: "Eveready 1015 R6 AA Battery",
      productimg: 'https://cdn.dmart.in/images/products/JUL180000109xx26JUL22_5_P.jpg',
      productprice: "₹400",
      aplabazarprice: "₹109",
      offprice: "71%",
      quantity: "10 Units",
      logo: logo,
      catogery: "LightBatteries",
      subCatogery: "Chana Dal"
    },
    {
      productname: "Eveready AAA 1012 Battery ",
      productimg: 'https://cdn.dmart.in/images/products/JUL180000110xx26JUL22_5_P.jpg',
      productprice: "₹115",
      aplabazarprice: "₹109",
      offprice: "₹65",
      quantity: "10 Units",
      logo: logo,
      catogery: "LightBatteries",
      subCatogery: "Chana Dal"
    },{
      productname: "Bajaj Ivora Plus Base B22 White LED Bulb",
      productimg: 'https://cdn.dmart.in/images/products/DEC180000424xx18DEC21_5_P.jpg',
      productprice: "₹145",
      aplabazarprice: "₹65",
      offprice: "805",
      quantity: "9 Watts",
      logo: logo,
      catogery: "LightBatteries",
      subCatogery: "Chana Dal"
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
