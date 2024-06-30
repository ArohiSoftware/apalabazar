import React from 'react';
const gadgets = [
    {
      title: 'True Wireless',
      discount: 'Min. 50% Off',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s',
    },
    {
      title: 'Smart Bands',
      discount: 'Min. 40% Off',
      imageUrl: 'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
    },
    {
      title: 'Smart Watch Straps',
      discount: 'Min. 40% Off',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/product-label-design.jpg?v=1680902906',
    },
    {
      title: 'Mixer Juicer Grinder',
      discount: 'Min. 50% Off',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIpDUjGPsRbpeKQFw7TFjrWJkaRxY68b2zA&s',
    },
  ];
  
  const OtherComponent = () => {
    return (
      <div className="p-8 bg-white rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Best Food and Beverages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {gadgets.map((gadget, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={gadget.imageUrl} alt={gadget.title} className="w-full h-25 sm:h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold sm:text-lg">{gadget.title}</h3>
                <p className="text-green-600 text-xs sm:text-sm">{gadget.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default OtherComponent;
