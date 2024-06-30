import React from 'react';

const gadgets = [
  {
    title: 'True Wireless',
    discount: 'Min. 50% Off',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
  },
  {
    title: 'Smart Bands',
    discount: 'Min. 40% Off',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
  },
  {
    title: 'Smart Watch Straps',
    discount: 'Min. 40% Off',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
  },
 
];

const Gadgets = () => {
  return (
    <div className="p-8 flex flex-col  m-5 bg-white rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Today's Sponsors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {gadgets.map((gadget, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img
              src={gadget.imageUrl}
              alt={gadget.title}
              className="w-full h-35 sm:h-58 object-cover transform hover:scale-110 transition duration-300"
            />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
