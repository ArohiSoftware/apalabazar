import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import qrCodeImage from './l.jpg'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 px-5">
        
        {/* Column 1 */}
        <div className="w-full max-w-md mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">Apala Bajar</h2>
          <h3 className="text-xl font-medium mb-2">Subscribe</h3>
          <p className="mb-4 text-sm">Get 10% off on your first order</p>
          <div className="relative flex items-center border border-orange-500 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-white p-2 focus:outline-none"
            />
            <button className="absolute right-0 bg-transparent border-l border-orange-500 p-2 flex items-center justify-center">
              <FaPaperPlane className="text-orange-500" />
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <p className="text-sm mb-2">Apla Bajar Panchayat Samiti Road, Jodhpur Maruti Chowk, Shrigonda, Ahilyanagar 413701</p>
          <p className="text-sm mb-2">aaplabajar@gmail.com</p>
          <p className="text-sm">+91 9423750349</p>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <ul className="space-y-2">
            <li><Link to="/myprofile/profile-information" className="hover:text-orange-500">My Account</Link></li>
            <li><Link to="/login" className="hover:text-orange-500">Register/Login</Link></li>
            <li><Link to="/cart" className="hover:text-orange-500">Cart</Link></li>
            <li><Link to="/myprofile/likes" className="hover:text-orange-500">Wishlist</Link></li>
            <li><Link to="/shop" className="hover:text-orange-500">Shop</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="privacy" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="terms" className="hover:text-orange-500">Terms of Use</a></li>
            <li><a href="/faq" className="hover:text-orange-500">FAQ</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Apala Bajar</h2>
          <div className="flex mb-4">
            <img src={qrCodeImage} alt="QR Code" className="w-20 h-20 mr-4" />
          </div>
          <div className="flex space-x-3 text-2xl">
            <FaFacebook className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaLinkedin className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-400 text-sm">
        Apala Bazar © 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
