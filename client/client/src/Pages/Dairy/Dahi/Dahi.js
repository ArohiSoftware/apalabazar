import React from 'react'

import logo from './veg-logo.svg'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'



export function Dahi() {

const PulsesData = [
  {
    productname:"Dahi" ,
    productimg: "./dahi.jpg",
    productprice:"₹50" ,
    aplabazarprice:"₹49",
    offprice:"₹1",
    quantity:"50 g",
    logo : logo,
  },


  {
    productname:"Dahi" ,
    productimg: "./dahi1.jpg" ,
    productprice:"₹185" ,
    aplabazarprice:"₹180",
    offprice:"₹5",
    quantity:"500 g",
    logo : logo,
  },


  {
    productname:"Dahi" ,
    productimg: "./dahi2.jpg" ,
    productprice:"₹599" ,
    aplabazarprice:"₹493",
    offprice:"₹18",
    quantity:"1 kg",
    logo : logo,
  },

  {
    productname:"Dahi " ,
    productimg: "./dahi3.jpg" ,
    productprice:"₹300" ,
    aplabazarprice:"₹226",
    offprice:"₹25",
    quantity:"100 g",
    logo : logo,
  },



  {
    productname:"Dahi" ,
    productimg: "./dahi4.jpg" ,
    productprice:"₹120" ,
    aplabazarprice:"₹93",
    offprice:"₹23",
    quantity:"200 g",
    logo : logo,
  },



  
  

];
return(

<div className='flex  flex-wrap w-full'>

{
  PulsesData.map(
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

