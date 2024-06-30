import React from 'react'
import './ProductCard.css'



export function ProductCard({ productimg, logo, productname, productprice, aplabazarprice, quantity, offprice }) {
  return (

    <>
      <div className='box '>
        <div className='card'>
          <div>
            <img alt={productname} className='imgg' src={productimg} />
            {/* <img  className='logo' src={logo} /> */}
          </div>
        </div>

        <div>
          <h6 className='Product-name w-[240px] mx-auto text-balance'>{productname}</h6>



          <div className='mrpinfo'>
            <div className='price'>
              <p>{offprice}</p>
              <p className='off'>OFF</p>
            </div>
            <div className='mrp'>
              <p className='mrp1'>MRP</p>
              <p className='mrp2'> {productprice}</p>
            </div>


            <div className='mrpp'>
              <p className='mrpp1'>Apala Bazar</p>
              <p className='mrpp2'> {aplabazarprice}</p>
            </div>
            <p className='taxes'>(Inclusive of all taxes)</p>

          </div>



          <div className='bttn ml-10'>
            <button className='mt-1' >ADD TO CART </button>
          </div>

        </div>

      </div>





    </>
  )
}




