import React from 'react'

import logo from './veg-logo.svg'
import ProductCard from '../../../customer/Components/Products/Cards'

import ashirvaadatta from '../Flours/aashirvaad-sugar-release-control-atta-img.webp'
import chanabesan from '../Flours/chana-dalfine-besan-img.webp'
import cornflour from '../Flours/corn-flour-starch-img.webp'
import attachakki from '../Flours/fortune-atta-chakki-fresh-img.webp'
import fortunemaida from '../Flours/fortune-maida-img.webp'
import bajraatta from '../Flours/organic-bajra-atta-img.webp'
import brownrice from '../Flours/organic-brown-rice-atta-img.webp'
import jowarflour from '../Flours/organic-jowar-flour-img.webp'
import maize from '../Flours/organic-maize-flourmakka-atta-img.webp'
import sattuatta from '../Flours/organic-sattu-atta-img.webp'
import soojirawa from '../Flours/organic-soojirawa-img.webp'
import brokenwheat from '../Flours/organic-wheat-broken-dhaliya-img.webp'
import readymixragi from '../Flours/ready-mix-ragi-idli-img.webp'
import riceflour from '../Flours/royal-rice-flour-img.webp'

export function Flours({activeSubTab}) {

const FloursData = [
  {
     id: 10,
  name: "Sugar Release Control Atta" ,
     image: ashirvaadatta ,
    mrp:"₹385" ,
    price:"₹338",
   discount:"12",
    weight:"5 kg",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },


  {
     id: 10,
  name: "Fine Besan-100% Chana Dal" ,
     image: chanabesan ,
    mrp:"₹149" ,
    price:"₹111",
   discount:"26",
    weight:"1 kg",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },


  {
     id: 10,
  name: "Corn Flour/Starch" ,
     image: cornflour ,
    mrp:"₹50" ,
    price:"₹41",
   discount:"18",
    weight:"500 g",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },

  {
     id: 10,
  name: "Chakki Frersh Atta " ,
     image: attachakki,
    mrp:"₹85" ,
    price:"₹61",
   discount:"27",
    weight:"1 kg",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },



  {
     id: 10,
  name: "Maida/Refine Flour" ,
     image: fortunemaida ,
    mrp:"₹50" ,
    price:"₹39",
   discount:"9",
    weight:"500 g",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },


  {
     id: 10,
  name: "Organic-Bajra Atta" ,
     image: bajraatta ,
    mrp:"₹50" ,
    price:"₹40",
   discount:"10",
    weight:"500 g",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },



  {
     id: 10,
  name: "Sesame Oil" ,
     image: brownrice ,
    mrp:"₹625" ,
    price:"₹625",
   discount:"19",
    weight:"1 L",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },



  {
     id: 10,
  name: "Total Balance Oil & Soyabean Oil" ,
     image: jowarflour ,
    mrp:"₹160" ,
    price:"₹139",
   discount:"13",
    weight:"1 L",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },

  
  {
     id: 10,
  name: "Total Balance Oil & Soyabean Oil" ,
     image: maize,
    mrp:"₹160" ,
    price:"₹139",
   discount:"13",
    weight:"1 L",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },


  {
     id: 10,
  name: "Total Balance Oil & Soyabean Oil" ,
     image: sattuatta ,
    mrp:"₹160" ,
    price:"₹139",
   discount:"13",
    weight:"1 L",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },


  {
     id: 10,
  name: "Total Balance Oil & Soyabean Oil" ,
     image: soojirawa ,
    mrp:"₹160" ,
    price:"₹139",
   discount:"13",
    weight:"1 L",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },



  {
     id: 10,
  name: "Total Balance Oil & Soyabean Oil" ,
     image: brokenwheat ,
    mrp:"₹160" ,
    price:"₹139",
   discount:"13",
    weight:"1 L",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },

  {
     id: 10,
  name: "Total Balance Oil & Soyabean Oil" ,
     image: readymixragi,
    mrp:"₹160" ,
    price:"₹139",
   discount:"13",
    weight:"1 L",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  },

  {
     id: 10,
  name: "Total Balance Oil & Soyabean Oil" ,
     image: riceflour,
    mrp:"₹160" ,
    price:"₹139",
   discount:"13",
    weight:"1 L",
     url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,

  }
];

return(

  <div className=" mt-[12.5vh] cookingoilcards border w-full flex flex-wrap gap-9 ">
    {FloursData.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
</div>
    
  )
}

