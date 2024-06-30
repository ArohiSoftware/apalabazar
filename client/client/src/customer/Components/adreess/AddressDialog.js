
import React, { useRef } from 'react';

const AddressDialog = ({ isOpen, onClose, onSave }) => {
  const dialogRef = useRef(null);

  const handleSave = () => {
    const addressData = {
      addressLine1: dialogRef.current.querySelector('#addressLine1').value,
      addressLine2: dialogRef.current.querySelector('#addressLine2').value,
      city: dialogRef.current.querySelector('#city').value,
      state: dialogRef.current.querySelector('#state').value,
      zipCode: dialogRef.current.querySelector('#zipCode').value,
    };
    onSave(addressData);
    onClose();
  };

  return (
    <>
    <dialog
      ref={dialogRef}
      open={isOpen}
      className="p-6  fixed bg-white/30 backdrop-blur-2xl rounded-lg shadow-lg  mx-4 lg:mx-auto   top-6 right-3 max-w-[800px] min-w-[300px]"
    >
  
      <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="addressLine1" className="block mb-1">Address Line 1</label>
          <input type="text" id="addressLine1" className="w-full outline-violet-400 px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="addressLine2" className="block  mb-1">Address Line 2</label>
          <input type="text" id="addressLine2" className="w-full outline-violet-400 px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block mb-1">City</label>
          <input type="text" id="city" className="w-full px-3 outline-violet-400 py-2 border rounded" />
        </div>
        <div className='flex gap-3 justify-between'>
            <div className="mb-4">
          <label htmlFor="state" className="block mb-1">State</label>
          <input type="text" id="state" className="w-full px-3 outline-violet-400 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
          <input type="number" id="zipCode" className="w-full outline-violet-400 px-3 py-2 border rounded" />
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3  justify-end ">
          <button
            type="button"
            className="bg-gray-200 text-black px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-black text-white lg:px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </form>
    </dialog></>
  );
};

export default AddressDialog;
