import React from 'react';

const productCardClasses = 'block rounded-lg overflow-hidden shadow-md';
const productTitleClasses = 'text-xl font-bold text-zinc-800 dark:text-zinc-200';
const productDescriptionClasses = 'text-zinc-600 dark:text-zinc-400';
const buttonClasses = 'bg-green-500 text-white px-4 py-2 mx-5 rounded-lg';

const ProductCard = ({ imageUrl, title, description, link }) => {
  return (
   
<div className='p-3 bg-gray-200 mx-4 rounded space-y-1'>
<a href={link}>
    <div className="flex items-center  justify-end bg-black bg-opacity-50 rounded  w-full"  >

      <img src={imageUrl} className=' object-fill h-[30vh] w-full'></img>
      <button className={`${buttonClasses} absolute`}>SHOP NOW</button>
    </div>
    </a>
</div>

  );
};

const ProductList = () => {
  return (
    <div className="mt-12 space-y-2">
      <ProductCard
        imageUrl="dailyneeds.jpg"
   link="/product-detail-page-1"
      />
      <ProductCard
        imageUrl="chocolates.jpg"
        title="Just Pop It In!"
        description="Delicious Flavours | Easy To Make"
        link="/product-detail-page-2"
      />
      <ProductCard
        imageUrl="snacks.jpg"
        title="Time For A Chai Break!"
        description="Bakery products that go well with your tea."
        link="/product-detail-page-3"
      />
    </div>
  );
};

const ProductComponent = () => {
  return <ProductList />;
};

export default ProductComponent;
