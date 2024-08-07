import React from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Grocery from "../Pages/Grocery/Grocery"
import Cart from '../customer/Components/Cart/Cart.js';
import Category from "../customer/Components/Navbar/Category.js";
import Dairy from '../Pages/Dairy/Dairy';
import ProductDetails from '../customer/Components/Product/ProductDetails/ProductDetails.js';
import Login from '../customer/Components/Auth/Login';
import Profile from '../Profile/components/Profilemain/Profile.js';
import Checkout from '../Profile/components/Orders/Checkoutpage.js';
import RatingsAndReviews from '../customer/Components/ReviewProduct/Reviewform.js';
import SearchPage from '../Pages/SearchPage.js';
import TermsAndConditions from '../Pages/TermsCondition.js';
import ReturnPolicy from '../Pages/cancellation_policy.js';
import FAQ from '../customer/Components/FAQ/Faq.js';
import ContactUs from '../customer/Components/ContactUs/ContactUs.js';
import Privacy from '../Pages/Privacy.js';
import TermsOfUse from '../Pages/TermsCondition.js';



function CustomersRoute() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:main?/:sub" element={<Grocery />}></Route>
       <Route path="category/:main" element={<Grocery/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/category" element={<Category />} />
      <Route path="product/:id" element={<ProductDetails />}></Route>
       <Route path="/login" element={<Login />}></Route>
      <Route path="/checkout" element={< Checkout/>}></Route>
      <Route path="/myprofile" element={<Profile/>}></Route>
      <Route path="/review/:id" element={<RatingsAndReviews/>}></Route>
      <Route path="/search/:name" element={<SearchPage/>}></Route>
      <Route path="/termscondition" element={<TermsAndConditions/>}></Route>
      <Route path="/returnpolicy" element={<ReturnPolicy/>}></Route>
      <Route path="/faq" element={<FAQ/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      <Route path="/terms" element={<TermsOfUse/>}></Route>





      </Routes>
    </div>
  )
}

export default CustomersRoute
