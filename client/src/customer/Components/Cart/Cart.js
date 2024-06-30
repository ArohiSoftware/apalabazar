import { BsFillTrashFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MobNavBar from '../Navbar/MobileNavbar';
import { FaCircleInfo } from "react-icons/fa6";
import { useNavigate, useNavigation } from "react-router-dom";
const CartItem = ({ unik, imageSrc, productName, price, savings, qty, setQty, decreaseQuantity, increaseQuantity, removeItem }) => {
  return (
    <tr className="border-b">
      <td className="py-4 px-4 flex items-center">
        <img src={imageSrc} alt="Product Image" className="w-16 h-16 mr-4" />
        <div>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Home Delivery Only</span>
          <p className="font-medium">{productName}</p>
          <p className="text-sm text-zinc-500">Variant: <span className="font-semibold">320gm</span></p>
        </div>
      </td>
      <td className="py-4 px-4 text-center">{price}</td>
      <td className="py-4 px-4 text-center text-blue-500">{savings}</td>
      <td className="py-4 px-4 text-center">
        <button className="bg-blue-500 text-white px-2 py-1 rounded-l" onClick={() => decreaseQuantity(unik)}>-</button>
        <input type="number" value={qty} readOnly min="1" className="w-12 text-center border-t border-b" />
        <button className="bg-blue-500 text-white px-2 py-1 rounded-r" onClick={() => increaseQuantity(unik)}>+</button>
      </td>
      <td className="py-4 px-4 text-center align-middle">
        <button className="text-red-500" onClick={() => removeItem(unik)}>
          <BsFillTrashFill className="text-xl" />
        </button>
      </td>
    </tr>
  );
}

const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
const checkOut =()=>{
  navigate('/checkout')
}
  useEffect(() => {
    async function getItems() {
      const cartItems = await JSON.parse(localStorage.getItem('cart')) || [];
      setItems(cartItems);
      calculateTotal(cartItems);
    }
    getItems();
  }, []);

  const calculateTotal = (items) => {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(totalPrice);
  };

  const increaseQuantity = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };
  const [viewport,setViewport] = useState(false);
  useEffect(() => {
    if(window.innerWidth < 620){
      setViewport(true)
    }else{
      setViewport(false)
    }
  },[])
  return (
    <div>
      {viewport ? <MobNavBar/> :  <Navbar number={12} />}
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <h2 className="text-xl font-semibold mb-4">My Cart ({items.length} item(s))</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Product</th>
                    <th className="py-2 px-4 border-b">You Pay</th>
                    <th className="py-2 px-4 border-b">You Save</th>
                    <th className="py-2 px-4 border-b">No. of items</th>
                    <th className="py-2 px-4 border-b"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <CartItem
                      key={item.id}
                      unik={item.id}
                      imageSrc= {typeof(item.image)==='string'?item.image:item.image[0]}
                      productName={item.name}
                      price={item.price}
                      savings={item.discount}
                      qty={item.qty}
                      setQty={(qty) => {
                        const updatedItems = items.map(i => i.id === item.id ? { ...i, qty } : i);
                        setItems(updatedItems);
                        calculateTotal(updatedItems);
                      }}
                      decreaseQuantity={decreaseQuantity}
                      increaseQuantity={increaseQuantity}
                      removeItem={removeItem}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <button className="text-red-500" onClick={() => setItems([]) & setTotal(0) & localStorage.removeItem('cart')}>Remove all</button>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:ml-8">
            <div className="bg-white p-4 border rounded">
              <h3 className="text-lg font-semibold mb-4">Price Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Cart Total</span>
                <span>₹ {total}</span>
              </div>
              <div className="flex justify-between mb-2">
                <div className="group relative">
                  <button>
                    <span className="flex items-center gap-2">Delivery Charge <FaCircleInfo /></span>
                  </button>
                  <div className="absolute left-13 bottom-6 hidden mt-2 p-2 text-sm text-white bg-black border border-gray-300 rounded shadow-lg w-60 group-hover:block">
                    <ul>
                      <li>Home Delivery : Flat Rs. 29</li>
                      <li>Pick Up Point : Free Delivery</li>
                    </ul>
                  </div>
                </div>
                <span className="text-red-500">+ Extra</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-full" onClick={checkOut}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
