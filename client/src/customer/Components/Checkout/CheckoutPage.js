import React,{useState,useRef} from 'react';
import AddressDialog from '../adreess/AddressDialog';

export default function Checkout(){

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isTimeSlotDialogOpen, setIsTimeSlotDialogOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [timeslot,setTimeSlot] = useState("")
   const handleAddNewAddress = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleSaveAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  return (
    <div className='bg-gradient-to-br p-3 mt-2 rounded-lg from-violet-500 to-orange-300'>
      <h1 className="text-2xl  font-bold mb-4 py-7 max-w-[790px] mx-auto">Checkout</h1>
    <div className="flex flex-col max-w-[800px] w-[3/4] gap-12 justify-center  mx-auto p-4">
      <div className=" bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-6">
        <DeliveryMode />
        <SavedAddresses setAddresses={setAddresses} onAddNewAddress={handleAddNewAddress}
          addresses={addresses} />
        <div className=' p-2'>
          <div className='border-2 p-2 border-dotted  border-gray-500 '>
            <button onClick={()=> setIsTimeSlotDialogOpen(!isTimeSlotDialogOpen)} >Time Slot</button>
          </div>
        <p className='my-3'>{timeslot}</p>
        </div>
      </div>
      <PriceSummary />
      <AddressDialog  isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onSave={handleSaveAddress}/>
        <TimeSlot isOpen={isTimeSlotDialogOpen} onSave={setTimeSlot}   onClose={handleDialogClose}/>
    </div>
    </div>
  );
};


const DeliveryMode = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Select a delivery mode</h2>
      <div className="flex items-center mb-2">
        <input type="radio" id="home-delivery" name="delivery-mode" className="mr-2" checked />
        <label htmlFor="home-delivery" className="flex items-center">
          <span className="mr-2">🏠 Home Delivery</span>
          <span className="line-through mr-2 text-red-500">₹29.00</span>
          <span className="text-green-500">₹0</span>
        </label>
      </div>
    </div>
  );
};


const SavedAddresses = ({setAddresses, onAddNewAddress, addresses }) => {
 return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Saved addresses</h2>
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <div key={index} className=" p-4 rounded mb-2 border ">
            <p>{address.addressLine1}</p>
            <p>{address.addressLine2}</p>
            <p>{address.city}, {address.state} - {address.zipCode}</p>
           
          </div>
        ))
      ) : (
        <div className="border border-dashed border-gray-400 p-4 rounded">
          <p className="text-gray-600 mb-2">You don't have any saved address. Try adding a new address</p>
        </div>
      )}
      <div className='my-4 flex'>
        <div className='p-[1px] rounded-lg w-fit bg-gradient-to-br from-violet-500 to-orange-300'>
          <button
        className="text-blue-500 backdrop-blur-lg bg-white/30 border p-2 rounded-lg  "
        onClick={onAddNewAddress}
      >
        + Add New Address
      </button>
        </div>
     
       <button onClick={() => {
                setAddresses("")
            }} className='p-2 bg-black text-white rounded-md mx-2'>Clear All address</button>
      </div>
    </div>
  );
};


const TimeSlot = ({isOpen,onSave,onClose}) => {
  const [day,setDay] = useState("")
  const [time,setTime] = useState("")
  const dialogRef = useRef(null);

  const handleSave = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    onSave(`${time}`)
    // onClose()
    dialogRef.current.close()
  };


  return (
    <>
    <dialog
      ref={dialogRef}
      open={isOpen}
      className="p-6  fixed bg-white/30 backdrop-blur-2xl rounded-lg shadow-lg  mx-4 lg:mx-auto   top-6 right-3 max-w-[800px] min-w-[300px]"
    >
  
      <h2 className="text-xl font-semibold mb-4">Add Time Slot</h2>
      <form onSubmit={handleSave} className='flex flex-col gap-2 mb-7 '>
        <div className='flex gap-3'>
          <div className={`flex flex-col gap-2 border ${day ==='Sunday 8 June'? 'bg-green-400':'bg-white'}   p-2 rounded-lg`}>
          <input name='dateslot' className='accent-green-900 mx-auto'  onChange={(e) => setDay(e.target.value)} value='Sunday 8 June' type='radio' id='sunday'/>
          <label htmlFor='sunday'>Sunday 8 June</label>
        </div>
        <div className={`flex flex-col gap-2 border ${day ==='Monday 9 June'? 'bg-green-400':'bg-white'}  p-2 rounded-lg`}>
          <input name='dateslot'  className='accent-green-900'   onChange={(e) => setDay(e.target.value)} value='Monday 9 June' type='radio' id='monday'/>
          <label htmlFor='monday'>Monday 9 June</label>
        </div>
        <div className={`flex flex-col gap-2 border ${day ==='Tuesday 10 June'? 'bg-green-400':'bg-white'}  p-2 rounded-lg`}>
          <input name='dateslot'  className='accent-green-900'  onChange={(e) => setDay(e.target.value)} value='Tuesday 10 June' type='radio' id='thusday'/>
          <label htmlFor='thusday'>Tuesday 10 June</label>
        </div>
        <div className={`flex flex-col gap-2 border ${day ==='Wednesday 11 June'? 'bg-green-400':'bg-white'}  p-2 rounded-lg`}>
          <input name='dateslot' className='accent-green-900'  onChange={(e) => setDay(e.target.value)} value='Wednesday 11 June' type='radio' id='wednesday'/>
          <label htmlFor='wednesday'>Wednesday 11 June</label>
        </div>
        </div>
          <div className='mt-6'></div>
         <div>
          <div className="mb-4  flex items-center  ">
          <input type="radio" onChange={(e) =>   setTime(e.target.value)} value={`${day} 9AM - 12AM`} name='timeslot' id="tiemslot1" className="mr-8 outline-violet-400  py-2 border rounded" />
          <label htmlFor="tiemslot1" className="block mb-1">{day} 9AM - 12AM</label>
        </div>
        <div className="mb-4 flex items-center">
          <input type="radio" onChange={(e) =>   setTime(e.target.value)} value={`${day} 1PM - 4PM`}  name='timeslot' id="tiemslot2" className="mr-8 outline-violet-400 px-3 py-2 border rounded" />
          <label htmlFor="tiemslot2" className="block  mb-1">{day} 1PM - 4PM</label>
        </div>
        <div className="mb-4 flex items-center">
          <input type="radio" onChange={(e) =>   setTime(e.target.value)} value={`${day} 4PM - 7AM`}  name='timeslot' id="tiemslot3" className="mr-8 px-3 outline-violet-400 py-2 border rounded" />
          <label htmlFor="tiemslot3" className="block mb-1">{day} 4PM - 7PM</label>
        </div>
         <div>
          </div>
      <button type="submit" className='bg-black p-2 text-white rounded-lg '>Submit</button>
    </div>
      </form>
    </dialog></>)
};






const PriceSummary = () => {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-2">Price Summary</h2>
      <div className="flex justify-between mb-2">
        <span>You Pay</span>
        <span className="text-green-500 font-bold">₹276</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Cart Total</span>
        <span>₹276</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery charge</span>
        <div className='space-x-3'>
            <span className="text-red-500 line-through">₹3-</span>
        <span className="text-green-500">₹20</span>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <span>Your Savings</span>
        <span className="text-orange-500">₹144</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 flex-wrap items-center mt-4">
        <button className="bg-gray-200 text-black px-4 py-2 rounded cursor-not-allowed" disabled>
          PAY ON DELIVERY (COD)
        </button>
        <p>or</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">PAY NOW (PREPAID)</button>
      </div>
    </div>
  );
};



