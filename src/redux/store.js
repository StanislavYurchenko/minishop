import { configureStore } from '@reduxjs/toolkit';
import prodactsSlice from './slices/prodactsSlice';
import cartReducer from './slices/cartSlice';

export default configureStore({
  reducer: {
    products: prodactsSlice,
    cart: cartReducer,
  },
});
