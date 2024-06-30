import React from 'react'

import logo from './veg-logo.svg'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'

import chana from '../Pulses/chana-dal-img.webp'
import greenharimoog from '../Pulses/greenhari-moong-dalchilka-unpolished-high-in-protein-dietary-fibre.webp'
import masoordal from '../Pulses/masoor-dal-img.webp'
import mixdal from '../Pulses/mix-dal-img.webp'
import moongdal from '../Pulses/moong-dal-img.webp'
import toordal from '../Pulses/toor-arhar-dal-img.webp'
import uraddal from '../Pulses/urad-dal-white-img.webp'



export function Pulses() {

const PulsesData = [
  {
    productname:"Green Pumpkin Seeds" ,
    productimg: chana ,
    productprice:"₹50" ,
    aplabazarprice:"₹49",
    offprice:"₹1",
    quantity:"50 g",
    logo : logo,
  },


  {
    productname:"Dates/Kharjura" ,
    productimg: greenharimoog ,
    productprice:"₹185" ,
    aplabazarprice:"₹180",
    offprice:"₹5",
    quantity:"500 g",
    logo : logo,
  },


  {
    productname:"Organic kismis/Raisins" ,
    productimg: masoordal ,
    productprice:"₹599" ,
    aplabazarprice:"₹493",
    offprice:"₹18",
    quantity:"1 kg",
    logo : logo,
  },

  {
    productname:"Pista Magaj-Plain Kernel " ,
    productimg: mixdal ,
    productprice:"₹300" ,
    aplabazarprice:"₹226",
    offprice:"₹25",
    quantity:"100 g",
    logo : logo,
  },



  {
    productname:"Black Raisins" ,
    productimg: moongdal ,
    productprice:"₹120" ,
    aplabazarprice:"₹93",
    offprice:"₹23",
    quantity:"200 g",
    logo : logo,
  },


  {
    productname:"" ,
    productimg: toordal ,
    productprice:"₹180" ,
    aplabazarprice:"₹130",
    offprice:"₹50",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Sesame Oil" ,
    productimg: uraddal ,
    productprice:"₹625" ,
    aplabazarprice:"₹625",
     offprice:"₹19",
    quantity:"1 L",
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

