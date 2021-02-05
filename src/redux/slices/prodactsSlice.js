import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    loadMore: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});

export const { loadMore } = productsSlice.actions;

export const selectCards = state => state.products.list;

export default productsSlice.reducer;
