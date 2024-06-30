import React from 'react'

function cartReducer(state, action) {
    if (action.type === "ADD") {
        let {product} = action.payload;
      //  console.log(action.payload)

      const newprod={
        id:product.id,
        image:product.image,
        mrp:product.mrp,
        name:product.name,
        price:product.price,
        qty:1,
        discount:product.discount,
        weight:product.weight
      }
        // Ensure state is an array
        if (!Array.isArray(state)) {
            state = [];
        }
        console.log(newprod)
        // Avoid direct mutation of the state
        const newState = [...state,newprod];

        // Store the updated state in local storage
        localStorage.setItem('cart', JSON.stringify(newState));

        return newState;
    }

    return state;
}

export default cartReducer;

