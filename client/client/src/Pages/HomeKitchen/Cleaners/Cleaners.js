import React, { useEffect, useState } from 'react';

import logo from './veg-logo.svg';



import { ProductCard } from '../../../customer/Components/Product/ProductCard/ProductCard';

export function Cleaners({showall, activeSubTab, setActiveTab }) {
 
  const CleanersData = [
    {
      productname: "Phenox Concentrated Floor Cleaner",
      productimg: 'https://cdn.dmart.in/images/products/FEB150000998xx6FEB24_5_P.jpg',
      productprice: "₹150",
      aplabazarprice: "₹110",
      offprice: "₹40",
      quantity: "1 Litre",
      logo: logo,
      catogery: "Cleaners",
      subCatogery: "Floor Cleaners"
    },
    {
      productname: "Lizol Disinfectant Surface Cleaner - Citrus : 1 Litre",
      productimg: 'https://cdn.dmart.in/images/products/JAN150003918xx8JAN22_5_P.jpg',
      productprice: "₹239",
      aplabazarprice: "₹210",
      offprice: "₹22",
      quantity: " 1 Litres",
      logo: logo,
      catogery: "Cleaners",
      subCatogery: "Floor Cleaners  "
    },
    {
      productname: "Harpic Power Plus Toilet Cleaner - Original : ",
      productimg: 'https://cdn.dmart.in/images/products/KTOILTCLNR2LHarp2xx030621_5_P.jpg',
      productprice: "₹307",
      aplabazarprice: "₹275",
      offprice: "12",
      quantity: "2x1 Litre",
      logo: logo,
      catogery: "Cleaners",
      subCatogery: "Toilet Cleaners"
    },
    {
      productname: "Harpic Bathroom Cleaner Lemon ",
      productimg: 'https://cdn.dmart.in/images/products/KTOILTCLNR1LHarp2xx030621_5_P.jpg',
      productprice: "₹210",
      aplabazarprice: "₹190",
      offprice: "20",
      quantity: "1 Litre",
      logo: logo,
      catogery: "Cleaners",
      subCatogery: "Other Cleaners"
    },

    
  ];


  return (
    <div className='flex flex-col lg:flex-row gap-6 font-semibold'>
      {
        CleanersData.map((data, index) => {
         
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
