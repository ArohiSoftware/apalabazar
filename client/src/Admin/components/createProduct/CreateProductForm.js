import React from 'react';

const inputClasses = "mt-1 block w-full p-2 border border-input rounded-md";
const labelClasses = "block text-sm font-medium text-zinc-700 mb-3";
const textClasses = "mt-1 text-xs text-muted-foreground";
const selectClasses = "mt-1 block w-full p-2 border border-input rounded-md";
const buttonClasses = "px-4 py-2 rounded-md transition duration-150 ease-in-out";

const CreateProductForm = () => {
  return (
    <div className="p-6 bg-card text-card-foreground rounded-lg max-w-9xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create Grocery Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="product-name" className={labelClasses}>Product Name <span className="text-destructive">*</span></label>
            <input type="text" id="product-name" className={inputClasses} placeholder="Enter product name" />
            <p className={textClasses}>Do not exceed 20 characters when entering the product name.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="category" className={labelClasses}>Category <span className="text-destructive">*</span></label>
              <select id="category" className={selectClasses}>
                <option>Choose category</option>
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Dairy</option>
                <option>Beverages</option>
                <option>Snacks</option>
              </select>
            </div>
            <div>
              <label htmlFor="brand" className={labelClasses}>Brand <span className="text-destructive">*</span></label>
              <select id="brand" className={selectClasses}>
                <option>Choose brand</option>
                <option>Brand A</option>
                <option>Brand B</option>
                <option>Brand C</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className={labelClasses}>Description <span className="text-destructive">*</span></label>
            <textarea id="description" className={inputClasses} rows="4" placeholder="Description"></textarea>
            <p className={textClasses}>Do not exceed 100 characters when entering the product name.</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Upload Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <img src="https://cdn.dmart.in/images/products/JUN120001408xx11JUN24_5_P.jpg" alt="product-image-1" className="w-full h-full object-cover rounded-md" />
            <img src="https://cdn.dmart.in/images/products/LReadyMixCTL337xx310521_5_P.jpg" alt="product-image-2" className="w-full h-full object-cover rounded-md" />
            <div className="flex items-center justify-center border-2 border-dashed border-input rounded-md">
              <span className="text-muted-foreground">Drop your images here or <a href="#" className="text-primary">click to browse</a></span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="add-size" className={labelClasses}>Size</label>
              <select id="add-size" className={selectClasses}>
                <option>500g</option>
                <option>1kg</option>
                <option>2kg</option>
                <option>5kg</option>
              </select>
            </div>
            <div>
              <label htmlFor="product-date" className={labelClasses}>Expiry Date</label>
              <input type="date" id="product-date" className={inputClasses} />
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-12">
            <button className={`${buttonClasses} bg-green-500 text-primary-foreground hover:bg-green-600`}>Add Product</button>
            <button className={`${buttonClasses} bg-orange-500 text-secondary-foreground hover:bg-orange-600`}>Save Product</button>
            <button className={`${buttonClasses} bg-muted border-[2px] text-muted-foreground hover:border-gray-600`}>Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductForm;
