import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Saffola Oats',
    category: 'Food Products',
    price: 150,
    brand: 'Saffola',
    rating: 4.5,
    offer: '10% off',
  },
];

const priceRanges = [
  { label: 'Below ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹1000', min: 500, max: 1000 },
  { label: '₹1000 and Above', min: 1000, max: Infinity },
];

const categories = [...new Set(products.map((product) => product.category))];

function SideFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [brands, setBrands] = useState([]); // Stores unique brands
  const [searchBrand, setSearchBrand] = useState(''); // Stores user-entered brand search term
  const [selectedBrand, setSelectedBrand] = useState('all'); // Stores the selected brand
  const [minRating, setMinRating] = useState(0); // Stores minimum rating filter
  const [hasOffer, setHasOffer] = useState(false); // Filter for products with offers

  useEffect(() => {
    const uniqueBrands = [...new Set(products.map((product) => product.brand))];
    setBrands(uniqueBrands);
  }, []); // Empty dependency array to run only once

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchBrand.toLowerCase())
  );

  const filterProducts = (category, priceRange, brand, rating, hasOffer) => {
    let filteredProducts = products.slice(); // Copy products to avoid mutation
    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
    if (priceRange.max !== Infinity) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= priceRange.min && product.price < priceRange.max
      );
    } else {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= priceRange.min
      );
    }
    if (brand !== 'all') {
      filteredProducts = filteredProducts.filter((product) => product.brand === brand);
    }
    if (rating > 0) {
      filteredProducts = filteredProducts.filter((product) => product.rating >= rating);
    }
    if (hasOffer) {
      filteredProducts = filteredProducts.filter((product) => product.offer);
    }
    return filteredProducts;
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(priceRanges.find((range) => range.label === event.target.value));
  };

  const handleBrandSearch = (event) => {
    setSearchBrand(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleMinRatingChange = (event) => {
    setMinRating(parseFloat(event.target.value));
  };

  const handleHasOfferChange = (event) => {
    setHasOffer(event.target.checked);
  };

  const filteredProducts = filterProducts(
    selectedCategory,
    selectedPriceRange,
    selectedBrand,
    minRating,
    hasOffer
  );

  return (
    <div className="side-filter">
      <h2>Filters</h2>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <br />
      <select value={selectedPriceRange.label} onChange={handlePriceRangeChange}>
        {priceRanges.map((range) => (
          <option key={range.label} value={range.label}>
            {range.label}
          </option>
        ))}
      </select>
      <br />
      <input
        type="text"
        placeholder="Search brand..."
        value={searchBrand}
        onChange={handleBrandSearch}
      />
      <br />
      <select value={selectedBrand} onChange={handleBrandChange}>
        <option value="all">All Brands</option>
        {filteredBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <br />
      <label>
        Minimum Rating:
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={minRating}
          onChange={handleMinRatingChange}
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={hasOffer}
          onChange={handleHasOfferChange}
        />
        Has Offer
      </label>
      <br />
      <h3>Filtered Products</h3>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideFilter;
