import { configureStore } from '@reduxjs/toolkit';
import copiesReducer from './reducers/copies.reducer';
import cartReducer from './reducers/cart.reducer';
import calculateReducer from './reducers/calculate.reducer';
import asideReducer from './reducers/aside.reducer';

export const store = configureStore({
  reducer: {
    copies: copiesReducer,
    cart: cartReducer,
    calculate: calculateReducer,
    aside: asideReducer
  },
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;