import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { FrozenData } from '../../../../Pages/FrozenFood/constant';
import Navbar from '../../Navbar/Navbar';
import MobNavbar from "../../Navbar/MobileNavbar"
import Footer from '../../footer/Footer';
import './slick.css'
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
  const [viewport, setViewport] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 620) {
      setViewport(true)
    } else {
      setViewport(false)
    }
  }, [])
  return (
    <>
      <div className=' lg:block '>
        {viewport ? <MobNavbar /> : <Navbar number={12} />}
      </div>
      <div className='flex flex-col overflow-hidden items-center justify-center mt-5'>
        <div className='shadow-lg mt-5 bg-white w-full '>
          <div className='flex flex-col rounded-3xl mt-10 lg:flex-row items-center justify-center'>
            <div className='w-3/4 lg:w-[399px] lg:h-[300px] my-6 lg:my-0 mx-12'>
              <Slider {...settings}>
                <div className="flex justify-center items-center w-[400px] h-[300px]">
                  <img
                    src="https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_new-design_10132020_big.jpg.large.jpg"
                    className=' object-cover'
                    alt="Image 1"
                  />
                </div>
                <div className="flex justify-center items-center w-[400px] h-[300px]">
                  <img
                    src="https://www.reliancedigital.in/medias/iPhone-11-64GB-RED-491901640-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5NjQzNHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaDZmLzk0MjE4OTkyNjgxMjYuanBnfDU3ZGNiMTZiMDVmODJmZDg1NmFkZmQyZGQyYWEzN2VkZDZmYzY5ZTBmYTZkNDlhZTIxN2RhNDI3NGFkNDUwMGE"
                    className='  object-cover'
                    alt="Image 2"
                  />
                </div>
                <div className="flex justify-center items-center w-[400px] h-[300px]">
                  <img
                    src="https://www.maplestore.in/cdn/shop/files/iPhone_14_ProductRED_PDP_Image_Position-1A__WWEN_047b75d1-4b57-4c60-a742-314efb83b487_1445x.jpg?v=1701815105"
                    className=' object-cover'
                    alt="Image 3"
                  />
                </div>
              </Slider>

            </div>
            <div className='w-screen lg:w-full p-1 backdrop-blur-xl pl-8 z-10 relative'>
              <h2 className='text-2xl mb-4 font-thin'>{productData.productTitle}</h2>


              <div className='rounded-lg p-2'>
                <h2 className='font-semibold text-xl'>{productData.name}</h2>

                <div className='rounded-lg p-2   '>
                  <p className=' font-bold text-xl'>IPHONE 15 PRO </p>

                </div>
                <div className='flex gap-1'>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <hr className='my-6' />
                <div className='flex gap-2 items-center'>
                  <div className='flex text-black text-2xl font-bold rounded-lg items-center '>
                    <p>₹400</p>

                  </div>

                  <div className=' px-2 rounded-lg '>
                    <div class="relative">
                      <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-400"></div>
                      </div>
                      <div class="relative flex justify-center">
                        <span class=" text-gray-400">₹600</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between my-3 rounded-md'>
                  <button className='bg-green-100 text-green-600 px-3 py-1 rounded-md'> 100% Saved {productData.discount}</button>
                </div>
                <div className='flex hover:scale-[103%] transition-all justify-between my-6 p-[2px] w-fit rounded-lg bg-gradient-to-br from-violet-500 to-orange-300'>
                  <button onClick={() => addTocart(productData)} className='bg-green-400   w-32 text-black p-2 rounded-md'>Add to Cart</button>
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
        <div className='w-[80vw] mt-5  rounded-lg overflow-hidden p-6'>
          {tab === "Description" && <div class=" font-bold mb-4 flex flex-col">


            <p class="mb-10">This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.</p>
            <img src='https://www.apple.com/v/iphone/home/bu/images/meta/iphone__ky2k6x5u6vue_og.png'></img>

            <p class="mb-10 mt-10">This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of www.flipkart.com website.Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.</p>
            <img src='https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_new-design_10132020_big.jpg.large.jpg'></img>

            <p class="mb-10 mt-10">The domain name www.flipkart.com (hereinafter referred to as "Website") is owned by Flipkart Internet Private Limited a company incorporated under the Companies Act, 1956 with its registered office at Vaishnavi Summit, Ground Floor, 7th Main, 80 feet Road, 3rd Block, Koramangala Industrial Layout, Next to Wipro office, Corporation Ward No. 68, Koramangala, Bangalore - 560 034, Karnataka, India (hereinafter referred to as "Flipkart").Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.</p>
            <img src='https://www.reliancedigital.in/medias/iPhone-11-64GB-RED-491901640-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5NjQzNHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaDZmLzk0MjE4OTkyNjgxMjYuanBnfDU3ZGNiMTZiMDVmODJmZDg1NmFkZmQyZGQyYWEzN2VkZDZmYzY5ZTBmYTZkNDlhZTIxN2RhNDI3NGFkNDUwMGE'></img>

            <p class="mb-10 mt-10">Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.</p>
            <img src='https://fdn.gsmarena.com/imgroot/news/21/04/iphone-13-product-red-renders/-1200/gsmarena_002.jpg'></img>

            <p class="mb-10 mt-10 font-sm text-red-500">Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.</p>


          </div>}
          {tab === "Disclaimer" && <div class=" w-[80vw]  rounded-lg overflow-hidden p-6">
            <h2 class="text-2xl font-bold mb-4">Apala Bazaar Terms of Use</h2>
            <div class="text-gray-700">
              <p class="mb-4">This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>

              <p class="mb-4">This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of www.flipkart.com website.</p>

              <p class="mb-4">The domain name www.flipkart.com (hereinafter referred to as "Website") is owned by Flipkart Internet Private Limited a company incorporated under the Companies Act, 1956 with its registered office at Vaishnavi Summit, Ground Floor, 7th Main, 80 feet Road, 3rd Block, Koramangala Industrial Layout, Next to Wipro office, Corporation Ward No. 68, Koramangala, Bangalore - 560 034, Karnataka, India (hereinafter referred to as "Flipkart").</p>

              <p class="mb-4">Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.</p>

              <p class="mb-4">For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any natural or legal person who has agreed to become a buyer on the Website by providing Registration Data while registering on the Website as Registered User using the computer systems. Flipkart allows the User to surf the Website or making purchases without registering on the Website. The term "We", "Us", "Our" shall mean Flipkart Internet Private Limited.</p>

              <p class="mb-4">When You use any of the services provided by Us through the Website, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms of Use and shall be considered as part and parcel of this Terms of Use. We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to You. It is Your responsibility to review these Terms of Use periodically for updates / changes. Your continued use of the Website following the posting of changes will mean that You accept and agree to the revisions. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Website.</p>

              <p class="mb-4 uppercase font-bold text-red-500">Accessing, browsing or otherwise using the site indicates your agreement to all the terms and conditions under these terms of use, so please read the terms of use carefully before proceeding. By impliedly or expressly accepting these terms of use, you also accept and agree to be bound by flipkart policies (including but not limited to privacy policy available on /s/privacypolicy) as amended from time to time.</p>

              <p class="mt-12 lg:w-[80vw] w-full text-gray-700">While we work to ensure that the product information is correct, actual product packaging and material may contain more or different information from what is given here. Please read the product labels, description, directions, warning and other information that comes with the actual product before use.</p>
            </div>
          </div>}
          {tab === "Country of Origin" && <div class="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4">
            <p class="text-gray-700 flex items-center mb-2">
              <span class="ml-1 font-semibold">Made in India</span>
            </p>
            <p class="text-gray-700">
              <span class="font-semibold">Address:</span> 123 Main Street, Pune City, India 220223
            </p>
          </div>}
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
