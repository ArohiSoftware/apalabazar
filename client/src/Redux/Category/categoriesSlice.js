import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig';

// Thunks for API requests
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await axiosInstance.get(`/admin/category/view`);
  return response.data.data;
});

export const createCategory = createAsyncThunk('categories/createCategory', async (category) => {
  const response = await axiosInstance.post(`/admin/category/create`, category);
  return response.data.data;
});

export const updateCategory = createAsyncThunk('categories/updateCategory', async (category) => {
  const { id, ...data } = category;
  const response = await axiosInstance.put(`/admin/category/update/${id}`, data);
  return response.data.data;
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id) => {
  await axiosInstance.delete(`/admin/category/delete/${id}`);
  return id;
});

// Slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(category => category._id === action.payload._id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(category => category._id !== action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
