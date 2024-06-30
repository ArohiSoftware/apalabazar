import React, { useState } from "react";

const Register = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    otp: "",
    address: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" bg-gray-300 w-11/12 max-w-4xl h-5/6 rounded-lg overflow-scroll flex">
            <div
              className="w-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url('./registration.png')` }}
            ></div>
            <div className="w-1/2 p-8 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute text-2xl top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-6">Register</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">OTP</label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-600"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Register;
