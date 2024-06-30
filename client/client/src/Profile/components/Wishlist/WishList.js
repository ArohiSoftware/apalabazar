import React, { useState } from 'react';

const productCardClasses = "flex flex-col md:flex-row items-start p-4 border rounded-lg shadow-sm";
const imageClasses = "w-24 h-24 object-cover rounded-lg";
const priceClasses = "text-xl font-semibold";
const discountClasses = "line-through text-zinc-500 ml-2";

const ProductCard = ({ id, imageSrc, productName, rating, numRatings, price, originalPrice, discount, onRemove }) => {
  return (
    <div className={productCardClasses}>
      <img src={imageSrc} alt="Product Image" className={imageClasses} />
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{productName}</h3>
            <div className="flex items-center text-sm text-zinc-600">
              <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2">{rating}</span>
              <span>({numRatings})</span>
              {discount && <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md">{discount}</span>}
            </div>
          </div>
          <button className="text-zinc-500 hover:text-red-500" onClick={() => onRemove(id)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-2">
          <span className={priceClasses}>{price}</span>
          {originalPrice && <span className={discountClasses}>{originalPrice}</span>}
          {discount && <span className="text-green-500 ml-2">{discount}</span>}
        </div>
      </div>
    </div>
  );
};

const WishList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/t-shirt/z/t/i/l-yrtncbfh-try-this-original-imahf8zzuzggkg7f.jpeg?q=70",
      productName: "Try This Colorblock Men Round Neck Blue, Maroon T-Shirt",
      rating: "3.9",
      numRatings: "39,882",
      price: "₹469",
      originalPrice: "₹999",
      discount: "53% off"
    },
    {
      id: 2,
      imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/shirt/j/p/y/l-pcb-01-marmic-fab-original-imagy76nuszykxtz.jpeg?q=70",
      productName: "Marmic Fab Men Solid Casual Maroon Shirt",
      rating: "3.7",
      numRatings: "8,373",
      price: "₹378",
      originalPrice: "₹1,399",
      discount: "72% off"
    },
    {
      id: 3,
      imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/t-shirt/y/u/u/3xl-tbrbl-dgyblhenful-d37-tripr-original-imagn9wgpe7fhz25.jpeg?q=70",
      productName: "Magnolia Modern Trendy Sneakers boot Sneakers Sneakers For Men",
      rating: "3.6",
      numRatings: "28,035",
      price: "Price: Not Available"
    },
    {
      id: 4,
      imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/shirt/i/0/v/xl-checkered-shirt-zoitgiest-original-imagtjksvawkjzz5.jpeg?q=70",
      productName: "TRIPR Colorblock Men Mandarin Collar Brown, Grey T-Shirt",
      rating: "3.8",
      numRatings: "55,948",
      price: "₹699",
      originalPrice: "₹2,999",
      discount: "76% off"
    }
  ]);

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="mx-auto bg-white p-4 rounded-lg shadow overflow-scroll sidebar">
        <h2 className="text-2xl font-semibold mb-4">My Wishlist ({products.length})</h2>
      <div className="space-y-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            productName={product.productName}
            rating={product.rating}
            numRatings={product.numRatings}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            onRemove={handleRemoveProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default WishList;
