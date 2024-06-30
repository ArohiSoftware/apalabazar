import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const cardClasses = 'bg-white p-4 rounded-lg shadow-lg';
const textClasses = 'text-card-foreground';
const buttonClasses = 'text-muted-foreground';

const ProductCard = ({ imageSrc, productName, couponCode, flagSrc }) => (
  <li className="flex items-center justify-between mb-2">
    <div className="flex items-center">
      <img src={imageSrc} alt="Product image" className="w-10 h-10 rounded-full mr-3" />
      <div>
        <p className={textClasses}>{productName}</p>
        <p className="text-muted-foreground text-sm">Coupon Code: {couponCode}</p>
      </div>
    </div>
    <img aria-hidden="true" alt="flag" src={flagSrc} />
  </li>
);

const CountryCard = ({ flagSrc, countryName, salesAmount, arrowSrc }) => (
  <li className="flex items-center justify-between mb-2">
    <div className="flex items-center">
      <img aria-hidden="true" alt="flag" src={flagSrc} className="mr-3" />
      <p className={textClasses}>{countryName}</p>
    </div>
    <div className="flex items-center">
      <img aria-hidden="true" alt="arrow" src={arrowSrc} className="mr-2" />
      <p className={textClasses}>{salesAmount}</p>
    </div>
  </li>
);

const Analytics2 = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [topCountries, setTopCountries] = useState([]);
  const [salesData, setSalesData] = useState({ revenue: 37802, profit: 28305, percentage: 1.56 });

  useEffect(() => {
    // Fetch data from the backend in future
    // For now, we use dummy data
    setRecentOrders([
      { productName: 'Prodotti per il tuo cane...', price: '20 Nov 2023', deliveryDate: '20 Nov 2023', imageSrc: 'https://placehold.co/50x50.png' },
      { productName: 'Wholesome Pride...', price: '20 Nov 2023', deliveryDate: '20 Nov 2023', imageSrc: 'https://placehold.co/50x50.png' },
      { productName: 'Beneful Baked Delights...', price: '20 Nov 2023', deliveryDate: '20 Nov 2023', imageSrc: 'https://placehold.co/50x50.png' },
      { productName: 'Taste of the Wild...', price: '20 Nov 2023', deliveryDate: '20 Nov 2023', imageSrc: 'https://placehold.co/50x50.png' },
      { productName: "Canagan - Britain's...", price: '20 Nov 2023', deliveryDate: '20 Nov 2023', imageSrc: 'https://placehold.co/50x50.png' },
    ]);
    
    setTopProducts([
      { imageSrc: 'https://placehold.co/40x40.png', productName: 'Patimax Fragrance Long...', couponCode: '$flat', flagSrc: 'https://openui.fly.dev/openui/24x24.svg?text=🇪🇸' },
      { imageSrc: 'https://placehold.co/40x40.png', productName: 'Nulo MedalSeries Adult Cat...', couponCode: '$flat', flagSrc: 'https://openui.fly.dev/openui/24x24.svg?text=🇺🇸' },
    ]);
    
    setTopCountries([
      { flagSrc: 'https://openui.fly.dev/openui/24x24.svg?text=🇹🇷', countryName: 'Turkey', salesAmount: '6,972', arrowSrc: 'https://openui.fly.dev/openui/24x24.svg?text=📈' },
      { flagSrc: 'https://openui.fly.dev/openui/24x24.svg?text=🇧🇪', countryName: 'Belgium', salesAmount: '6,972', arrowSrc: 'https://openui.fly.dev/openui/24x24.svg?text=📈' },
    ]);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className={cardClasses}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-card-foreground">Recent Orders</h2>
          <button className={buttonClasses}>
            <img aria-hidden="true" alt="more-options" src="https://openui.fly.dev/openui/24x24.svg?text=⋮" />
          </button>
        </div>
        <ul>
          {recentOrders.map((order, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={order.imageSrc} alt="Product image" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className={textClasses}>{order.productName}</p>
                  <p className="text-muted-foreground text-sm">Delivery Date: {order.deliveryDate}</p>
                </div>
              </div>
              <p className={textClasses}>{order.price}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={cardClasses}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-card-foreground">Top Products</h2>
          <button className={buttonClasses}>
            <img aria-hidden="true" alt="view-all" src="https://openui.fly.dev/openui/24x24.svg?text=👁️" />
          </button>
        </div>
        <ul>
          {topProducts.map((product, index) => (
            <ProductCard 
              key={index}
              imageSrc={product.imageSrc}
              productName={product.productName}
              couponCode={product.couponCode}
              flagSrc={product.flagSrc}
            />
          ))}
        </ul>
      </div>
      
      <div className={cardClasses}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-card-foreground">Top Countries By Sales</h2>
          <button className={buttonClasses}>
            <img aria-hidden="true" alt="view-all" src="https://openui.fly.dev/openui/24x24.svg?text=👁️" />
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-card-foreground">${salesData.revenue}</h3>
          <p className="text-green-500 text-sm">{salesData.percentage}% <span className="text-muted-foreground">since last weekend</span></p>
        </div>
        <ul>
          {topCountries.map((country, index) => (
            <CountryCard 
              key={index}
              flagSrc={country.flagSrc}
              countryName={country.countryName}
              salesAmount={country.salesAmount}
              arrowSrc={country.arrowSrc}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics2;
