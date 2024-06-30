import React from 'react';

const cardClasses = "bg-blue-500  rounded-lg overflow-hidden transform hover:scale-105 transition duration-300";
const contentClasses = "p-4";
const titleClasses = "text-lg font-medium text-white";

const ProductCard = ({ imgSrc, imgAlt, title }) => {
  return (
    <div className={cardClasses}>
      <img src={imgSrc} alt={imgAlt} className="w-full h-48 object-cover" />
      <div className={contentClasses}>
        <h3 className={titleClasses}>{title}</h3>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="p-6 mt-6 mx-auto mb-8 bg-white rounded-md w-[96vw]">
      <h2 className="text-xl font-semibold mb-4">You may like...</h2>
      <div className="grid grid-cols-1 h-[92vh] lg:h-fit p-5 mb-10 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard imgSrc="https://admin.itcstore.in/media/wysiwyg/gifting-essentials.jpg" imgAlt="Gifting Solution" title="Gifting Solution" />
        <ProductCard imgSrc="https://admin.itcstore.in/media/wysiwyg/pooja-essentials.jpg" imgAlt="Pooja and Rituals" title="Pooja and Rituals" />
        <ProductCard imgSrc="https://admin.itcstore.in/media/wysiwyg/personal-care.jpg" imgAlt="Summer Care" title="Summer Care" />
        <ProductCard imgSrc="https://admin.itcstore.in/media/wysiwyg/travel-essentials.jpg" imgAlt="Travel Essentials" title="Travel Essentials" />
      </div>
    </div>
  );
};

const Maylike = () => {
  return <ProductGrid />;
};

export default Maylike;
