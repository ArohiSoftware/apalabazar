import React, { useState } from 'react';
import { FcHome } from "react-icons/fc";

const INPUT_CLASS = 'mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100';
const LABEL_CLASS = 'block text-sm font-medium text-zinc-700 dark:text-zinc-300';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: 'shivam bole',
    pincode: '444102',
    area: 'mumbai',
    locality: 'thane',
    wing: '545',
    landmark: 'near Antilia',
    city: 'mumbai',
    state: 'mumbai',
    contactNumber: '3333483983',
  });

  const [deliveryModeChecked, setDeliveryModeChecked] = useState(false);
  const [savedAddressChecked, setSavedAddressChecked] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleSaveAddress();
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);
  const handleSaveAddress = () => {
    console.log('Address saved!');
    handleCloseForm();
  };

  const buttonClass = (enabled) =>
    enabled
      ? 'bg-blue-600 text-primary-foreground w-full py-2 rounded-lg hover:bg-blue-500'
      : 'bg-gray-400 text-gray-200 w-full py-2 rounded-lg cursor-not-allowed';

  return (
    <>
      <div className='flex justify-between h-4vh bg-white shadow-md p-6'>
        <div>
          <img src='./apala bazar.png' className='h-8' alt='Apala Bazar' />
        </div>
        <div>
          <p>
            Sign In as shivam bole (9834938494)
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-4">
        <div className="w-full lg:w-3/4">
        <form>
          <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
          <div className="mb-4">
            <span className="text-muted-foreground">Selected Pincode</span>
            <span className="ml-2">440001</span>
          </div>

          <div className="border rounded-lg p-4 mb-4">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">1</div>
              <h2 className="text-lg font-semibold ml-2">Select a delivery mode</h2>
            </div>
            <div className="border rounded-lg p-4 flex items-center mb-4">
              <input type="radio" required name="delivery_mode" className="mr-2" checked={deliveryModeChecked} onChange={() => setDeliveryModeChecked(!deliveryModeChecked)} />
             <FcHome className='text-xl mr-1'/>
              <span>Home Delivery</span>
              <span className="ml-2 bg-secondary text-secondary-foreground px-2 py-1 rounded line-through">Flat ₹29</span>
              <span className="ml-2 text-green-600">₹0</span>
            </div>
          </div>

          <div className="border rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-4">Saved addresses</h2>
            <div className="border rounded-lg p-4 flex items-center mb-4">
              <input type="radio" required name="saved_address" className="mr-2" checked={savedAddressChecked} onChange={() => setSavedAddressChecked(!savedAddressChecked)} />
              <div className="flex-1">
                <p className="font-semibold">{formData.fullName}</p>
                <p className="text-muted-foreground">{formData.wing},{formData.area},{formData.locality} {formData.state} - {formData.pincode}, Landmark:{formData.landmark},{formData.state} Mob No:{formData.contactNumber} </p>
              </div>
              <button className="flex items-center bg-blue-600 text-primary-foreground px-2 py-2 rounded-lg" onClick={handleOpenForm}>
                Add New Address
              </button>
            </div>
          </div>
          <div className='text-center'><button className="bg-blue-600 text-primary-foreground w-25 p-2 rounded-lg">CONFIRM ADDRESS</button></div>
          </form> 
        </div>

        <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-4">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Price Summary <span className="text-muted-foreground">(2 products)</span></h2>
            <div className="flex justify-between mb-2">
              <span>You Pay</span>
              <span className="text-green-600">₹264</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Cart Total</span>
              <span>₹264</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery charge</span>
              <span className="text-green-600">₹0</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Your Savings</span>
              <span className="text-green-600">₹64</span>
            </div>
            <button className={buttonClass(deliveryModeChecked && savedAddressChecked)} disabled={!deliveryModeChecked || !savedAddressChecked}>PAY ON DELIVERY (COD)</button>
            <div className="text-center text-muted-foreground mb-2">OR</div>
            <button className={buttonClass(deliveryModeChecked && savedAddressChecked)} disabled={!deliveryModeChecked || !savedAddressChecked}>PAY NOW (PREPAID)</button>
          </div>
        </div>

        {isFormOpen && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg w-full max-w-md h-[100%] overflow-y-auto scroll">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Add Address</h2>
              <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300" onClick={handleCloseForm}>
                <img aria-hidden="true" alt="close" src="https://openui.fly.dev/openui/24x24.svg?text=✖️" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className={LABEL_CLASS}>Full Name*</label>
                  <input type="text" id="fullName" className={INPUT_CLASS} value={formData.fullName} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="pincode" className={LABEL_CLASS}>Pincode*</label>
                  <input type="text" id="pincode" className={INPUT_CLASS} value={formData.pincode} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="area" className={LABEL_CLASS}>Area*</label>
                  <input type="text" id="area" className={INPUT_CLASS} value={formData.area} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="locality" className={LABEL_CLASS}>Locality/Street Name/Apartment*</label>
                  <input type="text" id="locality" className={INPUT_CLASS} value={formData.locality} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="wing" className={LABEL_CLASS}>Wing/Floor/Flat/House No.*</label>
                  <input type="text" id="wing" className={INPUT_CLASS} value={formData.wing} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="landmark" className={LABEL_CLASS}>Landmark (optional)</label>
                  <input type="text" id="landmark" className={INPUT_CLASS} value={formData.landmark} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="city" className={LABEL_CLASS}>City*</label>
                  <input type="text" id="city" className={INPUT_CLASS} value={formData.city} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="state" className={LABEL_CLASS}>State*</label>
                  <input type="text" id="state" className={INPUT_CLASS} value={formData.state} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="contactNumber" className={LABEL_CLASS}>Contact Number for Order Delivery*</label>
                  <input type="text" id="contactNumber" maxLength={10} className={INPUT_CLASS} value={formData.contactNumber} onChange={handleChange} required />
                </div>
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full bg-blue-600 text-primary-foreground py-2 px-4 rounded-md hover:bg-blue-500">Add Address</button>
              </div>
            </form>
          </div>
        </div>}
      </div>
    </>
  );
};

export default Checkout;
