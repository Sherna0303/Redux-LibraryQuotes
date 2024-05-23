import { configureStore } from '@reduxjs/toolkit';
import copiesReducer from './reducers/copies.reducer';
import cartReducer from './reducers/cart.reducer';

export const store = configureStore({
  reducer: {
    copies: copiesReducer,
    cart: cartReducer,
  },
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;