// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import productsFilter from "./productsFilter";

const store = configureStore({
  reducer: {
    productFilter: productsFilter,
  },
});

export default store;