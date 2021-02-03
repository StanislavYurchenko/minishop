import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
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

export const { loadMore } = cardsSlice.actions;

export const selectCards = state => state.cards.list;

export default cardsSlice.reducer;
