import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Copy } from '../../models/copy.model';
import { RootState } from '../store';

interface CartState {
    cart: Copy[];
  }
  
const initialState: CartState = {
  cart: [],
};
  
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Copy>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});
  
export const selectCart = (state: RootState) => state.cart.cart;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;