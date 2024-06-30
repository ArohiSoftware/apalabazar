import React from 'react'

import logo from './veg-logo.svg'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'






export function Yogurt() {

const SaltData = [
  {
    productname:"Yogurt" ,
    productimg: "./yogurt1.jpg",
    productprice:"₹30" ,
    aplabazarprice:"₹16",
    offprice:"₹14",
    quantity:"200 g",
    logo : logo,
  },


  {
    productname:"Yogurt" ,
    productimg: "./yogurt2.jpg" ,
    productprice:"₹185" ,
    aplabazarprice:"₹180",
    offprice:"₹5",
    quantity:"500 g",
    logo : logo,
  },


  {
    productname:"Yogurt" ,
    productimg: "./yogurt4.png" ,
    productprice:"₹599" ,
    aplabazarprice:"₹493",
    offprice:"₹18",
    quantity:"1 kg",
    logo : logo,
  },

];
return(

<div className='flex  flex-wrap w-full'>

{
  SaltData.map(
    (data) => {
    
  return (
    
     <ProductCard  productname={data.productname} productimg={data.productimg} productprice={data.productprice} aplabazarprice={data.aplabazarprice} offprice={data.offprice} quantity={data.quantity} logo={data.logo} />
  )
}
  )
}

</div>
    
  )
}

