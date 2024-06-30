
import React, { useState } from "react";
const modalStyles =
  "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden";
const inputStyles = "w-full p-2 border rounded-lg";
const buttonStyles = "px-4 py-2 rounded-lg";
const linkStyles = "block p-2";
const labelStyles = "block text-zinc-700";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [number, setNumber] = useState("9637888120");
  const [name, setName] = useState("shivam");
  const [last, setLast] = useState("bole");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <>
  
      
  <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-5" > 
          <h2 className="text-2xl font-bold mb-6">Profile</h2>
          <form>
            <div className="mb-4 ">
              <label className={labelStyles}>Mobile Number</label>
              <div className="flex items-center ">
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="mr-4 border-3 focus:border-0 p-2 rounded-lg w-[70%]"
                ></input>
                <button className="text-white bg-blue-600 p-2 rounded-lg w-[30%]" onClick={openModal}>
                  Change
                </button>
              </div>
              {isModalOpen && (
                <div id="modal" className="fixed inset-0  flex items-center lg:justify-center justify-end  bg-black bg-opacity-50">
                  <div className="bg-white p-8 rounded shadow-lg lg:w-[40vw] w-[90vw]">
                    <h2 className="text-xl font-bold mb-4">
                      Change Mobile Number
                    </h2>
                    <form>
                      <div className="mb-4">
                        <label className={labelStyles}>New Mobile Number</label>
                        <input type="text" className={inputStyles} />
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="otp"
                            className="block text-sm font-medium leading-6 text-zinc-900"
                          >
                            Enter OTP
                          </label>
                        </div>
                        <div className="mb-4 text-gray-950 ">
                          {/* <InputOTP>
                            <InputOTPGroup>
                              {otp.map((value, index) => (
                                <InputOTPSlot
                                  key={index}
                                  index={index}
                                  value={value}
                                  onChange={handleOtpChange}
                                />
                              ))}
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                              {otp.map((value, index) => (
                                <InputOTPSlot
                                  key={index}
                                  index={index}
                                  value={value}
                                  onChange={handleOtpChange}
                                />
                              ))}
                            </InputOTPGroup>
                          </InputOTP> */}
                           <input type="text" className={inputStyles}  onChange={handleOtpChange} />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className={`text-white bg-blue-600 p-2 rounded-lg${buttonStyles} mr-4`}
                          onClick={closeModal}
                        >
                          SAVE
                        </button>
                        <button
                          type="button"
                          className="text-white bg-blue-600 p-2 rounded-lg"
                          onClick={closeModal}
                        >
                          CANCEL
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className={labelStyles}>First Name*</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputStyles}
              />
            </div>
            <div className="mb-4">
              <label className={labelStyles}>Last Name*</label>
              <input
                type="text"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                className={inputStyles}
              />
            </div>
            <div className="mb-4">
              <label className={labelStyles}>Email (optional)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputStyles}
                placeholder="Enter Email"
              />
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className={`text-white bg-blue-600 p-2 rounded-lg ${buttonStyles} mr-4`}
              >
                SAVE 
              </button>
              <button type="button" className="text-red-500">
                DELETE MY ACCOUNT
              </button>
            </div>
          </form>
        </div>
   
    </>
  );
};
export default Profile


