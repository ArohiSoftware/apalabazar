import React from 'react'

import logo from './veg-logo.svg'


import ProductCard from '../../../customer/Components/Products/Cards.js'



export function Milk() {

const DryfruitsData = [
  {
    productname:"Milk" ,
    productimg: "./milk1.jpg" ,
    productprice:"₹50" ,
    aplabazarprice:"₹49",
    offprice:"₹1",
    quantity:"50 g",
    logo : logo,
    catogery:"Dry Fruits"
  },


  {
    productname:"Milk" ,
    productimg: "./milk1.png" ,
    productprice:"₹185" ,
    aplabazarprice:"₹180",
    offprice:"₹5",
    quantity:"500 g",
    logo : logo,
    catogery:"Dry Fruits"
  },


  {
    productname:"Milk" ,
    productimg: "./milk2.png" ,
    productprice:"₹599" ,
    aplabazarprice:"₹493",
    offprice:"₹18",
    quantity:"1 kg",
    logo : logo,
    catogery:"Dry Fruits"
  },

  {
    productname:"Milk" ,
    productimg: "./milk3.png" ,
    productprice:"₹300" ,
    aplabazarprice:"₹226",
    offprice:"₹25",
    quantity:"100 g",
    logo : logo,
    catogery:"Dry Fruits"
  },



  {
    productname:"Milk Powder" ,
    productimg: "./milkpowder.jpg" ,
    productprice:"₹120" ,
    aplabazarprice:"₹93",
    offprice:"₹23",
    quantity:"200 g",
    logo : logo,
    catogery:"Dry Fruits"
  },



];
return(

<div className=' flex  flex-wrap w-full  '>
{/* 
{
  DryfruitsData.map(
    (data) => {
    
  return (
    
     <ProductCard  productname={data.productname} productimg={data.productimg} productprice={data.productprice} aplabazarprice={data.aplabazarprice} offprice={data.offprice} quantity={data.quantity} logo={data.logo} />
  )
}
  )
} */}
{DryfruitsData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}


</div>
    
  )
}

