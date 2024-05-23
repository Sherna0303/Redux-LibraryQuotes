import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Copy } from '../../models/copy.model';
import { RootState } from '../store';
import { CartInfo } from '../../models/cart-info.model';



interface CartState {
  carts: CartInfo[];
  activeCartId: string | null;
}

const initialState: CartState = {
  carts: [],
  activeCartId: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state) => {
      const newCartId = uuidv4();
      const readableId = state.carts.length + 1;
      state.carts.push({ id: newCartId, readableId, items: [] });
      state.activeCartId = newCartId;
    },
    setActiveCart: (state, action: PayloadAction<string>) => {
      state.activeCartId = action.payload;
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.carts = state.carts.filter(cart => cart.id !== action.payload);
      state.carts.forEach((cart, index) => {
        cart.readableId = index + 1;
      });
      if (state.activeCartId === action.payload) {
        state.activeCartId = state.carts.length > 0 ? state.carts[0].id : null;
      }
    },
    addToCart: (state, action: PayloadAction<{ cartId: string, copy: Copy }>) => {
      const { cartId, copy } = action.payload;
      const cart = state.carts.find(cart => cart.id === cartId);
      if (cart) {
        const existingItem = cart.items.find(item => item.id === copy.id);
        if (!existingItem) {
          cart.items.push({ ...copy, quantity: 1 });
        } 
      }
    },
    removeFromCart: (state, action: PayloadAction<{ cartId: string, copyId: string }>) => {
      const { cartId, copyId } = action.payload;
      const cart = state.carts.find(cart => cart.id === cartId);
      if (cart) {
        cart.items = cart.items.filter(item => item.id !== copyId);
      }
    },
    increaseQuantity: (state, action: PayloadAction<{ cartId: string, copyId: string }>) => {
      const { cartId, copyId } = action.payload;
      const cart = state.carts.find(cart => cart.id === cartId);
      if (cart) {
        const item = cart.items.find(item => item.id === copyId);
        if (item) {
          item.quantity += 1;
        }
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ cartId: string, copyId: string }>) => {
      const { cartId, copyId } = action.payload;
      const cart = state.carts.find(cart => cart.id === cartId);
      if (cart) {
        const item = cart.items.find(item => item.id === copyId);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
  },
});
export const selectCart = (state: RootState) => state.cart.carts;
export const selectActiveCart = (state: RootState) => state.cart.activeCartId;
export const { addCart, setActiveCart, removeCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}