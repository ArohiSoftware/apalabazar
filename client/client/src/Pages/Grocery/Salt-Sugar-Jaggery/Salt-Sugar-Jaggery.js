import React from 'react'

import logo from './veg-logo.svg'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'

import blacksalt from '../Salt-Sugar-Jaggery/black-salt-powder-img.webp'
import brownsugar from '../Salt-Sugar-Jaggery/brown-sugar-img.webp'
import coconutsugar from '../Salt-Sugar-Jaggery/coconut-sugar-img.webp'
import lowsodiumsugar from './low-sodium-iodised-salt-img.webp'
import misrisugar from '../Salt-Sugar-Jaggery/misri-diamond-sugar-img.webp'
import rocksalt from '../Salt-Sugar-Jaggery/rock-salt-pink-img.webp'
import tatasalt from '../Salt-Sugar-Jaggery/tata-salt-iodized-img.webp'
import royalsugar from '../Salt-Sugar-Jaggery/royal-sugar-img.webp'




export function SaltSugarJaggery() {

const SaltData = [
  {
    productname:"Black Salt/Kala Namak-Powder" ,
    productimg: blacksalt,
    productprice:"₹30" ,
    aplabazarprice:"₹16",
    offprice:"₹14",
    quantity:"200 g",
    logo : logo,
  },


  {
    productname:"" ,
    productimg: brownsugar ,
    productprice:"₹185" ,
    aplabazarprice:"₹180",
    offprice:"₹5",
    quantity:"500 g",
    logo : logo,
  },


  {
    productname:"Organic kismis/Raisins" ,
    productimg: coconutsugar ,
    productprice:"₹599" ,
    aplabazarprice:"₹493",
    offprice:"₹18",
    quantity:"1 kg",
    logo : logo,
  },

  {
    productname:"Low Sodium Iodised Salt " ,
    productimg: lowsodiumsugar,
    productprice:"₹50" ,
    aplabazarprice:"₹41",
    offprice:"₹9",
    quantity:"100 g",
    logo : logo,
  },



  {
    productname:"Black Raisins" ,
    productimg: misrisugar ,
    productprice:"₹120" ,
    aplabazarprice:"₹93",
    offprice:"₹23",
    quantity:"200 g",
    logo : logo,
  },


  {
    productname:"Rock Salt/Uppu" ,
    productimg: rocksalt ,
    productprice:"₹120" ,
    aplabazarprice:"₹90",
    offprice:"₹30",
    quantity:"1kg",
    logo : logo,
  },



  {
    productname:"Sesame Oil" ,
    productimg: royalsugar  ,
    productprice:"₹625" ,
    aplabazarprice:"₹625",
     offprice:"₹19",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Vacuum Evaporated Iodized Salt" ,
    productimg: tatasalt,
    productprice:"₹28" ,
    aplabazarprice:"₹24",
    offprice:"₹4",
    quantity:"1kg",
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

