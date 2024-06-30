import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { FrozenData } from '../../../../Pages/FrozenFood/constant';
import Navbar from '../../Navbar/Navbar';
import MobNavbar from "../../Navbar/MobileNavbar"
import Footer from '../../footer/Footer';
import { useCartContext } from '../../../../Usecontext/cartContext';

function ProductDetails() {
  const { addTocart } = useCartContext();
  const pathname = useLocation();
  const [tab, setTab] = useState("Description");
  const [productData, setProductData] = useState({
    name: "",
    url: "",
    mrp: "",
    price: "",
    discount: "",
    image: [],
    description: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    FrozenData.map((item) => {
      if (item.url === pathname.pathname) {
        setProductData({ ...item });
      }
    });
  }, [pathname.pathname]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
const [viewport,setViewport] = useState(false);
  useEffect(() => {
    if(window.innerWidth < 620){
      setViewport(true)
    }else{
      setViewport(false)
    }
  },[])
  return (
    <>
      <div className=' lg:block'>      
        {viewport ? <MobNavbar/> :  <Navbar number={12} />}
      </div>
      <div className='flex flex-col overflow-hidden items-center justify-center mt-12'>
        <div className='rounded-3xl bg-gradient-to-br w-full from-violet-500 to-orange-300 p-[1px]'>
          <div className='flex flex-col shadow-lg backdrop-blur-sm bg-white/60 rounded-3xl lg:flex-row items-center justify-center'>
            <div className='w-3/4 lg:w-[399px] my-6 lg:my-0 mx-12'>
              <Slider {...settings}>
                {productData.image.map((image, i) => (
                  <div key={i}>
                    <img src={image} className='w-96 rounded-xl' alt={productData.productTitle} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className='w-screen lg:w-full p-2 backdrop-blur-xl pl-8 z-10 relative'>
              <h2 className='text-2xl mb-4 font-thin'>{productData.productTitle}</h2>
              
              <hr className='w-24 mt-4' />
              <div className='rounded-lg p-2'>
                <h2 className='font-semibold text-xl'>{productData.name}</h2>
                <div className='flex gap-1'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
                <div className='rounded-lg p-2  my-2 '>
                  <p className='my-1 text-lg'>Variant</p>
                  <button className='p-1 bg-green-100 rounded-lg w-24 my-2 text-green-700 border border-green-700'>{productData.productWeight}</button>
                </div>
                <hr className='my-6' />
                <div className='flex gap-2 items-center'>
                  <div className='flex gap-2 text-gray-400 bg-gray-200 rounded-lg items-center px-2'>
                    <p>MRP</p>
                    <span className='line-through'>{productData.mrp}</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right">
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                  <div className='bg-violet-200 border border-violet-600 px-2 rounded-lg p-1'>
                    <span className='font-bold'>{productData.price}</span>
                  </div>
                </div>
                <div className='flex hover:scale-[103%] transition-all justify-between my-6 p-[2px] w-fit rounded-lg bg-gradient-to-br from-violet-500 to-orange-300'>
                  <button onClick={() => addTocart(productData)} className='bg-gradient-to-b from-violet-100 to-orange-100 border w-32 text-black p-2 rounded-lg'>Add to Cart</button>
                </div>
                <div className='flex justify-between my-6 rounded-md'>
                  <button className='bg-green-100 text-green-600 p-2 rounded-md'>Save {productData.discount}</button>
                </div>
                <hr className='my-6' />
              </div>
              
            </div>
            
          </div>
          
        </div>
        <nav className='flex justify-start items-center gap-12 select-none mt-12'>
                <ul onClick={() => setTab("Description")} className={`cursor-pointer select-none transition-all ${tab === "Description" ? 'border-b-2 border-green-600 p-2' : ''}`}>Description</ul>
                <ul onClick={() => setTab("Country of Origin")} className={`cursor-pointer transition-all ${tab === "Country of Origin" ? 'border-b-2 border-green-600 p-2' : ''}`}>Country of Origin</ul>
                <ul onClick={() => setTab("Disclaimer")} className={`cursor-pointer transition-all ${tab === "Disclaimer" ? 'border-b-2 border-green-600 p-2' : ''}`}>Disclaimer</ul>
              </nav>
              <div className='lg:w-[700px] min-h-screen w-full mx-auto font-mono'>
                {tab === "Description" && <textarea rows={productData.description.length > 900 ? 40 : 30} readOnly={true} className='h-fit text-lg outline-none mx-auto mt-12 w-full lg:w-[70vw]'>{productData.description}</textarea>}
                {tab === "Disclaimer" && <p className='mt-12 lg:w-[70vw] w-full'>While we work to ensure that the product information is correct, actual product packaging and material may contain more or different information from what is given here. Please read the product labels, description, directions, warning and other information that comes with the actual product before use.</p>}
                {tab === "Country of Origin" && <p className='mt-12'>India</p>}
              </div>
      </div>
      <Footer />
    </>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="orange" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default ProductDetails;
