import { createContext, useReducer,useContext } from "react";
import reducer from '../Redux/cartReduser'

const CartContext = createContext();


const CartProvider = ({children})=>{
 

    const initialState=localStorage.getItem('cart')
 

    const [state,dispatch] = useReducer(reducer,initialState)
 
    const addTocart=(product)=>{
        alert("Product added succefully")
dispatch({type:"ADD",payload:{product}});
 };

    return (<CartContext.Provider value={{...state,addTocart}}>{children}</CartContext.Provider>)
};

const useCartContext = ()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext};
