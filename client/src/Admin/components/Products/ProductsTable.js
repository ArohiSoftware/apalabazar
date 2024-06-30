import React from 'react';

const inputClasses = "border border-input rounded p-1";
const buttonClasses = "p-2 border border-border rounded";
const textClasses = "text-xs text-gray-600";
const hoverClasses = "hover:bg-gray-100 ";
const destructiveClasses = "text-destructive";
const primaryClasses = "bg-primary text-primary-foreground";
const accentClasses = "text-accent";

const ProductTable = () => {
  // Dummy data for products
  const products = [
    {
      id: 1,
      name: 'DogFood, Chicken & Cheese Liver Recipe',
      productId: '#778392',
      price: '$1,629.50',
      quantity: 20,
      sale: 20,
      stock: 'Out of Stock',
      startDate: '01/01/2023'
    },
    {
      id: 2,
      name: 'CatFood, Salmon & Tuna Recipe',
      productId: '#778393',
      price: '$1,329.00',
      quantity: 15,
      sale: 10,
      stock: 'In Stock',
      startDate: '02/15/2023'
    },
    // Add more dummy data as needed
  ];

  return (
    <div className='my-8 mx-4 h-screen'>
      <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-2">
          <span className={textClasses}>Showing</span>
          <input type="text" className={inputClasses} placeholder="10" />
          <span className={textClasses}>entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <input type="text" className={inputClasses} placeholder="Search here..." />
          <button className={buttonClasses + " " + primaryClasses}>Search</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-border">
          <thead className={textClasses + " bg-gray-400 text-white"}>
            <tr>
              <th className="p-2 border-b border-border">Product</th>
              <th className="p-2 border-b border-border">Product ID</th>
              <th className="p-2 border-b border-border">Price</th>
              <th className="p-2 border-b border-border">Quantity</th>
              <th className="p-2 border-b border-border">Sale</th>
              <th className="p-2 border-b border-border">Stock</th>
              <th className="p-2 border-b border-border">Start Date</th>
              <th className="p-2 border-b border-border">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className={hoverClasses}>
                <td className="p-4 border-b border-border">{product.name}</td>
                <td className="p-2 border-b border-border">{product.productId}</td>
                <td className="p-2 border-b border-border">{product.price}</td>
                <td className="p-2 border-b border-border">{product.quantity}</td>
                <td className="p-2 border-b border-border">{product.sale}</td>
                <td className={"p-2 border-b border-border " + (product.stock === 'Out of Stock' ? destructiveClasses : '')}>{product.stock}</td>
                <td className="p-2 border-b border-border">{product.startDate}</td>
                <td className="p-2 border-b border-border">
                  <button className={accentClasses + " hover:underline"}>View</button>
                  <button className={accentClasses + " hover:underline"}>Edit</button>
                  <button className={destructiveClasses + " hover:underline"}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className={textClasses}>Showing 1 to 10 of {products.length} entries</span>
        <div className="flex items-center space-x-2">
          {Array.from({ length: Math.ceil(products.length / 10) }, (_, index) => (
            <button key={index} className={buttonClasses}>{index + 1}</button>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ProductTable;
