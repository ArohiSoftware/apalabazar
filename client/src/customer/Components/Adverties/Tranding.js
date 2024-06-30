import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../../Usecontext/cartContext';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Trending.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const productCardClasses = 'bg-white rounded-lg p-1 sm:p-4 flex-shrink-0 mb-3 mt-5 mx-2 sm:mx-4 w-20 h-[180px] border border-gray-300 sm:w-60 sm:h-[320px] transition-transform duration-300 hover:scale-105';


const imageClasses = 'w-full h-[60px] object-contain mb-2 sm:h-32';
const buttonClasses = 'bg-green-500 text-white text-4xs py-2 px-2 rounded-lg w-full sm:text-xs';

const ProductCard = ({ product }) => {
  const { addTocart } = useCartContext();
  return (
    <div className={productCardClasses}>
      <Link to={product.url}>
        <img className={imageClasses} src={product.image} alt="Product Image" />
        <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">{product.name}</h3>
      </Link>
      <div className="flex justify-between text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
        <div>
          MRP <span className="line-through">{product.mrp}</span> <span className="font-semibold">{product.price}</span>
        </div>
        <div>
          DMart <span className="font-semibold">{product.price}</span>
        </div>
      </div>
      <div className="text-green-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">{product.discount}</div>
      <div className="text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">{product.weight}</div>
      <div className="flex justify-center">
        <button className={buttonClasses} onClick={() => addTocart(product)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <button
    className=' rounded-md px-4 py-8 absolute left-[-15px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-blue-400 transition-colors duration-300 ease-in-out'
    onClick={onClick}
    style={{ display: "block" }}
  >
    &lt;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className='bg-gray-200 hover:bg-blue-400 transition-colors duration-300 ease-in-out rounded-md px-4 py-8 absolute right-[-15px] top-1/2 transform -translate-y-1/2 z-10'
    onClick={onClick}
    style={{ display: "block", }}
  >
    &gt;
  </button>
);

const TrendingProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const products = [
    {
      id: 1,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 2,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 3,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 4,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 5,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 6,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 7,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 8,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 9,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 10,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48% off",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
  ];


  const visibleProducts = showAll || !isMobile ? products : products.slice(0, 4);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <div className="relative bg-white  px-5 py-16 mt-5 mx-6 mb-5 rounded-lg">
      <h2 className="text-lg sm:text-2xl mb-3 font-semibold">Trending Products</h2>
      {isMobile ? (
        <>
          <div className="flex flex-wrap justify-start gap-3 sm:gap-3 p-3 sm:p-3">
            {visibleProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          {!showAll && products.length > 4 && (
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 text-white text-xs py-2 px-4 rounded-lg"
                onClick={() => setShowAll(true)}
              >
                See All Products
              </button>
            </div>
          )}
        </>
      ) : (
        <Slider {...sliderSettings}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default TrendingProducts;
