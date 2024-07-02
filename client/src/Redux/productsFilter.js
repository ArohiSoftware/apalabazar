import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discount: {
    min: 0,
    max: 100,
  },
  priceRange: 0,
  rating: 0,
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setDiscountRange: (state, action) => {
      state.discount = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setDiscountRange, setPriceRange, setRating, resetFilters } =
  productFilterSlice.actions;

export default productFilterSlice.reducer;


export const selectDiscountRange = (state) => state.productFilter.discount;
export const selectPriceRange = (state) => state.productFilter.priceRange;
export const selectRating = (state) => state.productFilter.rating;
