import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardsSlice';
import cartReducer from './slices/cartSlice';

export default configureStore({
  reducer: {
    cards: cardsReducer,
    cart: cartReducer,
  },
});
