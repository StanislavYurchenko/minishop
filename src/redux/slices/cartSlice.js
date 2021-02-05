import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CARD_OPTION } from '../../data/cardOptions';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const options = { quantity: 1, option: DEFAULT_CARD_OPTION };
      const newItem = { ...options, ...action.payload };

      const indexItemInCart = state.items.findIndex(item => {
        return (
          item.item.color === newItem.item.color &&
          item.option.type === newItem.option.type
        );
      });

      if (indexItemInCart !== -1) {
        state.items[indexItemInCart].quantity += newItem.quantity;
        state.items = [...state.items];
        return;
      }

      state.items = [...state.items, newItem];
    },
    deleteItem: (state, action) => {
      const newState = state.items.filter(item => {
        return !(
          item.item.color === action.payload.item.color &&
          item.option.type === action.payload.option.type
        );
      });
      state.items = [...newState];
    },
    cleanCart: state => {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, cleanCart } = cartSlice.actions;

export const getTotalQuantity = state =>
  state.cart.items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );

export const getTotalPrice = state => {
  return state.cart.items.reduce(
    (accumulator, item) =>
      accumulator + item.quantity * (item.item.price + item.option.price),
    0,
  );
};
export const getItems = state => state.cart.items;

export default cartSlice.reducer;
