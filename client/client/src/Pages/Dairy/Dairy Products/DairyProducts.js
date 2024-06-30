import React from 'react'

import logo from './veg-logo.svg'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'





export function DairyProducts() {

const MasalaData = [
  {
    productname:"Cream" ,
    productimg: "./cream.jpg",
    productprice:"₹250" ,
    aplabazarprice:"₹162",
    offprice:"₹35",
    quantity:"500 g",
    logo : logo,
  },


  {
    productname:"Lassir" ,
    productimg: "./lassi.png" ,
    productprice:"₹185" ,
    aplabazarprice:"₹180",
    offprice:"₹5",
    quantity:"200 g",
    logo : logo,
  },


  {
    productname:"Khoa" ,
    productimg: "./khoa1).jpg ",
    productprice:"₹176" ,
    aplabazarprice:"₹144",
    offprice:"₹18",
    quantity:"100g",
    logo : logo,
  },

  {
    productname:"Paneer" ,
    productimg: "./paneer2.png" ,
    productprice:"₹87" ,
    aplabazarprice:"₹69",
    offprice:"₹20",
    quantity:"100 g",
    logo : logo,
  },



  {
    productname:"Paneer" ,
    productimg: "./panner1png.png" ,
    productprice:"₹180" ,
    aplabazarprice:"₹166",
    offprice:"₹14",
    quantity:"100 g",
    logo : logo,
  },

  {
    productname:"Shrikhand" ,
    productimg: "./shrikhand.png" ,
    productprice:"₹180" ,
    aplabazarprice:"₹166",
    offprice:"₹14",
    quantity:"100 g",
    logo : logo,
  },
  {
    productname:"Shrikhand" ,
    productimg: "./shrikhand1.jpg" ,
    productprice:"₹180" ,
    aplabazarprice:"₹166",
    offprice:"₹14",
    quantity:"100 g",
    logo : logo,
  },



  

];
return(

<div className='flex  flex-wrap w-full'>

{
  MasalaData.map(
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

