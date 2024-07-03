
// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import productsFilter from "./productsFilter";
import userReducer from './User/userSlice';
import categoriesReducer from './Category/categoriesSlice';


const store = configureStore({
  reducer: {
    productFilter: productsFilter,
    user: userReducer,
    categories: categoriesReducer,
  },
});

export default store;