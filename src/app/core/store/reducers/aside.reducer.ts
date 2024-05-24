import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AsideState {
    showAside: boolean;
    content: 'carts' | 'cartDetails';
  }
  
const initialState: AsideState = {
  showAside: false,
  content: 'carts',
};
  
const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleAside: (state) => {
      state.showAside = !state.showAside;
    },
    setContent: (state, action: PayloadAction<'carts' | 'cartDetails'>) => {
      state.content = action.payload;
    },
  },
});
  
export const { toggleAside, setContent } = asideSlice.actions;
  
export const selectShowAside = (state: RootState) => state.aside.showAside;
export const selectAsideContent = (state: RootState) => state.aside.content;
  
export default asideSlice.reducer;