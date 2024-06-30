import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FaTrash } from "react-icons/fa6";
function Payment() {
    const [open, setOpen] = useState(false)
    const [upi, setUpi] = useState('');
    useEffect(()=>{
        setUpi('9823105698@paytm')
    },[])
   
    const inputClasses = "mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:text-zinc-100";
    const fileInputClasses = "mt-1 block w-full text-sm text-zinc-500 dark:bg-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:dark:bg-gray-600 dark:file:text-zinc-300 dark:hover:file:bg-zinc-600";
   // Shared Tailwind CSS classes
const flexCenter = 'flex justify-center items-center';
const fontSemibold = 'font-semibold';
const textZinc500 = 'text-zinc-500';
const hoverTextZinc700 = 'hover:text-zinc-700';
const textBlue600 = 'text-blue-600';
const hoverUnderline = 'hover:underline';
    const FAQ = ({ question, answer }) => {
        return (
          <div>
            <h3 className={fontSemibold}>{question}</h3>
            <p>{answer}</p>
          </div>
        );
      };
      return (
        <div>
        <div className=" mx-auto p-6 bg-white shadow-md rounded-lg mt-5">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-900">PAN Card Information</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="pan-card-number" className="block text-sm font-medium  text-gray-800">PAN Card Number</label>
              <input type="text" id="pan-card-number" required className={inputClasses} placeholder="PAN Card Number" />
            </div>
            <div className="mb-4">
              <label htmlFor="full-name" className="block text-sm font-medium  text-gray-800">Full Name</label>
              <input type="text" id="full-name" required className={inputClasses} placeholder="Full Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="upload-pan-card" className="block text-sm font-medium  text-gray-800">Upload PAN Card (Only JPEG file is allowed)</label>
              <input type="file" id="upload-pan-card" required className={fileInputClasses} />
            </div>
            <div className="mb-4 flex items-start">
              <input type="checkbox" required id="declaration" className="h-4 w-4 text-blue-600 border-zinc-300 rounded focus:ring-blue-500 dark:focus:ring-blue-400 dark:ring-offset-zinc-800 dark:bg-zinc-700 dark:border-zinc-600" />
              <label htmlFor="declaration" className="ml-2 text-sm text-gray-800">I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.flipkart.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.</label>
            </div>
            <div className='text-center'>
            <button type="submit" className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400">UPLOAD</button>
            </div>
          </form>
          <a href="#" className="block mt-4 text-blue-600 hover:underline dark:text-blue-400">Read Terms & Conditions of PAN Card Information</a>
        </div>
    


        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-5">
      <h2 className="text-xl font-semibold mb-4">Manage Saved UPI</h2>
      <div className="border rounded-lg p-4 flex justify-between items-center mb-8">
        <div>
          <p className={fontSemibold}>Paytm UPI</p>
          <div className="flex items-center">
            <img src="https://placehold.co/50x20" alt="Paytm logo" className="mr-2" />
           
            <input type="text" value={upi} id="upi" required className={`${inputClasses},text-black`}placeholder="Upi Id" />
           
          </div>
        </div>
        <button className={`${textZinc500} ${hoverTextZinc700}` } >
       <FaTrash onClick={() => setOpen(true)}/>
        </button>





        <Dialog className="relative z-10" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Deactivate account
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to remove upi id?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={() => {setOpen(false) && setUpi()}}
              >
               Remove
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setOpen(false)}
                data-autofocus
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>









      </div>
      <h2 className="text-xl font-semibold mb-4">FAQs</h2>
      <div className="space-y-4">
        <FAQ question="Why is my UPI being saved on Flipkart?" answer="It's quicker. You can save the hassle of typing in the complete UPI information every time you shop at Flipkart by saving your UPI details. You can make your payment by selecting the saved UPI ID of your choice at checkout. While this is obviously faster, it is also very secure." />
        <FAQ question="Is it safe to save my UPI on Flipkart?" answer="Absolutely. Your UPI ID information is 100 percent safe with us. UPI ID details are non PCI compliant and are non confidential data." />
        <FAQ question="What all UPI information does Flipkart store?" answer="Flipkart only stores UPI ID and payment provider details. We do not store UPI PIN/MPIN." />
        <FAQ question="Can I delete my saved UPI?" answer="Yes, you can delete your UPI ID at any given time." />
      </div>
      <a href="#" className={`${textBlue600} ${hoverUnderline} mt-4 inline-block`}>View all FAQs</a>
    </div>






        </div>
      );

    
}

export default Payment
