import { createSlice } from '@reduxjs/toolkit';

export const prodactsSlice = createSlice({
  name: 'cards',
  initialState: {
    list: [],
  },
  reducers: {
    loadMore: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});

export const { loadMore } = prodactsSlice.actions;

export const selectCards = state => state.cards.list;

export default prodactsSlice.reducer;
