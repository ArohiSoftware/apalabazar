import React, { useEffect, useState } from 'react';

import logo from './veg-logo.svg';



import { ProductCard }  from "../../customer/Components/Product/ProductCard/ProductCard";

export function ValuePack({showall, activeSubTab, setActiveTab }) {
 
  const LightBatteriesData = [
    {
      productname: "Pears Pure & Gentle Bathing Bar",
      productimg: 'https://cdn.dmart.in/images/products/FEB140000852xx29FEB24_5_P.jpg',
      productprice: "₹372",
      aplabazarprice: "₹255",
      offprice: "₹117",
      quantity: "4x125 gms",
      logo: logo,
      catogery: "Value & Packs",
    },
    {
      productname: "Dove Cream Beauty Bathing Bar",
      productimg: 'https://cdn.dmart.in/images/products/IBathSoaps5X100gDOV586xx140521_5_P.jpg',
      productprice: "₹463",
      aplabazarprice: "₹300",
      offprice: "₹163",
      quantity: " 4x125 gms",
      logo: logo,
      catogery: "Value & Packs",
    },{
      productname: "Colgate Dental Cream Strong Teeth Toothpaste : ",
      productimg: 'https://cdn.dmart.in/images/products/JUN140000803xx26JUN23_5_P.jpg',
      productprice: "₹310",
      aplabazarprice: "₹260",
      offprice: "55",
      quantity: "500 gms",
      logo: logo,
      catogery: "Value & Packs",
    },
   
    
    
  ];


  return (
    <div className='flex '>
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
