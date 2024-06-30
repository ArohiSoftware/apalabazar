import React from 'react';

const gadgets = [
  {
    title: 'True Wireless',
    discount: 'Min. 50% Off',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgt5xhDX8T7iFuai-pzc9TBpD7YMLwoLgrQ&s',
  },
  {
    title: 'Smart Bands',
    discount: 'Min. 40% Off',
    imageUrl: 'https://fast.clickbooq.com/558626-986/Waffles-lg.gif',
  },
  {
    title: 'Smart Watch Straps',
    discount: 'Min. 40% Off',
    imageUrl: 'https://cdn2.hubspot.net/hubfs/259552/semaine2.gif',
  },
  
];

const Gadgets = () => {
  return (
    <div className="rounded-md">
      <div className="flex flex-wrap m-2">
        {gadgets.slice(1, 3).map((gadget, index) => (
          <div key={index} className={`w-full sm:w-${index === 0 ? '1/3 lg:1/3' : '2/3 lg:w-2/3'} p-4`}>
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img
                src={gadget.imageUrl}
                alt={gadget.title}
                className="w-full h-[600px] object-cover transform  sm:hover:scale-[1.5] transition duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{gadget.title}</h3>
                <p className="text-green-600 text-sm">{gadget.discount}</p>
              </div>
            </div>
          </div>
        )).reverse()}
      </div>
    </div>
  );
};




export default Gadgets;
