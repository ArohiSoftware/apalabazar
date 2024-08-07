import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Contact Us</h1>

        <div className="bg-white shadow-md rounded-lg p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-5 text-gray-800">Get In Touch</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Message</label>
                  <textarea
                    rows="5"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details & Map */}
            <div>
              <h2 className="text-2xl font-semibold mb-5 text-gray-800">Contact Details</h2>
              <div className="space-y-5">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-orange-500 text-2xl mr-3" />
                  <p className="text-gray-700">Apla Bajar Panchayat Samiti Road, Jodhpur Maruti Chowk, Shrigonda, Ahilyanagar 413701</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-orange-500 text-2xl mr-3" />
                  <a href="tel:+1234567890" className="text-gray-700 hover:underline">+91 9423750349</a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-orange-500 text-2xl mr-3" />
                  <a href="mailto:support@apalabajar.com" className="text-gray-700 hover:underline">aaplabajar@gmail.com</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
