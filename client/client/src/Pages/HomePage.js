import Navbar from "../customer/Components/Navbar/Navbar.js";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../customer/Components/footer/Footer';
import Slider from "react-slick";
import ProductComponent from '../customer/Components/Adverties/Adverties.js';
import FrozenSnacks from '../customer/Components/Products/Product.js'
import GadgetSection from '../customer/Components/Products/GadgetSection.js'
import PopularBrand from '../customer/Components/Brand/Popularbrand.js'
import './HomePage.css'


import TrendingProducts from "../customer/Components/Adverties/Tranding.js";
import HomePageAdvertisement from "../customer/Components/HomePageAdvertisement/HomePageAdvertisement.js";
import Maylike from "../customer/Components/Adverties/Maylike.js";
import MobNavbar from "../customer/Components/Navbar/MobileNavbar.js";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [viewport, setViewport] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setViewport(window.innerWidth < 620);
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden bg-gray-100">
      {viewport ? <MobNavbar /> : <Navbar number={12} />}
      <div className="w-[95vw] mx-auto overflow-hidden mt-5 rounded-md">
        <Slider {...settings} className="rounded-md">
          <div className="w-full rounded-md">
            <a href="./product/1" className="rounded-md">
              <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
                <img
                  src="./skin_care.jpg"
                  className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
                  alt="Skin Care"
                />
              </div>
            </a>
          </div>
          <div className="w-full rounded-md">
            <a href="./product/2" className="rounded-md">
              <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
                <img
                  src="./chocolates.jpg"
                  className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
                  alt="Chocolates"
                />
              </div>
            </a>
          </div>
          <div className="w-full rounded-md">
            <a href="./product/1" className="rounded-md">
              <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
                <img
                  src="./dailyneeds.jpg"
                  className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
                  alt="Daily Needs"
                />
              </div>
            </a>
          </div>
          <div className="w-full rounded-md">
            <a href="./product/1" className="rounded-md">
              <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
                <img
                  src="./snacks.jpg"
                  className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
                  alt="Snacks"
                />
              </div>
            </a>
          </div>
        </Slider>
      </div>
     

      {!isMobile && <TrendingProducts />}
      <GadgetSection />
      {!isMobile && <FrozenSnacks />}
      <div className="flex"></div>
      <ProductComponent />
      <GadgetSection />

      <HomePageAdvertisement />

      

      <Maylike />
      <PopularBrand />

      <Footer />
    </div>
  );
}

export default HomePage;
