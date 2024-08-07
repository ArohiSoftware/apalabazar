import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import MobNavbar from "../../Navbar/MobileNavbar";
import Footer from "../../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchSimilarProducts } from "../../../../Redux/Product/productSlice"; // Update the import path as needed
import { useCartContext } from "../../../../Usecontext/cartContext";
import { StarIcon } from "@heroicons/react/solid";
import Reviews from "../../ReviewProduct/RateProduct";
import "./ProductDetails.css"; // Import the improved CSS

import "./slick.css";

import { ShoppingCartIcon } from "@heroicons/react/solid";
import { IoLocation } from "react-icons/io5";


function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Use useParams to get the product ID
<<<<<<< HEAD
  const { productDetails, similarProducts, status, error } = useSelector((state) => state.products);
=======
  const { productDetails, status, error } = useSelector(
    (state) => state.products
  );
>>>>>>> 616122a9ba3a2b948157cdf87a35895fa2fadbed
  const { addTocart } = useCartContext();

  const [tab, setTab] = useState("Reviews");
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState(window.innerWidth < 620);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProduct(id)); // Fetch product details based on ID
    dispatch(fetchSimilarProducts(id)); // Fetch similar products based on ID
  }, [dispatch, id]);

  useEffect(() => {
    const handleResize = () => setViewport(window.innerWidth < 620);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewDetails = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const DeliveryPopup = ({ closePopup }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white text-xm p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-6">Delivery & Installation details</h2>
          <p className="">Delivery by</p>
          <p className="font-semibold">
            8 Aug, Thursday <span className="text-green-500">| Free</span> <span className="text-muted">₹40</span>
          </p>
          <p className="text-sm text-muted text-gray-800">if ordered before 3:46 PM</p>
          <h3 className="mt-4 font-semibold mb-1 text-gray-500">Installation Details</h3>
          <ul className="list-disc list-inside text-sm mb-4 text-gray-800">
            <li>This product doesn't require installation</li>
          </ul>
          <h3 className="font-semibold mb-2 text-gray-500">Shipping Charges For Apala Bajar Items</h3>
          <p className="text-sm text-gray-800 mb-4">
            Shipping charges are calculated based on the number of units, distance and delivery date.
          </p>
          <p className="text-sm text-gray-800 mb-4">Delivery charges if applicable will be shown on the product page and cart.</p>
          <button
            className="mt-4 bg-black text-white text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    arrows: false, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const similarProductsSettings = {
    dots: false,
    infinite: true,
    arrows: false, 

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="lg:block">
        {viewport ? <MobNavbar /> : <Navbar number={12} />}
      </div>

      <div className="product-details-container mt-5 mb-8">
        <div className="product-image-section">
          <div className="image-gallery">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="thumbnail">
                <img
                  src={productDetails?.imageUrl} // Adjust the path if necessary
                  alt="Product Thumbnail"
                  className="thumbnail-img"
                />
              </div>
            ))}
          </div>
          <div className="main-image">
            <Slider {...settings}>
              <img
                src={productDetails?.imageUrl} // Single image URL
                alt="Product Image"
                className="w-full h-auto object-contain "
              />
            </Slider>
          </div>
        </div>
        <div className="product-info-section">
          <h1 className="product-title">{productDetails?.title}</h1>
          <div className="product-pricing">
            {[...Array(5)].map((star, index) => (
              <StarIcon
                key={index}
                className={`star-icon ${index < productDetails?.rating ? "filled" : ""}`}
              />
            ))}
            <span className="rating-text">
              {productDetails?.numRatings || 0} Ratings
            </span>
            <span className="stock-status">In Stock</span>
          </div>
          <div className="product-pricing">
            <span className="discounted-price">
              ₹{productDetails?.discountedPrice}
            </span>
            <span className="original-price">
              ₹{productDetails?.price}
            </span>
          </div>
          <div className="product-description">
            <h2 className="tab-title">Description</h2>
            <div className="description-content" dangerouslySetInnerHTML={{ __html: productDetails?.description }} />
          </div>
          
          <div className="button-group">
            <div className="quantity-selector">
              <label htmlFor="quantity" className="text-sm">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="100"
                defaultValue="1"
                className="quantity-input"
              />
            </div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="similar-products-section mt-5 mb-8">
        <h2 className="similar-products-title">Grab the best deals </h2>
        <Slider {...similarProductsSettings}>
          {similarProducts.map(product => (
            <div key={product.id} className="similar-product-card">
              <div className="similar-product-image">
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <div className="similar-product-info">
                <h3>{product.title}</h3>
                <div className="similar-product-pricing">
                  <span className="discounted-price">₹{product.discountedPrice}</span>
                  <span className="original-price">₹{product.price}</span>
                </div>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <nav className="tabs-navigation">
        <ul
          onClick={() => setTab("Reviews")}
          className={`tab-item ${tab === "Reviews" ? "active" : ""}`}
        >
          Reviews
        </ul>
        <ul
          onClick={() => setTab("Country of Origin")}
          className={`tab-item ${tab === "Country of Origin" ? "active" : ""}`}
        >
          Country of Origin
        </ul>
        <ul
          onClick={() => setTab("Disclaimer")}
          className={`tab-item ${tab === "Disclaimer" ? "active" : ""}`}
        >
          Disclaimer
        </ul>
      </nav>
      <div className="tab-content">
        {tab === "Disclaimer" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Apala Bazaar Terms of Use</h2>
            <div className="text-gray-700">
              <p className="mb-4">This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>
              <p className="mb-4">Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Apala Bazar and these terms and conditions including the policies constitute Your binding obligations, with Apala Bazar.</p>
              <p className="mb-4">For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any natural or legal person who has agreed to become a buyer on the Website by providing Registration Data while registering on the Website as Registered User using the computer systems. Apala Bazar allows the User to surf the Website or make purchases without registering on the Website. The term "We", "Us", "Our" shall mean Apala Bazar.</p>
              <p className="mb-4">When You use any of the services provided by Us through the Website, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms of Use and shall be considered as part and parcel of this Terms of Use. We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to You. It is Your responsibility to review these Terms of Use periodically for updates/changes. Your continued use of the Website following the posting of changes will mean that You accept and agree to the revisions. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Website.</p>
            </div>
          </div>
        )}
        {tab === "Country of Origin" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Country of Origin</h2>
            <p className="text-gray-700">The country of origin for this product is India.</p>
          </div>
        )}
        {tab === "Reviews" && (
          <div>
            <Reviews />
          </div>
        )}
<<<<<<< HEAD
=======
        {tab === "Reviews" && <Reviews />}


      <div className="flex flex-col overflow-hidden items-center flex-nowrap h-full justify-center mt-5 mb-8">
        <div className="shadow-lg mt-5 bg-white w-full">
          <div className="flex flex-col rounded-3xl mt-10 lg:flex-row ">
            <div className="w-3/4 lg:w-[700px] lg:max-h-max my-6 lg:my-0 mx-12">
              <Slider {...settings}>
                <img
                  src={productDetails?.imageUrl} // Single image URL
                  alt="Product Image"
                  className="w-[80%] h-[60%] object-contain"
                />
              </Slider>
            </div>
            <div className="lg:ml-5 flex flex-col w-full">
              <div className="flex flex-col lg:flex-col lg:space-x-5 px-5 lg:px-0 mb-5">
                <div className="flex flex-col space-y-3 max-h-max mb-3">
                  <h1 className="product-title">{productDetails?.title}</h1>

                  <div className="product-rating">
                    {[...Array(5)].map((star, index) => (
                      <StarIcon
                        key={index}
                        className={`star-icon ${
                          index < productDetails?.rating ? "filled" : ""
                        }`}
                      />
                    ))}
                    <span className="rating-text">
                      {productDetails?.numRatings || 0} Ratings
                    </span>
                  </div>
                  <div className="product-pricing">
                    <span className="discounted-price">
                      ₹{productDetails?.discountedPrice}
                    </span>
                    <span className="original-price">
                      ₹{productDetails?.price}
                    </span>
                  </div>
                  <div className="stock-status">In Stock</div>
                  <div className="quantity-selector">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="10"
                      defaultValue="1"
                    />
                  </div>
                  {/* delivery pincode */}
                  <div className="p-4 bg-background w-[500px] border border-border rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-black font-semibold">
                        Delivery :
                      </span>
                      <span className="material-icons text-muted mx-2">
                        <IoLocation className="text-xl text-green-500" />
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Delivery Pincode"
                        className="border-b-2 border-b-green-500 p-2"
                      />
                      <button className="bg-primary text-primary-foreground hover:bg-primary/80 ml-2 px-4 py-2 rounded-md">
                        Check
                      </button>
                    </div>
                    <div className="text-xm text-center">
                      Delivery by{" "}
                      <span className="font-semibold">8 Aug, Thursday</span> |{" "}
                      <span className="text-green-500">Free</span>{" "}
                      <span className="text-muted">₹40</span>
                      <div className="text-muted text-xs">
                        if ordered before 3:46 PM
                        <a
                          href="#"
                          className="text-blue-500 text-end font-semibold px-3 hover:underline"
                          onClick={handleViewDetails}
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                    {showPopup && <DeliveryPopup closePopup={closePopup} />}
                  </div>
                  <div className="button-group">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addTocart(productDetails)}
                    >
                      <ShoppingCartIcon className="cart-icon" /> Add to Cart
                    </button>
                    <button className="buy-now-btn">Buy Now</button>
                  </div>
                </div>
                <div className="product-description">
                  <h2 className="tab-title">Description</h2>
                  <div className="description-content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: productDetails?.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="tabs-navigation">
          <ul
            onClick={() => setTab("Reviews")}
            className={`tab-item ${tab === "Reviews" ? "active" : ""}`}
          >
            Reviews
          </ul>
          <ul
            onClick={() => setTab("Country of Origin")}
            className={`tab-item ${
              tab === "Country of Origin" ? "active" : ""
            }`}
          >
            Country of Origin
          </ul>
          <ul
            onClick={() => setTab("Disclaimer")}
            className={`tab-item ${tab === "Disclaimer" ? "active" : ""}`}
          >
            Disclaimer
          </ul>
        </nav>
        <div className="w-[80vw] mt-5 rounded-lg overflow-hidden p-6">
          {tab === "Disclaimer" && (
            <div className="w-[80vw] rounded-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold mb-4">
                Apala Bazaar Terms of Use
              </h2>
              <div className="text-gray-700">
                <p className="mb-4">
                  This document is an electronic record in terms of Information
                  Technology Act, 2000 and rules there under as applicable and
                  the amended provisions pertaining to electronic records in
                  various statutes as amended by the Information Technology Act,
                  2000. This electronic record is generated by a computer system
                  and does not require any physical or digital signatures.
                </p>
                <p className="mb-4">
                  Your use of the Website and services and tools are governed by
                  the following terms and conditions ("Terms of Use") as
                  applicable to the Website including the applicable policies
                  which are incorporated herein by way of reference. If You
                  transact on the Website, You shall be subject to the policies
                  that are applicable to the Website for such transaction. By
                  mere use of the Website, You shall be contracting with Apala
                  Bazar and these terms and conditions including the policies
                  constitute Your binding obligations, with Apala Bazar.
                </p>
                <p className="mb-4">
                  For the purpose of these Terms of Use, wherever the context so
                  requires "You" or "User" shall mean any natural or legal
                  person who has agreed to become a buyer on the Website by
                  providing Registration Data while registering on the Website
                  as Registered User using the computer systems. Apala Bazar
                  allows the User to surf the Website or make purchases without
                  registering on the Website. The term "We", "Us", "Our" shall
                  mean Apala Bazar.
                </p>
                <p className="mb-4">
                  When You use any of the services provided by Us through the
                  Website, including but not limited to, (e.g. Product Reviews,
                  Seller Reviews), You will be subject to the rules, guidelines,
                  policies, terms, and conditions applicable to such service,
                  and they shall be deemed to be incorporated into this Terms of
                  Use and shall be considered as part and parcel of this Terms
                  of Use. We reserve the right, at Our sole discretion, to
                  change, modify, add or remove portions of these Terms of Use,
                  at any time without any prior written notice to You. It is
                  Your responsibility to review these Terms of Use periodically
                  for updates / changes. Your continued use of the Website
                  following the posting of changes will mean that You accept and
                  agree to the revisions. As long as You comply with these Terms
                  of Use, We grant You a personal, non-exclusive,
                  non-transferable, limited privilege to enter and use the
                  Website.
                </p>
                <p className="uppercase font-bold text-red-500">
                  Accessing, browsing or otherwise using the site indicates your
                  agreement to all the terms and conditions under these terms of
                  use, so please read the terms of use carefully before
                  proceeding.
                </p>
                <p className="mt-12 lg:w-[80vw] w-full text-gray-700">
                  While we work to ensure that the product information is
                  correct, actual product packaging and material may contain
                  more or different information from what is given here. Please
                  read the product labels, description, directions, warning and
                  other information that comes with the actual product before
                  use.
                </p>
              </div>
            </div>
          )}
          {tab === "Country of Origin" && (
            <div className="country-origin-content">
              <p className="text-gray-700 flex items-center mb-2">
                <span className="ml-1 font-semibold">Made in India</span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Address:</span> Apala Bazar
                Panchayat Samiti Road, Shrigonda-413701, Ahmednagar, Maharashtra
              </p>
            </div>
          )}
          {tab === "Reviews" && <Reviews />}
        </div>

>>>>>>> 616122a9ba3a2b948157cdf87a35895fa2fadbed
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
