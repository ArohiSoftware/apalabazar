import React from 'react'

import logo from './veg-logo.svg'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'



export function Cheese() {

const FloursData = [
  {
    productname:"Cheese" ,
    productimg: "./cheese (3).jpg",
    productprice:"₹385" ,
    aplabazarprice:"₹338",
    offprice:"₹12",
    quantity:"5 kg",
    logo : logo,
  },


  {
    productname:"Cheese" ,
    productimg: "./cheese1.png",
    productprice:"₹149" ,
    aplabazarprice:"₹111",
    offprice:"₹26",
    quantity:"1 kg",
    logo : logo,
  },


  {
    productname:"Cheese" ,
    productimg: "./cheese4.jpg" ,
    productprice:"₹50" ,
    aplabazarprice:"₹41",
    offprice:"₹18",
    quantity:"500 g",
    logo : logo,
  },


];
return(

<div className='flex  flex-wrap w-full'>

{
  FloursData.map(
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

