import React from 'react'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'
import './Butter.css'
import logo from './veg-logo.svg'

export function Butter() {

const CookingOilData = [

  {
    productname:"Cow Ghee" ,
    productimg: "./ghee3.png" ,
    productprice:"₹620" ,
    aplabazarprice:"₹359",
    offprice:"₹42",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Ghee" ,
    productimg: "./ghee2.png" ,
    productprice:"₹700" ,
    aplabazarprice:"₹685",
    offprice:"₹15",
    quantity:"1 L",
    logo : logo,
  },

  {
    productname:"Desi Ghee" ,
    productimg: "./ghee4.png" ,
    productprice:"₹920" ,
    aplabazarprice:"₹563",
    offprice:"₹39",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Pure Ghee" ,
    productimg: "./ghee5.png",
    productprice:"₹105" ,
    aplabazarprice:"₹86",
    offprice:"₹18",
    quantity:"1 L",
    logo : logo,
  },


 

];
return(
<>
<div className='cookingoilcards flex flex-wrap '>
{
  
  CookingOilData.map(
    (data) => {
    
  return (

    
     <ProductCard  productname={data.productname} productimg={data.productimg} productprice={data.productprice} aplabazarprice={data.aplabazarprice} offprice={data.offprice} quantity={data.quantity} logo={data.logo} />
  
  )
}

  )
}
</div>
</>
    
  )
}

